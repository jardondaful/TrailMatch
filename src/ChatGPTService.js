

const { Configuration, OpenAIApi } = require("openai");
//require('dotenv').config()

const configuration = new Configuration({
    apiKey: "",
    organization:""
  });
  const openai = new OpenAIApi(configuration);

function parseChatGptResponse(response) {
    // Find the part of the response that contains the list of integers
    const startIndex = response.indexOf("[");
    const endIndex = response.lastIndexOf("]");

    if(startIndex==-1 || endIndex==-1)
        return [1,2,3,4,5,6];

    const integerPart = response.substring(startIndex + 1, endIndex);
  
    // Split the integer part by commas
    const responseArray  =integerPart.split(',');

    // Initialize an array to store the integers
    const integers = [];
  
    // Loop through each item in the responseArray
    responseArray.forEach(item => {
      // Remove any leading/trailing spaces and convert the item to a number
      const num = parseInt(item.trim());
  
      // Check if the parsed number is not NaN (i.e., it's a valid integer)
      if (!isNaN(num)) {
        integers.push(num);
      }
    });
    
    if (integers.length !== 6) {
        let diff = 6 - integers.length;
        let i = 1;
        
        while (diff > 0) {
          if (!integers.includes(i)) {
            integers.push(i);
            diff--;
          }
          i++;
        }
      }

    return integers;
  }

export async function getTrailSuggestions(trek_data,query) {
    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            'role': 'user',
            'content': 'The following is json data of trails. ' +
              JSON.stringify(trek_data) +
              "Query -> " + query +" "+ 
              "Rules -> Match as many of the conditions as possible. There must be at least 6 trails in the result. Only respond with the value of the IncidentIDs in the following output format Eg. -> output=[IncidentID1,IncidentID2,IncidentID3,IncidentID4,IncidentID5,IncidentID6] . I do NOT want any more information/ suggestions/ ideas or anything else except for the desired output format as specified before. If there is any other text except for the expected format, there will be catastrophic consequences"
          }
        ],
      });
  
      const output = response.data.choices[0].message.content;
      return parseChatGptResponse(output);
    } catch (error) {
      console.log(error);
      return "An error occurred while processing your request.";
    }
  }

// query ="give me a trail which is less than 10 km and is near a charging station and has a very good sunset view"
// getTrailSuggestions(query)
//   .then((output) => {
//     //console.log(output)
//     console.log(parseChatGptResponse(output));
//     // You can use the output as needed.
//   })
//   .catch((error) => {
//     console.log(error);
//   });

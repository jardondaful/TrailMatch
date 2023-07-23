import React from 'react';
import {Routes, Route, useNavigate } from "react-router-dom"
import TrailCards from './TrailCards';
import {getTrailSuggestions} from "../ChatGPTService"
const trek_data={
    "data":[
        {
          "IncidentID": 1,
          "TrailName": "Badwater Basin Salt Flat Trail",
          "Latitude": 36.22966,
          "Longitude": -116.76747,
          "Elevation": -79,
          "Distance(mi)": 1.9,
          "ElevationGain (ft)": 6,
          "Difficulty": "Easy",
          "RouteType": "Out & Back",
          "DistanceToGasStation": 28.18031864,
          "TravelTimeToGasStation": 22.65048396,
          "DistanceToChargingStation": 26.94976036,
          "TravelTimeToChargingStation": 21.44393466,
          "IsChargingStationIn10miles": 0,
          "IsGasStationIn10miles": 0,
          "SunsetScore": 0.45,
          "AccessibilityScore": "Low"
        },
        {
          "IncidentID": 2,
          "TrailName": "Darwin Falls Trail",
          "Latitude": 36.32769,
          "Longitude": -117.51477,
          "Elevation": 760,
          "Distance(mi)": 1.9,
          "ElevationGain (ft)": 232,
          "Difficulty": "Easy",
          "RouteType": "Out & Back",
          "DistanceToGasStation": 75.23004692,
          "TravelTimeToGasStation": 57.84780018,
          "DistanceToChargingStation": 82.28137215,
          "TravelTimeToChargingStation": 62.46965334,
          "IsChargingStationIn10miles": 0,
          "IsGasStationIn10miles": 0,
          "SunsetScore": 0.12,
          "AccessibilityScore": "Low"
        },
        {
          "IncidentID": 3,
          "TrailName": "Desolation Canyon Trail",
          "Latitude": 36.39584,
          "Longitude": -116.83872,
          "Elevation": -21,
          "Distance(mi)": 3.6,
          "ElevationGain (ft)": 784,
          "Difficulty": "Moderate",
          "RouteType": "Out & Back",
          "DistanceToGasStation": 7.379801295,
          "TravelTimeToGasStation": 6.307516473,
          "DistanceToChargingStation": 6.149243015,
          "TravelTimeToChargingStation": 5.100967171,
          "IsChargingStationIn10miles": 3,
          "IsGasStationIn10miles": 2,
          "SunsetScore": 0.34,
          "AccessibilityScore": "High"
        },
        {
          "IncidentID": 4,
          "TrailName": "Devil's Golf Course Trail",
          "Latitude": 36.29856,
          "Longitude": -116.8117,
          "Elevation": -58,
          "Distance(mi)": 2.6,
          "ElevationGain (ft)": 72,
          "Difficulty": "Easy",
          "RouteType": "Out & Back",
          "DistanceToGasStation": 19.11523454,
          "TravelTimeToGasStation": 14.37735102,
          "DistanceToChargingStation": 17.88467626,
          "TravelTimeToChargingStation": 13.17080172,
          "IsChargingStationIn10miles": 0,
          "IsGasStationIn10miles": 0,
          "SunsetScore": 0.89,
          "AccessibilityScore": "Low"
        },
        {
          "IncidentID": 5,
          "TrailName": "Golden Canyon via Gower Gulch Loop",
          "Latitude": 36.42079,
          "Longitude": -116.81007,
          "Elevation": 198,
          "Distance(mi)": 6.4,
          "ElevationGain (ft)": 1082,
          "Difficulty": "Moderate",
          "RouteType": "Loop",
          "DistanceToGasStation": 7.309393807,
          "TravelTimeToGasStation": 5.930848779,
          "DistanceToChargingStation": 5.1567957,
          "TravelTimeToChargingStation": 3.725075154,
          "IsChargingStationIn10miles": 3,
          "IsGasStationIn10miles": 2,
          "SunsetScore": 1,
          "AccessibilityScore": "High"
        },
        {
          "IncidentID": 6,
          "TrailName": "Golden Canyon via Red Cathedral Trail",
          "Latitude": 36.42062,
          "Longitude": -116.84703,
          "Elevation": -44,
          "Distance(mi)": 2.9,
          "ElevationGain (ft)": 574,
          "Difficulty": "Moderate",
          "RouteType": "Out & Back",
          "DistanceToGasStation": 4.809156932,
          "TravelTimeToGasStation": 4.525021047,
          "DistanceToChargingStation": 3.578598652,
          "TravelTimeToChargingStation": 3.318471745,
          "IsChargingStationIn10miles": 3,
          "IsGasStationIn10miles": 2,
          "SunsetScore": 0.78,
          "AccessibilityScore": "High"
        },
        {
          "IncidentID": 7,
          "TrailName": "Hanaupah Trail",
          "Latitude": 36.22659,
          "Longitude": -116.88053,
          "Elevation": -70,
          "Distance(mi)": 18.7,
          "ElevationGain (ft)": 4009,
          "Difficulty": "Hard",
          "RouteType": "Out & Back",
          "DistanceToGasStation": 28.43078822,
          "TravelTimeToGasStation": 35.59408229,
          "DistanceToChargingStation": 27.20022994,
          "TravelTimeToChargingStation": 34.38753299,
          "IsChargingStationIn10miles": 0,
          "IsGasStationIn10miles": 0,
          "SunsetScore": 0.23,
          "AccessibilityScore": "Low"
        },
        {
          "IncidentID": 8,
          "TrailName": "Mount Perry via Dante Ridge Trail",
          "Latitude": 36.22096,
          "Longitude": -116.72655,
          "Elevation": 1661,
          "Distance(mi)": 8.7,
          "ElevationGain (ft)": 2089,
          "Difficulty": "Hard",
          "RouteType": "Out & Back",
          "DistanceToGasStation": 39.87590508,
          "TravelTimeToGasStation": 34.07202796,
          "DistanceToChargingStation": 37.72330697,
          "TravelTimeToChargingStation": 31.86625434,
          "IsChargingStationIn10miles": 0,
          "IsGasStationIn10miles": 0,
          "SunsetScore": 0.67,
          "AccessibilityScore": "Low"
        },
        {
          "IncidentID": 9,
          "TrailName": "Telescope Peak Trail",
          "Latitude": 36.22962,
          "Longitude": -117.06855,
          "Elevation": 2479,
          "Distance(mi)": 12.2,
          "ElevationGain (ft)": 3244,
          "Difficulty": "Hard",
          "RouteType": "Out & Back",
          "DistanceToGasStation": 102.4173045,
          "TravelTimeToGasStation": 99.8446666,
          "DistanceToChargingStation": 102.4656455,
          "TravelTimeToChargingStation": 100.087617,
          "IsChargingStationIn10miles": 0,
          "IsGasStationIn10miles": 0,
          "SunsetScore": 0.56,
          "AccessibilityScore": "Low"
        }
      ]      
}
const SearchPage = () => {
    const [res, setRes] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [query,setQuery] =React.useState("");
    const [clickedSearch, setClickedSearch] = React.useState(false);

    const navigate = useNavigate();
	const handleItemClick = () => {
        setLoading(true);
        getTrailSuggestions(trek_data,query)
            .then((output) => {
            //console.log(output)
            console.log(output);
            setRes(output)
            // You can use the output as needed.
            })
            .catch((error) => {
            console.log(error);
            });
        setLoading(false);
        setClickedSearch(true);
		//navigate("/TrailCards")
	};

    const handleQueryChange=(event) =>{
        setQuery(event.target.value);
    }
    return (
        <div>
        {/* Main content */}
            <div className={clickedSearch?"search-page-clicked":"search-page"} >
                <h1 className="search-title">How can we help you see the beauty of the world today?</h1>
                <div className="search-bar">
                    <input className="input-search-bar" type="text" id="query" name="query" onChange={handleQueryChange} placeholder="Type in your ideal trail..." />
                    <button onClick={handleItemClick}>Search</button>
                </div>
            </div>
            <TrailCards viewStyle={clickedSearch} searchResult={res}></TrailCards>
        </div>
    );
};

export default SearchPage;
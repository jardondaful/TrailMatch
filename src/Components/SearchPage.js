import React from 'react';
import {Routes, Route, useNavigate } from "react-router-dom"
import TrailCards from './TrailCards';
import {getTrailSuggestions} from "../ChatGPTService"
const trek_data={
    "data":[
    {
    "OID_": 0,
    "Latitude": 36.22966,
    "Longitude": -116.76747,
    "Elevation": -79,
    "TrailName": "BadwaterBasinSaltTrail",
    "IncidentID": 1,
    "TravelTimeToChargingStation": 21.44393466,
    "DistanceToChargingStation": 26.94976036,
    "IsChargingStationIn10miles": 0,
    "TravelTimeToGasStation": 22.65048396,
    "DistanceToGasStation": 28.18031864,
    "IsGasStationIn10miles": 0,
    "GoodnessOfSunsetIndex": 1
    },
    {
    "OID_": 1,
    "Latitude": 36.32769,
    "Longitude": -117.51477,
    "Elevation": 760,
    "TrailName": "DarwinFalls",
    "IncidentID": 2,
    "TravelTimeToChargingStation": 62.46965334,
    "DistanceToChargingStation": 82.28137215,
    "IsChargingStationIn10miles": 0,
    "TravelTimeToGasStation": 57.84780018,
    "DistanceToGasStation": 75.23004692,
    "IsGasStationIn10miles": 0,
    "GoodnessOfSunsetIndex": 0.5
    },
    {
    "OID_": 2,
    "Latitude": 36.39584,
    "Longitude": -116.83872,
    "Elevation": -21,
    "TrailName": "DesolationCanyon",
    "IncidentID": 3,
    "TravelTimeToChargingStation": 5.100967171,
    "DistanceToChargingStation": 6.149243015,
    "IsChargingStationIn10miles": 1,
    "TravelTimeToGasStation": 6.307516473,
    "DistanceToGasStation": 7.379801295,
    "IsGasStationIn10miles": 1,
    "GoodnessOfSunsetIndex": 0.2
    },
    {
    "OID_": 3,
    "Latitude": 36.29856,
    "Longitude": -116.8117,
    "Elevation": -58,
    "TrailName": "DevilsGolfCourse",
    "IncidentID": 4,
    "TravelTimeToChargingStation": 13.17080172,
    "DistanceToChargingStation": 17.88467626,
    "IsChargingStationIn10miles": 0,
    "TravelTimeToGasStation": 14.37735102,
    "DistanceToGasStation": 19.11523454,
    "IsGasStationIn10miles": 0,
    "GoodnessOfSunsetIndex": 0.6
    },
    {
    "OID_": 4,
    "Latitude": 36.42079,
    "Longitude": -116.81007,
    "Elevation": 198,
    "TrailName": "GoldenCanyonGowerGulchLoop",
    "IncidentID": 5,
    "TravelTimeToChargingStation": 3.725075154,
    "DistanceToChargingStation": 5.1567957,
    "IsChargingStationIn10miles": 1,
    "TravelTimeToGasStation": 5.930848779,
    "DistanceToGasStation": 7.309393807,
    "IsGasStationIn10miles": 1,
    "GoodnessOfSunsetIndex": 0.7
    },
    {
    "OID_": 5,
    "Latitude": 36.42062,
    "Longitude": -116.84703,
    "Elevation": -44,
    "TrailName": "GoldenCanyonRedCathedral",
    "IncidentID": 6,
    "TravelTimeToChargingStation": 3.318471745,
    "DistanceToChargingStation": 3.578598652,
    "IsChargingStationIn10miles": 1,
    "TravelTimeToGasStation": 4.525021047,
    "DistanceToGasStation": 4.809156932,
    "IsGasStationIn10miles": 1,
    "GoodnessOfSunsetIndex": 0.9
    },
    {
    "OID_": 6,
    "Latitude": 36.22659,
    "Longitude": -116.88053,
    "Elevation": -70,
    "TrailName": "Hanaupah",
    "IncidentID": 7,
    "TravelTimeToChargingStation": 34.38753299,
    "DistanceToChargingStation": 27.20022994,
    "IsChargingStationIn10miles": 0,
    "TravelTimeToGasStation": 35.59408229,
    "DistanceToGasStation": 28.43078822,
    "IsGasStationIn10miles": 0,
    "GoodnessOfSunsetIndex": 0
    },
    {
    "OID_": 7,
    "Latitude": 36.22096,
    "Longitude": -116.72655,
    "Elevation": 1661,
    "TrailName": "MountPerryDanteRidge",
    "IncidentID": 8,
    "TravelTimeToChargingStation": 31.86625434,
    "DistanceToChargingStation": 37.72330697,
    "IsChargingStationIn10miles": 0,
    "TravelTimeToGasStation": 34.07202796,
    "DistanceToGasStation": 39.87590508,
    "IsGasStationIn10miles": 0,
    "GoodnessOfSunsetIndex": 0
    },
    {
    "OID_": 8,
    "Latitude": 36.22962,
    "Longitude": -117.06855,
    "Elevation": 2479,
    "TrailName": "TelescopePeak",
    "IncidentID": 9,
    "TravelTimeToChargingStation": 100.087617,
    "DistanceToChargingStation": 102.4656455,
    "IsChargingStationIn10miles": 0,
    "TravelTimeToGasStation": 99.8446666,
    "DistanceToGasStation": 102.4173045,
    "IsGasStationIn10miles": 0,
    "GoodnessOfSunsetIndex": 1
    }
]}
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
                    <input type="text" id="query" name="query" onChange={handleQueryChange} placeholder="Type in your ideal trail..." />
                    <button onClick={handleItemClick}>Search</button>
                </div>
            </div>
            <TrailCards viewStyle={clickedSearch} searchResult={res}></TrailCards>
        </div>
    );
};

export default SearchPage;
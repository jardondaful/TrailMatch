import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import data from '../data'

import React from 'react';
import { Card } from 'primereact/card';
import EsriMapView from './EsriMapView';
const TrailCards = (props) => {

    const [clickedSearch, setClickedSearch] = React.useState(props.viewStyle);
    const [clickedSubmit, setClickedSubmit] = React.useState(false);
    const [index, setIndex] = React.useState(-1);

    const handleClick = event => {
        console.log(event.currentTarget.id);
        setIndex(event.currentTarget.id)
        setClickedSearch(false)
        setClickedSubmit(true)
    };

    const cards = data.map(item => {
        if(props.searchResult.includes(item.IncidentID))
            return (
                <div className="child" id={item.IncidentID} onClick={handleClick}>
                    <Card 
                        title={item.ImageTitle}
                        style={{ width: '20em' , border:"black solid 1px"}}
                        header={<img alt="Card" src={item.ImagePath}/>}
                    >
                        <p className="m-0" style={{lineHeight: '1.5'}}>{item.ImageDescription}</p>
                    </Card>
                </div>
            )
    })     

    if(index!==-1){
    return (
        <div>
            <div className={props.viewStyle && !clickedSubmit ?'container':'container-hidden'}>
                {cards} 
            </div>
            <div className={clickedSubmit?'div-container':'div-container-hidden'}>
                <EsriMapView 
                    trailMap={data[index-1].ArcGISOnline1}
                    accessibilityMap={data[index-1].ArcGISOnline2}
                    experienceBuilder={data[index-1].ArcGISOnline1}
                />
            </div>
        </div>
        
    )}
    else{
        return(
            <div className={props.viewStyle && !clickedSubmit ?'container':'container-hidden'}>
                {cards} 
            </div>

        )
    }
  }
  
  export default TrailCards
         
  
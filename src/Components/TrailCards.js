import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import data from '../data'

import React from 'react';
import { Card } from 'primereact/card';
const TrailCards = (props) => {

    const handleClick = event => {
        console.log(event.currentTarget.id);
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

    return (
        <div className={props.viewStyle?'container':'container-hidden'}>
            {cards} 
        </div>
    )
  }
  
  export default TrailCards
         
  
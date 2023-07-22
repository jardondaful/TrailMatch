import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React from 'react';
import { Card } from 'primereact/card';
const TrailCards = () => {

    const handleClick = event => {
        console.log(event.currentTarget.id);
    };

    return (
        <div className='container'>
            
            <div className="child" id="1" onClick={handleClick}>
                <Card title="Black Rock Trail 1" subTitle="" style={{ width: '20em' , border:"black solid 1px"}} header={<img alt="Card" src="download.jpg"/>}>
                    <p className="m-0" style={{lineHeight: '1.5'}}>Some stuff abt the trail</p>
                </Card>
            </div>
            
            <div className="child" id="2" onClick={handleClick}>
                <Card title="Black Rock Trail 2" subTitle="" style={{ width: '20em' , border:"black solid 1px"}} header={<img alt="Card" src="download.jpg"/>}>
                    <p className="m-0" style={{lineHeight: '1.5'}}>Some stuff abt the trail</p>
                </Card>
            </div>
            <div className="child" id="1" onClick={handleClick}>
                <Card title="Black Rock Trail 1" subTitle="" style={{ width: '20em' , border:"black solid 1px"}} header={<img alt="Card" src="download.jpg"/>}>
                    <p className="m-0" style={{lineHeight: '1.5'}}>Some stuff abt the trail</p>
                </Card>
            </div>
            
            <div className="child" id="2" onClick={handleClick}>
                <Card title="Black Rock Trail 2" subTitle="" style={{ width: '20em' , border:"black solid 1px"}} header={<img alt="Card" src="download.jpg"/>}>
                    <p className="m-0" style={{lineHeight: '1.5'}}>Some stuff abt the trail</p>
                </Card>
            </div>
            
        </div>
    )
  }
  
  export default TrailCards
         
  
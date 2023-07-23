import React from 'react';

const EsriMapView = (props) => {
  return (
    <div
      className={props.clickedSubmit?'div-container':'div-container-hidden'}
      style={{
        // display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px', // Subtract the height of the navbar (adjust as needed)
      }}
    >
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <div
          style={{
            flex: 1,
            width: '50%',
            marginRight: '10px',
            height: '250px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add slight shadow
            border: '1px solid #000', // Add black border
            borderRadius: '4px', // Add border radius for rounded corners
            overflow: 'hidden', // Clip any overflowing content
          }}
        >
          <iframe
            title="ArcGIS Map Viewer 1"
            //src="https://intern-hackathon.maps.arcgis.com/apps/instant/basic/index.html?appid=1eb07c2d23e64a4ca22f639e7baa1b33"
            src={props.trailMap}
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>

        <div
          style={{
            flex: 1,
            width: '50%',
            marginLeft: '10px',
            height: '250px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add slight shadow
            border: '1px solid #000', // Add black border
            borderRadius: '4px', // Add border radius for rounded corners
            overflow: 'hidden', // Clip any overflowing content
          }}
        >

          <iframe
            title="ArcGIS Map Viewer 2"
            //src="https://intern-hackathon.maps.arcgis.com/apps/instant/basic/index.html?appid=1eb07c2d23e64a4ca22f639e7baa1b33"
            src={props.accessibilityMap}
            style={{ width: '100%', height: '100%', border: 'none' }}
          />

        </div>
      </div>

      <div
        style={{
          width: '60%',
          height: '400px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add slight shadow
          border: '1px solid #000', // Add black border
          borderRadius: '4px', // Add border radius for rounded corners
          overflow: 'hidden', // Clip any overflowing content
        }}
      >

        <iframe
          title="ArcGIS Map Viewer 3"
          //src="https://intern-hackathon.maps.arcgis.com/apps/instant/basic/index.html?appid=1eb07c2d23e64a4ca22f639e7baa1b33"
          src={props.experienceBuilder}
          style={{ width: '100%', height: '100%', border: 'none' }}
        />

      </div>
    </div>
  );
};

export default EsriMapView;
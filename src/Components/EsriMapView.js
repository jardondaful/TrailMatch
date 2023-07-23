import React from 'react';

const EsriMapView = (props) => {

  return (
    <div
      className={props.clickedSubmit ? 'div-container' : 'div-container-hidden'}
      style={{
        margin: '20px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 2fr', // Adjust the column width here
        gridTemplateRows: '1fr 1fr',
        gap: '10px',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
		width:'100%',
		height:'700px'
      }}
    >
      <div
        style={{
          gridArea: '1 / 1 / 2 / 2',
          height: '300px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          border: '1px solid #000',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <iframe
          title="ArcGIS Map Viewer 1"
          src={props.trailMap}
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>

      <div
        style={{
          gridArea: '2 / 1 / 3 / 2',
          height: '300px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          border: '1px solid #000',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <iframe
          title="ArcGIS Map Viewer 2"
          src={props.accessibilityMap}
          style={{ width: '100%', height: '100%', border: 'none' }}
        />

      </div>
      <div
        style={{
          gridArea: '1 / 2 / 3 / 4',
          height: '600px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          border: '1px solid #000',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <iframe
          title="ArcGIS Map Viewer 3"
          src={props.experienceBuilder}
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    </div>
  );
};




export default EsriMapView;
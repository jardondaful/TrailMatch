import React from 'react';

const EsriMapView = () => {
  return (
    <div style={{ height: '100vh' }}>
      <iframe
        title="ArcGIS Map Viewer"
        src="https://intern-hackathon.maps.arcgis.com/apps/instant/basic/index.html?appid=1eb07c2d23e64a4ca22f639e7baa1b33"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};


export default EsriMapView;
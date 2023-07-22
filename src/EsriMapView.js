import React, { useEffect } from 'react';
import { loadModules } from 'esri-loader';

function EsriMapView() {
  useEffect(() => {
    // Specify the ArcGIS modules you want to load
    const modules = ['esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer'];

    // Load the ArcGIS modules dynamically
    loadModules(modules).then(([Map, MapView, FeatureLayer]) => {
      // Create a map and view using the loaded modules
      const map = new Map({ basemap: 'hybrid' });
      const view = new MapView({ container: 'viewDiv', map: map });

      // Set the extent of the view
      view.extent = {
        xmin: -9177811,
        ymin: 4247000,
        xmax: -9176791,
        ymax: 4247784,
        spatialReference: 102100
      };

      /********************
       * Add feature layer
       ********************/

      // Carbon storage of trees in Warren Wilson College.
      const featureLayer = new FeatureLayer({
        url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0'
      });

      map.add(featureLayer);
    });

    // Clean up after unmounting the component
    return () => {
      // Optionally clean up resources here
    };
  }, []);

  return <div id="viewDiv" style={{ height: '100vh', width: '100%' }}></div>;
}

export default EsriMapView;

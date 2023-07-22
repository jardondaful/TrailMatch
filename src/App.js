import React from 'react';
import EsriMapView from './Components/EsriMapView';
import SearchPage from './Components/SearchPage';

function App() {
  return (
    <div>
      <h1>TrailMatch</h1>
      <SearchPage></SearchPage>
      <EsriMapView />
    </div>
  );
}

export default App;

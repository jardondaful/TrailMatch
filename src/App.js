import React from 'react';
import EsriMapView from './Components/EsriMapView';
import SearchPage from './Components/SearchPage';
import TrailCards from './Components/TrailCards';
import './App.css';
import {Routes, Route, useNavigate } from "react-router-dom"
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'>
          <Route path="/" element={<SearchPage />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/EsriMapView" element={<EsriMapView />} />
          <Route path="/TrailCards" element={<TrailCards />} />
        </Route>
			</Routes>
      {/* <SearchPage></SearchPage>
      <EsriMapView />
      <TrailCards></TrailCards> */}
    </div>
  );
}

export default App;

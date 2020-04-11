import React, { useState } from 'react';
import Map from "./Components/Map";
import L from "leaflet";
import './App.css';



function App(){

  const [markerPosition, setMarkerPosition] = useState({
    lat: null,
    lng: null
  });

  const { lat, lng } = markerPosition;

  function moveMarker() {
    setMarkerPosition({
      lat: lat + 0.0001,
      lng: lng + 0.0001
    });
  }

  window.onload = function () {
    console.log(markerPosition);
    navigator.geolocation.getCurrentPosition((position) => {
      setMarkerPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }

  return (
    <div>
      <Map markerPosition={markerPosition}/>
      <button onClick={moveMarker}> Move Marker </button>
    </div>
  );
}

export default App;
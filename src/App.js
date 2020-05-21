import React, { useState, useEffect } from 'react';
import Map from "./Components/Map";
import Button from "./Components/Button";
import SearchIcon from '@material-ui/icons/Search';

import './App.css';

const search = {
  position: "absolute",
  color: "#5EFBCC",
  zIndex: "2000",
  right: "5%",
  top: "35px",
  fontWeight: "200", 
  padding: "6px",
  height: "22px",
}

function App(){

  const [markerPosition, setMarkerPosition] = useState({
    lat: null,
    lng: null
  });


  const { lat, lng } = markerPosition;

  window.onload = function() {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        gpspos => {
          setMarkerPosition({
            lat: `${gpspos.coords.latitude}`,
            lng: `${gpspos.coords.longitude}`
          });
        },
        err => {
          alert(`An error occurred: ${err.code}`);
        }
      );
    } else {
      alert("Sorry, geolocation not supported in this browser");
        setMarkerPosition({
          lat: 50.908492, 
          lng: -1.401176    
        });
    } 
  }

  function moveMarker() {
    navigator.geolocation.getCurrentPosition(
      gpspos => {
        setMarkerPosition({
          lat: `${gpspos.coords.latitude}`,
          lng: `${gpspos.coords.longitude}`
        });
      },
    );
  }

  return (
    <div>
      <Map markerPosition={markerPosition}/>

      <Button onClick={moveMarker}></Button>

      <SearchIcon style={search}/>

    </div>
  );
}

export default App;
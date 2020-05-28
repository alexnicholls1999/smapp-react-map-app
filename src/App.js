import React, { useState, useEffect } from 'react';
import Map from "./Components/Map";
import Button from "./Components/Button";
import SearchIcon from '@material-ui/icons/Search';
import SideBar from './Components/Menu';
import { useLocation } from "react-router-dom";

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

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();


  const handleClick = e => {
    setMenuOpen(!menuOpen);
  };

  const handleOuterWrapperClick = e => {
    setMenuOpen(false);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

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
    <div id="App">
        <SideBar pageWrapId={"page-wrap"} outerContainerId="App"/>

        <div>
          <Map markerPosition={markerPosition}/>

          <Button onClick={moveMarker}></Button>

          <SearchIcon style={search}/>
        </div>

        {/* <Menu onClick={handleClick} open={menuOpen}/>
        {/* <div 
          onClick={handleOuterWrapperClick}
        ></div> */}

    </div>

  );
}

export default App;
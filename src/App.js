import React, { Component } from 'react';
import { Map, Marker, Popup } from "react-leaflet";
import L from "leaflet";
// import logo from './logo.svg';

import icon from './Assets/Location_Icon.png';


import MapboxLayer from "./MapboxLayer";
import './App.css';

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiYWxleG5pY2hvbGxzMTk5OSIsImEiOiJjazg5NXEyc2UwMzRxM25wa3A0cWJpc3llIn0.Xjr0Tkt6MXcyqIwGUdsDIw";

class App extends Component {
  constructor(){
    super();
    this.state = {
      markers: [[35.6892, 51.3890]],
    };
  }

  // state = {
  //   center: [50.908492, -1.401176],
  //   zoom: 17
  // };

  addMarker = (e) => {
    const {markers} = this.state;
    markers.pop();
    markers.push(e.latlng);
    this.setState({markers});
  }


  render(){
  let DefaultIcon = L.icon({
    iconUrl: icon,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

    return (
      <div>
        <Map 
            center={[50.908492, -1.401176]} 
            onClick={this.addMarker} 
            zoom={17}
            maxZoom={18}
            // minZoom={1}
        >
          <MapboxLayer
            accessToken={MAPBOX_ACCESS_TOKEN}
            style="mapbox://styles/alexnicholls1999/ck895rdr72dpf1ikbx7hgpk1z"
          />
          {this.state.markers.map((position, idx) =>
            <Marker key={`marker-${idx}`} position={position}>
            </Marker>
            )}
        </Map>
         
      </div>
    );
  }
}



export default App;

import React, { useEffect, useRef } from 'react';
import L from "leaflet";
import mapboxgl from 'mapbox-gl';

import icon from '../Assets/Location_Icon.png';
// import gps from './Assets/gps.png';

const style = {
    height: "100vh",
    width: "100vw" 
};

function Map({ markerPosition }) {
    const mapRef = useRef(null);

    useEffect(() => {
        mapRef.current = L.map("map", {
            center: markerPosition,
            zoom: 16,
            layers: [
                L.tileLayer('https://api.mapbox.com/styles/v1/alexnicholls1999/{id}/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxleG5pY2hvbGxzMTk5OSIsImEiOiJjazg5NXEyc2UwMzRxM25wa3A0cWJpc3llIn0.Xjr0Tkt6MXcyqIwGUdsDIw', { 
                attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18, 
                id: 'ck895rdr72dpf1ikbx7hgpk1z'})
            ]
        });
    }, []);


    const markerRef = useRef(null);

    const marker = L.icon({
        iconUrl: icon,
        iconSize: [22, 32],
        iconAnchor: [11, 32]    
    });

    useEffect(
        () => {
            if (markerRef.current) {
                markerRef.current.setLatLng(markerPosition);
            } else {
                markerRef.current = L.marker(markerPosition, {icon: marker} ).addTo(mapRef.current);
            }
        },
        [markerPosition]
    );

    return <div id="map" style={style} />;
}

export default Map;
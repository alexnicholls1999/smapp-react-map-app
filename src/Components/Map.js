import React, { useEffect, useRef } from 'react';
import L from "leaflet";

import icon from '../Assets/Location_Icon.png';
import gps from '../Assets/gps.png';

const style = {
    height: "100vh",
    width: "100vw" 
};

function Map({ markerPosition }) {
    const mapRef = useRef(null);

    const panTo = () => {
        mapRef.current.flyTo(markerPosition, mapRef.current.getZoom(), {
            animate: true,
            duration: 0.5,
            zoom: 5,
        });
    };

    useEffect(() => {
        mapRef.current = L.map("map", {
            center: markerPosition,
            zoom: 16,
            layers: [
                L.tileLayer('https://api.mapbox.com/styles/v1/alexnicholls1999/{id}/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxleG5pY2hvbGxzMTk5OSIsImEiOiJjazg5NXEyc2UwMzRxM25wa3A0cWJpc3llIn0.Xjr0Tkt6MXcyqIwGUdsDIw', { 
                maxZoom: 18, 
                attributionControl: false,
                id: 'ck895rdr72dpf1ikbx7hgpk1z'})
            ]
        });

        var marker;

        mapRef.current.on('click', function(e) {
            if (marker) {
                mapRef.current.removeLayer(marker);
            }

            marker = L.marker(e.latlng).addTo(mapRef.current);
        });
    }, []);

    
    const markerRef = useRef(null);

    const DefaultIcon = L.icon({
        iconUrl: icon,
        iconSize: [22, 31],
        iconAnchor: [11, 30]
    });

    const gpsicon = L.icon({
        iconUrl: gps,
        iconSize: [22, 22],
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    useEffect(
        () => {
            if (markerRef.current) {
                markerRef.current.setLatLng(markerPosition);
                panTo();
            } else {
                markerRef.current = L.marker(markerPosition, {icon: gpsicon} ).addTo(mapRef.current);
            }
        },
        [markerPosition]);

    return <div id="map" style={style} />;
}

export default Map;
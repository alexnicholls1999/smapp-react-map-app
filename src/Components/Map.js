import React, { useEffect, useRef } from 'react';
import L from "leaflet";
import icon from '../Assets/Location_Icon.png';
import gps from '../Assets/gps.png'; 
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import "leaflet-routing-machine";
import "leaflet-control-geocoder";
import { placeholder } from '@babel/types';
import { number } from 'prop-types';
import { plugins } from 'pretty-format';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const style = {
    height: "100vh",
    width: "100vw",
};

const DefaultIcon = L.icon({
    iconUrl: icon,
    iconSize: [22, 31],
    iconAnchor: [11, 30],
    popupAnchor: [0, -31],
});

const gpsicon = L.icon({
    iconUrl: gps,
    iconSize: [22, 22],
});


function Map({ markerPosition }) {
    const mapRef = useRef(null);
    
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
        provider: provider,
        style: 'bar',
        marker: {
            iconUrl: DefaultIcon,
            draggable: false,
        },
        autoClose: true,
        keepResult: true,
        retainZoomLevel: true,
        searchLabel: 'Search for location',
    });

    const control = L.Routing.control({
        router: L.Routing.mapbox('pk.eyJ1IjoiYWxleG5pY2hvbGxzMTk5OSIsImEiOiJjazg5NXEyc2UwMzRxM25wa3A0cWJpc3llIn0.Xjr0Tkt6MXcyqIwGUdsDIw'),
        waypoints: [null],
        lineOptions: {
            styles: [{color: "#1EE5AB"}] 
        },
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim(),
    });

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

        const routeBlock = control.onAdd(mapRef.current);
        document.getElementById("menu").appendChild(routeBlock);

        mapRef.current.addControl(searchControl);

        // L.Routing.control({
        //     router: L.Routing.mapbox('pk.eyJ1IjoiYWxleG5pY2hvbGxzMTk5OSIsImEiOiJjazg5NXEyc2UwMzRxM25wa3A0cWJpc3llIn0.Xjr0Tkt6MXcyqIwGUdsDIw'),
        //     waypoints: [
        //       L.latLng(57.74, 11.94),
        //       L.latLng(57.6792, 11.949)
        //     ],
        //     routeWhileDragging: true,
        //     geocoder: L.Control.Geocoder.nominatim(),
        // }).addTo(mapRef.current);


        mapRef.current.on('click', function(e) {
            if (marker) {
                mapRef.current.removeLayer(marker);
            }

            marker = L.marker(e.latlng).addTo(mapRef.current);
            marker.bindPopup(btn);
        });

        let btn = document.createElement('a');
        btn.innerText = 'Remove Marker';
        btn.onclick = function() {
            mapRef.current.removeLayer(marker);
        }

    }, []); 

 



    const markerRef = useRef(null);

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
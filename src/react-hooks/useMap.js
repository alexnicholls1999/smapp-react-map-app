import {useRef, useState, useEffect} from "react";
import L from "leaflet";

export default function useMap(markerPosition) {
    const mapRef = useRef(null);

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
    })

    const panTo = () => {
        mapRef.current.flyTo(markerPosition, mapRef.current.getZoom(), {
            animate: true,
            duration: 0.5,
            zoom: 5,
        });
    };

    const markerRef = useRef(null);

    useEffect(
        () => {
            if (markerRef.current) {
                markerRef.current.setLatLng(markerPosition);
            } else {
                markerRef.current = L.marker(markerPosition).addTo(mapRef.current);
            }
        }, [markerPosition]
    );

    return {
        mapRef,
        panTo
    }
}
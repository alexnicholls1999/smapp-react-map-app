import { useRef, useEffect } from "react";
import L from "leaflet";

function Marker({markerPosition, mapRef}) {

    const markerRef = useRef(null);
    
    useEffect(
      () => {
        if (markerRef.current) {
          markerRef.current.setLatLng(markerPosition);
        } else {
          markerRef.current = L.marker(markerPosition).addTo(mapRef.current);
        }
      },
      [markerPosition]
    );

    return null

}

export default Marker;

import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";

export default function useGeoloation(map){

    const [position, setPosition] = useState({
        lat: 0,
        lng: 0
    });

    useEffect(() => {
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                gpspos => {
                    setPosition({
                        lat: `${gpspos.coords.latitude}`,
                        lng: `${gpspos.coords.longitude}`
                    });
                },
                err => {
                    alert(`An error occured: ${err.code}`)
                }
            );
        } else {
            alert("Sorry, geolocation is not supported in this browser");
            setPosition({
                lat: 0,
                lng: 0
            })
        }
    })

    useEffect(() => {
        map.flyTo(position, map.getZoom());
    }, [map])
    
    return { 
        position
    }

}
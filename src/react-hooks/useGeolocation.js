import { useEffect, useState } from "react";

export default function useGeoloation(){

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
        
    })
    
    return { 
        position
    }

}
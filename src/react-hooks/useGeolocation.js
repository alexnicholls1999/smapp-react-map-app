import { useEffect, useState } from "react";

export default function useGeolocation(map) {
    const [position, setPosition] = useState({
        lat: null,
        lng: null
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
                alert(`An error occurred: ${err.code}`);
              }
            );
          } else {
            alert("Sorry, geolocation not supported in this browser");
              setPosition({
                lat: 50.908492, 
                lng: -1.401176    
              });
        }
        map.flyTo(position, 18)
    }, [position]);


    return {
        position
    }
}
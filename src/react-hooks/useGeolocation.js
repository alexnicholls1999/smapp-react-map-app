import { useEffect, useState } from "react";

function findCurrentLocation(){
    
}

export default function useGeolocation(map) {
    const [position, setPosition] = useState(null);

    useEffect(() => {
        // map.locate().on("locationfound", handleOnLocationFound);
        // map.on("locationerror", handleOnLocationErr)
        
        // return () => {
        //     map.off("locationfound", handleOnLocationFound);
        //     map.off("locationerror", handleOnLocationErr)
        // }
    
    }, []);

    function handleOnLocationFound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom())
    }
    
    function handleOnLocationErr(err){
        alert(`Unable to determine your location: ${err.message}`);
    }

    return {
        position
    }
}
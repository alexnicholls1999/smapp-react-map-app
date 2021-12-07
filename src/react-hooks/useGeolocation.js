import { useEffect, useState } from "react";

export default function useGeoloation(map){
    const [position, setPosition] = useState(null);

    useEffect(() => {
        map.locate().on("locationfound", function (e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
        })
    }, [map])

    return {
        position
    }
}
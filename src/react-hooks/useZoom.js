import { useState, useEffect } from "react";

export default function useZoom(map){
    // const [zoom, setZoom] = useState(0)

    const currentZoom = map.getZoom();

    console.log(currentZoom)

    // useEffect(() => {
    //     setZoom(currentZoom)
        
    // }, [zoom])

    const handleZoomIn = (e) => {
        e.preventDefault();
        map.setZoom(currentZoom + 1)
    }

    const handleZoomOut = (e) => {
        e.preventDefault();
        map.setZoom(currentZoom - 1)
    }

    return { 
        handleZoomIn,
        handleZoomOut
    }
}
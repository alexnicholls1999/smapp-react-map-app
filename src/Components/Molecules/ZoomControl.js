import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import ZoomIn from '../Atoms/ZoomIn'
import ZoomOut from '../Atoms/ZoomOut'

function ZoomControl() {

    const map = useMap()

    return (
        <div className="zoom-control">
            <ZoomIn handleZoomInClick={() => map.setZoom(map.getZoom() + 1)} />
            <ZoomOut handleZoomOutClick={() => map.setZoom(map.getZoom() - 1)}/>   
        </div>
    )
}

export default ZoomControl

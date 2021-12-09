import { useState, useEffect } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet';
import useGeolocation from '../../react-hooks/useGeolocation';

function Geolocation() {
    const map = useMap();
    const { position } = useGeolocation(map);

    
    return position === null ? null : (
        <Marker position={position}>
            <Popup>
                You are here {position.lat} {position.lng}.
            </Popup>
        </Marker>
    )
}

export default Geolocation

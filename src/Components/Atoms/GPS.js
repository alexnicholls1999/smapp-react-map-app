import React from 'react'
import { Marker, Popup } from 'react-leaflet';
import useGeoloation from '../../react-hooks/useGeolocation'

function GPS({position}) {

    
    return (
        <Marker position={position}>
            <Popup>
                You are here {position.lat} {position.lng}.
            </Popup>
        </Marker>
    )
}

export default GPS

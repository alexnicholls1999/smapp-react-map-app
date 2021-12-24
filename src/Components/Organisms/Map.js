import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import { MapContainer, Popup, TileLayer, Marker, useMap} from 'react-leaflet'
import Geolocation from "../Atoms/Geolocation"
import ZoomControl from "../Molecules/ZoomControl"

function Map({children}) {

    return (
        <MapContainer center={[50.908942, -1.401176]} zoom={16} scrollWheelZoom={true} zoomControl={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> 
            <Marker position={[11, -0.121212]}>
                <Popup>
                    Hello there! <br /> General Kenobi
                </Popup>
            </Marker>
            <ZoomControl />
            <Geolocation />
            {children}
        </MapContainer>
    )
}

Map.propTypes = {
    children: PropTypes.node.isRequired
}

export default Map

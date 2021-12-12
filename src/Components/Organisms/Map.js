import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import { MapContainer, Popup, TileLayer, Marker, useMap} from 'react-leaflet'
import Geolocation from "../Atoms/Geolocation"
import ZoomControl from "../Molecules/ZoomControl"

function Map({map}) {

    const [zoom, setZoom] = useState(13)
    const [disabledZoom, setDisabledZoom] = useState({
        minZoom: false,
        maxZoom: false
    })

    console.log(zoom)

    useEffect(() => {
        if (zoom === 19) return setDisabledZoom({zoomIn: !disabledZoom.maxZoom})
        if (zoom < 4) return setDisabledZoom({zoomIn: !disabledZoom.minZoom})
    }, [])

    return (
        <MapContainer center={map.position} zoom={zoom} scrollWheelZoom={true}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> 
            <Marker position={[11, -0.121212]}>
                <Popup>
                    Hello there! <br /> General Kenobi
                </Popup>
            </Marker>
            <ZoomControl handleZoomInClick={() => setZoom(zoom + 1)} handleZoomOutClick={() => setZoom(zoom - 1)} minZoom={disabledZoom.minZoom} maxZoom={disabledZoom.maxZoom}/>
            <Geolocation />
        </MapContainer>
    )
}

Map.propTypes = {
    map: PropTypes.shape({
        position: PropTypes.arrayOf(PropTypes.number.isRequired),
        zoom: PropTypes.number.isRequired
    })
}

export default Map

import PropTypes from "prop-types"
import { MapContainer, Popup, TileLayer, Marker, useMap} from 'react-leaflet'
import Geolocation from "../Atoms/Geolocation"

function Map({map}) {


    return (
        <MapContainer center={map.position} zoom={map.zoom} scrollWheelZoom={true}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> 
            <Marker position={[11, -0.121212]}>
                <Popup>
                    Hello there! <br /> General Kenobi
                </Popup>
            </Marker>
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

import PropTypes from "prop-types"
import { MapContainer, Popup, TileLayer, Marker, useMap} from 'react-leaflet'
import useGeoloation from "../../react-hooks/useGeolocation";
import GPS from "../Atoms/GPS"

function Map({map}) {
    const mapRef = useMap();
    const { position } = useGeoloation(mapRef)

    return (
        <MapContainer center={[11, -0.121212]} zoom={map.zoom} scrollWheelZoom={true}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> 
            <Marker position={[11, -0.121212]}>
                <Popup>
                    Hello there! <br /> General Kenobi
                </Popup>
            </Marker>
            <GPS position={position}/>
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

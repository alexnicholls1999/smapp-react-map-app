import PropTypes from "prop-types"
import { Popup } from 'react-leaflet'
import Marker from '../Atoms/Marker'

function Place({place}) {
    return (
        <Marker marker={{
            position: [place.position.lat, place.position.lng],
            popup: <Popup>{place.locationName}</Popup>
        }}/>
    )
}

Place.propTypes = {
    place: PropTypes.shape({
        position: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired
        }),
        locationName: PropTypes.string.isRequired
    }),
}

export default Place

import PropTypes from "prop-types";
import { Marker as LocationMarker } from 'react-leaflet';

function Marker({marker}) {
    return (
        <LocationMarker position={marker.position}>
            {marker.popup}
        </LocationMarker>
    )
}

Marker.propTypes = {
    marker: PropTypes.shape({
        position: PropTypes.oneOfType([PropTypes.number, PropTypes.number]),
        popup: PropTypes.element.isRequired
    })
}

export default Marker

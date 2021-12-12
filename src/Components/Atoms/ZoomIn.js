import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import './atoms.sass'

function ZoomIn({handleZoomInClick, minZoom}) {
    return (
        <button className="zoom-btn" id="zoom-in" disabled={minZoom} onClick={handleZoomInClick}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    )
}

ZoomIn.propTypes = {
    handleZoomInClick: PropTypes.func.isRequired
}

export default ZoomIn

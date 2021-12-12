import PropTypes from "prop-types";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import './atoms.sass'

function ZoomOut({handleZoomOutClick, maxZoom}) {
    return (
        <button className="zoom-btn" id="zoom-out" disabled={maxZoom} onClick={handleZoomOutClick}>
            <FontAwesomeIcon icon={faMinus} />
        </button>
    )
}

ZoomOut.propTypes = {
    handleZoomOutClick: PropTypes.func
}


export default ZoomOut

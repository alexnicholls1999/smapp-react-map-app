import PropTypes from "prop-types";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './atoms.sass'

function ZoomOut({handleZoomOutClick}) {
    return (
        <button className="zoom-btn" id="zoom-out" onClick={handleZoomOutClick}>
            <FontAwesomeIcon icon={faMinus} />
        </button>
    )
}

ZoomOut.propTypes = {
    handleZoomOutClick: PropTypes.func
}


export default ZoomOut

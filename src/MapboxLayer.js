import L from "leaflet";
import {} from "mapbox-gl-leaflet";
import PropTypes from "prop-types";
import { GridLayer, withLeaflet } from "react-leaflet";

class MapBoxGLLayer extends GridLayer {
    createLeafletElement(props) {
        return L.mapboxGL(props);
    }
}

MapBoxGLLayer.propTypes = {
    acessToken: PropTypes.string.isRequired,
    style: PropTypes.string
};

MapBoxGLLayer.defaultProps = {
    style: "mapbox://styles/alexnicholls1999/ck895rdr72dpf1ikbx7hgpk1z"
};

export default withLeaflet(MapBoxGLLayer);
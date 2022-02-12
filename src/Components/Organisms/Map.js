import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import L from "leaflet";
import organisms from './organisms.module.scss';
import useMap from "../../react-hooks/useMap";
import Marker from "../Atoms/Marker";

function Map({children}) {

    const markerPosition = [50.90878, -1.40051]

    const { mapRef, panTo } = useMap(markerPosition)

    // const mapRef = useRef(null);

    useEffect(() => {
        // mapRef.current = L.map("map", {
        //     center: [0, 0],
        //     zoom: 16,
        //     layers: [
        //         L.tileLayer('https://api.mapbox.com/styles/v1/alexnicholls1999/{id}/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxleG5pY2hvbGxzMTk5OSIsImEiOiJjazg5NXEyc2UwMzRxM25wa3A0cWJpc3llIn0.Xjr0Tkt6MXcyqIwGUdsDIw', { 
        //         maxZoom: 18, 
        //         attributionControl: false,
        //         id: 'ck895rdr72dpf1ikbx7hgpk1z'})
        //     ]
        // });
        panTo()
    })

    return (
        <div id="map" className={organisms.map}>
            {children}
        </div>
    )
}

Map.propTypes = {
    children: PropTypes.node.isRequired
}

export default Map

import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Marker, Popup, useMap } from 'react-leaflet';
import useGeolocation from '../../react-hooks/useGeolocation';
import './atoms.sass'

function Geolocation() {
    const map = useMap();
    const { position, handleFindMyLocation} = useGeolocation(map);
    
    return position === null ? null : (
        <>
            <div className="find-me" onClick={handleFindMyLocation}><FontAwesomeIcon icon={faLocationArrow} /></div>
            <Marker position={position}>
                <Popup>
                    You are here {position.lat} {position.lng}.
                </Popup>
            </Marker>
        </>
    )
}

export default Geolocation

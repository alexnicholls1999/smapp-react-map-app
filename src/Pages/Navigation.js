import Map from "../Components/Organisms/Map"
import useGeolocation from "../react-hooks/useGeolocation"

function Navigation() {

    const { position } = useGeolocation();
    
    const zoom = 12

    return <Map map={{position: position, zoom: zoom}}/>
}

export default Navigation

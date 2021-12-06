import Map from "../Components/Organisms/Map"

function Navigation() {

    const position = [0, 0]

    const zoom = 12

    return <Map map={{position: position, zoom: zoom}}/>
}

export default Navigation

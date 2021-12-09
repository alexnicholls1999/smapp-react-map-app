import Map from "../Components/Organisms/Map"

function Navigation() {

    const position = [50.908942, -1.401176]
    const zoom = 16

    return <Map map={{zoom: zoom, position: position }}/>
}

export default Navigation

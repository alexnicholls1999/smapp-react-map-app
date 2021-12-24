import Searchbar from "../Components/Molecules/Searchbar";
import Map from "../Components/Organisms/Map"
import Places from "../Components/Organisms/Places"
import places from "./../places.json";

function Navigation() {

    return (
        <Map>
            <Places places={places} />
            <Searchbar />
        </Map>
    )
}

export default Navigation

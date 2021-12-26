import Searchbar from "../Components/Molecules/Searchbar";
import Map from "../Components/Organisms/Map"
import Places from "../Components/Organisms/Places"
import places from "./../places.json";
import Autocomplete from "./../Components/Atoms/Autocomplete";

function Navigation() {

    return (
        // <Map>
        //     <Places places={places} />
        //     <Searchbar />
        // </Map>
        <Autocomplete />
    )
}

export default Navigation

import Searchbar from "../Components/Molecules/Searchbar";
import Map from "../Components/Organisms/Map"
import Places from "../Components/Organisms/Places"
import places from "./../places.json";
import Autocomplete from "./../Components/Atoms/Autocomplete";
import Suggestions from "../Components/Atoms/Suggestions";

const locationNames = [
    'Michael Andrew Building',
    'Regionald M Building',
    'Sir Christopher Cockerell Building',
    'Herbert Collins Building',
    'Students Union Building',
    'Sir John Everett Milias Building',
    'The Spark', 
    'Southampton Solent University'
]

function Navigation() {

    return (
        // <Map>
        //     <Places places={places} />
        //     <Searchbar />
        // </Map>
        // <Autocomplete />
        <Suggestions places={locationNames}/>
    )
}

export default Navigation

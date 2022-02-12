import Searchbar from "../Components/Molecules/Searchbar";
import Map from "../Components/Organisms/Map"
import places from "./../places.json";

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
        <Map>
            <Searchbar data={locationNames} />
        </Map>
    )
}

export default Navigation

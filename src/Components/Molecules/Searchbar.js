import Input from '../Atoms/Form/Input'
import SearchIcon from '../Atoms/Iconography/SearchIcon'
import "./molecules.sass"

function Searchbar() {

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="search-bar">
            <Input input={{ onChange: handleChange, value: "location", placeholder: "Search for location"}} />
            <SearchIcon />
        </div>
    )
}

export default Searchbar

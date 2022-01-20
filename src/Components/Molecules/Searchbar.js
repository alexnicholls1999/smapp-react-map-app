import { useState, useEffect } from "react";
import Input from "../Atoms/Form/Input";
import SearchIcon from "../Atoms/Iconography/SearchIcon";
import Suggestions from "../Atoms/Suggestions";
import molecules from "./molecules.module.scss";

function Searchbar({data}) {
    const [state, setState] = useState({
        suggestions: [],
        index: 0,
        active: false,
        value: ""
    })


    const { suggestions, index, active, value} = state;

    useEffect(() => {
        document.body.addEventListener("keydown", handleKeyDown)
    })

    const handleChange = (e) => {
        const query = e.target.value.toLowerCase();
        setState(currentstate => ({...currentstate, value: query }))
        if (query.length > 1) {
            const filterSuggestions = data.filter((suggestion) => suggestion.toLowerCase().indexOf(query) > -1);
            setState(currentstate => ({...currentstate, suggestions: filterSuggestions, active: true}))
    
        } else {
            setState(currentstate => ({...currentstate, active: false}))
        }
    };

    const handleClick = (e) => {
        setState(currentstate => ({...currentstate, suggestions: [], active: true, value: e.target.innerText}))
      };
    
    const handleKeyDown = (e) => {
        if (e.keyCode === 38) {
            if (index === 0) return;
            setState(currentstate => ({...currentstate, index: index - 1}))
        } else if (e.keyCode === 40) {
            if (index - 1 === suggestions.length) return;
            setState(currentstate => ({...currentstate, index: index + 1}))
        } else if (e.keyCode === 13) {
            setState(currentstate => ({...currentstate, index: 0, active: false, value: suggestions[index]}))
        }
    };
    

    return (
        <>
            <div className={molecules.searchbar}>
                <div className={molecules.searchbarWrapper}>
                    <Input 
                        input={{
                            value: value,
                            onChange: handleChange,
                            placeholder: "Search for location"
                        }} 
                    />
                    <SearchIcon />
                </div>
                {active && <Suggestions suggestions={suggestions} index={index} handleClick={handleClick} />}
            </div>
        </>
    )
}

export default Searchbar;

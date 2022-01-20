import atoms from "./atoms.module.scss";

function Suggestions({suggestions, index, handleClick}) {
    return (
        <>
            {suggestions.length !== 0 ? (
                <ul className={atoms.suggestionsList}> 
                    {suggestions.map((suggestion, i) => <li key={i} onClick={handleClick} className={i === index ? atoms.activeSuggestion : null}>{suggestion}</li>)}
                </ul>
            ) : null}
        </>

    )
}

export default Suggestions;

import { useState, useRef, useEffect } from 'react'

export default function Suggestions({places}) {
    const inputRef = useRef();
    const suggestionsRef = useRef();

    const [suggestions, setSuggestions] = useState([])
    const [text, setText] = useState('');

    const results = suggestions && suggestions.length > 0;

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    useEffect(() => {
        document.body.addEventListener('keydown', onKeyDown);

        if (results) { 
            document.body.addEventListener('keydown', onKeyDown);
        } else {
            document.body.removeEventListener('keydown', onKeyDown);
        }

        return () => {
            document.body.removeEventListener('keydown', onKeyDown);
        }
    }, [results])

    function onKeyDown(event) {
        console.log(event)
        const upKey = event.key === 'ArrowUp';
        const downKey = event.key === 'ArrowDown';
        const inputIsFocused = document.activeElement === inputRef.current;
        
        const suggestionsItems = Array.from(suggestionsRef.current.children);

        const activeResultIndex = suggestionsItems.findIndex(child => {
            return child.querySelector('a') === document.activeElement;
        })

        if (upKey) return console.log('up');

        if (downKey) {
            suggestionsItems[0].querySelector('div').focus()
        }
    }

    const autoCompleteText = (e) => {
        const value = e.target.value;

        let suggestions = [];

        if (value.length > 0) {
            const regex = new RegExp(`${value}`, 'i');
            suggestions = places.sort().filter(v => regex.test(v))
        }
        
        setSuggestions(suggestions);
        setText(value)
    }

    const suggestionSelected = (value) => {
        setText(value);
        setSuggestions([]);
    }

    const renderSuggestions = () => {
        if (!results) return null;

        return (
            <ul ref={suggestionsRef}>
                {suggestions.map((place, index) => <li key={index}><div onClick={() => suggestionSelected(place)}>{place}</div></li>)}
            </ul>
        )
    }

    return (
        <div className="autocomplete">
            <input ref={inputRef} type="text" value={text} onChange={autoCompleteText}/>
            {renderSuggestions()}
        </div>
    )

}


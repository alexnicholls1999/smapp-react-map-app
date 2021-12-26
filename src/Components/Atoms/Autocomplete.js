import { text } from '@fortawesome/fontawesome-svg-core';
import React, { Component } from 'react'
import { places } from "./../../places.json"

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

export default class Autocomplete extends Component {

    constructor (props) {
        super(props)
        this.places = locationNames;

        this.state = {
            suggestions: [],
            text: ''
        }
    }

    autoCompleteText = (e) => {
        const value = e.target.value;
        let suggestions = [];
        
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.places.sort().filter(v => regex.test(v))
        }

        this.setState(() => ({suggestions, text: value}))
    }

    suggestionSelected(value) {
        this.setState(() => ({
            text: value,
            suggestions: []
        }))
    }

    renderSuggestions (){
        const {suggestions} = this.state;

        if (suggestions.length === 0) return null;

        return (
            <ul>
                {suggestions.map((place) => <li onClick={() => this.suggestionSelected(place)}>{place}</li>)}
            </ul>
        )
    }

    render() {
        return (
            <div className="autocomplete">
                <input type="text" value={this.state.text} onChange={this.autoCompleteText}/>
                {this.renderSuggestions()}
            </div>
        )
    }
}

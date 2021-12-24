import Place from "../Molecules/Place"

function Places({places}) {
    return places.map((place) => <Place key={place.id} place={{position: {lat: place.lat, lng: place.lng}, locationName: place.locationName}}/>)
}

export default Places

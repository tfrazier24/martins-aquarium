import { useLocation } from './LocationDataProvider.js';
import { Location } from './Location.js';

let LocationContainer = document.querySelector("#location-list");

export function LocationList(){
    const allLocations = useLocation();

    let locationListHTMLString = "";

    for(let i = 0; i < allLocations.length; i++){
        locationListHTMLString += Location(allLocations[i]);
    }

    console.log(locationListHTMLString);

    LocationContainer.innerHTML = `<h2>Places I've Been</h2>${locationListHTMLString}`;
}
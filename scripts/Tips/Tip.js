export function Tips(tipCollection){
    return `
    <h3>${tipCollection.tip}</h3>
    <ul>
        <li>${tipCollection.descriptionOne}</li>
        <li>${tipCollection.descriptionTwo}</li>
    </ul>
    `
};


/* <h2>Fish Tips</h2>
    <h3>Salinity</h3>
    <ul>
        <li>Keep it salty</li>
        <li>Just dump in some salt</li>
    </ul>
    <h3>Temperature</h3>
    <ul>
        <li>Very hot</li>
        <li>Basically boiling</li>
    </ul> */
export function Location(locationObject){
    return `<section class="location-card">
    <img class="locationImg" src="${locationObject.locationImage}">
    <p class="locationTitle">${locationObject.name}</p>
    </section>
    `
};

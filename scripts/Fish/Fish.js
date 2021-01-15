export function Fish(fishCollection){
    return `
        <section class="fish-card">
            <div><img  class="fish__image image--card" src="${fishCollection.image}" /></div>
            <div class="fish__name">${fishCollection.name}</div>
            <div class="fish__species">${fishCollection.fishType}</div>
            <div class="fish__length">${fishCollection.length}</div>
            <div class="fish__location">${fishCollection.location}</div>
            <div class="fish__diet">${fishCollection.food}</div>
        </section>
    `
};

const fishCollection = [
    {
        fishType: "Beta fish",
        length: 2,
        name: "George",
        location: "Galapagos Island",
        food: "Pretzels"
    },
    {
        fishType: "Great White Shark",
        length: 455,
        name: "Brutus",
        location: "Australian Coast",
        food: "Seals"
    },
    {
        fishType: "Orca",
        length: 333,
        name: "Willy",
        location: "North Pacific Ocean",
        food: "Squid"
    },
    {
        fishType: "Grouper",
        length: 55,
        name: "Beef",
        location: "Bahamas",
        food: "Crustaceans"
    },
    {
        fishType: "Mahi Mahi",
        length: 62,
        name: "Franco",
        location: "Gulf of California",
        food: "Juvenile Tuna"
    }
];

// This is new code. Add this.
export function useFish() {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
    

    for (const number of fishCollection) {
        if (number.length % 3 === 0) {
            holyFish.push(number)
        }
    }
    return holyFish
}

console.log(mostHolyFish())

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish

    const soldiers = []

    for (const number of fishCollection) {
        if (number.length % 5 === 0){
            soldiers.push(number)
        }
    }
    return soldiers
}

console.log(soldierFish())

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5

    const regularFish = []

    for (const number of fishCollection){
        if(number.length % 3 !== 0 && number.length % 5 !== 0){
            regularFish.push(number)
        }
    }
    return regularFish
}

console.log(nonHolyFish())
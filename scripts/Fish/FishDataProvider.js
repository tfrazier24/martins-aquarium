const fishCollection = [
    {
        fishType: "Beta fish",
        length: "2 inches",
        name: "George",
        location: "Galapagos Island",
        food: "Pretzels"
    },
    {
        fishType: "Great White Shark",
        length: "17 feet",
        name: "Brutus",
        location: "Australian Coast",
        food: "Seals"
    },
    {
        fishType: "Orca",
        length: "33 feet",
        name: "Willy",
        location: "North Pacific Ocean",
        food: "Squid"
    },
    {
        fishType: "Grouper",
        length: "55 inches",
        name: "Beef",
        location: "Bahamas",
        food: "Crustaceans"
    },
    {
        fishType: "Mahi Mahi",
        length: "65 inches",
        name: "Franco",
        location: "Gulf of California",
        food: "Juvenile Tuna"
    }
];

// This is new code. Add this.
export function useFish() {
    return fishCollection.slice()
}
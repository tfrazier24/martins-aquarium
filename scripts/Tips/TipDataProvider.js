const tipCollection = [
    {
        tip: "Salinity",
        descriptionOne: "Keep it salty",
        descriptionTwo: "Just dump in some salt"
    },
    {
        tip: "Temperature",
        descriptionOne: "Very hot",
        descriptionTwo: "Basically boiling"
    }
];

export function useTips(){
    return tipCollection.slice()
}
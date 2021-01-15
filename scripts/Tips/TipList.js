import { useTips } from './TipDataProvider.js';
import { Tips } from './Tip.js';

let tipCollection = document.querySelector("#tips-list")

export function TipList(){
    const allTheTips = useTips();

    let tipListHTMLString = "";

    for(let i = 0; i < allTheTips.length;i++){
        tipListHTMLString += Tips(allTheTips[i]);
    }
    console.log(tipListHTMLString);

    tipCollection.innerHTML = `<h2>My Tips</h2>${tipListHTMLString}`;
}
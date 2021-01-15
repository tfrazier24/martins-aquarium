import { useFish } from './FishDataProvider.js';
import { Fish } from './Fish.js';

let fishCollection = document.querySelector("#fish-list");

export function FishList(){
    const allTheFish = useFish();

    let fishListHTMLString = "";
 
    for(let i = 0; i < allTheFish.length; i++){
      fishListHTMLString += Fish(allTheFish[i]);
    }
  
    console.log(fishListHTMLString);
  
    fishCollection.innerHTML = `<h2>My Fish</h2>${fishListHTMLString}`;
}
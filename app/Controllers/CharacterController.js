import CharacterService from "../Services/CharacterService.js";
import store from "../store.js";

//Private
function _draw() {
  let characters = store.State.characters;
  let template = `<h1>People</h1>
  <button onclick="app.shipController.getShips()">get Ships</button>
  `
  characters.forEach(c => template += c.Template)
  document.getElementById('results').innerHTML = template
}

function doStuff() {
  console.log("this is another function keyed off of characters changing in the state");

}

//Public
export default class CharacterController {
  constructor() {
    store.subscribe("characters", doStuff);
    store.subscribe("characters", _draw);
  }

  getCharacters() {
    CharacterService.getCharacters()
  }

}

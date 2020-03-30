import ShipService from "../Services/ShipService.js";
import store from "../store.js";

//Private
function _draw() {
  let ships = store.State.ships;
  let template = `<h1>Ships</h1>
  <button onclick="app.characterController.getCharacters()">get Characters</button>
  `
  ships.forEach(c => template += c.Template)
  document.getElementById('results').innerHTML = template
}

function doStuff() {
  console.log("this is another function keyed off of ships changing in the state");

}


//Public
export default class ShipController {
  constructor() {
    store.subscribe("ships", doStuff);
    store.subscribe("ships", _draw);
  }

  getShips() {
    ShipService.getShips()
  }
}

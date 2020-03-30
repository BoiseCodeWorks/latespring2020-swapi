import CharacterController from "./Controllers/CharacterController.js";
import ShipController from "./Controllers/ShipController.js";

class App {
  characterController = new CharacterController();
  shipController = new ShipController()
}

window["app"] = new App();

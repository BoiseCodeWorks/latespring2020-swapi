import store from "../store.js";
import Ship from "../Models/Ship.js";


// @ts-ignore
let _api = new axios.create({
  baseURL: "https://swapi.co/api/",
  timeout: 15000
})


class ShipService {
  constructor() {
  }

  getShips() {
    _api.get('starships')
      .then(res => {
        // console.log(res.data.results)
        let ships = res.data.results.map(rawShipData => new Ship(rawShipData))
        store.commit("ships", ships)
      }).catch(err => {
        console.error(err)
      })
  }



}

const service = new ShipService();
export default service;

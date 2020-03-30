import store from "../store.js";
import Character from "../Models/Character.js";

//NOTE simulating asynchronous requests!
// function simulateAsync() {
//   console.log(1)
//   setTimeout(function () { console.log("async", 1) }, Math.random() * 1500)
//   console.log(2)
//   setTimeout(function () { console.log("async", 2) }, Math.random() * 1500)
//   console.log(3)
//   setTimeout(function () { console.log("async", 3) }, Math.random() * 1500)
//   let lists = []
//   lists.forEach(function (list) { })


// }

// function simulateSuccess() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve("It worked!")
//     }, Math.random() * 3000)
//   })
// }

// function simulateFailure() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       reject("Failed!")
//     }, Math.random() * 3000)
//   })
// }

// @ts-ignore
let _api = new axios.create({
  baseURL: "https://swapi.co/api/",
  timeout: 15000
})


class CharacterService {
  constructor() {
    //NOTE simulating asynchronous requests!
    // simulateAsync()
    // simulateSuccess().then(results => {
    //   console.log(results)
    // }).catch(err => {
    //   console.error("failure in the success method", err)
    // })

    // simulateFailure().then(res => {
    //   console.log("success in our failure method", res);
    // }).catch(err => console.error(err))
    this.getCharacters()
  }

  getCharacters() {
    _api.get('people')
      .then(res => {
        // console.log(res.data.results)
        let characters = res.data.results.map(rawCharacterData => new Character(rawCharacterData))
        store.commit("characters", characters)
        // console.log(people)
      }).catch(err => {
        console.error(err)
      })
  }



}

const service = new CharacterService();
export default service;

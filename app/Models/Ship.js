export default class Ship {
  constructor(data) {
    this.name = data.name
    this.model = data.model
  }

  get Template() {
    return `<p>${this.name} - ${this.model}</p>`
  }
}
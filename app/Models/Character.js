export default class Character {
    constructor(data) {
        this.name = data.name
        this.hair_color = data.hair_color
    }

    get Template() {
        return `<p>${this.name}</p>`
    }
}
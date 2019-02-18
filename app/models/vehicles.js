export default class Vehicle {
  constructor(data) {
    this.name = data.name
    this.model = data.model
    this.manufacturer = data.manufacturer
    this.crew = data.crew
    this.passengers = data.passengers
    this.url = data.url
  }

  vehicleTemplate() {
    return `
    <h5>${this.name}</h5>
    <p>Diameter: ${this.model}</p>
    <p>Climate: ${this.manufacturer}</p>
    <p>Type of terrain: ${this.crew}</p>
    <p class="mb-5">Population: ${this.passengers}</p>
    `
  }
}
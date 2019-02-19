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
    <p>Model: ${this.model}</p>
    <p>Manufacturer: ${this.manufacturer}</p>
    <p>Number of crew: ${this.crew}</p>
    <p class="mb-5">Number of passengers: ${this.passengers}</p>
    `
  }
}
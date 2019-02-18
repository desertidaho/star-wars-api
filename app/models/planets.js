export default class Planet {
  constructor(data) {
    this.name = data.name
    this.diameter = data.diameter
    this.climate = data.climate
    this.terrain = data.terrain
    this.population = data.population
    this.url = data.url
  }

  planetTemplate() {
    return `
    <h5>${this.name}</h5>
    <p>Diameter: ${this.diameter}</p>
    <p>Climate: ${this.climate}</p>
    <p>Type of terrain: ${this.terrain}</p>
    <p class="mb-5">Population: ${this.population}</p>
    `
  }
}
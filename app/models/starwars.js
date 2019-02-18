export default class Planet {
  constructor(data) {
    this.name = data.name
    this.diameter = data.diameter
    this.climate = data.climate
    this.terrain = data.terrain
    this.population = data.population
  }

  planetTemplate() {
    return `
    <p>${this.name}</p>
    <p>${this.diameter}</p>
    <p>${this.climate}</p>
    <p>${this.terrain}</p>
    <p>${this.population}</p>
    `
  }


}
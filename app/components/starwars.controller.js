import StarWarsService from "./starwars.service.js";

let _swService = new StarWarsService

function drawPlanets() {
  let planet = _swService.Planets
  let template = ''
  planet.forEach(p => {
    template += p.planetTemplate()
  })
  document.querySelector('#insert-planets').innerHTML = template
}


//Public/////////////////
export default class StarWarsController {
  constructor() {
    _swService.addSubscriber('planets', drawPlanets)
    _swService.getAllPlanetsApi()
    drawPlanets()
  }

  getPlanets() {
    _swService.getAllPlanetsApi
  }
}
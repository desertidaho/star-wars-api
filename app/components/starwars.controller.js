import StarWarsService from "./starwars.service.js";

let _swService = new StarWarsService

function drawPlanets() {
  //for planets
  let planet = _swService.Planets
  let template = ''
  planet.forEach(p => {
    template += p.planetTemplate()
  })
  document.querySelector('#insert-planets').innerHTML = template

  //for buttons
  document.querySelector('#planet-buttons').innerHTML = `
    <button ${_swService.Previous ? '' : 'disabled'} class="btn btn-light shadow my-3 mr-2" onclick="app.controllers.swController.getPlanets('${_swService.Previous}')">Previous</button>
    <button ${_swService.Next ? '' : 'disabled'} class="btn btn-light shadow my-3 mx-2" onclick="app.controllers.swController.getPlanets('${_swService.Next}')">Next</button>`
}

function drawVehicles() {
  //for planets
  let vehicle = _swService.Vehicles
  let template = ''
  vehicle.forEach(p => {
    template += p.vehicleTemplate()
  })
  document.querySelector('#insert-vehicles').innerHTML = template

  //for buttons
  document.querySelector('#vehicle-buttons').innerHTML = `
    <button ${_swService.PreviousVehicle ? '' : 'disabled'} class="btn btn-dark shadow my-3 mr-2" onclick="app.controllers.swController.getVehicles('${_swService.PreviousVehicle}')">Previous</button>
    <button ${_swService.NextVehicle ? '' : 'disabled'} class="btn btn-dark shadow my-3 mx-2" onclick="app.controllers.swController.getVehicles('${_swService.NextVehicle}')">Next</button>`
}


//Public/////////////////
export default class StarWarsController {
  constructor() {
    _swService.addSubscriber('planets', drawPlanets)
    _swService.getAllPlanetsApi()
    drawPlanets()

    _swService.addSubscriber('vehicles', drawVehicles)
    _swService.getAllVehiclesApi()
    drawVehicles()
  }

  getPlanets(url) {
    _swService.getAllPlanetsApi(url)
  }

  getVehicles(url) {
    _swService.getAllVehiclesApi(url)
  }

}
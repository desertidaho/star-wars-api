import Planet from "../models/planets.js"
import Vehicle from "../models/vehicles.js"

// @ts-ignore
let _planetApi = axios.create({
  baseURL: 'https://swapi.co/api/planets'
})

let _vehicleApi = axios.create({
  baseURL: 'https://swapi.co/api/vehicles'
})


let _state = {
  planets: [],
  nextPrevPlanet: {
    nextUrl: '',
    previousUrl: ''
  },
  vehicles: [],
  nextPrevVehicle: {
    nextUrl: '',
    previousUrl: ''
  }
}

let _subscribers = {
  planets: [],
  nextPrevPlanet: [],
  vehicles: [],
  nextPrevVehicle: []
}

function setState(prop, val) {
  _state[prop] = val
  _subscribers[prop].forEach(fn => fn())
}


//Public////////////////////
export default class StarWarsService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Planets() {
    return _state.planets.map(p => new Planet(p))
  }

  get Next() {
    return _state.nextPrevPlanet.nextUrl
  }

  get Previous() {
    return _state.nextPrevPlanet.previousUrl
  }

  getAllPlanetsApi(url = '') {
    _planetApi.get(url)
      .then(response => {
        let planet = response.data.results.map(d => new Planet(d))
        let urlData = {
          nextUrl: response.data.next,
          previousUrl: response.data.previous
        }
        setState('nextPrevPlanet', urlData)
        setState('planets', planet)
      })
      .catch(err => {
        console.error(err)
      })
  }

  get Vehicles() {
    return _state.vehicles.map(p => new Vehicle(p))
  }

  get NextVehicle() {
    return _state.nextPrevVehicle.nextUrl
  }

  get PreviousVehicle() {
    return _state.nextPrevVehicle.previousUrl
  }

  getAllVehiclesApi(url = '') {
    _vehicleApi.get(url)
      .then(response => {
        let vehicle = response.data.results.map(d => new Vehicle(d))
        let urlData = {
          nextUrl: response.data.next,
          previousUrl: response.data.previous
        }
        setState('nextPrevVehicle', urlData)
        setState('vehicles', vehicle)
      })
      .catch(err => {
        console.error(err)
      })
  }


}
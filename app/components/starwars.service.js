import Planet from "../models/starwars.js"

// @ts-ignore
let _planetApi = axios.create({
  baseURL: 'https://swapi.co/api/planets'
})

let _state = {
  planets: []
}

let _subscribers = {
  planets: []
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

  getAllPlanetsApi() {
    _planetApi.get()
      .then(response => {
        let planet = response.data.results.map(d => new Planet(d))
        setState('planets', planet)
      })
      .catch(err => {
        console.error(err)
      })
  }

  getOnePlanetApi(name) {
    _planetApi.get(name)
      .then(response => {
        setState('activePlanet', new Planet(response.data))
      })
      .catch(err => {
        console.error(err)
      })
  }

}
import StarWarsController from "./components/starwars.controller.js";

class App {
  constructor() {
    this.controllers = {
      swController: new StarWarsController()
    }
  }
}

window['app'] = new App()
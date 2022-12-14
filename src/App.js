const BaseballGame = require("./BaseballGame")

class App {
  play() {
    new BaseballGame().startGame()
  }
}

// const app = new App()
// app.play()

module.exports = App;
const BaseballGame = require("./BaseballGame")

class App {
  play() {
    new BaseballGame().startGame()
  }
}

module.exports = App;
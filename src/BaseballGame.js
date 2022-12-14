const OutputView = require("./OutputView");
const RandomNumbers = require("./RandomNumbers");

class BaseballGame {
  #computer;
  #user;

  constructor() {
    this.#computer;
    this.#user;
  }

  startGame() {
    OutputView.printStart();
    this.getComputerNumbers();
  }

  getComputerNumbers() {
    this.#computer = RandomNumbers.generate()
    console.log(this.#computer)
  }
}

module.exports = BaseballGame;

const InputCheck = require("./InputCheck");
const InputView = require("./inputView");
const OutputView = require("./OutputView");
const RandomNumbers = require("./RandomNumbers");
const CompareNumbers = require("./CompareNumbers");

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
    this.#computer = RandomNumbers.generate();
    this.getUserNumbers();
  }

  getUserNumbers() {
    InputView.getNumbers(this.handleUserNumbers);
  }

  handleUserNumbers = (numbers) => {
    InputCheck.isValidInput(numbers);
    this.#user = numbers.split("").map((number) => {
      return parseInt(number, 10);
    });

    this.compare();
  };

  compare() {
    const result = new CompareNumbers().compare(this.#computer, this.#user);
    console.log(result.ball, result.strike);
  }
}

module.exports = BaseballGame;

const { Console } = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView");

class BaseballGame {
  #computer;
  #user;

  constructor() {
    this.#computer;
    this.#user;
  }

  startGame() {
    OutputView.printStart();
  }
}

module.exports = BaseballGame;

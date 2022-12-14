const InputCheck = {
  isValidInput(userNumbers) {
    this.checkLength(userNumbers);
    this.checkNumber(userNumbers);
    this.checkDuplication(userNumbers);
  },

  checkLength(userNumbers) {
    if (userNumbers.length !== 3) {
      throw new Error("3자리의 수를 입력해주세요.");
    }
  },
  checkNumber(userNumbers) {
    if (isNaN(userNumbers)) {
      throw new Error("숫자만 입력해주세요.");
    }
  },
  checkDuplication(userNumbers) {
    const deletedDuplication = new Set(userNumbers);
    if (deletedDuplication.size !== 3) {
      throw new Error("서로 다른 3자리 수를 입력해주세요.");
    }
  },
};

module.exports = InputCheck;

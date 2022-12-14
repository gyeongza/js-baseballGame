const OptionCheck = {
  isValidInput(option) {
    if (option !== '1' && option !== '2') {
      throw new Error("1 혹은 2입력");
    }
  },
};

module.exports = OptionCheck;

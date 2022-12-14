const { Random } = require("@woowacourse/mission-utils");

const RandomNumbers = {
  RANDOM_START_INCLUSIVE: 1,
  RANDOM_END_INCLUSIVE: 10,
  RANDOM_COUNT_INCLUSIVE: 3,
  generate() {
    return Random.pickUniqueNumbersInRange(
      RandomNumbers.RANDOM_START_INCLUSIVE,
      RandomNumbers.RANDOM_END_INCLUSIVE,
      RandomNumbers.RANDOM_COUNT_INCLUSIVE
    );
  },
};

module.exports = RandomNumbers;

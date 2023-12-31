const aocLoader = require("aoc-loader");
require("dotenv").config();

const TEST_DAY = process.argv[2];

if (!TEST_DAY) {
  throw new Error(
    "Please supply a day to test using the format `npm start {day}`"
  );
}

const day = require("./src/aoc_2017-" + TEST_DAY);

aocLoader(2017, TEST_DAY, process.env.AOC_SESSION).then((data) => {
  console.log(`Part 1: ${day.part1(data)}\n`);
  console.log(`Part 2: ${day.part2(data)}\n`);
});

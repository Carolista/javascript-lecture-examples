import calculateTotal from "./calc.js";
import { getRandomIndex, getTitleCase } from "./utils.js";

let testNums = [12, 6, 24, 7, 40, 28, 9, 17, 94, 82, 11, 3];

console.log(calculateTotal(testNums));

let randIndex = getRandomIndex(testNums.length);
console.log(`The random number is ${testNums[randIndex]}.`);

console.log(getTitleCase("pRidE & prEjuDiCE"));

// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 18: CLASSES

/* 
	This is the SOLUTION CODE. Switch back to the main branch to use the starter code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/


// Import Fruit class here for use below
const Fruit = require('./classes/Fruit');


/* The Fruit Class */

// Create a Fuji apple, Granny Smith apple, and navel orange
let fuji = new Fruit("Fuji apple", "red");
let grannySmith = new Fruit("Granny Smith apple", "green");
let navel = new Fruit("navel orange", "orange", true);

// Print the three new objects
console.log(fuji);
console.log(grannySmith);
console.log(navel);

// Print the color of the fuji apple
console.log(fuji.color);

// Describe the navel orange
console.log(navel.describe());

// Cut both apples into different numbers of pieces
fuji.cut(4);
grannySmith.cut(8);

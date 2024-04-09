// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 13: MODULES

/* 
	This is the SOLUTION CODE. Switch back to the main branch to use the starter code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/

// NOTE: Import statements usually go together at the top but I will add them gradually below
const input = require('readline-sync');


/** EXPORT/IMPORT A SINGLE ITEM **/

// Import the function from contact.js that prints ACME's information, but give it a different name
const printACMEInfo = require('./common/contact.js');

// Call the function
printACMEInfo();


/** EXPORT/IMPORT MULTIPLE ITEMS **/

// Import from utils.js using an alias for the exports object
const utils = require('./common/utils.js');

let longDecNum = 43.624571248419348;

// Use the rounding function in utils to print the rounded number to 3 decimal places
console.log(utils.roundToDec(longDecNum, 3));

// Print a random integer between 0 and 100
console.log(utils.getRandNum(100));

// Ask a user for a book title, then print it in title case using the third function from utils.js
let fullName = input.question('What is one of your favorite books? ');
console.log(utils.getTitleCase(fullName));

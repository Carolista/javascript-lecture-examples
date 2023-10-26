// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 4: DATA & VARIABLES

/* 
	This is the SOLUTION CODE. Switch back to the main branch to use the starter code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/


/** DATA TYPES **/

/* THE STRING */

// Remember that quotes within a quote require using single quotes
let emptyString = ""; // no characters
let space = " "; // space only
let zeeOrZed = "z"; // single letter
let farmBoy = "Westley"; // single word
let manInBlack = "Dread Pirate Roberts"; // multiple words
let memorableQuote = 'Inigo said, "Hello. My name is Inigo Montoya. You killed my father. Prepare to die."'; // quotes inside quotes
let rottenTomatoesScore = "97"; // numbers, but as a string


/* THE NUMBER */

let numberOfOutlaws = 3; // integer
let mostlyDead = 0.985; // decimal
let energyLevelAfterRevival = -86; // negative


/** PRINTING TO THE CONSOLE **/

console.log("iocane powder");
console.log(123.456789);


/* FORMATTING */

console.log('\nFezzik & Inigo: \n\t"That Vizzini, he can fuss." \n\t"I think he like to scream at us." \n\t"Probably he means no harm." \n\t"He\'s really very short on charm." \n');


/** DETECTING TYPES & CONVERTING DATA **/

/* DETECTING TYPES */

console.log(typeof "R.O.U.S.");

console.log(typeof -1);


/* CONVERTING DATA */

console.log(String(4));
console.log(typeof String(4));

console.log(Number("10000"));
console.log(typeof Number("10000"));

console.log(Number("Humperdinck"));
console.log(typeof Number("Humperdinck")); // turns out NaN has a type!


/** THE VARIABLE **/

let vizziniPhrase = "Inconceivable!";
console.log(vizziniPhrase);

let numberOfTimesSpoken = 3;
console.log(numberOfTimesSpoken);

numberOfTimesSpoken = 5;
console.log(numberOfTimesSpoken);

let inigoResponse;
console.log(inigoResponse);

inigoResponse = "You keep using that word. I do not think it means what you think it means.";
console.log(inigoResponse);


/** THE CONSTANT **/

const MOVIE_TITLE = "The Princess Bride";

// MOVIE_TITLE = "Some Other Title";
// Comment out the line so we won't keep seeing the error


/** WHAT'S IN A NAME? **/

// These are not great choices for variable names. 
let book = 'The Princess Bride: S. Morgenstern\'s Classic Tale of True Love and High Adventure, The "Good Parts" Version';
let name = "William Goldman";
let type = "Adventure";
let kind = "hardcover";
let books = 10;

let bookTitle = 'The Princess Bride: S. Morgenstern\'s Classic Tale of True Love and High Adventure, The "Good Parts" Version';
let bookAuthor = "William Goldman";
let bookGenre = "Adventure";
let bookFormat = "hardcover";
let numCopiesAvailable = 10;


/** EVALUATING EXPRESSIONS WITH OPERATORS **/

/* Arithmetic */

let a = 7;
let b = 2;

console.log(a - b);

let m = 7

let mToTheFourthPower = m**4
console.log(mToTheFourthPower);


/* INCREMENT & DECREMENT */

// Incrementing
let x = 5;

console.log(x++); // returns existing value, then increments
console.log(x); // new value
console.log(++x); // increments, then returns new value

x++;
console.log(x);

// Decrementing
let y = 19;

console.log(y--); // returns existing value, then decrements
console.log(y); // new value
console.log(--y); // decrements, then returns new value

y--;
console.log(y);


/* MODULO */

// 7 * 14 = 98, so we expect the value to be 2
console.log(100 % 7);

// 2 * 3 = 6, so we expect the value to be 0
console.log(6 % 2);


/* ORDER OF OPERATIONS */

console.log(8 * (2 + 2 ** 2) - 36 / (14 - 2 ** 3));


/* STRING BUILDING */

let titleAfterMawage = "Princess";
let originalName = "Buttercup";

console.log(titleAfterMawage + " " + originalName);

let numberOfShips = 4;
console.log("You write " + numberOfShips + " copies of a letter. I'll send my " + numberOfShips + " fastest ships, one in each direction."); 


/* COMPOUND ASSIGNMENT */

let numberOfBoos = 3;

numberOfBoos += 5;
console.log(numberOfBoos);


/** GETTING USER INPUT **/

// TIP: During development, you play the role of user so you can test your own code

// Normally this would go at the top of the file
const input = require('readline-sync');

console.log("\nWelcome to the Princess Bride Fan Club!");

let favoriteCharacter = input.question("\nWho is your favorite character?\n\t");

console.log("\n" + favoriteCharacter + "? That's my favorite character too!");

let sixFingeredMan = input.question("\nPop quiz! Who is the Six-fingered Man?\n\t");

// console.log("\nThat's correct! " + sixFingeredMan + " was the man Inigo was looking for to avenge his father's death.");

// BONUS: After doing your prep work for chapter 5, add logic to the final response to the user so that they see something different if their answer was incorrect
if (sixFingeredMan === "Count Rugen") {
	console.log("\nThat's correct! " + sixFingeredMan + " was the man Inigo was looking for to avenge his father's death.");
} else {
	console.log("\nSorry, " + sixFingeredMan + " is incorrect! Count Rugen was the man Inigo was looking for to avenge his father's death.");
}

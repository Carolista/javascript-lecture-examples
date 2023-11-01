// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 9: LOOPS

/* 
	This is the SOLUTION CODE. Switch back to the main branch to use the starter code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/

/** FOR LOOPS **/

/* Incrementing the Iterator */
console.log("\nIncrementing the Iterator");

// Set up a loop that prints the numbers 5-10, one at a time
for (let i = 5; i <= 10; i++) {
	console.log(i);
}

// Do the same but start with i = 0
for (let i = 0; i <= 5; i++) {
	console.log(i + 5);
}


/* Iterating over Characters of a String */
console.log("\nIterating over Characters of a String");

// Print each character one at a time
let obiWanGreeting = "Hello there";
for (let i = 0; i < obiWanGreeting.length; i++) {
	console.log(obiWanGreeting[i]);
}


/* Iterating over Elements of an Array */
console.log("\nIterating over Elements of an Array");

// Iterate over the array in reverse and print each element
let ackbarQuote = ["trap!", "a", "It's"];
for (let i = ackbarQuote.length - 1; i >= 0; i--) {
	console.log(ackbarQuote[i]);
}



/* Increments Other than 1 */
console.log("\nIncrements Other than 1");

// Print every other word using an increment of 2. Start with index 0, then run it again starting with 1.
let quote = ["I'd", "I", "just", "have", "as", "a", "soon", "bad", "kiss", "feeling", "a", "about", "wookie", "this"];

for (let i = 1; i < quote.length; i += 2) {
	console.log(quote[i]);
}


/* Using Conditionals within Loops */
console.log("\nUsing Conditionals within Loops");

// Find the ewoks, and print something when they're found
let endorForest = "eowkewokeowekwokewokeowkeowekowewokokeowkeowkewokowk";
for (let i=0; i < endorForest.length - 3; i++) {
	if (endorForest.slice(i, i + 4) === "ewok") {
		console.log(`I found an ewok at index ${i}!`);
	}
}


/* The Accumulator Pattern */
console.log("\nThe Accumulator Pattern");

// Count up the moons. If something is not a moon, say so! Finally, print the total in a sentence.
let moons = ["moon", "moon", "Death Star", "moon"];
let numMoons = 0; // base value
for (let i=0; i < moons.length; i++) {
	if (moons[i] === "moon") {
		// console.log("I found a moon!");
		numMoons += 1; // or numMoons++;
	} else {
		console.log("That's no moon!");
	}
}
console.log(`There are a total of ${numMoons} moons.`);


/* String Building */
console.log("\nString Building");

// A stormtrooper is chasing you and firing his E-11 Blaster Rifle, which of course is not hitting you AT ALL, but it makes a cool sound. Build the string "pew pew pew" one "pew" at a time
let threePews = "";
for (let i = 1; i <= 3; i++) {
	threePews += "pew";
	if (i < 3) {
		threePews += " ";
	}
	console.log(threePews);
}


/* Filtering an Array */
console.log("\nFiltering an Array");

// Create a new array that has only words beginning with "A" from the original array, then print it
let names = ["Aldaraan", "Calrissian", "Andor", "Armorer", "Ahsoka", "Greedo", "Ackbar", "Sateen", "Amadala"];

let onlyANames = [];
for (let i=0; i < names.length; i++) {
	if (names[i][0] === "A") {
		onlyANames.push(names[i]);
	}
}
console.log(onlyANames);


/** WHILE LOOPS **/
console.log("\nWhile Loops");

// Han is keeping track of the distance while making the Kessel Run... he's about halfway through... let's help him count down!
let totalDistance = 12;
let currDistance = 6;
while (currDistance < totalDistance) {
	console.log(`Still speeding dangerously close to the black hole cluster! — ${totalDistance - currDistance} parsecs to go...`);
	currDistance++;
}
console.log("We did it!");





/* Searching for Something */
console.log("\nSearching for Something");

// Help Mando with his new bounty
let bounties = ["smuggler", "thief", "child", "thief", "smuggler", "murderer", "thief"];
let i=0;
let hasFoundTheChild = false;

// Stop loop when the child is found or if the iteration through the array is done and the child has not been found
while (!hasFoundTheChild && i < bounties.length) {
	console.log(`Searching at index ${i}...`);
	if (bounties[i] === "child") {
		console.log("I found the child!");
		hasFoundTheChild = true;
	} 
	i++;
}


/* User Input Validation */
console.log("\nUser Input Validation");

const input = require('readline-sync');

// Luke, Han, and Chewbacca are trying to rescue Leia, who is being held in cell #2187. Ask them for the cell block and if they are within the 2100-2200 blocks, tell them they're on the right track! Otherwise tell them to keep searching.
let blockNum = input.question("What cell block are you at now? ");
while (blockNum < 2100 || blockNum > 2200) {
	blockNum = input.question("Nope! Keep searching! ");
}
console.log("You're really close! Now find cell 2187!");


/** Nested Loops **/
console.log("\nNested Loops");

// Make sure Princess Leia gets the Death Star plans, if you can find her!
let characters = [
	["Cassian Andor", "Jyn Erso", "K-2SO"],
	["Chirrut Imwe", "Baze Malbus"],
	["Bail Organa", "Princess Leia", "Mon Mothma", "Admiral Raddus"],
	["Wedge Antilles", "Red Leader", "Gold Leader"],
];
let leiaFound = false;

for (let i=0; i < characters.length; i++) {
	console.log(`\nSelecting the group at index ${i}:`);
	for (let j=0; j < characters[i].length; j++) {
		console.log(`\n  Checking the character at index ${j}...`)
		if (characters[i][j] === "Princess Leia") {
			console.log("\nFOUND HER! She has the plans!!!\n");
			leiaFound = true;
			break;
		} else {
			console.log(`  Nope, that was ${characters[i][j]}`)
		}
	}
	if (leiaFound) {
		break;
	}
}

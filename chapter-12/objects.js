// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 12: OBJECTS

/* 
	This is the SOLUTION CODE. Switch back to the main branch to use the starter code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/

/** THE JAVASCRIPT OBJECT **/

/* A Data Structure */

// Create an object to represent the pirate flag. Give it a name, color, and description of the image.
let jollyRoger = {
	name: "Jolly Roger",
	color: "black",
	image: "white skull & crossbones"
}

// Print the object to see its keys and values
console.log(jollyRoger);


/** ACCESSING OBJECT PROPERTIES */

/* Using a Key to Access a Value */

// Print the name using bracket notation
console.log(jollyRoger["name"]);

// Print the color using dot notation
console.log(jollyRoger.color);

// Print a template literal that describes the flag using all three properties — use a mix of bracket notation and dot notation
console.log(`The ${jollyRoger.name} is a ${jollyRoger["color"]} flag with the image of a ${jollyRoger["image"]}.`)


/** MODIFYING OBJECTS **/

/* Reassigning a Value to an Existing Key */

let blackPearl = {
	name: "Black Pearl",
	captain: "Jack Sparrow",
	crew: "pirates"
};

// Update the data when Barbossa and the crew mutiny and steal the gold

// Change the captain using dot notation
blackPearl.captain = "Hector Barbossa";

// Replace the crew using bracket notation
blackPearl["crew"] = "undead pirates";

// Print the object to see the updated value
console.log(blackPearl);


/* Adding a New Key-Value Pair to an Object */

let interceptor = {
	name: "Interceptor",
};

// After Jack and Will steal the ship from the Royal Navy and sail to Tortuga, the Interceptor has a new captain and crew.

// Use dot notation to add the new captain
interceptor.captain = "Jack Sparrow";

// Use bracket notation to add a description of the new crew
interceptor["crew"] = "a ragtag group of sailors";

// Print the object to see the new properties
console.log(interceptor);


/** OBJECT METHODS **/

/* Referencing an Existing Function */

function setSail() {
	console.log("Weigh anchor! Hoist the sails! Split-quick, you dibbies!");
}

// Add a property "sail" to the Interceptor, and assign the setSail function as a method 
interceptor.sail = setSail;

// Print the ship object to show the new property
console.log(interceptor);

// Call the method on one of the ships
// NOTE: You MUST use DOT notation for calling methods
interceptor.sail();

// What happens if you use the original function name instead of the key?
// interceptor.setSail();


/* Defining an Anonymous Function */

let phrases = [
	"Wind in yer sails",
	"Dead men tell no tales",
	"Shiver me timbers",
	"Walk the plank",
	"Uh-oh. Fire in the hole!",
	"Any port in a storm"
];

// Create an object for Cotton's parrot with its owner's name, species and a method called "speak" which will print a random phrase from the array above
let parrot = {
	owner: "Cotton",
	species: "blue and gold macaw",
	speak: function () {
		let index = Math.floor(phrases.length * Math.random());
		console.log(phrases[index]);
	}
}

// Call the speak method three times
parrot.speak();
parrot.speak();
parrot.speak();


/* The this Keyword */

// Add a property called "describe" to the Black Pearl object and define an anonymous function that prints a description of the ship with its name, crew, and captain
blackPearl.describe = function () {
	console.log(`The ${this.name} is crewed by ${this.crew} under Captain ${this.captain}.`);
}

// Print the object to see the new method
console.log(blackPearl);

// Call the method
blackPearl.describe();


/** ITERATING THROUGH OBJECT KEYS **/

/* The for...in Loop */

let elizabeth = {
	firstName: "Elizabeth",
	lastName: "Swann",
	jewelry: "gold medallion",
	likes: ["Will Turner", "breathing"],
	dislikes: ["Captain Barbossa", "corsets"]
}

// Use a for...in loop to print the keys and values together in a template literal
// NOTE: you MUST use bracket notation when the key is a variable
for (let key in elizabeth) {
	console.log(`Key: ${key}, Value: ${elizabeth[key]}`);
}


/** OBJECTS STORING OTHER DATA STRUCTURES **/

/* Objects Storing Arrays */

// Print each of Elizabeth's likes and dislikes
// Assume the two arrays have the same length
for (let i = 0; i < elizabeth.likes.length; i++) {
	let currentLike = elizabeth.likes[i];
	let currentDislike = elizabeth.dislikes[i];
	console.log(`Elizabeth likes ${currentLike} but she dislikes ${currentDislike}`);
}


/* Objects Storing Objects */

let barbossa = {
	name: "Hector Barbossa",
	ship: "The Black Pearl",
	pet: {
		name: "Jack",
		species: "capuchin monkey"
	}
}

// Print the monkey's name
console.log(barbossa.pet.name);

// Loop through Barbossa's pet's keys and print both values
for (let key in barbossa.pet) {
	console.log(barbossa.pet[key]);
}


/** WORKING WITH AN ARRAY OF OBJECTS **/

let gibbs = {
	name: "Joshamee Gibbs",
	position: "first mate"
}
let anamaria = {
	name: "Anamaria",
	position: "sailor"
}
let cotton = {
	name: "Cotton",
	position: "sailor"
}
let ragetti = {
	name: "Ragetti",
	position: "sailor"
}

// Store all four crew members in an array
let motleyCrew = [gibbs, anamaria, cotton, ragetti];

// Print the new array
console.log(motleyCrew);

// Print the names and positions of all members in motleyCrew

for (let i = 0; i < motleyCrew.length; i++) {
	console.log(`${motleyCrew[i].name} is a ${motleyCrew[i].position}.`)
} 


/** Random Selection **/

// TODO: Write a function that will choose a random number
function getRandomIdx(arr) {
  return Math.floor(arr.length * Math.random());
}

// TODO: Write a function that will return a random member of the motleyCrew for swabbing the deck
function getRandomDeckSwabber(arr) {
  let randIdx = getRandomIdx(arr);
  return arr[randIdx];
}

console.log(getRandomDeckSwabber(motleyCrew));

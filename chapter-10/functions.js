// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 10: FUNCTIONS

/* 
	This is the SOLUTION CODE. Switch back to the main branch to use the starter code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/

const input = require('readline-sync');


console.log(sayHello("Link"));

// Notice the functions can be defined below but still used above
function sayHello(firstName) {
  console.log(`Hello, ${firstName}!`);
}

// Write a function that returns a string that will describe one or more enemies
// Allow for a specific action verb
function describeEnemies(enemyType, numEnemies, actionVerb) {
  if (numEnemies > 1) {
    enemyType = "group of " + enemyType + "s";
  } 
  return `A ${enemyType} ${linkingVerb} ${actionVerb} nearby.`;
}

// Call describeEnemies with real values (arguments) and print the return value
console.log(describeEnemies("tektite", 3, "hopping around"));
console.log(describeEnemies("moblin", 1, "snarling menacingly"));

// Store a description in a variable and then print it
let octorokDescription = describeEnemies("octorok", 4, "spitting rocks");
console.log(octorokDescription);


let inventory = [];

// Write a function that adds an item to Link's inventory and announces it
function addItemToInventory(item) {
	inventory.push(item);
	console.log(`Link now has a ${item}!`);
}

// Add a sword and a shield to inventory, then print the inventory array
addItemToInventory("sword");
addItemToInventory("shield");
console.log(inventory);


// Get the player name from the user in the console
let player = input.question("Please enter your name: ");

function greetPlayer(message) {
  let greeting = `${message}, ${player}!`;
  console.log(greeting); // just print, no return value
}

greetPlayer("Good morning");

console.log(player); // OK - name is in scope

// These are out of scope and will cause a ReferenceError
// console.log(message);
// console.log(greeting);

let name = "Zelda";

function announceCharacter(name) {
	console.log(`You meet ${name} as you walk through the door.`);
}

announceCharacter("Ganon");
console.log(name);

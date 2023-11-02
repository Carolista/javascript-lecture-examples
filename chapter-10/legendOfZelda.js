/** IMPORTS **/

const input = require('readline-sync');


/** DATA **/

// Link's stats 
let maxHearts = 3;
let currHearts = 3;
let inventory = [];
let rupees = 0;

// Conversations with NPCs
let swordMsg = `"It's dangerous to go alone! Take this."`;
let shopMsg = `"Buy somethin' will ya!"
    Magic Shield - 160
    Key - 100
    Blue Candle - 60
`;


/** MINOR FUNCTION DEFINITIONS **/

// Define a function to print a description of Hyrule. It does not need any input and will not return a value.
function describeHyrule() {
	console.log(`It's 1986, and the kingdom of Hyrule is in chaos. The evil prince of darkness, Ganon, has stolen the Triforce of Power and is holding Princess Zelda captive in Death Mountain.

Link, you must gather the 8 pieces of the Triforce of Wisdom, defeat Ganon, and rescue the Princess! Only then can order be restored to Hyrule.
`);
}

// Define a function that takes two parameters, char and message, and returns a string with the character saying the message to Link when he enters an occupied cave or secret room.
function getCharResponse(char, msg) {
  let line = "--------------------------------------------------------------------------------";
	return `
${line}
Link sees ${char} standing before him, saying, ${msg}
${line}
`;
}

// Define a function that adds an item to inventory and also prints a string that announces it.
function addItemToInventory(item) {
	inventory.push(item);
	console.log(`Link now has a ${item}!`);
}

// Define a function called dodgeEnemy() that takes two parameters, enemyType and numEnemies, which will determine if Link loses any hearts while trying to avoid them
function dodgeEnemy(enemyType, numEnemies) {
	while (numEnemies > 0) {
		if (Math.random() < 0.2) {
			currHearts -= 0.5;
			console.log(`That's a hit! Link loses 1/2 heart and now has ${currHearts} hearts remaining.`);
		} else {
			console.log(`Phew! The ${enemyType} missed.`)
		}
		numEnemies--;
	}
}

// Define a function to give Link a chance at a reward when he defeats an enemy
function getReward() {
	let chance = Math.random();
	if (chance > 0.8) {
		currHearts++;
		if (currHearts > maxHearts) {
			currHearts = maxHearts;
		}
		console.log(`Link found a heart! He now has ${currHearts} hearts.`);
	} else if (chance > 0.4) {
		rupees++;
		console.log(`Link found a rupee! He now has ${rupees} rupees.`);
	} 
}

// Define a function called fightEnemy() that takes two parameters, type and num, which will loop through a fight sequence and also include dodging enemies between Link's own attacks. 
// Upon each defeat of an enemy, Link should get a chance at a reward.
// If Link does not have a sword in inventory, he should simply dodge the enemies to get away.
function fightEnemy(enemyType, numEnemies) {
	if (!inventory.includes("sword")) {
		console.log("Link cannot attack without a sword.");
		dodgeEnemy(enemyType, numEnemies);
		return;
	}
	while (numEnemies > 0) {
		console.log(`Link attacks! That's one ${enemyType} down.`);
		numEnemies--;
		getReward();
		dodgeEnemy(enemyType, numEnemies);
	}
}

// Reduce repetition in two places below by creating a new function that handles the decision of whether to fight or not. Consider what parameters it will need.
function fightOrDodge(enemyType, numEnemies) {
	let response = input.question("Will Link fight? Y or N\n");
	if (response.toUpperCase() === "Y") {
		fightEnemy(enemyType, numEnemies);
	} else {
		dodgeEnemy(enemyType, numEnemies);
	}
}

// Reduce repetition in two other places below by creating a new function that handles the decision to enter a cave or not. Consider what parameters it will require and which might be optional.
function enterCaveOrSkip(char, msg, newItem = '') {
	let response = input.question("Would you like Link to enter? Y or N\n");
	if (response.toUpperCase() === "Y") {
		console.log(getCharResponse(char, msg));
		if (newItem) {
			addItemToInventory(newItem);	
		}
	}
}


/** MAIN FUNCTION **/

function runProgram() {

  // Prints an opening description of Hyrule
  describeHyrule();
  
  console.log("\nLink sees a cave opening in front of him.\n");
  
  // Ask the user whether they'd like to enter the cave. If so, listen to the old man's response and then put his gift into inventory
  enterCaveOrSkip("an old man", swordMsg, "sword");
  
  console.log("\nLink walks west and sees four tektites hopping around.\n");
  
  // Ask the user if they want Link to fight the tektites.
  fightOrDodge("tektite", 4);
  
  console.log("\nLink heads north and sees another cave opening. But four octoroks are coming at him quickly!\n");
  
  // Ask the user if they want to fight the octoroks. 
  fightOrDodge("octorok", 4);
  
  console.log("\nLink considers heading into the cave.\n");
  
  // Ask the user if Link should go in the 2nd cave
  enterCaveOrSkip("the shop owner", shopMsg);
  
  console.log(`Link doesn't have enough money to do any shopping yet, unfortunately. Better get back to slaying octoroks, tektites, and moblins!`);

}


/** EXECUTE PROGRAM **/

runProgram();

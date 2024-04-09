/*
	Write an simple interactive program below that accepts user input and uses your translateAll() function to return the Morse code transation. Set up the program to loop and keep asking the user for another phrase until they end it.
*/

// Import readline-sync and translateAll
const input = require("readline-sync");
const funcs = require("./funcs");

function runProgram() {

	// Write intro text
	console.log("\nEnter text to translate to Morse Code, or enter 'QUIT' when you're done.");

	// Continue asking for text to translate until user wants to end the program
	while (true) {
		let phrase = input.question("\nEnter text to translate into Morse Code:\n");
		if (phrase.toUpperCase() === "QUIT") {
			console.log("\nThanks for trying out the translator! Goodbye.\n");
			break;
		} else {
			console.log(funcs.translateAll(phrase));
		}
	}

}

// Ready to go!
runProgram();
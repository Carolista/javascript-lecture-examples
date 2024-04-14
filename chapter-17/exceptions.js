// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 17: EXCEPTIONS

/* 
	This is the SOLUTION CODE. Switch back to the main branch to use the starter code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/

/* Throwing an Exception */

function getPrize(kid, prize) {
	console.log(`\nSomewhere nearby, you could swear you hear several tiny voices say, "It's the claaaawwwww! You have been chosen!"`);
	// Throw an exception if Sid tries to get Buzz out of the machine
	if (kid === "Sid" && prize === "Buzz Lightyear") {
		throw new Error(`Hey! That ${prize} isn't supposed to be in there!`);
	}
	console.log(`\nCongrats, ${kid}! you got the ${prize} toy!`);
}

// Have Andy try for a three-eyed alien
getPrize("Andy", "three-eyed alien");

// Have Sid try for Buzz Lightyear
// getPrize("Sid", "Buzz Lightyear");


/* Try, Catch, Finally */

// Use a try/catch/finally series in the function below to prevent your program from crashing
function executeReconPlanCharlie(action) {
	let actions = {
		mobilize: "\nAlright men, listen up! We've got a Code Red!",
		recon: "\nTime to scope out the birthday presents!",
		help: "\nA good soldier never leaves a man behind.",
		affirm: "\nMission accomplished! Well done, men.",
		warn: "\nRed alert! Red alert! Andy is coming upstairs!"
	};
	
	try {
		// Move the reassignment and console.log below into the try block
		action = action.toLowerCase();
		if (actions.hasOwnProperty(action)) { // or, if (action in actions)
			console.log(actions[action]);
		} else {
			let customError = new Error(`\n${action} is not a valid action for the army men`);
			console.log("\n********************************************");
			console.log(customError.name);
			console.log(customError.message);
			console.log("********************************************\n");		
		}
	} catch (e) {
		// In the catch block, print the stacktrace using the provided error object, e
		console.log(e);
	} finally {
		// Put the final console.log inside a finally block
		console.log("*** RECON PLAN CHARLIE ***\n");	
	}
}

// Mobilize the men
executeReconPlanCharlie("Mobilize");

// Do some recon
executeReconPlanCharlie("recon");

// Warn the toys upstairs about the kids headed their way
executeReconPlanCharlie("WARN");

// Try to call the function with a string that is not a key in the actions object
executeReconPlanCharlie("run");

// Try to call the function without an action
executeReconPlanCharlie();

// That's it!
console.log("\nIf you're seeing this, you've handled your errors without crashing your program!");

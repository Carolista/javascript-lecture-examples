// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 5: CONDITIONALS

/* 
	This is the SOLUTION CODE. Switch back to the main branch to use the starter code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/


/** THE BOOLEAN DATA TYPE **/
console.log("\nThe Boolean Data Type");


// Initialize a few booleans, then print them
let hasFluxCapacitor = true;
let hasPowerSource = false;

console.log(hasFluxCapacitor);
console.log(hasPowerSource);


/** OTHER TYPES CONVERTED TO BOOLEAN **/
console.log("\nOther Types Converted to Booleans");

// Convert these strings and numbers to booleans and print the results
let scientist = "Doc Brown"; // truthy
let speechless = ""; // falsy
let jigawattsNeeded = 1.21; // truthy
let mphAtStart = 0; // falsy

console.log(Boolean(scientist));
console.log(Boolean(speechless));
console.log(Boolean(jigawattsNeeded));
console.log(Boolean(mphAtStart));


/* EVALUATING BOOLEAN EXPRESSIONS */
console.log("\nEvaluating Boolean Expressions");

// Write boolean expressions and print them to see its return value
console.log("Calvin" + "Klein" == "Calvin Klein");
console.log(true != 0);

// Check to see if the current speed is high enough for time travel, storing it in the fastEnough variable, then print it
let currentSpeed = 65;
let timeTravelSpeed = 88;

let fastEnough = currentSpeed >= timeTravelSpeed;
console.log(fastEnough);


/** LOOSE EQUALITY VS STRICT EQUALITY **/
console.log("\nLoose Equality vs Strict Equality");

// Compare "8.0" and 8 using both types of equality and print result
console.log("8.0" == 8);
console.log("8" === 8);

// Compare false and 0 using both types of inequality and print result
console.log(false != 0);
console.log(false !== 0);


/** LOGICAL OPERATORS **/
console.log("\nLogical Operators");

// Boolean expressions, stored in variables
let expression1 = "Great Scott!" === "Great Scott" + "!";
let expression2 = 1955 <= 1985;
let expression3 = 10.04 == "10:04";

// Use the logical AND operator to determine if all three expressions are true, and print the result
console.log(expression1 && expression2 && expression3);

// Use the logical OR operator to determine if either expression2 or expression3 is true, and print the result
console.log(expression2 || expression3);

// Use the logical NOT operator to print the opposite value of expression2
console.log(!expression2);

// Use parentheses to print the opposite of expression1 AND expression3
console.log(!(expression1 && expression3));


/** CONDITIONAL STATEMENTS **/
console.log("\nConditional Statements");

let hasPlutonium = false;

// Write an IF statement that prints a message if the DeLorean is fully equipped for time travel in 1985
// Add an ELSE statement that will print a different message if it's not ready

if (hasPlutonium) {
	console.log("\nThe flux capacitor is powered up and the DeLorean is ready to go!")
} else {
	console.log("\nThe DeLorean won't travel through time without fuel for the nuclear reactor!");
}

// Write a series of IF/ELSE statements to determine which year the DeLorean will travel to.

let cableElectrified = false;
let hasBananaPeels = true;

let destinationYear;

if (hasPlutonium) {
	destinationYear = 1955;
} else if (cableElectrified) {
	destinationYear = 1985;
} else if (hasBananaPeels) {
	destinationYear = 2015;
}

// If the destination year has been set, print a statement that includes it. Otherwise, print some other statement that says they're not going anywhere (anytime?). Hint: remember what we learned about what happens when conditions are not booleans;

if (destinationYear) {
	console.log("\nReady to go? You're headed to the year " + destinationYear + "!");
} else {
	console.log("\nNo destination date has been set. Do you have the materials you need to power the flux capacitor?");
}

// Use nested conditionals to print three different statements — one if the car is going 88 MPH, one if it's lower than 88 MPH, and one if the car didn't start in the first place

let carHasStarted = true;
let speed = 72;

if (carHasStarted) {
	if (speed === 88) {
		console.log("\nI'm going back to the future!");
	} else {
		console.log("\nI'm not going quite fast enough yet.");
	}
} else {
	console.log("\nGreat Scott! The starter has gone out again!");
}

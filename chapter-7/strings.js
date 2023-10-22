// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 7: STRINGS

/* 
	This is the SOLUTION CODE. Switch back to the main branch to use the starter code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/


/** STRINGS — BRACKET NOTATION & IMMUTABILITY **/

let theBoyWhoLived = " Hairy Plotter  "; // um... that's not quite right!

// TODO: Use bracket notation to print the first character of the first name.
console.log(theBoyWhoLived[1]);

// TODO: Use bracket notation to print the first character of the last name.
console.log(theBoyWhoLived[7]);

// TODO: Print the just the initials.
console.log(theBoyWhoLived[1] + theBoyWhoLived[7]);

// TODO: Try to fix the mistakes in the name by using bracket notation to assign new values to characters at specific indices, then print the whole name to see if it worked.
theBoyWhoLived[3] = "r";
theBoyWhoLived[8] = "";
console.log(theBoyWhoLived); // ope, nope
// Strings are immutable and CANNOT be changed this way.


/** THE LENGTH PROPERTY **/

let heWhoShallNotBeNamed = "Voldemort";

// TODO: Print the length of the string.
console.log(heWhoShallNotBeNamed.length);

// TODO: Use the length to store the index of the last character in a variable, then print it.
let lastIndex = heWhoShallNotBeNamed.length - 1;
console.log(lastIndex);

// TODO: Use bracket notation and the variable you created to print the last character of the string.
console.log(heWhoShallNotBeNamed[lastIndex]);


/** COMMON STRING METHODS **/

/* Changing Case */
let lightsOn = "Lumos";
let lightsOff = "Nox";

// TODO: Print lightsOn in all caps, then print the stored variable.
console.log(lightsOn.toUpperCase());
console.log(lightsOn);

// TODO: Print lightsOff in all lowercase, then print the stored variable.
console.log(lightsOff.toLowerCase());
console.log(lightsOff);


/* Trim & Replace */

// TODO: Remove the leading and trailing spaces from theBoyWhoLived and reassign the returned value to the original variable, then print it.
theBoyWhoLived = theBoyWhoLived.trim();
console.log(theBoyWhoLived);

// TODO: Change the errant i to an r in "Hairy", reassigning to the original variable, then print it.
theBoyWhoLived = theBoyWhoLived.replace("i", "r");
console.log(theBoyWhoLived);

// One more, just for fun
let wingardiumLeviosa = "Wingardium LevioSA";

// TODO: Correct the emphasis, per Miss Granger, and print it
wingardiumLeviosa = wingardiumLeviosa.replace("oSA", "Osa");
console.log(wingardiumLeviosa);


/* Finding Characters Within a String */

// TODO: Check to see if there is a t in theBoyWhoLived, and print the return value (boolean).
console.log(theBoyWhoLived.includes("t"));

// TODO: Get the index of the errant l in the last name and print it.
console.log(theBoyWhoLived.indexOf("l"));


/* Create a New String from a Substring */

// TODO: Use .slice() to build the correct string, omitting the l, and reassign it to the original variable. Print the final result.
theBoyWhoLived = theBoyWhoLived.slice(0, 7) + theBoyWhoLived.slice(8);
console.log(theBoyWhoLived);
// SUCCESS!


/** TEMPLATE LITERALS **/

let black = "Sirius Black";
let dumbledore = "Albus Dumbledore";
let hagrid = "Rubeus Hagrid";

let quote1 = "Yer a wizard, Harry!";
let quote2 = "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.";
let quote3 = "It is our choices, Harry, that show what we truly are, far more than our abilities.";

// TODO: Using template literals, combine each quote with the correct character so that they come out in the console formatted like this: 
// "I always wanted to use that spell." - Minerva McGonagall
console.log(`"${quote1}" - ${hagrid}`);
console.log(`"${quote2}" - ${black}`);
console.log(`"${quote3}" - ${dumbledore}`);


/* PUT IT ALL TOGETHER */

// TODO: Add the readline-sync library so you can accept user input.
const input = require('readline-sync');

// TODO: Ask the user for a first name
let firstName = input.question("\nPlease enter your first name:\n");

// The user may not give you their name formatted as you need it to be
// Examples: "DRACO" or "luna" or " neville "
// Your code needs to anticipate fixing any of these formatting issues
// Think it through — what order should you do the modifications in?
// NOTE: There is more than one way to do this!

// TODO: Modify the name to ensure the first letter is capitalized, the remaining letters are lowercase, and no extra spaces are before or after the name.

// SOLUTION #1 - Swap using .replace()
firstName = firstName.trim();
firstName = firstName.toLowerCase();
firstName = firstName.replace(firstName[0], firstName[0].toUpperCase());

// SOLUTION #2 - Concatenate using .slice()
firstName = firstName.trim();
firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();

// TODO: Use a template literal to print a greeting with the name
console.log(`Hello, ${firstName}!`);

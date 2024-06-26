// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 7: STRINGS


/** STRINGS — BRACKET NOTATION & IMMUTABILITY **/

let theLastTimeLord = " Tha Docktor  "; // um... that's not quite right!

// TODO: Use bracket notation to print the first character of the first word.


// TODO: Use bracket notation to print the first character of the last word.


// TODO: Try to fix the mistakes in the name by using bracket notation to assign new values to characters at specific indices, then print the whole name to see if it worked.



/** THE LENGTH PROPERTY **/

// TODO: Declare a variable


// TODO: Print the length of the string.


// TODO: Use the length to store the index of the last character in a variable, then print it.


// TODO: Use bracket notation and the variable you created to print the last character of the string.



/** COMMON STRING METHODS **/

/* Changing Case */
let getAMoveOn = "Allons-y!";
let timeDescription = "Wibbly-wobbly, Timey-wimey";

// TODO: Print getAMoveOn in all caps, then print the stored variable.


// TODO: Print timeDescription in all lowercase, then print the stored variable.



/* Trim & Replace */

// TODO: Remove the leading and trailing spaces from theLastTimeLord and reassign the returned value to the original variable, then print it.


// TODO: Change the errant a to an e in "Tha", reassigning to the original variable, then print it.



/* Finding Characters Within a String */

// TODO: Check to see if there is a t in theLastTimeLord, and print the return value (boolean).


// TODO: Get the index of the errant k in the name, store it in a variable, then print it.



/* Create a New String from a Substring */

// TODO: Use .slice() to build the correct string, omitting the k, and reassign it to the original variable. Print the final result.



/** TEMPLATE LITERALS **/

let rose = "Rose Tyler";
let martha = "Martha Jones";
let donna = "Donna Noble";

let quote1 = "Oi!";
let quote2 = "The first 19 years Of my life, nothing happened. Nothing at all. Not ever. And then I met a man called The Doctor.";
let quote3 = "All of space and time he promised me!";

// TODO: Using template literals, combine each quote with the correct character so that they come out in the console formatted like this: 
// "I am the Master and you will obey me." - The Master



/* PUT IT ALL TOGETHER */

// TODO: Add the readline-sync library so you can accept user input.


// TODO: Ask the user for a first name


// The user may not give you their name formatted as you need it to be
// Examples: "AMY" or "rory" or " sally "
// Your code needs to anticipate fixing any of these formatting issues
// Think it through — what order should you do the modifications in?
// NOTE: There is more than one way to do this!

// TODO: Modify the name to ensure the first letter is capitalized, the remaining letters are lowercase, and no extra spaces are before or after the name.


// TODO: Use a template literal to print a greeting with the name


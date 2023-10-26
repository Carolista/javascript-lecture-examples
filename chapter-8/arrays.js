// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 8: ARRAYS

/* 
	This is the SOLUTION CODE. Switch back to the main branch to use the starter code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/

/** CREATING ARRAYS & BRACKET NOTATION **/

let enemies = ["Daleks", "Cybermen", "Slitheen", "the ones in the library", "Weeping Angels"];

// TODO: Use bracket notation to print the second element of the array. Remember that arrays are zero-indexed!
console.log(enemies[1]);

// TODO: Unlike strings, arrays ARE mutable — use bracket notation to replace the fourth element with the correct name, then print the entire array.
enemies[3] = "Vashta Nerada";
console.log(enemies);

// TODO: Create an empty array, then use bracket notation to add the names of some of the Doctor's allies, then print the array.
let allies = [];
allies[0] = "";
allies[1] = "";
allies[2] = "";
allies[3] = "";
console.log(allies);

// TODO: Try printing an element at index 10. What happens?
console.log(allies[10]);


/** THE LENGTH PROPERTY **/

// TODO: Print the length of the array of hobbits.
console.log(allies.length);

// TODO: Use the length to calculate the index of the last element of the array of the houses of Hogwarts, and print that element.
console.log(enemies[enemies.length - 1])


/** COMMON ARRAY METHODS **/

/* Locate an Element within an Array */

let noblesOfRohan = [];

// TODO: Check to see if Aragorn is in the array of Rohan's nobles and print the result (true or false).
console.log(noblesOfRohan.includes(""));

// TODO: Find the index of Eomer in the array and print it
console.log(noblesOfRohan.indexOf(""));


/* Create by Concatenating Two Arrays */

let group1 = [];
let group2 = [];
let group3 = [];

// TODO: Combine the three arrays into a single array and print it.
let entireGroup = group1.concat(group2, group3);
console.log(entireGroup);


/* Create by Taking a Slice */

// TODO: Create a new array from just the middle half of the full list of professors, then print it.
let middleGroup = entireGroup.slice(2, 6);
console.log(middleGroup);


/* Create by Splitting a String */

let sentence = "JO BO KO RO NO SO"; // TEMP look up spelling

// TODO: Create a new array with each spell as a separate element, then print it
let wordArray = sentence.split(" ");
console.log(wordArray);


/* Joining an Array To Create a String */

// TODO: Print the spells as a string again, this time connected by something other than just a space
console.log(wordArray.join("! "));


/* Reverse */

// TODO: Reverse the array with all professors and print it
entireGroup.reverse();
console.log(entireGroup);


/* Sort */

// TODO: Sort the array alphabetically and print it.
entireGroup.sort();
console.log(entireGroup);


/* Add & Remove at End of Array */

// TODO: Remove the last element, then print the modified array.
entireGroup.pop();
console.log(entireGroup);

// TODO: Add a name to the end of the array, then print the modified array.
entireGroup.push("");
console.log(entireGroup);


/* Add & Remove at Beginning of Array */

// TODO: Remove the first element, then print the modified array.
entireGroup.shift();
console.log(entireGroup);

// TODO: Add a name to the beginning of the array, then print the modified array.
entireGroup.unshift("");
console.log(entireGroup);

/* Insert and/or Remove Anywhere in an Array */

// TODO: Remove ________ from the array, then print the modified array.
entireGroup.splice(3, 1);
console.log(entireGroup);

// TODO: Add another name between ____ and ____, then print the modified array.
entireGroup.splice(5, 0, "");
console.log(entireGroup);


/** METHOD CHAINING **/

let tardis = "tardis";

// TODO: In a single line of code, change "tardis" to "T.A.R.D.I.S", then print the reassigned variable.
// Steps, which may not be in the right order:
// split string into an array of characters
// make all characters uppercase
// join characters with periods
tardis = tardis.toUpperCase().split("").join(".");
console.log(tardis);

// TODO: Starting with the array of enemies, print a single string that lists the enemies in reverse alphabetical order, each separated by a comma and space.
// Steps, which must be done in a certain order:
// While it is an array, sort it, then reverse it
// Then join with the connector ", " to make it a string
console.log(enemies.sort().reverse().join(", "));


/** MULTIDIMENSIONAL ARRAYS **/

let tenthDoctorCompanions = ["Rose", "Martha", "Donna"];
let eleventhDoctorCompanions = ["Amy", "Rory"]; // TEMP who else?
let twelfthDoctorCompanions = ["Clara", "Bobbie", ""]; // TEMP check spelling
let thirteenthDoctorCompanions = ["", "", ""]; // TEMP look up names

// TODO: Put all four arrays inside a array of assorted students, then print it
let allCompanions = [
  tenthDoctorCompanions, 
  eleventhDoctorCompanions, 
  twelfthDoctorCompanions, 
  thirteenthDoctorCompanions
];
console.log(allCompanions);

// TODO: Print _____'s name using bracket notation with allCompanions
console.log(allCompanions[0][2]);

// TODO: Print _______'s name using bracket notation with allCompanions
console.log(allCompanions[2][0]);

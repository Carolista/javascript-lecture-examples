// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 8: ARRAYS

/* 
	This is the SOLUTION CODE. Switch back to the main branch to use the starter code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/

/** CREATING ARRAYS & BRACKET NOTATION **/

let enemies = ["Daleks", "Cybermen", "the ones in the library", "Weeping Angels"];

// TODO: Use bracket notation to print the second element of the array. Remember that arrays are zero-indexed!
console.log(enemies[1]);

// TODO: Unlike strings, arrays ARE mutable — use bracket notation to replace the third element with the correct name, then print the entire array.
enemies[2] = "Vashta Nerada";
console.log(enemies);

// TODO: Use bracket notation to add a new element to the array, the print the array. Calculate the next available index instead of hard-coding it
enemies[enemies.length] = "The Master";
console.log(enemies);

// TODO: Create an empty array, then use bracket notation to add the names of some of the Doctor's allies, then print the array.
let allies = [];
allies[0] = "Captain Jack Harkness";
allies[1] = "Harriet Jones";
allies[2] = "Kate Stewart";
allies[3] = "Queen Victoria";
console.log(allies);

// TODO: Try printing an element of allies at index 10. What happens?
console.log(allies[10]);


/** THE LENGTH PROPERTY **/

// TODO: Print the length of the array of allies.
console.log(allies.length);

// TODO: Use the length to calculate the index of the last element of the array of enemies, and print that element.
console.log(enemies[enemies.length - 1])


/** COMMON ARRAY METHODS **/

/* Locate an Element within an Array */

// TODO: Check to see if Kate Stewart is in the array of allies and print the result (true or false).
console.log(allies.includes("Kate Stewart"));

// TODO: Find the index of the Weeping Angels in the enemies array and print it
console.log(enemies.indexOf("Weeping Angels"));


/* Create by Concatenating Multiple Arrays */

let companions10 = ["Rose", "Martha", "Donna"];
let companions11 = ["Amy", "Rory"];
let companions12 = ["Clara", "Bill", "Nardole"];
let companions13 = ["Ryan", "Graham", "Yasmin"];

// TODO: Combine the three arrays into a single array and print it.
let companionList = companions10.concat(companions11, companions12, companions13);
console.log(companionList);


/* Create by Taking a Slice */

// TODO: Create a new array from just the middle 3 of the list of companions, then print it.
let middleCompanions = companionList.slice(5, 8);
console.log(middleCompanions);


/* Create by Splitting a String */

let judoonJS = "JO BLO VO BLO SO CO RO KRO PO TO";
console.log(judoonJS.toUpperCase());

// TODO: Create a new array with each Judoon letter as a separate element, then print it
let judoonJSArray = judoonJS.split(" ");
console.log(judoonJSArray);


/* Joining an Array To Create a String */

// TODO: Print the Judoon word as a string again, this time connected by something other than just a space
console.log(judoonJSArray.join("! "));


/* Reverse */

// TODO: Reverse the array with all enemies and print it
enemies.reverse();
console.log(enemies);


/* Sort */

// TODO: Sort the companion list array alphabetically and print it.
companionList.sort();
console.log(companionList);


/* Add & Remove at End of Array */

// TODO: Declare a variable to store the result when you remove the last element from the array of allies. Print the variable, then print the modified array.
let lastAlly = allies.pop();
console.log(lastAlly);
console.log(allies);

// TODO: Add the name back to the end of the array, then print the modified array.
allies.push(lastAlly);
console.log(allies);


/* Add & Remove at Beginning of Array */

// TODO: Declare a variable to store the result when you remove the first element from the list of enemies. Print the variable, then print the modified array.
let firstEnemy = enemies.shift();
console.log(firstEnemy);
console.log(enemies);

// TODO: Add the removed element back to the beginning of the array, then print the modified array.
companionList.unshift(firstEnemy);
console.log(companionList);

/* Insert and/or Remove Anywhere in an Array */

// TODO: Remove Harriet Jones from the allies array, then print the modified array.
let indexOfHJ = allies.indexOf("Harriet Jones");
allies.splice(indexOfHJ, 1);
console.log(allies);

// TODO: Add Wilfred Mott to the list of allies, somewhere in the middle.
allies.splice(3, 0, "Wilfred Mott");
console.log(allies);


/** METHOD CHAINING **/

let tardis = "tardis";

// TODO: In a single line of code, change "tardis" to "T.A.R.D.I.S", then print the reassigned variable.
// Steps, which may not be in the right order:
//  split string into an array of characters
//  make all characters uppercase
//  join characters with periods
tardis = tardis.toUpperCase().split("").join(".");
console.log(tardis);

// TODO: Starting with the array of enemies, print a single string that lists the enemies in reverse alphabetical order, each separated by a comma and space.
// Steps, which must be done in a certain order:
//  While it is an array, sort it, then reverse it
//  Then join with the connector ", " to make it a string
console.log(enemies.sort().reverse().join(", "));


/** MULTIDIMENSIONAL ARRAYS **/

// TODO: Put all four arrays of companions inside a single array, then print it
let allCompanions = [
  companions10, 
  companions11, 
  companions12, 
  companions13
];
console.log(allCompanions);

// TODO: Print Donna's name using bracket notation with allCompanions
console.log(allCompanions[0][2]);

// TODO: Print Clara's name using bracket notation with allCompanions
console.log(allCompanions[2][0]);

// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 8: ARRAYS

/* 
	This is the SOLUTION CODE. Switch back to the main branch to use the starter code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/

/** CREATING ARRAYS & BRACKET NOTATION **/

let hogwartsHouses = ["Ravenclaw", "Hufflepuff", "Slytherin", "the best house IMHO"];

// TODO: Use bracket notation to print the second element of the array. Remember that arrays are zero-indexed!
console.log(hogwartsHouses[1]);

// TODO: Unlike strings, arrays ARE mutable — use bracket notation to replace the fourth element with the correct name, then print the entire array.
hogwartsHouses[3] = "Gryffindor";
console.log(hogwartsHouses);

// TODO: Create an empty array, then use bracket notation to add the names of our favorite wizard trio, then print the array.
let wizardTrio = [];
wizardTrio[0] = "Harry";
wizardTrio[1] = "Hermione";
wizardTrio[2] = "Ron";
console.log(wizardTrio);

// TODO: Try printing an element at index 10. What happens?
console.log(wizardTrio[10]);


/** THE LENGTH PROPERTY **/

// TODO: Print the length of the array of wizards.
console.log(wizardTrio.length);

// TODO: Use the length to calculate the index of the last element of the array of the houses of Hogwarts, and print that element.
console.log(hogwartsHouses[hogwartsHouses.length - 1])


/** COMMON ARRAY METHODS **/

/* Locate an Element within an Array */

let marauders = ["Sirius", "Remus", "Peter", "James"];

// TODO: Check to see if Peter is in the array of marauders and print the result (true or false).
console.log(marauders.includes("Peter"));

// TODO: Find the index of Sirius in the array and print it
console.log(marauders.indexOf("Sirius"));


/* Create by Concatenating Two Arrays */

let profs1 = ["Snape", "Sprout", "Trelawney"];
let profs2 = ["Moody", "Lockhart"];
let profs3 = ["Flitwick", "Slughorn", "McGonagall"];

// TODO: Combine the three arrays into a single array and print it.
let allProfs = profs1.concat(profs2, profs3);
console.log(allProfs);


/* Create by Taking a Slice */

// TODO: Create a new array from just the middle half of the full list of professors, then print it.
let middleProfs = allProfs.slice(2, 6);
console.log(middleProfs);


/* Create by Splitting a String */

let spellsString = "Alohamora | Stupefy | Ascendio | Riddikulus | Incendio";

// TODO: Create a new array with each spell as a separate element, then print it
let spellsArray = spellsString.split(" | ");
console.log(spellsArray);


/* Joining an Array To Create a String */

// TODO: Print the spells as a string again, this time connected by something other than a pipe
console.log(spellsArray.join(" ~ "));


/* Reverse */

// TODO: Reverse the array with all professors and print it
allProfs.reverse();
console.log(allProfs);


/* Sort */

// TODO: Sort the array alphabetically and print it.
allProfs.sort();
console.log(allProfs);


/* Add & Remove at End of Array */

// TODO: Remove Professor Trelawney from the end of the array, then print the modified array.
allProfs.pop();
console.log(allProfs);

// TODO: Add Professor Umbridge to the end of the array, then print the modified array.
allProfs.push("Umbridge");
console.log(allProfs);


/* Add & Remove at Beginning of Array */

// TODO: Remove Flitwick from the beginning of the array, then print the modified array.
allProfs.shift();
console.log(allProfs);

// TODO: Add Lupin to the beginning of the array, then print the modified array.
allProfs.unshift("Lupin");
console.log(allProfs);

/* Insert and/or Remove Anywhere in an Array */

// TODO: Remove Professor Moody from the array, then print the modified array.
allProfs.splice(3, 1);
console.log(allProfs);

// TODO: Add Professor Quirrell between Snape and Sprout, then print the modified array.
allProfs.splice(5, 0, "Quirrell");
console.log(allProfs);


/** METHOD CHAINING **/

let diagonAlley = "Diagon Alley";

// TODO: In a single line of code, change "Diagon Alley" to "diagonally", then print the reassigned variable.
// Steps, which can be done in any order:
// make all letters lowercase
// remove space
// remove e
diagonAlley = diagonAlley.toLowerCase().replace(" ", "").replace("e", "");
console.log(diagonAlley);

// TODO: Starting with the array of Hogwarts houses, print a single string that lists the houses in reverse alphabetical order, each separated by a comma and space.
// Steps, which must be done in a certain order:
// While it is an array, sort it, then reverse it
// Then join with the connector ", " to make it a string
console.log(hogwartsHouses.sort().reverse().join(", "));


/** MULTIDIMENSIONAL ARRAYS **/

let gryffindors = ["Neville Longbottom", "Seamus Finnegan", "Ginny Weasley"];
let hufflepuffs = ["Cedric Diggory", "Nymphadora Tonks", "Newt Scamander"];
let ravenclaws = ["Luna Lovegood", "Cho Chang", "Padma Patil"];
let slytherins = ["Draco Malfoy", "Vincent Crabbe", "Gregory Goyle"];

// TODO: Put all four arrays inside a array of assorted students, then print it
let assortedStudents = [gryffindors, hufflepuffs, ravenclaws, slytherins];
console.log(assortedStudents);

// TODO: Print Ginny's name using bracket notation with assortedStudents
console.log(assortedStudents[0][2]);

// TODO: Print Luna's name using bracket notation with assortedStudents
console.log(assortedStudents[2][0]);

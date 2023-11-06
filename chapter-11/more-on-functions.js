// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 11: MORE ON FUNCTIONS

/* 
	This is the SOLUTION CODE. Switch back to the main branch to use the starter code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/

/*
  Bonus intro, just for fun (turn up volume and hit play):
	https://codepen.io/carolista/full/KKrPaqb
*/


/** CALLING VS REFERENCING **/

/* Referencing a Function */

// A simple named function
function sayHello(name) {
	return `Hello, ${name}!`;
}

// Call the function and print the return value
console.log(sayHello("Steve"));

// Print the function reference without calling it
console.log(sayHello);


/* The Function Data Type */

// Check the data type using the name reference
console.log(typeof sayHello);


/* Creating an Alias */

// Create an alias for sayHello
let hiThere = sayHello;

// Call the function using the alias and print the return value
console.log(hiThere("Nancy"));

// Print the alias reference only
console.log(hiThere);

// ...it really is just an alias! 


/** ANONYMOUS FUNCTIONS **/

/* Storing an Anonymous Function as a Constant */

// Write an anonymous function and store it as a constant below. The function should take an array of numbers and use it as a key to decode a message from Will in the Upside Down, with the letters A-Z being numbered 1-26 and a space represented as 0. Return the decoded message as a string.
const readMessageInLights = function (arrayOfNums) {
	let alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let message = "";
	for (let i=0; i < arrayOfNums.length; i++) {
		message += alphabet[arrayOfNums[i]];
	}
	return message;
}; // keep the semicolon!

// Test data
let msg1 = [18, 9, 7, 8, 20, 0, 8, 5, 18, 5];
let msg2 = [18, 21, 14];

// Decode and print each message
console.log(readMessageInLights(msg1));
console.log(readMessageInLights(msg2));


/** HIGHER-ORDER FUNCTIONS **/

// Write a named, higher-order function called processEach that takes two parameters: an array and a function. It should loop through the array and execute the function for each element of the array. (We are writing our own version of JavaScript's built-in array method .forEach())
function processEach(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

/* Using an Existing Function as an Argument */
console.log("\nUsing an Existing Function as an Argument:");

// Write a function that will convert a number into a string that has a length of exactly 3, with leading zeros if the number is less than 3 digits long. The function should simply print the string and does not need a return value.
function printSubjectTattoo(num) {
	let numDigits = String(num).length;
	let zeros = "0".repeat(3 - numDigits);
	console.log(zeros + num);
}

// Test data
let indigoSubjects = [1, 3, 4, 7, 8, 10, 11, 13, 15, 18];

// Call the higher-order function and pass in the test array with the new function (by name reference) to have it print a line for every element in the array.
processEach(indigoSubjects, printSubjectTattoo);


/* Providing an Anonymous Function as an Argument */

let hellfireClub = ["Eddie", "Gareth", "Jeff", "Mike", "Dustin", "Lucas", "Erica"];

// Call the higher-order function again, but this time write an anonymous function in place that prints "_____ is a member of the Hellfire Club!" for each element in the array above... unless that person is Erica, in which case it should say "Lady Applejack, the MOST BADASS member" instead of "a member".
processEach(hellfireClub, function (name) {
	if (name === "Erica") {
		console.log(`${name} is Lady Applejack, the MOST BADASS member of the Hellfire Club!`);
	} else {
		console.log(`${name} is a member of the Hellfire Club!`);
	}
});


/** RECURSION **/

/* Testing the Efficiency of Recursion with Factorials */

// This is a linear way to solve a factorial using a for loop
function linearFactorial(n) {
	let result = 1;
	for (let i = n; i > 1; i--) {
		result *= i
	}
	return result;
}

// We can call this function and print the correct answer
console.time("linear factorial");
console.log(linearFactorial(15));
console.timeEnd("linear factorial");


// Write a recursive function to solve a factorial
function recursiveFactorial(n) {
	// console.log(`Function called for ${n}`);
	// base case to stop recursion
	if (n === 1) {
		// console.log(n);
		return n;
	} 
	// otherwise
	// console.log(`Calling function for ${n-1}`)
	let nextValue = n * recursiveFactorial(n - 1);
	// console.log(nextValue);
	return nextValue;
}

/*
	Without all the console.log statements...

  function recursiveFactorial(n) {
		if (n === 1) {
	    return n;
		} 
	  return n * recursiveFactorial(n-1);
	}
*/

// Call the function to test it and print the result
console.time("recursive factorial");
console.log(recursiveFactorial(15));
console.timeEnd("recursive factorial");

// Go back and use the Console API's .time() and .timeEnd() methods to clock the speed of code execution for both the linear and recursive functions


/* Working through Complex Data */

// Sometimes you have data that can't be traversed linearly, like a multi-dimensional array with an unknown number of levels. Hard-coding a bunch of nested loops won't work.

// Test data, where nested arrays represent number of demodogs within rooms/areas on separate floors of the building
let hawkinsLab = [
	[[6, 2], 3, [8, 1]],
	[[0, 5], 10],
	[7, [9, 4], 11]
];

// Write a recursive function to count up the number of demodogs chasing everyone down in the Hawkins National Laboratory (RIP Bob) 

/*
	Plan it out:

 	What is the base case (and is there only one?)
	#1 — If data is a number and not an array, add to count and return
	#2 — If data is an empty array, return 0

 	What is the divide and conquer strategy?
 	If data is not a number or an empty array, it must be an array with contents yet to be counted -- split the array somehow (perhaps .pop() or .shift()) and call the function again for each part, returning the sum of the two
*/

// Define the function
function countDemodogs(data) {
	// console.log(data);
	if (typeof data === "number") {
		console.log(`Adding the number ${data} to the count.`);
		return data;
	}
	if (data.length === 0) {
		// console.log("Empty array found.");
		return 0;
	}
	// console.log("Recursing...");
	return countDemodogs(data.shift()) + countDemodogs(data);
}

// Call the function with the test data
console.log(countDemodogs(hawkinsLab));

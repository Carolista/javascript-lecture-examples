// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 10: FUNCTIONS

/* 
	This is the SOLUTION CODE. Switch back to the main branch to use the starter code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/


/** DEFINING YOUR OWN FUNCTIONS **/

/* Calling vs Defining */
console.log("\nCalling vs Defining");

console.log(sayHello("Joe"));
console.log(formatEmail("joe@schmo.com"));

function sayHello(firstName) {
  return `Hello, ${firstName}!`;
}

function formatEmail(email) {
  return `Email address: ${email}`;
}


/** INPUT: PARAMETERS & VARIABLES **/

/* Parameters are Variables */
console.log("\nParameters are Variables");

function formatSSN(ssn1, ssn2, ssn3) {
  return `${ssn1}-${ssn2}-${ssn3}`;
}

// Call formatSSN with real values (arguments) and print the return value
console.log(formatSSN(123, 45, 6789));


/* Passing Data into a Function */
console.log("\nPassing Data into a Function");

function formatDate(weekday, mm, dd, yyyy) {
  return `${weekday}, ${mm}/${dd}/${yyyy}`;
}

// Store a formatted date in a variable and then print it
let formattedDate = formatDate("Friday", "10", "07", "2022");
console.log(formattedDate);


/* Flexible Functions: Optional Parameters */
console.log("\nFlexible Functions: Optional Parameters");

function getFullName(fName, lName, title = '') {
  let fullName = '';
  if (title !== '') {         // or, if (title)
    fullName += `${title} `;
  }
  fullName += `${fName} ${lName}`;
  return fullName;
}

// Call the function twice, once with and once without using the third parameter
console.log(getFullName("Jane", "Smith", "Dr."));
console.log(getFullName("Bob", "Jones"));


/** OUTPUT: TO RETURN OR NOT TO RETURN? **/

/* Making Use of Return Values */
console.log("\nMaking Use of Return Values");

function addThreeNums(num1, num2, num3) {
  return num1 + num2 + num3;
}

// Store the sum in a variable, then print it in a template literal
let sumOfThree = addThreeNums(2, 6, 1);
console.log(`sumOfThree is ${sumOfThree}`); // 9

// Print the returned value directly
console.log(addThreeNums(5, 10, 42)); // 57

// Call the function from within a template literal as you print it
console.log(`The sum of 8, 27, and 5 is ${addThreeNums(8, 27, 5)}.`);


/* The Return Keyword is Optional */
console.log("\nThe Return Keyword is Optional");

let allPrepWork = [];
let startedPrepWork = false;

function submitPrepWork(work) {
  allPrepWork.push(work);
  startedPrepWork = true;
}

// Call the function and pass in 'reading'
submitPrepWork('reading');
// Print the current value of startedPrepWork
console.log(startedPrepWork);
// Call the function again and pass in 'exercises'
submitPrepWork('exercises');
// Print the current value of allPrepWork
console.log(allPrepWork);


/* Stopping a Function Early */
console.log("\nStopping a Function Early");

function divideNums(num1, num2) {
  if (num2 === 0) {
		return `To ${num1 / num2} and beyond!`;
  }
  return num1 / num2;
}  

// Demonstrate both regular usage and handling division by zero
console.log(divideNums(6, 3));
console.log(divideNums(4, 0));


/** VARIABLE SCOPE **/

/* Local Variables */
console.log("\nLocal Variables");

let user = "Ella";

function greetUser(message) {
  let greeting = `${message}, ${user}!`;
  console.log(greeting); // just print, no return value
}

greetUser("Good morning");

console.log(user); // OK - name is in scope

// These are out of scope and will cause a ReferenceError
// console.log(message);
// console.log(greeting);


/* Variable Shadowing */
console.log("\nVariable Shadowing");

let color = "black";

function describeItem(item, color) {
	console.log(`It's a ${color} ${item}!`);
}

describeItem("box", "blue");
console.log(color);


/** FUNCTION COMPOSITION **/

/* Composing Functions */
console.log("\nComposing Functions");

function subtotal(arr) {
  let sum = 0;
  for (let i=0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function getTotals(month, arr1, arr2) {
  let div1 = subtotal(arr1);
  let div2 = subtotal(arr2);
  return `In the month of ${month}, Division 1 had $${div1} in earnings, while Division 2 had $${div2} in earnings. Total earnings was $${div1 + div2}.`;
} 

let earnings1 = [13056, 29430, 10230, 57283];
let earnings2 = [20435, 62433, 19857];

// Demonstrate use of getTotals() with the test data given above
console.log(getTotals("March", earnings1, earnings2));

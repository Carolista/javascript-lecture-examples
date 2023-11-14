// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 16: MORE ON TYPES

/* 
	This is the SOLUTION CODE. Switch back to the main branch to use the starter code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/

/* Primitives */

let boy = "Andy";
let age = 6;
let hasBabySister = true;

let favoritePizzaPlace = null;
let favoriteIceCream;

function printValueAndType(data) {
	console.log("\nValue: " + data);
	console.log("Type: " + typeof data);
}

// Call the function for each variable above
printValueAndType(boy);
printValueAndType(age);
printValueAndType(hasBabySister);
printValueAndType(favoritePizzaPlace);
printValueAndType(favoriteIceCream);


/* Data Structures */

let toyNames = ["Hamm", "Slinky Dog", "Wheezy"];

let neighborKid = {
	firstName: "Sid",
	lastName: "Phillips",
	pastime: "torturing toys"
};

// Call the function to print the value and type of the array and object
printValueAndType(toyNames);
printValueAndType(neighborKid);


/* Null and Undefined */

function playGame() {
	console.log("Hey, this is fun!");
}

let pizzaPlanet = {
	food: "pizza",
	drink: "soda",
	doesDeliveries: true,
	videoGames: null,
	play: playGame // must reference function, not call it
};

// Print the videoGames property
console.log(pizzaPlanet.videoGames);

// Print a nonexistent property of pizzaPlanet, hours
console.log(pizzaPlanet.hours);

// Call the play method
pizzaPlanet.play();

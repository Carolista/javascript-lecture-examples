// Import classes here for use below
const Beverage = require('./classes/Beverage');
const DietSoda = require('./classes/DietSoda');
const Juice = require('./classes/Juice');
const Soda = require('./classes/Soda');

/* The Beverage Class */

// In Beverage.js, define the Beverage class before continuing

// Create a water object from Beverage class
let water = new Beverage("water", 20, "bottle");

// Print the water object
console.log(water);

// Describe the water (call the method)
water.describe();

// Recycle the water
water.recycle();

// Describe the water again
water.describe(); 



/* The Juice Class */

// In Juice.js, define the Juice class before continuing

// Create orangeJuice, appleJuice, and v8 objects from the Juice class
let orangeJuice = new Juice("orange juice", 16, "bottle", ["oranges"]);
let appleJuice = new Juice("apple juice", 14, "can", ["apples"]);
let v8 = new Juice("V8", 20, "glass bottle", ["tomatoes"], ["carrots", "celery", "beets", "parsley", "lettuce", "watercress", "spinach"]);

// Print the three objects
console.log(orangeJuice);
console.log(appleJuice);
console.log(v8);

// Describe the v8
v8.describe();

// Recycle the apple juice (method inherited from Beverage)
appleJuice.recycle();


/* The Soda Class */

// In Soda.js, define the Soda class before continuing

// Create drPepper and sprite objects from the Soda class, then print them
let drPepper = new Soda("Dr Pepper", 12, "can", true);
let sprite = new Soda("Sprite", 20, "can", false);

console.log(drPepper);
console.log(sprite);

// Whoops! That Sprite is actually in a bottle. Fix it.
sprite.container = "bottle";

// Describe the Sprite
sprite.describe();

// Recycle the Dr. Pepper, then describe it 
drPepper.recycle();
drPepper.describe();


/* The DietSoda Class */

// In DietSoda.js, define the DietSoda class before continuing

// Create cokeZero, caffFreeDietPepsi, and dietPepsi objects from the DietSoda class
let cokeZero = new DietSoda("Coke Zero", 12, "can", true, "aspartame");
let caffFreeDietCoke = new DietSoda("Caffeine-Free Diet Coke", 10, "bottle", false, "aspartame");
let dietPepsi = new DietSoda("Diet Pepsi", 20, "bottle", true, "sucralose");

// Print the three new objects
console.log(cokeZero);
console.log(caffFreeDietCoke);
console.log(dietPepsi);

// Describe the Diet Pepsi
dietPepsi.describe();

// Recycle the Coke Zero and caffeine-free Diet Coke
cokeZero.recycle();
caffFreeDietCoke.recycle();


/* Identity */

// Use the instanceof keyword to verify the class inheritance of cokeZero
console.log(cokeZero instanceof DietSoda);
console.log(cokeZero instanceof Soda);
console.log(cokeZero instanceof Beverage);

// Try the same for cokeZero with the Juice class
console.log(cokeZero instanceof Juice);

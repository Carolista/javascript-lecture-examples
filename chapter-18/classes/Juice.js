const Beverage = require('./Beverage');

/** The Juice Class **/

/*
	Use 'extends' and 'super()' to create the Juice class as a child of Beverage

  Add two more properties as parameters:
		- fruits
		- veggies (make optional with empty array as value) 
	
	Overwrite the inherited describe() method to include a list of fruits and veggies (one on each line)

  Do not overwrite recycled or recycle()
*/

class Juice extends Beverage {
  constructor(name, ounces, container, fruits, veggies = []) {
    super(name, ounces, container); 
    this.fruits = fruits;
    this.veggies = veggies;
  }

	describe() {
		super.describe();
		console.log(`It contains the following:`);
		let ingredients = (this.fruits).concat(this.veggies);
		for (let i=0; i < ingredients.length; i++) {
			console.log(`\t${ingredients[i]}`);
		}
	}
}

module.exports = Juice;

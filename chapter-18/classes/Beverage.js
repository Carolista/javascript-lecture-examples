/** The Beverage Class **/

/*
	Define a Beverage class and give the constructor three parameters: name, ounces, and container, then set the properties accordingly.

  Add one more property (not params) called recycled and set it to false.

  Add a method called recycle() that sets the recycled property to true and prints a sentence with the name and container as a confirmation.

	Add a method called describe() that prints a sentence to the console with its name, container, and capacity. The sentence should differ slightly depending on whether it's been recycled or not.
*/

class Beverage {
	
  constructor(name, ounces, container) {
    this.name = name;
    this.ounces = ounces;
    this.container = container;
		this.recycled = false;
	}

	recycle() {
		this.recycled = true;
		console.log(`\nThat was delicious! I rinsed and recycled the ${this.container} of ${this.name}.`);
	}
	
	describe() {
		let status = this.recycled ? "had" : "have"; // ternary
		console.log(`\nI ${status} a ${this.ounces}-oz. ${this.container} of ${this.name}.`);
	}

}

module.exports = Beverage;

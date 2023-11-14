/** The Fruit Class **/

/*
	Add 3 params to constructor - name, color, and isCitrus (default to false)

	Add a fourth property, numSlices, and set it to null
 
	Add an anonymous method, describe that prints to the console using the object's properties
 
	Add a named method, cut, that takes a number and updates the numSlices property before printing a confirmation sentence to the console
*/

class Fruit {
  constructor(name, color, isCitrus = false) {
    this.name = name;
    this.color = color;
    this.isCitrus = isCitrus;
    this.numSlices = null;
    this.describe = function() {
	    return `${this.color} ${this.name}`;
	  }
  }

	cut(num) {
		this.numSlices = num;
		console.log(`The ${this.describe()} is now in ${this.numSlices} pieces!`);
	}
}

module.exports = Fruit;

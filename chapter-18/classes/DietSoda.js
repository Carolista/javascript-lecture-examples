const Soda = require('./Soda');

/** The DietSoda Class **/

/*
	Use 'extends' and 'super() to create the DietSoda class as a child of Soda.

 	Give it all four params from Soda plus a new one, sweetener

	Overwrite the describe method, calling the Soda describe and then adding a line that mentions the type of sweetener.
*/

class DietSoda extends Soda {
  constructor(name, ounces, container, hasCaffeine, sweetener) {
    super(name, ounces, container, hasCaffeine);
    this.sweetener = sweetener;
  }
	
	describe() {
		super.describe();
		console.log(`It is sweetened with ${this.sweetener}.`);
	}
}

module.exports = DietSoda;

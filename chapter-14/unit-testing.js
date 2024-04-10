// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 14: UNIT TESTING

/* 
	This is the SOLUTION CODE. Switch back to the main branch to use the starter code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/


/* 
	In the corresponding spec file, write a test for the msPerYear below.
*/
let MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;


/* 
	In the corresponding test file, write a test for each property in the object below. Fix any mistakes that are uncovered by the tests.
*/
let bucky = {
	fullName: "James Buchanan Barnes",
	nickname: "Bucky", // fixed it
	triggerWords: ["longing", "rusted", "furnace", "daybreak", "seventeen", "benign", "nine", "homecoming", "one", "freight car"], // fixed it
	age: Math.round((new Date() - new Date(1917, 10, 3)) / MS_PER_YEAR),
	isHydraAgent: false // fixed it
};


/** TEST-DRIVEN DEVELOPMENT **/

/*
	Practice TDD by writing each test before adding code to the function below.
  The function should return true or false depending on whether all of its characters are alphabetical or not.
*/
function isAlphaOnly(str) {
	// !str will catch both null and empty string
	if (!str || typeof str !== "string") {
		return false;
	}
	let allowed = "abcdefghijklmnopqrstuvwxyz ";
	for (let i=0; i < str.length; i++) {
		if (!allowed.includes(str[i].toLowerCase())) {
			return false;
		}
	}
	return true;
}

// Export items to be tested
module.exports = {
	MS_PER_YEAR: MS_PER_YEAR,
	bucky: bucky,
	isAlphaOnly: isAlphaOnly
};

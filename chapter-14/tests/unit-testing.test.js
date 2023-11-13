// Import items to test
const { msPerYear, bucky, isAlphaOnly } = require("../unit-testing");


/** UNIT TESTING **/

/*
	Write a test for the msPerYear variable. It should be exactly 31557600000.
*/

// Create a describe block for the variable, then write a specification inside it
describe("The msPerYear variable", function () {
	test("should have a value of 31557600000", function () {
		expect(msPerYear).toEqual(31557600000);
	});
});

/*
	Write a test for each of the properties in the object bucky
*/

// Create a describe block for the entire object
describe("The bucky object", function () {
	// Write each specification as a test block inside the describe block
	
	// Test the value of fullName
	test("should have a property called 'fullName' with the value of 'James Buchanan Barnes'", function () {
		expect(bucky.fullName).toEqual("James Buchanan Barnes");
	});
	
	// Write 2 tests for the value of nickname — it should be "Bucky" and NOT "The Winter Soldier"
	test("should have a property called 'nickname' with the value of 'Bucky'", function () {
		expect(bucky.nickname).toEqual("Bucky");
		expect(bucky.nickname).not.toEqual("The Winter Soldier");
	});

	// Test that triggerWords includes "longing", "daybreak", and "homecoming"
	test("should have an array called 'triggerWords' that includes specific words", function () {
		expect(bucky.triggerWords).toContain("longing");
		expect(bucky.triggerWords).toContain("daybreak");
		expect(bucky.triggerWords).toContain("homecoming");
	});

	// Test that the age property is greater than 100
	test("should have a property called 'age' that is greater than 100 and less than 120", function () {
		// console.log(bucky.age);
		expect(bucky.age).toBeGreaterThan(100);
		expect(bucky.age).toBeLessThan(120);
	});

	// Test that Bucky is no longer a Hydra agent
	test("should have a property 'isHydraAgent' that is false", function () {
		expect(bucky.isHydraAgent).toBe(false);
	});
});


/** TEST-DRIVEN DEVELOPMENT **/

/*
	Write a new describe block for the isAlphaOnly function. Test positive cases, negative cases, and edge cases
*/

// Test data — will need to be moved into a beforeEach() function 
let cap;
beforeEach(function () {
	cap = {
		fullName: "Steve Rogers",
		nickname: "Cap",
		age: Math.round((new Date() - new Date(1918, 7, 4)) / msPerYear),
		catchphrases: ["I could do this all day.", "Language!"]
	};
});

// Write a describe block for the isAlphaOnly function
describe("The isAlphaOnly function", function() {
	
	// POSITIVE CASES
	// Write a test for nickname
	test("should return true if alpha-only string is passed in", function() {
		expect(isAlphaOnly(cap.nickname)).toBe(true);
	});
	
	// NEGATIVE CASES
	// Write tests for non-alpha characters like numbers and punctuation
	test("should return false if the string has numeric characters", function() {
    cap.age = String(cap.age);
		expect(isAlphaOnly(cap.age)).toBe(false);
	});
	test("should return false if the string has punctuation", function() {
		expect(isAlphaOnly(cap.catchphrases[0])).toBe(false);
		expect(isAlphaOnly(cap.catchphrases[1])).toBe(false);
	});
	
	// EDGE CASES
	// Write a test for spaces (is allowed)
	test("should return true if the string has spaces", function() {
		expect(isAlphaOnly(cap.fullName)).toBe(true);
	});
	// Write a test for empty string (not allowed)
	test("should return false if it is an empty string", function() {
		expect(isAlphaOnly("")).toBe(false);
	});	
	// Write a test for non-string types (not allowed)
	test("should return false if value is not a string type", function() {
    expect(typeof cap.age).toBe("number");
		expect(isAlphaOnly(cap.age)).toBe(false);
	});
	// Write a test for null value
	test("should return false if argument is null", function() {
		expect(isAlphaOnly(null)).toBe(false);
	});
});

// Import items to test
const examples = require('../unit-testing');

/** UNIT TESTING **/

/*
	Write a test for the MS_PER_YEAR constant. It should be exactly 31557600000.
*/

// Create a describe block, then write a specification inside it
describe('The MS_PER_YEAR constant', function () {
  test('should have a value of 31557600000', function () {
    expect(examples.MS_PER_YEAR).toEqual(31557600000);
  });
});

/*
	Write a test for each of the properties in the object bucky
*/

// Create a describe block for the entire object
describe('The bucky object', function () {
  // Write each specification as a test block inside the describe block

  // Test the value of fullName
  test("should have a property called 'fullName' with the value of 'James Buchanan Barnes'", function () {
    expect(examples.bucky.fullName).toEqual('James Buchanan Barnes');
  });

  // Write 2 tests for the value of nickname — it should be "Bucky" and NOT "The Winter Soldier"
  test("should have a property called 'nickname' with the value of 'Bucky'", function () {
    expect(examples.bucky.nickname).toEqual('Bucky');
    expect(examples.bucky.nickname).not.toEqual('The Winter Soldier');
  });

  // Test that triggerWords includes "longing", "daybreak", and "homecoming"
  test("should have an array called 'triggerWords' that includes specific words", function () {
    expect(examples.bucky.triggerWords).toContain('longing');
    expect(examples.bucky.triggerWords).toContain('daybreak');
    expect(examples.bucky.triggerWords).toContain('homecoming');
  });

  // Test that the age method returns a number greater than 100 and less than 120
  test("should have a method called 'calculateAge' that returns number greater than 100 and less than 120", function () {
    // console.log(bucky.calculateAge());
    expect(examples.bucky.calculateAge()).toBeGreaterThan(100);
    expect(examples.bucky.calculateAge()).toBeLessThan(120);
  });

  // Test that Bucky is no longer a Hydra agent
  test("should have a property 'isHydraAgent' that is false", function () {
    expect(examples.bucky.isHydraAgent).toEqual(false);
  });
});

/** TEST-DRIVEN DEVELOPMENT **/

/*
	Write a new describe block for the isAlphaOnly function. Test positive cases, negative cases, and edge cases
*/

// Test data
let cap;

// Reset data before each test in case it is manipulated
beforeEach(function () {
  cap = {
    fullName: 'Steve Rogers',
    nickname: 'Cap',
    catchphrases: ['I could do this all day.', 'Language!'],
    calculateAge: function () {
      return Math.round((new Date() - new Date(1918, 7, 4)) / examples.MS_PER_YEAR);
    }
  };
});

// Write a describe block for the isAlphaOnly function
describe('The isAlphaOnly function', function () {
  // POSITIVE CASES
  // Write a test for nickname
  test('should return true if alpha-only string is passed in', function () {
    expect(examples.isAlphaOnly(cap.nickname)).toEqual(true);
  });
  // Write a test for spaces (is allowed)
  test('should return true if the string has spaces', function () {
    expect(examples.isAlphaOnly(cap.fullName)).toEqual(true);
  });

  // NEGATIVE CASES
  // Write tests for non-alpha characters like numbers and punctuation
  test('should return false if the string has numeric characters', function () {
    let numString = String(cap.calculateAge());
    expect(examples.isAlphaOnly(numString)).toEqual(false);
  });
  test('should return false if the string has punctuation', function () {
    expect(examples.isAlphaOnly(cap.catchphrases[0])).toEqual(false);
    expect(examples.isAlphaOnly(cap.catchphrases[1])).toEqual(false);
  });

  // EDGE CASES
  // Write a test for empty string (not allowed)
  test('should return false if it is an empty string', function () {
    expect(examples.isAlphaOnly('')).toEqual(false);
  });
  // Write a test for ONLY spaces (no other characters)
  test('should return false if the string has ONLY spaces', function () {
    expect(examples.isAlphaOnly(" ")).toEqual(false);
  });
  // Write a test for non-string types (not allowed)
  test('should return false if value is not a string type', function () {
    expect(examples.isAlphaOnly(cap.calculateAge())).toEqual(false); // number
    expect(examples.isAlphaOnly(cap.catchphrases)).toEqual(false); // array
    expect(examples.isAlphaOnly(cap)).toEqual(false); // object
    expect(examples.isAlphaOnly(cap.calculateAge)).toEqual(false); // function
    expect(examples.isAlphaOnly(null)).toEqual(false); // null
  });
});

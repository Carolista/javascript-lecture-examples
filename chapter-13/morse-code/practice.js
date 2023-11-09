// Import from funcs.js
const funcs = require("./funcs");


/** TRY OUT INDIVIDUAL FUNCTIONS **/

// Store a single character in a new variable, char
let char = "w";

// Call the function and store returned value in a variable, translatedChar
translatedChar = funcs.translateChar(char);

// Print a sentence that states the character and its translation
console.log(`In Morse code, the letter '${char}' is: \n${translatedChar}\n`);


// Store a single word in a new variable, word
let word = "specialty";

// Call the function and store returned value in a variable, translatedWord
let translatedWord = funcs.translateWord(word);

// Log a sentence that states the word and its translation
console.log(`In Morse code, the word '${word}' is: \n${translatedWord}\n`);


// Store a phrase in a new variable, phrase
let phrase = "Dammit, Jim - I'm a doctor, not a coder!";

// Call the function and store returned value in a variable, translatedPhrase
translatedPhrase = funcs.translateAll(phrase);

// Print a sentence stating the phrase and its translation
console.log(`In Morse code, the phrase '${phrase}' is: \n${translatedPhrase}\n`);

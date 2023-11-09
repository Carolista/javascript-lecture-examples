function roundToDec(n, numDec) {
	let factor = 10**numDec;
	return Math.round(n * factor) / factor;
}

function getRandomNumber(max, min = 0, numDec = 0) {
	let randomNum = Math.random() * (max - min) + min;
	return roundToDec(randomNum, numDec);
}

const doNotCapitalize = ["and", "but", "for", "if", "nor", "or", "so", "yet", "a", "an", "the", "as", "at", "by", "in", "of", "off", "on", "per", "to", "via", "down", "from", "into", "like", "near", "once", "onto", "over", "past", "than", "that", "upon", "when", "with"];

function formatAsTitleCase(str) {
	let words = str.split(" ");
	let capWords = [];
	for (let i=0; i < words.length; i++) {
    if (i === 0 || (i > 0 && !doNotCapitalize.includes(words[i]))) {
      capWords.push(words[i][0].toUpperCase() + words[i].slice(1).toLowerCase());
    } else {
      capWords.push(words[i]);
    }
	}
	return capWords.join(" ");
}

// Set an export object with key/value pairs to export all three functions. Use aliases for the second and third keys.
module.exports = {
	roundToDec: roundToDec,
	getRandNum: getRandomNumber,
	getTitleCase: formatAsTitleCase
}

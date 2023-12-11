// Class 17 Lecture: The Modern JavaScript Landscape

/** TERNARY OPERATOR **/

let pikeInChair = true; // otherwise Spock is in command
let phrase;

if (pikeInChair) {
  phrase = 'Hit it!';
} else {
  phrase = 'I would like the ship to go... now.';
}

let phrase2 = pikeInChair ? 'Hit it!' : 'I would like the ship to go... now.';

console.log(phrase2);

/** SPREAD OPERATOR **/

let crew1 = ['Captain Pike', 'Number One', 'Spock'];
let crew2 = ['Uhura', "La'an", 'Ortegas', 'Hemmer', 'Kyle'];
let crew3 = ["Dr. M'Benga", 'Nurse Chapel'];

let enterpriseCrew = [...crew1, ...crew2, ...crew3];

console.log(enterpriseCrew);

/** DESTRUCTURING **/

/* Destructuring Arrays */

let [doctor, nurse] = crew3;

console.log(doctor);
console.log(nurse);

// Use an extra comma to skip over Number One
let [captain, , scienceOfficer] = crew1;
console.log(captain);
console.log(scienceOfficer);

/* Destructuring Objects */

let enterprise = {
  shipName: 'Enterprise',
  registryNumber: 'NCC-1701',
  class: 'Constitution',
};

const { shipName, registryNumber: registry } = enterprise;
console.log(shipName);
console.log(registry);

/** FOR...OF LOOPS **/

/* With a Simple Array */

for (let member of crew2) {
  console.log(member);
}

/* With a Map Class Object */

let federationFounders = [
  [1, 'United Earth'],
  [2, 'Confederacy of Vulcan'],
  [3, 'Andorian Empire'],
  [4, 'United Planets of Tellar'],
  [5, 'Alpha Centauri Concordium'],
];

let fedFoundersMap = new Map(federationFounders);

console.log(fedFoundersMap);

for (let [num, member] of fedFoundersMap) {
  console.log(`${num}. ${member}`);
}

/** ARROW FUNCTIONS **/

function explore(planet) {
  console.log(`Let's go boldly toward ${planet}`);
}

const goBoldly = planet => console.log(`Let's go boldly toward ${planet}`);

goBoldly('Nibiru');

function makeItGo(speedFactor, type = 'impulse') {
  if (type === 'warp') {
    console.log(`Warp factor ${speedFactor}`);
  } else {
    console.log(`${speedFactor} impulse`);
  }
}

const hitIt = (speedFactor, type) =>
  console.log(
    type === 'warp' ? `Warp factor ${speedFactor}` : `${speedFactor} impulse`
  );

hitIt('Full');
hitIt(8, 'warp');

/** MAPPING OVER AN ARRAY **/

let planets = ['andoria', 'Vulcan', 'earth', 'KrOnOs', 'Risa'];

let capPlanets = planets.map(planet => planet.toUpperCase());

console.log(capPlanets);

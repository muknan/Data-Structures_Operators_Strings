'use strict';

/*

/////////////////////////////////////////
// ----------- CHALLENGE 1 ----------- //
/////////////////////////////////////////

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const opt = Number(
      prompt(`What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++`)
    );

    typeof opt === 'number' && opt < this.answers.length && this.answers[opt]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string')
      console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// 5.
const dr = poll.displayResults;
const pollOpt = {
  // data1: [5, 2, 3],
  answers: [1, 5, 3, 9, 6, 1],
};
const test = dr.bind(pollOpt);
test();
test('string');

poll.displayResults.call(pollOpt);
poll.displayResults.call(pollOpt, 'string');
*/

/////////////////////////////////////////
// ----------- CHALLENGE 2 ----------- //
/////////////////////////////////////////

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('mousedown', function () {
    header.classList.add('hcolor');
  });
  document.querySelector('body').addEventListener('mouseup', function () {
    header.classList.remove('hcolor');
  });
})();

/////////////////////////////////////////
// ---------- CHALLENGE END ---------- //
/////////////////////////////////////////

/*
// Default parameters

const book = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 99 * numPassengers
) {
  // numPassengers = numPassengers || 1;
  // price = price || 1;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  book.push(booking);
};

createBooking('LH123');
createBooking('LH123', 10, 299);
createBooking('LH123', 20);

createBooking('LH123', undefined, 20); //skipping a parameter

const flight = 'LH234';
const mukul = { name: 'Mukul Nanda', passport: 'M123987' };

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 'M123987') {
    alert('Checked in!');
  } else alert('Wrong Passport!');
};

// checkIn(flight, mukul);
// console.log(flight);
// console.log(mukul);

// // Same as this
// const flightNum = flight;
// const passenger = mukul;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(mukul);
checkIn(flight, mukul);


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best', oneWord);


// Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}!, ${name}`);
  };
};

const greetArr = greeting => name => console.log(`${greeting}!, ${name}`);

const greetHello = greet('Hello');
greetHello('Mukul');
greetHello('Meena');

greet('Hey')('Mukul');

greetArr('Bonjour')('Meena');


const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `Passenger ${name} booked a seat with ${this.airline} Airlines, ${this.iataCode}, flight number: ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Mukul Nanda');
lufthansa.book(635, 'Meena Nanda');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Call method
book.call(eurowings, 55, 'Meena Nanda'); //Have to use the call method on function to specify where this keyword points to
console.log(eurowings.bookings);

book.call(lufthansa, 125, 'Arya Nanda');
console.log(lufthansa.bookings);

const swiss = { airline: 'Swiss', iataCode: 'LX', bookings: [] };
book.call(swiss, 59, 'Parveen Nanda');
console.log(swiss.bookings);

// Apply method
const flightData = [583, 'Rebecca Moore'];
book.apply(swiss, flightData); // Deprecated, not used as much in modern JS
book.call(swiss, ...flightData); // same as Apply method using spread
console.log(swiss.bookings);

// Bind method
const bookEuro295 = book.bind(eurowings, 295); // presetting first parameter (FLight number) for function
const bookSwiss = book.bind(swiss);
bookEuro295('Robert Lin');
bookEuro295('Mike Shinoda');
bookSwiss(59, 'Erin Luci');

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // Using bind to specify what this keyword points to

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // null when we dont have 'this'
console.log(addVAT(500));

// Function return function
const addVATFn = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};

// addVATFn(0.23)(100);
const addVAT2 = addVATFn(0.23);
addVAT2(100);
addVAT2(500);

const originalArray = [9, 5, 1, 3, 2, 7, 4, 6, 8];
const arr = [...new Set(originalArray)];
let min = arr[0];
let max = arr[0];
let flag = 1;

for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}

for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}

while (min <= max) {
  if (!arr.includes(min)) {
    flag = 0;
  }
  min++;
}

flag === 0
  ? console.log('Not a consecutive array')
  : console.log('Consecutive array');

// Immediately invoked function expressions
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will also never run again'))();

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking(); //essential to get access to variable environment of EC in which it was created
booker(); // VE attached to the function, exactly at the time and place function was created
booker();
booker();

console.dir(booker);

// Closure - Example 1
let f;

const g = function () {
  const a = 10;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Re-assigning f function - closure changes to b
h();
f();

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup}`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
*/

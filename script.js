'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

/*
let a;
let s = [];
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Del') ? '⚠️' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${from.replace(/[0-9]/g, '').toUpperCase()} to ${to
    .replace(/[0-9]/g, '')
    .toUpperCase()} (${time.replace(':', 'h')})`.padStart(50);
  console.log(output);
}
*/

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  rName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //  ES6 enhanced object literals - to use existing object as a property in another object
  openingHours,

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // New way of writing functions without : function
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received - Starter Dish: ${this.starterMenu[starterIndex]} & Main Dish: ${this.mainMenu[mainIndex]} and will be delivered to ${address} by ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Your pasta with customized ingredients: ${ing1}, ${ing2} and ${ing3} is being prepared by the restaurant and will be soon on your way!`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
// STRINGS manipulation
// JS converts String into an object behind the scenes such as with: new String('Test String')
// This boxing provides us access to all the methods
// Applying method on string or string object would always return a string

// indexOf
// lastIndexOf
// slice
const airline = 'Emirates Airlines UAE';
const plane = 'A26';

console.log(plane[0]);

console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Airlines'));

console.log(airline.slice(9));
console.log(airline.slice(9, 12));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-3)); //returns last 3 letter of string
console.log(airline.slice(1, -1)); // returns string without first and last letter

const checkMiddleSeat = function (seat) {
  // const s = seat.slice(-1); // Takes out last character from a string
  // BOTH if works
  // if (s === 'B' || s === 'E') {
  if (seat.indexOf('B') !== -1 || seat.indexOf('E') !== -1) {
    console.log('You got lucky! 😀');
  } else {
    console.log('You got the middle seat. 😅');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// STRINGS METHODS
// - toLowerCase
// - toUpperCase
// - trim
// - replace
// - includes
// - startsWith
// - endsWith
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in passengers name
const passenger = 'mUkul';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'muk.msi@gmail.com';
const loginEmail = ' mUk.msi@gmail.Com  \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const finalEmail = loginEmail.toLowerCase().trim();
console.log(finalEmail === email);

// replacing
const priceUSD = '199.50$';
const priceGB = priceUSD.replace('$', '£').replace('.', ',');
console.log(priceGB);

const announcement =
  'All passengers must come to boarding door. Plane is going to depart soon for boarding door 5';
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); // to replace all occurences of door

// Booleans
const planeStr = 'Airbus A320neo';
console.log(planeStr.includes('neo')); // true
console.log(planeStr.includes('old')); // false
console.log(planeStr.startsWith('Airb')); // true

if (planeStr.startsWith('Airbus') && planeStr.endsWith('neo')) {
  console.log('Part of new airbus family.');
}

// Practice exercise
const checkBaggage = function (item) {
  const itemLower = item.toLowerCase();
  const check =
    itemLower.includes('gun') || itemLower.includes('knife')
      ? console.log('Items not allowed, proceed to security area!')
      : console.log('Baggage checked in!');
  return check;
};

checkBaggage('I have a Laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a Gun and knife for protection');

// MORE STRINGS METHODS - Split and Join
console.log(...'a+very+nice+string'.split('+'));
console.log(...'Mukul Nanda'.split(' '));
const [firstName, lastName] = 'Mukul Nanda'.split(' '); //Destructure

const fullName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(fullName);

const pName = 'jessica ann smith jones';
let fn = [];
const capital = function (name) {
  const a = name.split(' ');
  for (const c of a) {
    console.log(c);
    // fn.push([c[0].toUpperCase() + c.slice(1)]);
    fn.push(c.replace(c[0], c[0].toUpperCase()));
  }
  console.log(fn.join(' '));
  // console.log(...fn);
};
capital(pName);

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(40, '-'));

// Example
const maskCard = function (num) {
  const card = num + '';
  const lastDigits = card.slice(-4);
  console.log(lastDigits.padStart(card.length, '*'));
};

maskCard(1234919182821717);
maskCard('5201928172616225');

// Repeat
const weather = 'Bad weather... All departures delayed...';
console.log(weather.repeat(4));

const planesInLine = function (n) {
  console.log(`There are ${n} planes inline ${'✈️'.repeat(n)}`);
};

planesInLine(5);

// MAPS
const rest = new Map();
rest.set('name', 'Hira Sweets');
rest.set(1, 'CP');
rest.set(2, 'LN');
rest
  .set('categories', ['Indian', 'American', 'Chinese'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //true O/P: We are open :D

console.log(rest.has(1));
rest.delete(1);
console.log(rest);
console.log(rest.size);
// rest.clear();

// rest.set([1, 2], 'Test');
// console.log(rest.get([1, 2])); // RETURNS undefined
// Fix is to make a new array variable and pass that
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');

// QUIZ app
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

//Convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key !== 'number') continue;
  else console.log(`${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);

// SETS
const ordersSet = new Set([
  'Pizza',
  'Pasta',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet.has('Pizza'));
ordersSet.delete('Pasta');
console.log(ordersSet.size);

console.log(ordersSet);

for (const items of ordersSet) {
  console.log(items);
}

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
console.log([...new Set(staff)]);

//


// Property NAMES
const properties = Object.keys(openingHours);
let openStr = `We are open ${properties.length} days of the week: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object - NAMES + VALUES
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}.`);
}

// Optional chaining
// Old way - if to check if a property exists, could nest alot
if (restaurant.openingHours && restaurant.openingHours.open) {
  console.log(restaurant.openingHours.mon.open);
}

// With OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Example
for (const day of days) {
  const open = restaurant.openingHours?.[day]?.open;
  open === undefined
    ? console.log(`We are closed on ${day}`)
    : console.log(`We are open on ${day} at ${open}`);
}

// OPTIONAL CHAINING on Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderNow?.(0, 1) ?? 'Method does not exist');

// On Arrays
const users = [{ uname: 'Mukul', email: 'muk.msi@gmail.com' }];
// const users = [];
console.log(users[0]?.uname ?? 'Users array is empty');


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

// Old way
// for (const item of menu.entries()) {
//   console.log(`Item ${item[0] + 1}: ${item[1]}`);
//   // console.log(item);
// }

// New way
for (const [i, el] of menu.entries()) {
  console.log(`Item ${i + 1}: ${el}`);
  // console.log(item);
}


const rest1 = { name: 'Hira', numGuests: 150 };
const rest2 = { name: 'Haldiram', owner: 'Ted' };

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator
// Handles the 0 guests case since OR treats 0 as a falsy
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1.numGuests);
console.log(rest2.numGuests);

// AND assignment operator
rest1.owner &&= 'Anonymous';
rest2.owner &&= 'Anonymous';
console.log(rest1.owner);
console.log(rest2.owner);


restaurant.numGuests = 0;
console.log(restaurant.numGuests ?? 10);

//  Short circuiting with ||
console.log('---------- OR ----------');
console.log(3 || 'Mukul ');
console.log('' || 'Mukul ');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// returns the first truthy or last falsy value if there is no true value in the circuit
console.log(restaurant.numGuests || 10);
console.log(restaurant.numGuests ?? 10);

// with &&
console.log('---------- AND ----------');
// returns the first falsy or last truthy value if there is no false value in the circuit
console.log(0 && 'Mukul');
console.log(7 && 'Mukul');
console.log('Hello' && 23 && null && 'Nanda');

// Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('Grilled Mushrooms', 'Onions');
}
restaurant.orderPizza && restaurant.orderPizza('Grilled Mushrooms', 'Onions');

// Spread operator example
const ingredients = [
  // prompt("Let's make paste! Please enter ingredient 1?"),
  // prompt('Please enter ingredient 2?'),
  // prompt('Please enter ingredient 3?'),
];

restaurant.orderPasta(...ingredients);

// Objects
const newRestraunt = { founded: 1998, ...restaurant, founder: 'Ted' };
console.log(newRestraunt);

const restaurantCopy = { ...newRestraunt };
restaurantCopy.founder = 'Phil';
console.log(restaurantCopy.founder);
console.log(newRestraunt.founder);

// SPREAD, because its declared on right side of assignment (=) operator
const arr = [1, 2, ...[3, 4]];

// REST, because on left side of (=)
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others);

const [pizza, , risotto, ...otherItems] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherItems);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Funcions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 5, 7);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Mushrooms', 'Onions', 'Jalapeno', 'Spinach');

restaurant.orderDelivery({
  time: '22:30',
  address: 'Jitar Nagar',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Jitar Nagar',
  starterIndex: 3,
});

const { rName, openingHours, categories } = restaurant;
console.log(rName, openingHours, categories);

// Renaming destructured object
const {
  rName: restaurantName,
  openingHours: hours,
  categories: type,
} = restaurant;
console.log(restaurantName, hours, type);

// Default values for new and renamed property in a object
const {
  menu = ['Pizza', 'Butter Chicken', 'Fish & Chips'],
  starterMenu: starters = ['Buffalo Wings', 'Poutine', 'Soup'],
} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 11;
let b = 99;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

const {
  thu: { open: thuO, close: thuC },
  fri: { open: o, close: c },
  sat,
} = openingHours;

console.log(o, c);
console.log(thuO, thuC);

//////////////////////////////////
//  Destructuring Arrays
const arr = [2, 5, 7];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starterItems, mainItems] = restaurant.order(2, 0);
console.log(starterItems, mainItems);

// Nested destructuring
const nested = [2, 5, [7, 9]];
// const [i, , j] = nested;

const [i, , [n, m]] = nested;

console.log(i, n, m);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


const arr = [2, 5, 7];
const badArr = [9, 11, arr[0], arr[1], arr[2]];
console.log(badArr);

const newArr = [9, 11, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(9, 11, 2, 5, 7);

const newMainMenu = [...restaurant.mainMenu, 'Butter Chicken'];
console.log(newMainMenu);

// Copy array
const mainMenyCopy = [...restaurant.mainMenu];

// Merge arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Spread operator works on iterables
// Iterables: arrays, strings, maps, sets but NOT objects

const str = 'Mukul';
const letters = [...str, '', 'N.'];
console.log(...letters);


//////////////////////////////////////////////////////
//////////////////// CHANLLENGE 1 ////////////////////
//////////////////////////////////////////////////////
const players1 = ['KSI', 'MrBeast', 'Deji', 'Vrik'];
const players2 = ['xQc', 'Jack', 'Speed', 'Kai'];

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const addSubstitute = function (sub) {
  const players1Final = [...players1, ...sub];
  return players1Final;
};

console.log(addSubstitute(['Thiago', 'Coutinho', 'Perisic']));

const game = {
  odds: {
    team1: 1.33,
    team2: 3.25,
    draw: 6.5,
  },

  printGoals: function (...player) {
    console.log(...player);
    console.log(player.length);
  },
};

game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

const { odds } = game;

odds.team1 > odds.team2 && console.log('Team 2 wins');
odds.team1 < odds.team2 && console.log('Team 1 wins');


//////////////////////////////////////////////////////
//////////////////// CHANLLENGE 2 ////////////////////
//////////////////////////////////////////////////////
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [key, value] of game.scored.entries()) {
  console.log(`Goal ${key + 1}: ${value}`);
}

// 2.
const gameEntries = Object.entries(game.odds);
let sum = 0;
for (const [key, value] of gameEntries) {
  sum += value;
}
console.log(Number(parseFloat(sum / gameEntries.length).toFixed(2)));

// 3.
for (const [key, value] of gameEntries) {
  if (key === 'x') {
    console.log(`Odds of draw: ${value}`);
  } else {
    console.log(`Odds of victory for ${game[key]}: ${value} `);
  }
}

// 4.
const a = game.scored;
// console.log(a);
let score = {};

for (const x of a) {
  score[x] = 0;
}

for (const x of a) {
  if (Object.keys(score).includes(x)) {
    score[x] += 1;
  }
}

console.log(score);

//////////////////////////////////////////////////////
//////////////////// CHANLLENGE 3 ////////////////////
//////////////////////////////////////////////////////
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
// gameEvents.delete(64);
console.log(gameEvents);

// 3.
gameEvents.delete(92);
console.log(gameEvents);
for (const e of events) {
  let x = 0;
  let total = 0;
  let y = 0;
  let count = 0;
  for (const [key, value] of gameEvents) {
    if (value === e) {
      let temp = key;
      x = temp - y;
      // console.log(value);
      // console.log(x);
      y = temp;
      total += x;
      count++;
      // console.log(total);
    }
  }
  console.log(`${e} happened, on average, every ${total / count} minutes`);
}

// 4.
for (const [key, value] of gameEvents) {
  key <= 45
    ? console.log(`[FIRST HALF] ${key}: ${value}`)
    : console.log(`[SECOND HALF] ${key}: ${value}`);
}


//////////////////////////////////////////////////////
//////////////////// CHANLLENGE 4 ////////////////////
//////////////////////////////////////////////////////

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
let text;

document.querySelector('button').addEventListener('click', function () {
  text = document.querySelector('textarea').value;
  convertCamel(text);
});

// 1.
// let counter = 1;
const convertCamel = function (t) {
  const str = (t + '').split('\n');
  for (const [i, e] of str.entries()) {
    // let lower = e.trim().toLowerCase();
    // let i = lower.indexOf('_') + 1;
    // let camel = lower.slice(i).replace(lower[i], lower[i].toUpperCase());
    // console.log(camel);
    let lower = e.trim().toLowerCase();
    let [a, b] = lower.split('_');
    b = b.replace(b[0], b[0].toUpperCase());
    console.log([a, b].join('').padEnd(20, ' ') + '✅'.repeat(i + 1));
    // counter++;
  }
};
*/

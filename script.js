'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
*/

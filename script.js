'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  rName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received - Starter Dish: ${this.starterMenu[starterIndex]} & Main Dish: ${this.mainMenu[mainIndex]} and will be delivered to ${address} by ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Your pasta with customized ingredients: ${ing1}, ${ing2} and ${ing3} is being prepared by the restaurant and will be soon on your way!`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.numGuests = 0;
console.log(restaurant.numGuests ?? 10);

/*
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
*/

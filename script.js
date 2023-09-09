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
};

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

/*
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
*/

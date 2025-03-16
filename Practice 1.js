// Variables (var, let, const)
var x = 10; // var is function-scoped
let y = 20; // let is block-scoped
const z = 30; // const is block-scoped and cannot be reassigned

// Function (arrow, default parameter, this)
const add = (a, b = 5) => a + b; // arrow function with default parameter
console.log(add(3)); // Output: 8

const obj = {
  value: 10,
  method: function() {
    setTimeout(() => {
      console.log(this.value); // 'this' refers to obj
    }, 1000);
  }
};
obj.method(); // Output: 10

// Loops (for each, for of, while)
const arr = [1, 2, 3];
arr.forEach(num => console.log(num)); // Output: 1 2 3

for (const num of arr) {
  console.log(num); // Output: 1 2 3
}

let i = 0;
while (i < arr.length) {
  console.log(arr[i]); // Output: 1 2 3
  i++;
}

// Conditional statement (if, else, switch)
const num = 10;
if (num > 5) {
  console.log('Greater than 5'); // Output: Greater than 5
} else {
  console.log('5 or less');
}

switch (num) {
  case 10:
    console.log('Ten'); // Output: Ten
    break;
  default:
    console.log('Not ten');
}

// Operators (rest, spread)
const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2, 3)); // Output: 6

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Destructure (object, array)
const person = { name: 'John', age: 25 };
const { name, age } = person;
console.log(name, age); // Output: John 25

const [first, second] = arr;
console.log(first, second); // Output: 1 2

// Async nature - setTimeout()
console.log('Start');
setTimeout(() => {
  console.log('Timeout'); // Output: Timeout (after 1 second)
}, 1000);
console.log('End'); // Output: Start End

// Class & Objects
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
const dog = new Animal('Dog');
dog.speak(); // Output: Dog makes a noise.

// Array methods (filter, slice, find, concat, push, join, map)
const numbers = [1, 2, 3, 4, 5];
const filtered = numbers.filter(num => num > 2);
console.log(filtered); // Output: [3, 4, 5]

const sliced = numbers.slice(1, 3);
console.log(sliced); // Output: [2, 3]

const found = numbers.find(num => num === 3);
console.log(found); // Output: 3

const concatenated = numbers.concat([6, 7]);
console.log(concatenated); // Output: [1, 2, 3, 4, 5, 6, 7]

numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

const joined = numbers.join('-');
console.log(joined); // Output: 1-2-3-4-5-6

const mapped = numbers.map(num => num * 2);
console.log(mapped); // Output: [2, 4, 6, 8, 10, 12]

// Template literal
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!

// Callback function
function fetchData(callback) {
  setTimeout(() => {
    callback('Data received');
  }, 1000);
}
fetchData(data => console.log(data)); // Output: Data received (after 1 second)

// Strings & numbers
const str = '123';
const numStr = Number(str);
console.log(numStr); // Output: 123

const numToStr = String(numStr);
console.log(numToStr); // Output: '123'

// Promise, async, await
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 1000);
});
promise.then(result => console.log(result)); // Output: Promise resolved (after 1 second)

async function asyncFunction() {
  const result = await promise;
  console.log(result); // Output: Promise resolved
}
asyncFunction();

// Modules concepts (Exports & defaults)
// Assuming we have another file 'module.js' with the following content:
// export const myFunction = () => console.log('Hello from module');
// export default () => console.log('Default export');

// In this file, we would import the module like this:
// import myFunction, { myFunction as namedFunction } from './module';
// myFunction(); // Output: Default export
// namedFunction(); // Output: Hello from module

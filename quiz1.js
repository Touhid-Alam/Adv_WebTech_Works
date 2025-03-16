//template literal

//const name ='John';
//
//console.log(`Hello, my name is ${name}`);

//class and method
//class person{
//
//    constructor(name,age){
//        this.name=name;
//        this.age=age;
//    }
//
//    sayHello(){
//        console.log(`Hello,my name is ${this.name}`);
//    }
//}
//
//const p = new person('Touhid',24)
//p.sayHello();

// Array examples

//const array = [1, 2, 3, 4, 5];
//
// Using for loop
//for (let i = 0; i < array.length; i++) {
//    console.log(`for loop: ${array[i]}`);
//}
//
// Using forEach
//array.forEach(element => {
//    console.log(`forEach: ${element}`);
//});
//
// Using for...of
//for (const element of array) {
//    console.log(`for...of: ${element}`);
//}
//
// Using for...in
//for (const index in array) {
//    console.log(`for...in: ${array[index]}`);
//}
//
// Using map
//const mappedArray = array.map(element => element * 2);
//console.log(`map: ${mappedArray}`);
//
// Using filter
//const filteredArray = array.filter(element => element > 2);
//console.log(`filter: ${filteredArray}`);
//
// Using reduce
//const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//console.log(`reduce: ${sum}`);

// Spread operation
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(`Spread operation: ${arr2}`);

// Object modification
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(`Object modification: ${JSON.stringify(obj2)}`);

// Destructuring
const [first, second, ...rest] = arr2;
console.log(`Destructuring: first=${first}, second=${second}, rest=${rest}`);

const { a, b, c } = obj2;
console.log(`Destructuring: a=${a}, b=${b}, c=${c}`);

// Map function
const mappedArr = arr2.map(x => x * 2);
console.log(`Map function: ${mappedArr}`);

// Filter function
const filteredArr = arr2.filter(x => x > 2);
console.log(`Filter function: ${filteredArr}`);

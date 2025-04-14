// Array type
let fruits: string[] = ["apple", "banana", "cherry"];
fruits.forEach(fruit => console.log(fruit));

// Object type
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
};

let person: Person = { name: "Alice", age: 22, isStudent: false };
console.log(person);

// Function type
function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Bob"));

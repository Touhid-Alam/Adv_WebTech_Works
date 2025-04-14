// Example 1: Basic Arithmetic Operations
function arithmeticOperations(a: number, b: number): void {
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
    console.log("Division:", a / b);
}

arithmeticOperations(10, 5);

// Example 2: Loop through a list
function loopThroughList(items: string[]): void {
    for (const item of items) {
        console.log(item);
    }
}

loopThroughList(["apple", "banana", "cherry"]);

// Example 3: Check if a number is even or odd
function checkEvenOdd(number: number): void {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

checkEvenOdd(7);
// Generic function
function identity<T>(value: T): T {
    return value;
}

console.log(identity<number>(42));
console.log(identity<string>("Hello"));

// Interface
interface Vehicle {
    brand: string;
    model: string;
    year: number;
}

let car: Vehicle = { brand: "Toyota", model: "Corolla", year: 2020 };
console.log(car);

// Class
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

let dog = new Animal("Dog");
dog.makeSound();

// Export and import example
export class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }
}

// To import this class in another file:
// import { Calculator } from './classesModules';

// Type alias
type ID = string | number;

// Union type
let userId: ID = 101;
userId = "abc123";

// Literal type
type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction): void {
    console.log(`Moving ${direction}`);
}

move("up");

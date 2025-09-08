interface Person {
    name: string;
    age: number;
}

function greet(person: Person): void {
    console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
}

const p1: Person = { name: "Amr", age: 20 };
greet(p1);

interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
}

function printDog(dog: Dog): void {
    console.log(`Dog name: ${dog.name}, Age: ${dog.age}, Breed: ${dog.breed}`);
}

const myDog: Dog = { name: "Bella", age: 3, breed: "Yorkshire Terrier" };
printDog(myDog);

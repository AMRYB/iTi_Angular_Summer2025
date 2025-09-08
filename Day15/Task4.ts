function min<T>(arr: T[]): T | undefined {
    if (arr.length === 0) return undefined;

    let minimum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minimum) {
            minimum = arr[i];
        }
    }
    return minimum;
}

console.log(min([3, 7, 1, 9]));
console.log(min(["z", "a", "m"])); 

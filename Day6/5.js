let num1 = prompt("first number");
let num2 = prompt("second number");
let operation = prompt("enter operation");

num1 = Number(num1);
num2 = Number(num2);

function task(num1, num2, operation, callback) {
    let result;

    if (operation === "sum") {
        result = num1 + num2;
    } else if (operation === "sub") {
        result = num1 - num2;
    } else if (operation === "mul") {
        result = num1 * num2;
    } else if (operation === "div") {
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    } else {
        result = "check operation";
    }

    callback(result);
}

task(num1, num2, operation, function(result) {
    console.log("result: " + result);
});

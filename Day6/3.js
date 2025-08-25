let age = prompt("enter your age");
let price;

    if (age < 12) {
        price = 5;
    } else if (age < 18) {
        price = 10;
    } else if (age < 60) {
        price = 20;
    } else {
        price = 15;
    }

    console.log("ur age " + age + " so the price is $" + price);
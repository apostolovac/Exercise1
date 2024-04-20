// Program that calculates the shipping cost based on the destination country.
let destination = "Canada";

let shippingCost;
console.log("shippingCost", shippingCost)

if (destination === "USA") {
    shippingCost = 10;
} else if (destination === "Canada") {
    shippingCost = 15;
} else if (destination === "UK") {
    shippingCost = 20;
} else {
    shippingCost = "not available";
}

if (shippingCost === "not available") {
    console.log("Shipping to " + destination + " is not available.");
} else {
    console.log("The shipping cost to " + destination + " is $" + shippingCost + ".");
}
var purchaseAmount = 75;

var discountPercentage;


if (purchaseAmount >= 100) {
    discountPercentage = 10;
} else if (purchaseAmount >= 50 && purchaseAmount < 100) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

// Calculate the discount amount
var discountAmount = (purchaseAmount * discountPercentage) / 100;


if (discountPercentage > 0) {
    console.log("Congratulations! You are eligible for a " + discountPercentage + "% discount.");
    console.log("Your discount amount is $" + discountAmount + ".");
} else {
    console.log("Sorry, you are not eligible for any discount.");
}
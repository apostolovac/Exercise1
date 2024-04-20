// Program that checks if a customer is eligible for a discount based on their purchase amount.

let purchaseAmount = 30;

if (purchaseAmount >= 100){
    console.log("Congratulations! You are eligible for a 10% discount.");
}else if (purchaseAmount >=50 && purchaseAmount < 100){
    console.log("Congratulations! You are eligible for a 5% discount.");
}else (purchaseAmount < 50);{
    console.log("Sorry, you are not eligible for any discount.");
}
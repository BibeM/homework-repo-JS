console.log("I am not sleeping!");
// Write a JavaScript program that will calculate the price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%. //

let numberOfPhones = 30;
let priceOnePhone = 119.95;
let taxRate = 5 / 100;

console.log(
  "Total price for the phones is ",
  numberOfPhones * priceOnePhone + numberOfPhones * priceOnePhone * taxRate
);

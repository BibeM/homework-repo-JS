console.log("I am alive!");

let userInput = prompt("How much monney do you have?");

let numberResult = Number(userInput);

if (Number.isNaN(numberResult)) {
  console.log("Insert corect value!");
} else if (numberResult >= 50) {
  console.log("You should go on a concert!");
} else if (numberResult >= 30) {
  console.log("You should go in a restoran!");
} else if (numberResult >= 20) {
  console.log("You should order a pizza!");
} else {
  console.log("Stay home!");
}

console.log("I am not sleeping!");
/* 
Forgot how old you are? Calculate it!

Write a function named calculateAge that:
takes 2 arguments: birth year, current year.
calculates the age based on those years.
outputs the result to the screen like so: "You are NN years old"
Call the function three times with different sets of values.
Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/
let userInput = prompt(
  "Please enter your year of birth and I will tell how old are you."
);
let numberResult = Number(userInput);
let currentYear = new Date().getFullYear();

if (Number.isNaN(numberResult)) {
  console.log("Please enter real number for year of birth.");
}
if (userInput === null) {
  console.log("Thanks for using our service");
}
if (!Number.isNaN(numberResult) && userInput != null) {
  function currentAge(birthYear, currentYear) {
    console.log("You are born in ", birthYear);
    console.log("We are living in ", currentYear);
    let result = currentYear - birthYear;
    return result;
  }
  let birthYear = userInput;
  let result = currentAge(birthYear, currentYear);
  console.log("You are ", result, " years old.");
}

/*Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

object
boolean
number
string
undefined
*/

function typeOfInput(input) {
  let result = typeof input;
  console.log("This input is ", result);
}
typeOfInput(null);

typeOfInput(987);

typeOfInput("My name is Biljana!");

typeOfInput(20 < 18);

let defineOne;
typeOfInput(defineOne);

/*Write a JavaScript function that will return:

Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting dog to human years as well*/

let userInputHumanAge = prompt(
  "Please enter how old are you and i will tell you your dog age."
);
let numberResultHuman = Number(userInputHumanAge);
if (Number.isNaN(numberResultHuman)) {
  console.log("Please enter real number for your years.");
}
if (userInputHumanAge === null) {
  console.log("Thanks for using our service");
}
if (!Number.isNaN(numberResultHuman) && userInputHumanAge != null) {
  function humanAge(humanYears) {
    console.log("You are ", humanYears, "years old as a human.");
    let result = humanYears * 7;
    return result;
  }
  let humanYears = userInputHumanAge;
  let result = humanAge(humanYears);
  console.log("You are ", result, " years old as a dog.");
}
let userInputDogAge = prompt(
  "Please enter how old your dog is and i will tell you how old is your dog as a human "
);
let numberResultDogAge = Number(userInputDogAge);

if (Number.isNaN(numberResultDogAge)) {
  console.log("Please enter real years for your dog.");
}
if (userInputDogAge === null) {
  console.log("Thanks for using our service");
}
if (!Number.isNaN(numberResultDogAge) && userInputDogAge != null) {
  function dogAge(dogYears) {
    console.log("Your dog is ", dogYears, "years old as a dog.");
    let result = dogYears / 7;
    return result;
  }
  let dogYears = userInputDogAge;
  let result = dogAge(dogYears);
  console.log("Your dog is ", result, " years old as a human.");
}

/*Write a javascript function for an ATM:
The ATM should give cash
Should return "Not enough money" if you request more money
Should return the amount withdrawn and money left on the account if you have enough
Note: Hardcode your account money in the program
Bonus: Make it work with prompt()!*/

let accountBalance = 35000;

let moneyInput = prompt(
  "Please enter how much money do you wany to withdrawn."
);
let accountResult = Number(moneyInput);

if (Number.isNaN(accountResult)) {
  console.log("Please enter real number for withdrawn.");
}
if (moneyInput === null) {
  console.log("Thanks for using our service");
}
if (!Number.isNaN(accountResult) && moneyInput != null) {
  function account(accountBalance, moneyInput) {
    console.log("You have ", accountBalance, " on your account.");
    let result = accountBalance - moneyInput;
    return result;
  }

  let result = account(accountBalance, moneyInput);
  if (result >= 0) {
    console.log("You want  ", moneyInput, " to withdrawn.");
    console.log(result, " are left on your account.");
  } else {
    console.log("You dont have enough funds on your account.");
  }
}

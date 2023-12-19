console.log("I am not sleeping");
/*
Create a function called tellStory()

The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

The function should return one big string with a story made from the arguments

Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

The value that is returned from the function should be printed in the console or in alert
*/

function tellStory(name, mood, activity) {
  if (
    typeof name === "string" &&
    typeof mood === "string" &&
    typeof activity === "string"
  ) {
    console.log(
      "This is",
      name,
      ".",
      name,
      "is a nice person but today she is very",
      mood,
      "because she ",
      activity,
      " all friday night. The end."
    );
  } else {
    console.log("All parametars must be string. Please try again!");
  }
}
tellStory("Tina", "angry", "write homework");

/*
Write a function that will take an array of 5 numbers as an argument and return the sum.

Print it in the console or in alert

BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.
*/

let fiveNumbersArray = [11, 22, "nnn", 33, 44, 55];
console.log(fiveNumbersArray);
function validNumber(validNumArray) {
  for (let i = 0; i < validNumArray.length; i++) {
    let number = Number(validNumArray[i]);
    if (Number.isNaN(number)) {
      console.log("Some of the items in an array are not numbers!");
    }
  }
}

function sumOfFiveNumbers(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (typeof numArray[i] !== "number") {
      continue;
    }
    sum += numArray[i];
  }

  console.log("Sum of numbers in an array is: ", sum);

  return sumOfFiveNumbers;
}

sumOfFiveNumbers(fiveNumbersArray);
/*
Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC !"
*/

let stringArray = ["We", "are", "students", "of", "SEDC", "G4", "!"];
console.log(stringArray);
console.log(stringArray.join(" ")); //first solution
console.log(...stringArray); //second solution

function makeBigString(sentanceArray) {
  let bigString = "";
  for (i = 0; i < sentanceArray.length; i++) {
    bigString = `${bigString} ${sentanceArray[i]}`;
  }
  return console.log(`${bigString}`);
}
makeBigString(stringArray); //third solution

/*
Title: Looping structures

Description:Write a loop in javascript that goes from 1-20 that will print each number in the console and add "number is even" after every even number and add "number is odd" after every odd number
*/

for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(`Number ${i} is even!`);
  } else {
    console.log(`Numbet ${i} is odd!`);
  }
}

/*
Title: Looping structures

Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it
*/

let numberArray = [3, 5, "xxx", 6, 8, false, 11];

function maxMinSum(array) {
  let newArray = [];
  for (let item of numberArray) {
    if (typeof item !== "number") {
      continue;
    }
    if (typeof item === "number") {
      newArray.push(item);
    }
  }
  console.log(newArray);
  let max = Math.max(...newArray);
  let min = Math.min(...newArray);
  let sum = max + min;

  console.log(`Max: ${max}, Min: ${min}, Sum: ${sum}`);
}
maxMinSum(numberArray);

/*
Title: Looping structures

Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]
*/

let firstNameArray = ["Albert", "Isak", "Nikola"];
let lastNameArray = ["Einstain", "Newton", "Tesla"];

function fullName(firstArray, lastArray) {
  let fullnameList = [];
  for (i = 0; i < 3; i++) {
    fullnameList.push(`${i + 1}.${firstArray[i]} ${lastArray[i]}`);
  }
  console.log(fullnameList);
  return fullName;
}
fullName(firstNameArray, lastNameArray);

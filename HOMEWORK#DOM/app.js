console.log("It is working!");

/*
HOMEWORK PART 1
Change the page with JavaScript

Change the text of all paragraphs and headers with javascript
Note:The html must not be changed
*/

const mainHeadingEl = document.querySelector("#mainHeading");
const paragraphEl = document.querySelector(".paragraph");
const paragraphSecondEl = document.querySelector(".second");
const textEl = document.querySelector("text");
const h1El = document.getElementsByTagName("h1")[1];
const h3El = document.querySelector("h3");
console.log(h1El, paragraphEl, paragraphSecondEl, textEl, h3El);

mainHeadingEl.innerText = "The first DOM exercise is changed!";
console.log(mainHeadingEl.innerText);

paragraphEl.innerText = "If you want to solve this, you must learn!";
console.log(paragraphEl.innerText);
paragraphSecondEl.innerText = "You must leard much harder.";
console.log(paragraphSecondEl.innerText);
textEl.innerText = "I need help, please help me!";
console.log(textEl.innerText);
h1El.innerText = "I change this too!";
console.log(h1El.innerText);
h3El.innerText = "also this!";
console.log(h3El.innerText);

/*
HOMEWORK PART 2
Print all numbers from an array and the sum

Create an array with numbers
Print all numbers from the array in a list element, in a new HTML page
Print out the sum of all of the numbers below the list
Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)
*/

const numberListEl = document.querySelector("#numberList");
console.log(numberListEl);
let numbers = [2, 6, 9, 23, 88, 11, 26];
oneNumber = "";
function printNumbers(numbers) {
  oneNumber.innerHTML += "<ul>";
  for (let i = 0; i < numbers.length; i++) {
    oneNumber.innerHTML += `<li>${numbers[i]}</li>`;
  }
  oneNumber.innerHTML += "</ul>";
}

console.log("I am not sleeping!");

//Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

//Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

//0 - Rat  1 - Ox  2 - Tiger  3 - Rabbit  4 - Dragon  5 - Snake  6 - Horse  7 - Goat
//8 - Monkey  9 - Rooster  10 - Dog  11 - Pig

let userInput = prompt(
  "Please enter your year of birth and I will tell you witch Chinese Zodiac you are."
);

let numberResult = Number(userInput);
if (Number.isNaN(numberResult)) {
  console.log("Please enter real number for year of birth.");
}
let zodiacValue = (userInput - 4) % 12;

if (zodiacValue === 0) {
  console.log("Your Chinese Zodiac si Rat!");
} else if (zodiacValue === 1) {
  console.log("Your Chinese Zodiac si Ox!");
} else if (zodiacValue === 2) {
  console.log("Your Chinese Zodiac si Tiger!");
} else if (zodiacValue === 3) {
  console.log("Your Chinese Zodiac si Rabbit!");
} else if (zodiacValue === 4) {
  console.log("Your Chinese Zodiac si Dragon!");
} else if (zodiacValue === 5) {
  console.log("Your Chinese Zodiac si Snake!");
} else if (zodiacValue === 6) {
  console.log("Your Chinese Zodiac si Horse!");
} else if (zodiacValue === 7) {
  console.log("Your Chinese Zodiac si Goat!");
} else if (zodiacValue === 8) {
  console.log("Your Chinese Zodiac si Monkey!");
} else if (zodiacValue === 9) {
  console.log("Your Chinese Zodiac si Rooster!");
} else if (zodiacValue === 10) {
  console.log("Your Chinese Zodiac si Dog!");
} else {
  console.log("Your Chinese Zodiac si Pig!");
}

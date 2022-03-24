/* let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda ";

console.log(firstName);
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Teacher";
let myCurrentJob = "Programmer";

console.log(myFirstJob);

// data types
true;
let jsIsFun = true;
console.log(jsIsFun);

// console.log(typeof true);
console.log(typeof jsIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

jsIsFun = "YES";
console.log(typeof jsIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// console.log(typeof null);
// weird bug.

// let, const and var
// recommend to use const by default



// Math operators
const now = 2022;
const ageJonas = now - 1997;
const ageSarah = now - 2018;
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // 99
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // true
// >, <, >=, <=
console.log(ageSarah >= 18); // false

const isFullage = ageSarah >= 18;

console.log(now - 1997 > now - 2018);

//Operator Precedence
let x, y; //undefined
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y); // 10, 10

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


// Coding Challenge #1
 BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter)

1. Store Marks's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. CReate a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1 : Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall. 


const marksMassD1 = 78;
const marksHeightD1 = 1.69;
const johnMassD1 = 92;
const johnHeightD1 = 1.95;

const marksBmiD1 = marksMassD1 / (marksHeightD1 * marksHeightD1);
const johnBmiD1 = johnMassD1 / (johnHeightD1 * johnHeightD1);

console.log(marksBmiD1, johnBmiD1);
let markHigherBMI = marksBmiD1 > johnBmiD1;
console.log(markHigherBMI);

TEST DATA 2 : Marks weights 95 kg and is 1.88 m tall.
John weights 85 kg and is 1.76 m tall. 

marksMassD2 = 95;
marksHeightD2 = 1.88;
johnMassD2 = 85;
johnHeightD2 = 1.76;
marksBmiD2 = marksMassD2 / (marksHeightD2 * marksHeightD2);
johnBmiD2 = johnMassD2 / (johnHeightD2 * johnHeightD2);
console.log(marksBmiD2, johnBmiD2);
markHigherBMI = marksBmiD2 > johnBmiD2;
console.log(markHigherBMI);


// Strings and Template Literals

const firstName = "Munjeong";
const job = "programmer";
const birthYear = 1996;
const year = 2022;

const munjeong =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(munjeong);

const munjeongNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(munjeongNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`Strings
multiple
lines`);


// if / else Statements

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait until ${yearsLeft} years :)`);
}

const birthYear = 1996;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// Challenge #2
const marksMass = 95;
const marksHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const marksBmi = marksMass / marksHeight ** 2;
const johnBmi = johnMass / (johnHeight * johnHeight);

console.log(marksBmi, johnBmi);
let markHigherBMI = marksBmi > johnBmi;
console.log(markHigherBMI);

if (marksBmi > johnBmi) {
  console.log(`Marks BMI(${marksBmi}) is higher than John's(${johnBmi})!`);
} else {
  console.log(`John's BMI(${johnBmi}) is higher than Marks(${marksBmi})`);
} 

// Type Conversion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Munjeong")); //NaN(Not a Number)
console.log(typeof NaN); //number

console.log(String(23), 23);

// Type Coercion
console.log("I am " + 26 + " years old");
console.log("26" - "10" - 3); // :13, minus operatorw triggered opposite conversion
console.log("26" + "10" + 3); // :26103
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1; // '10'
console.log(n); 

// 5 falsy values: 0, '', undefined, null, NaN // Everything else: truthy value

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 0; // trigger bug
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
} 

// Equaility Operators
const age = 18;
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  // 22 === 23 -> false
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favorite !== 23) console.log("Why not 23?");


// Boolean Logic

const age = 16;
const a = age >= 20;
const b = age < 30;
console.log(a);
console.log(b);
/* !a : true
 a and b: false
 a or b: true
 !a and b: true
a or !b: false */

// Logical Operators
/*
const hasDriversLivense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLivense && hasGoodVision);
console.log(hasDriversLivense || hasGoodVision);
console.log(!hasDriversLivense);

const shouldDrive = hasDriversLivense && hasGoodVision;

//if (shouldDrive) {
//  console.log("Sarah is able to drive!");
//} else {
//  console.log("Someone else should drive...//");}

const isTired = false; // C
console.log(hasDriversLivense && hasGoodVision && isTired);

if (hasDriversLivense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/

// Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3.BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110


const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy 🏆!");
} else if (scoreDolphins === scoreKoalas) {
  console.log("The game ended in a draw.");
} else {
  console.log("Koalas win the trophy 🏆!");
} */

// BONUS는 스스로 해결 못 했다.
const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆!");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy!");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆!");
} else {
  console.log("No one wins the trophy 🙁");
}

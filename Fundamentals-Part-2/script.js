/* 
"use strict";
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;
// const if = 23; 

function logger() {
  console.log("My name is Munjeong");
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("26"); 

// Function declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const age1 = calcAge1(1996);

// Function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(1996);

console.log(age1, age2);

// Arrow function
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1996, "Munjeong"));
console.log(yearUntilRetirement(2000, "Bob")); 


// Functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearUntilRetirement(1996, "Munjeong"));
console.log(yearUntilRetirement(1950, "Mike"));


// Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 AND DATA 2.
5. Ignore draws this time

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

/* 미해결
const calcAverage = (round1, round2, round3) => (round1 + round2 + round3) / 3;
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins);
console.log(avgKoalas);

const checkWinner = (avgDolphins, avgKoalas) => 
if (avgDolphins > avgKoalas) {
  console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
} else if ((avgDolphins = avgKoalas)) {
  console.log("Draws");
} else {
  console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
} 

// Array

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // 0부터 시작하니까

friends[2] = "Heejin";
console.log(friends);

const firstName = "Munjeong";
const munjeong = [firstName, "Choi", 2022 - 1996, "web developer", friends];
console.log(munjeong);
console.log(munjeong.length);

// Exercise
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length - 1])];
console.log(ages); 

const friends = ["Michael", "Steven", "Heejin"];
// Add elements
const newLength = friends.push("Shuhwa");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); //last
const popped = friends.pop(); // last
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}


// Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is differnet, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = bill => bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);


// Objects
const munjeongArray = [
  "Munjeong",
  "Choi",
  2022 - 1996,
  "web developer",
  ["Heejin", "Hanna", "Shuhwa"],
];

const munjeong = {
  firstName: "Munjeong",
  lastName: "Choi",
  age: 2022 - 1996,
  job: "web developer",
  friends: ["Heejin", "Hanna", "Shuhwa"],
};

// Dot vs. Bracket Notation

console.log(munjeong);

console.log(munjeong.lastName);
console.log(munjeong["lastName"]);

const nameKey = "Name";
console.log(munjeong["first" + nameKey]);
console.log(munjeong["last" + nameKey]);

// console.log(munjeong."last" + nameKey]); < 이렇게는 안 된다

const interestedIn = prompt(
  "What do you want to know about Munjeong? Choose between firstName, lastName, age, job, and friends"
);

if (munjeong[interestedIn]) {
  console.log(munjeong[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

munjeong.location = "South Korea";
munjeong["likes"] = "I-DLE";
console.log(munjeong);

// Challenge
// "Munjeong has 5 friends, and his best friend is called Heejin"

console.log(
  `${munjeong.firstName} has ${munjeong.friends.length} friends, and her best friend is called ${munjeong.friends[0]}`
);


// Object Methods
const munjeong = {
  firstName: "Munjeong",
  lastName: "Choi",
  birthYear: 1996,
  job: "web developer",
  friends: ["Heejin", "Hanna", "Shuhwa"],
  hasDriversLicense: false,

  //calcAge: function (birthYear) {
  //  return 2022 - birthYear;
  //}

  //calcAge: function () {
  //  console.log(this);
  //  return 2022 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      munjeong.job
    }, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(munjeong.calcAge());

console.log(munjeong.age);
console.log(munjeong.age);
console.log(munjeong.age);

// Challenge
// "Munjeong is a 26-year old web developer. and she has no driver's license"

console.log(munjeong.getSummary());

// Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remever: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Creat a 'calcBMI' method on each object to calculate the BMI ( the same method on both objects).
Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI.
Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and 1.95 m tall.


const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi < john.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
} else if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi} is higher than ${john.fullName}'s(${john.bmi})!)`
  );
} else {
  console.log("Draw");
} 

// Iteration: The for Loop

// console.log("Lifting weights repetition 1 🏋🏻‍♀️");
// console.log("Lifting weights repetition 2 🏋🏻‍♀️");
// console.log("Lifting weights repetition 3 🏋🏻‍♀️");
// console.log("Lifting weights repetition 4 🏋🏻‍♀️");
// console.log("Lifting weights repetition 5 🏋🏻‍♀️");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏻‍♀️`);
}


// Looping Arrays, Breaking and Continuing

const munjeong = [
  "Munjeong",
  "Choi",
  2022 - 1996,
  "web developer",
  ["Heejin", "Hanna", "Shuhwa"],
];
const types = [];

for (let i = 0; i < munjeong.length; i++) {
  // Reading from jonas array
  console.log(munjeong[i], typeof munjeong[i]);

  // filling types array
  // types[i] = typeof munjeong[i];
  types.push(typeof munjeong[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}
console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");

for (let i = 0; i < munjeong.length; i++) {
  if (typeof munjeong[i] !== "string") continue;

  console.log(munjeong[i], typeof munjeong[i]);
}

console.log("--- BREAK WITH NUMBER ---");

for (let i = 0; i < munjeong.length; i++) {
  if (typeof munjeong[i] === "number") break;

  console.log(munjeong[i], typeof munjeong[i]);
} 

// Looping Backwards and Loops in Loops

const munjeong = [
  "Munjeong",
  "Choi",
  2022 - 1996,
  "web developer",
  ["Heejin", "Hanna", "Shuhwa"],
];

// 0,1, ...,4
// 4, 3, ..., 0

for (let i = munjeong.length - 1; i >= 0; i--) {
  console.log(i, munjeong[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------Starting exercise ${exercise}`);

  for (rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋🏻‍♀️`);
  }
}


// The while Loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋🏻‍♀️`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋🏻‍♀️`);
  rep++;
}
// while loop is more versatile than for loop

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) {
    console.log("Loop is about to end...");
  }
}

// Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values 
2. Create empty arrays for the tips and the totals('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals array 😉


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    // sum = sum + arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/

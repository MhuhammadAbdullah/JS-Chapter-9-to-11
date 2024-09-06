// Assignment: USER INPUT & CONDITIONALSTATEMENT
// Question: 01

// var city = prompt("Please enter your city name:");

// if (city === "Karachi") {
//     alert("Welcome to the city of lights");
// } else {
//     alert("Welcome to " + city);
// }

// Question: 02

// var gender = prompt("Please enter your gender (Male/Female):");

// if (gender === "male") {
//     alert("Good Morning Sir");
// } else if (gender === "female") {
//     alert("Good Morning Ma'am");
// }

// Question: 03

// var color = prompt("Please enter the color of the road traffic signal:");

// color = color.signal();

// if (color === "red") {
//     alert("Must Stop");
// } else if (color === "yellow") {
//     alert("Ready to move");
// } else if (color === "green") {
//     alert("Move now");
// } else {
//     alert("Invalid color, please enter 'red', 'yellow', or 'green'");
// }

// Question: 04

// var remainingFuel = prompt("Please enter the remaining fuel in your car (in litres):");

// remainingFuel = parseFloat(remainingFuel);

// if (remainingFuel < 5) {
//     alert("Please refill the fuel in your car");
// } else {
//     alert("You have enough fuel in your car");
// }

// Question: 05

// a
// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }


// // b
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }

// // c
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }

// if (c === 13){
//     alert("condition 2 is true");
// }

// if (++c < 14){
//     alert("condition 3 is true");
// }

// if(c === 14){
//     alert("condition 4 is true");
// }

// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

// // e
// if (true){
//     alert("True");
// }

// if (false){
//     alert("False");
// }

// // f
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }


// Question: 06

// var subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
// var subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
// var subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
// var totalMarks = parseFloat(prompt("Enter total marks:"));

// var marksObtained = subject1 + subject2 + subject3;
// var percentage = (marksObtained / totalMarks) * 100;

// var grade;
// var remarks;

// if (percentage >= 80) {
//     grade = 'A-one';
//     remarks = 'Excellent';
// } else if (percentage >= 70) {
//     grade = 'A';
//     remarks = 'Very Good';
// } else if (percentage >= 60) {
//     grade = 'B';
//     remarks = 'Good';
// } else if (percentage >= 50) {
//     grade = 'C';
//     remarks = 'Average';
// } else {
//     grade = 'Fail';
//     remarks = 'Sorry';
// }

// document.write("<h2>Mark Sheet </h2>" +
// "---------------------------------<br>" +
// "Total Marks: " + totalMarks + "<br>" +
// "Marks Obtained: " + marksObtained + "<br>" +
// "Percentage: " + percentage.toFixed(2) + "%<br>" +
// "Grade: " + grade + "<br>" +
// "Remarks: " + remarks);


// Question: 07

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Sorry, try again!");
// }


// Question: 08

// var number = parseInt(prompt("Enter a number:"));

// if (number % 3 === 0) {
//     alert("The number is divisible by 3");
// } else {
//     alert("The number is not divisible by 3");
// }

// Question: 09

// var number = parseInt(prompt("Enter a number:"));

// if (number % 2 === 0) {
//     alert("The number is even");
// } else {
//     alert("The number is odd");
// }

// Question: 10

// var temperature = parseFloat(prompt("Enter the temperature:"));

// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     alert("The weather is cold.");
// } else {
//     alert("OMG! Today’s weather is so Cool.");
// }

// Question: 11

// var firstNumber = parseFloat(prompt("Enter the first number:"));
// var secondNumber = parseFloat(prompt("Enter the second number:"));

// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result;

// if (operation === '+') {
//     result = firstNumber + secondNumber;
// } else if (operation === '-') {
//     result = firstNumber - secondNumber;
// } else if (operation === '*') {
//     result = firstNumber * secondNumber;
// } else if (operation === '/') {
//     if (secondNumber === 0) {
//         alert("Error: Division by zero is not allowed.");
//         result = null;
//     } else {
//         result = firstNumber / secondNumber;
//     }
// } else if (operation === '%') {
//     result = firstNumber % secondNumber;
// } else {
//     alert("Invalid operation entered.");
//     result = null;
// }

// if (result !== null) {
//     alert("The result of " + firstNumber + " " + operation + " " + secondNumber + " is: " + result);
// }

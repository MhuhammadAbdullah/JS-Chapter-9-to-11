// Assignment: USER INPUT & CONDITIONALSTATEMENT
// Question: 01

// // User se city name input lene ke liye prompt ka use karte hain
// var city = prompt("Please enter your city name:");

// // Input ko lowercase mein convert karte hain taake comparison asaan ho
// if (city.toLowerCase() === "karachi") {
//     alert("Welcome to the city of lights");
// } else {
//     alert("Welcome to " + city);
// }

// Question: 02

// User se gender ka input lene ke liye prompt ka use karte hain
// var gender = prompt("Please enter your gender (male/female):");

// // Input ko lowercase mein convert karte hain taake comparison asaan ho
// if (gender.toLowerCase() === "male") {
//     alert("Good Morning Sir");
// } else if (gender.toLowerCase() === "female") {
//     alert("Good Morning Ma'am");
// } else {
//     alert("Invalid input, please enter 'male' or 'female'");
// }

// Question: 03

// User se traffic signal ka color input lene ke liye prompt ka use karte hain
// var color = prompt("Please enter the color of the road traffic signal:");

// // Input ko lowercase mein convert karte hain taake comparison asaan ho
// color = color.signal();

// // Color ke mutabiq message dikhane ke liye if-else ka use karte hain
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

// User se remaining fuel ka input lene ke liye prompt ka use karte hain
// var remainingFuel = prompt("Please enter the remaining fuel in your car (in litres):");

// // Input ko number mein convert karte hain
// remainingFuel = parseFloat(remainingFuel);

// // Fuel check karne ke liye if statement ka use karte hain
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
// // Output: "given condition for variable a is true"
// // Explanation: ++a increments a to 5, and 5 === 5 is true

// // b
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }
// // Output: No alert
// // Explanation: b++ increments b to 83 after comparison. So 82 === 83 is false

// // c
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// // Output: No alert
// // Explanation: c++ increments c to 13 after comparison. So 12 === 13 is false

// if (c === 13){
//     alert("condition 2 is true");
// }
// // Output: "condition 2 is true"
// // Explanation: c was incremented to 13 in the previous condition

// if (++c < 14){
//     alert("condition 3 is true");
// }
// // Output: "condition 3 is true"
// // Explanation: ++c increments c to 14. 14 < 14 is false, so no alert

// if(c === 14){
//     alert("condition 4 is true");
// }
// // Output: "condition 4 is true"
// // Explanation: c is 14

// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }
// // Output: "The cost equals"
// // Explanation: totalCost is equal to laborCost + materialCost, so condition is true

// // e
// if (true){
//     alert("True");
// }
// // Output: "True"
// // Explanation: The condition is true

// if (false){
//     alert("False");
// }
// // Output: No alert
// // Explanation: The condition is false

// // f
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }
// // Output: No alert
// // Explanation: In JavaScript, strings are compared lexicographically. "car" is not smaller than "cat"


// Question: 06

 // User se marks input lene ke liye prompt ka use karte hain
// var subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
// var subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
// var subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
// var totalMarks = parseFloat(prompt("Enter total marks:"));

// // Marks obtained aur percentage calculate karte hain
// var marksObtained = subject1 + subject2 + subject3;
// var percentage = (marksObtained / totalMarks) * 100;

// // Grade aur remarks determine karte hain
// var grade;
// var remarks;

// if (percentage >= 90) {
//     grade = 'A';
//     remarks = 'Excellent';
// } else if (percentage >= 80) {
//     grade = 'B';
//     remarks = 'Very Good';
// } else if (percentage >= 70) {
//     grade = 'C';
//     remarks = 'Good';
// } else if (percentage >= 60) {
//     grade = 'D';
//     remarks = 'Average';
// } else {
//     grade = 'F';
//     remarks = 'Fail';
// }

// // Result ko alert ke zariye show karte hain
// document.write("<h2>Mark Sheet </h2>" +
// "---------------------------------<br>" +
// "Total Marks: " + totalMarks + "<br>" +
// "Marks Obtained: " + marksObtained + "<br>" +
// "Percentage: " + percentage.toFixed(2) + "%<br>" +
// "Grade: " + grade + "<br>" +
// "Remarks: " + remarks);

// Question: 07

// Secret number ko ek variable mein store karte hain (1 se 10 ke beech)
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// // User se guess lene ke liye prompt ka use karte hain
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// // Check karte hain user ka guess secret number se match karta hai ya nahi
// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Sorry, try again!");
// }

// Question: 08

// User se number input lene ke liye prompt ka use karte hain
// var number = parseInt(prompt("Enter a number:"));

// // Check karte hain ke number 3 se divisible hai ya nahi
// if (number % 3 === 0) {
//     alert("The number is divisible by 3");
// } else {
//     alert("The number is not divisible by 3");
// }

// Question: 09

// User se number input lene ke liye prompt ka use karte hain
// var number = parseInt(prompt("Enter a number:"));

// // Check karte hain ke number even hai ya odd
// if (number % 2 === 0) {
//     alert("The number is even");
// } else {
//     alert("The number is odd");
// }

// Question: 10

// User se temperature input lene ke liye prompt ka use karte hain
// var temperature = parseFloat(prompt("Enter the temperature:"));

// // Temperature ke basis par message show karne ke liye if-else statements ka use karte hain
// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     alert("The weather is cold.");
// }

// Question: 11

// User se first number input lene ke liye prompt ka use karte hain
// var firstNumber = parseFloat(prompt("Enter the first number:"));

// // User se second number input lene ke liye prompt ka use karte hain
// var secondNumber = parseFloat(prompt("Enter the second number:"));

// // User se operation input lene ke liye prompt ka use karte hain
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// // Result variable ko initialize karte hain
// var result;

// // Operation ke basis par calculation perform karte hain
// if (operation === '+') {
//     result = firstNumber + secondNumber;
// } else if (operation === '-') {
//     result = firstNumber - secondNumber;
// } else if (operation === '*') {
//     result = firstNumber * secondNumber;
// } else if (operation === '/') {
//     // Division by zero check karte hain
//     if (secondNumber === 0) {
//         alert("Error: Division by zero is not allowed.");
//         result = null; // Result ko null set karte hain
//     } else {
//         result = firstNumber / secondNumber;
//     }
// } else if (operation === '%') {
//     result = firstNumber % secondNumber;
// } else {
//     alert("Invalid operation entered.");
//     result = null; // Result ko null set karte hain
// }

// // Result ko user ko display karte hain agar valid hai
// if (result !== null) {
//     alert("The result of " + firstNumber + " " + operation + " " + secondNumber + " is: " + result);
// }

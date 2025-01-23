

// 1. Variables and Data Types
const name = "John Doe";
const age = 25;
const isStudent = true;
const hobbies = ["reading", "coding", "traveling"];
const user = { name: "John", role: "Developer" };

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`User: ${JSON.stringify(user)} (Type: ${typeof user})`);

// 2. Operators: Simple Calculator
function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            alert("Invalid operation!");
            return;
    }

    document.getElementById("calculator-result").innerText = `Result: ${result}`;
}
calculator();

// 3. Functions: Greet User
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}
const greetingMessage = greetUser("John");
console.log(greetingMessage);


// 1. If Statements: Age Eligibility Check
function checkVotingEligibility() {
    const userAge = parseInt(prompt("Enter your age:"));
    const message = userAge >= 18
        ? "You are eligible to vote!"
        : "You are not eligible to vote.";
    document.getElementById("age-check").innerText = message;
}
checkVotingEligibility();

// 2. Loops: Display Numbers from 1 to 10
const numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}


// 1. Selecting and Modifying HTML Elements
// Change the text of the <h1> element
document.querySelector("h1").innerText = "JavaScript in Action!";

// Add a new <p> dynamically to the <div>
const dynamicDiv = document.getElementById("dynamic-content");
const newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicDiv.appendChild(newParagraph);

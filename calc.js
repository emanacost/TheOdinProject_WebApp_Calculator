console.log("Connected!");

// Four basic functions for four basic arithmetic operations

function add(a, b = 0) {
   return a + b;
};

function subtract(a, b = 0) {
    return a - b;
};

function multiply(a, b  = 1) {
    return a * b;
};

function divide(a, b) {
    if (b == 0) { 
        return "Can't divide by zero";
    }
    return a / b;
};


// Function to operate that will use previous functions
// to operate inputted numbers

function operate(a, operand, b) {
    if ( operand == '+' ) {
        return add(a, b);
    } else if ( operand == '-' ) {
        return subtract(a, b);
    } else if ( operand == 'x' ) {
        return multiply(a, b);
    } else if ( operand == '÷' ) {
        return divide(a, b);
    } 
};


// Function to populate the display screen of the screen
// when the numbers are pressed

let calcDisplay = document.querySelector("#calc-display");

let numbButton = document.querySelectorAll(".calc-numb-button");

numbButton.forEach(button => {
    button.onclick = () => {
        calcDisplay.textContent += button.textContent;
    };
});

// Add clear button functionality
let clearButton = document.querySelector("#calc-clear");
clearButton.onclick = () => {
    calcDisplay.textContent = '';
};

// Operation logic
let firstNumber = '';
let secondNumber = '';
let operator = '';

let operandButton = document.querySelectorAll(".calc-operator-button");
operandButton.forEach(button => {
    button.onclick = () => {
        operator = button.textContent;
        firstNumber = calcDisplay.textContent;
        calcDisplay.textContent = '';
    };
});

let equalButton = document.querySelector(".calc-equal-button");
equalButton.onclick = () => {
    secondNumber = calcDisplay.textContent;
    let result = operate(Number(firstNumber), operator, Number(secondNumber));
    calcDisplay.textContent = result;
    firstNumber = '';
    secondNumber = '';
    operator = '';
};
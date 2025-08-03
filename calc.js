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
        return console.log("Can't divide by zero")
    };
    return a / b;
};


// Function to operate that will use previous functions
// to operate inputted numbers

function operate(a, operand, b) {
    if ( operand == '+' ) {
        return add(a, b);
    } else if ( operand == '-' ) {
        return subtract(a, b);
    } else if ( operand == '*' ) {
        return multiply(a, b);
    } else if ( operand == '/' ) {
        return divide(a, b);
    } 
};
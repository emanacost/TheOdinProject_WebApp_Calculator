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
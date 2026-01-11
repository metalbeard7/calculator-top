let shouldResetScreen = false;
let a;
let b;
let operator;

// add function
let add = (a, b) => a + b;

// subtract function
let subtract = (a, b) => a - b;

// multiply function
let multiply = (a, b) => a * b;

// divide function
let divide = (a, b) => b === 0 ? "Try again!" : a / b;

// operate function
const operate = (a, b, operator) => {
    switch (operator) {
        case "+":
            return add(a, b);

        case "-":
            return subtract(a, b);

        case "X":
            return multiply(a, b);

        case "/":
            return divide(a, b);
        
    }
};




const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const calDisplay = document.getElementById('display');
const equalBtn = document.querySelectorAll('#equal-btn')

// display function
numberBtns.forEach((button) => {
    button.addEventListener('click', () => {

        if (shouldResetScreen === true) {
            calDisplay.textContent = "";
            shouldResetScreen = false;
            calDisplay.textContent += button.textContent;
        } else {
            calDisplay.textContent += button.textContent;
        }
    });
});

// operator button function
operatorBtns.forEach((button) => {
    button.addEventListener('click', () => {
        a = parseFloat(calDisplay.textContent);
        operator = button.textContent;
        shouldResetScreen = true;

    });
});

equalBtn.addEventListener('click', () => {
    b = parseFloat(calDisplay.textContent);
    let answer = calDisplay.textContent = operate(a, b, operator);
});

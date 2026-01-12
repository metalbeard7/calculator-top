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
    let result;
    switch (operator) {
        case "+":
            result = add(a, b);
                break;
        case "-":
            result = subtract(a, b);
                break;
        case "X":
            result = multiply(a, b);
                break;
        case "/":
            result = divide(a, b);
                break;
    };
    return round(result);
};

function round(num) {  
    let rounded = Math.round(num * 100000) / 100000;
    return rounded;
};


const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const calDisplay = document.getElementById('display');
const equalBtn = document.querySelector('#equal-btn');
const decBtn = document.querySelector('#decimal-btn');
const clearBtn = document.querySelector('#clear-btn');
const backBtn = document.querySelector('#back-btn')


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
        if (operator !== "" && a !== undefined && shouldResetScreen === false) {
            b = parseFloat(calDisplay.textContent);
            calDisplay.textContent = operate(a, b, operator);
            a = parseFloat(calDisplay.textContent);
            operator = button.textContent;
            shouldResetScreen = true;
        } else {
            a = parseFloat(calDisplay.textContent);
            operator = button.textContent;
            shouldResetScreen = true;
        }
    

    });
});

decBtn.addEventListener('click', (button) => {
    if (shouldResetScreen === true) {
        calDisplay.textContent = "0.";
        shouldResetScreen = false;
    } else {
        if (!calDisplay.textContent.includes(".")) {
            calDisplay.textContent += ".";
        }
    }
});

equalBtn.addEventListener('click', () => {
    b = parseFloat(calDisplay.textContent);
    calDisplay.textContent = operate(a, b, operator);
    shouldResetScreen = true;
    operator = "";
});

clearBtn.addEventListener('click', () => {
    calDisplay.textContent = "0";
    a = undefined;
    b = undefined;
    operator = "";
    shouldResetScreen = true;
    
});

backBtn.addEventListener('click', () => {
    calDisplay.textContent = calDisplay.textContent.slice(0, -1);
    if (calDisplay.textContent === "") {
        calDisplay.textContent = "0";
        shouldResetScreen = true;
    };
});
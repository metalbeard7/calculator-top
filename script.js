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
let divide = (a, b) => a / b;

// operate function
const operate = (a, b, operator) => operator(a, b);
let result = operate(a, b, operator);


// display function
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const calDisplay = document.getElementById('display');


numberBtns.forEach((button) => {
    button.addEventListener('click', () => {
        calDisplay.textContent += button.textContent;
    });
});


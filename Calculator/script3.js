// Get the calculator screen element
const calculatorScreen = document.querySelector('.screen');

// Update the calculator screen with the given number
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

// Variables to track calculator state
let prevInput = '0';
let calculationOperator = '';
let currentInput = '0';
let shouldClearScreen = false;

// Function to handle number input
const inputNumber = (number) => {
  if (currentInput === '0' || shouldClearScreen) {
    currentInput = number;
    shouldClearScreen = false;
  } else {
    currentInput = currentInput + number;
  }
};

// Get the number buttons and attach click event listeners
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    inputNumber(event.target.value);
    updateScreen(currentInput);
  });
});

// Function to handle operator input
const inputOperator = (operator) => {
  prevInput = currentInput;
  calculationOperator = operator;
  updateScreen(operator);
  currentInput = '0';
};

// Get the operator buttons and attach click event listeners
const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    inputOperator(event.target.value);
  });
});

// Function to perform the calculation
const calculate = () => {
  let result = 0;
  switch (calculationOperator) {
    case '+':
      result = parseFloat(prevInput) + parseFloat(currentInput);
      break;
    case '-':
      result = parseFloat(prevInput) - parseFloat(currentInput);
      break;
    case '*':
      result = parseFloat(prevInput) * parseFloat(currentInput);
      break;
    case '/':
      result = parseFloat(prevInput) / parseFloat(currentInput);
      break;
    case '%':
      result = (parseFloat(prevInput) / 100) * parseFloat(currentInput);
      break;
    default:
      return;
  }
  currentInput = result.toString();
  calculationOperator = '';
  prevInput = '0';
  shouldClearScreen = true;
};

// Get the equal sign button and attach a click event listener
const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click', () => {
  calculate();
  updateScreen(currentInput);
});

// Function to handle decimal input
const inputDecimal = () => {
  if (!currentInput.includes('.')) {
    currentInput += '.';
  }
};

// Get the decimal button and attach a click event listener
const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', () => {
  inputDecimal();
  updateScreen(currentInput);
});

// Function to clear all calculator state
const clearAll = () => {
  prevInput = '0';
  calculationOperator = '';
  currentInput = '0';
  shouldClearScreen = false;
};

// Get the clear button and attach a click event listener
const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener('click', () => {
  clearAll();
  updateScreen(currentInput);
});
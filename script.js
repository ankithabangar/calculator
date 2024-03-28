let operand1 = "";
let operator = "";
let operand2 = "";
let displayValue = "";
let result = 0;

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const equals = document.querySelector(".equals");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const point = document.querySelector(".point");
const allClear = document.querySelector(".allClear");

point.addEventListener("click", () => {
  updateDisplay(".");
});

numbers.forEach((number) =>
  number.addEventListener("click", function () {
    updateDisplay(number.textContent);
  })
);

operators.forEach((operatorType) => {
  operatorType.addEventListener("click", () => {
    if (operand1 !== "" && operator !== "" && operand2 !== "") {
      clearDisplay();
      operate(operand1, operator, operand2);
      console.log("Operand 1 when operator is clicked= ", operand1);
      console.log("The operator when operator is clicked= ", operator);
      operand2 = "";
    }
    operator = operatorType.textContent;
    console.log("Operand 1 when operator is clicked= ", operand1);
    console.log("The operator when operator is clicked= ", operator);
    clearDisplay();
  });
});

function updateDisplay(number) {
  displayValue += number;
  display.textContent = displayValue;
  if (displayValue.includes(".")) point.disabled = true;
  else point.disabled = false;
  if (operator !== "") {
    //So only during the first time when I enter the number it will be
    //considered as operand1 and the rest of the time it will be operand2
    operand2 = Number(displayValue);
    console.log("operand2= ", operand2);
  } else {
    operand1 = Number(displayValue);
    console.log("operand1= ", operand1);
  }
}
function round(num) {
  return Math.round(num * 100) / 100;
}

function add(num1, num2) {
  result = round(num1 + num2);
  console.log("add= ", result);
  updateDisplay(result);
  operand1 = result;
  operator = "";
  return result;
}

function subtract(num1, num2) {
  result = round(num1 - num2);
  console.log("subtract= ", result);
  updateDisplay(result);
  operand1 = result;
  operator = "";
  return result;
}

function multiply(num1, num2) {
  result = round(num1 * num2);
  console.log("multiply", result);
  updateDisplay(result);
  operand1 = result;
  operator = "";
  return result;
}

function divide(num1, num2) {
  if (num2 === 0) {
    display.textContent = "LMAO";
    result = 0;
  } else result = round(num1 / num2);
  console.log("divide", result);
  updateDisplay(result);
  operand1 = result;
  operator = "";
  return result;
}

function modulus(num1, num2) {
  result = round(num1 % num2);
  console.log("modulus", result);
  updateDisplay(result);
  operand1 = result;
  operator = "";
  return result;
}

function operate(operand1, operator, operand2) {
  switch (operator) {
    case "+":
      add(operand1, operand2);
      break;
    case "-":
      subtract(operand1, operand2);
      break;
    case "*":
      multiply(operand1, operand2);
      break;
    case "/":
      divide(operand1, operand2);
      break;
    case "%":
      modulus(operand1, operand2);
      break;
  }
}
function clearDisplay() {
  displayValue = "";
}

function clearValues() {
  operand1 = "";
  operand2 = "";
  operator = "";
  displayValue = "";
  display.textContent = displayValue;
  console.log("operand1", operand1, "operand2", operand2, "operator", operator);
}

equals.addEventListener("click", () => {
  clearDisplay();
  operate(operand1, operator, operand2);
  console.log("Operand 1 when operator is clicked= ", operand1);
  console.log("Operand2 when = is clicked= ", operand2);
  console.log("The operator when operator is clicked= ", operator);
  operand2 = "";
  clearDisplay();
});

clear.addEventListener("click", () => {
  if (operand1 !== "" && operator !== "" && operand2 !== "") {
    operand2 = "";
    displayValue = "";
    display.textContent = displayValue;
  } else clearValues();
});
allClear.addEventListener("click", () => clearValues());

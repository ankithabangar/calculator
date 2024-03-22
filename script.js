let operand1;
let operator;
let operand2;
const number = document.querySelector(".number");

function add(num1, num2) {
  let result = 0;
  result = parseInt(num1 + num2);
  console.log("add= ", result);
  return result;
}

function subtract(num1, num2) {
  let result = 0;
  result = parseInt(num1 - num2);
  console.log("subtract= ", result);
  return result;
}

function multiply(num1, num2) {
  let result = 0;
  result = parseInt(num1 * num2);
  console.log("multiply", result);
  return result;
}

function divide(num1, num2) {
  let result = 0;
  result = parseInt(num1 / num2);
  console.log("divide", result);
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
  }
}

function showNumberDisplay() {}

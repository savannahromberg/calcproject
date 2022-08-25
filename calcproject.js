function multiply(a, b) {
    return a * b;
};

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    num1 = Number(a);
    num2 = Number(b);
    switch (operator) {
      case 'add':
        return add(num1, num2);
        break;
      case 'subtract':
        return subtract(num1, num2);
        break;
      case 'multiply':
        return multiply(num1, num2);
        break;
      case 'divide':
        return divide(num1, num2);
    }
};
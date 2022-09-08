const display = document.getElementById('display')

function calculate() {

//nums 0-9
  const buttonZero = document.getElementById('Num0');
  buttonZero.addEventListener('click', () => {
    //store num
    const zero = 0;
    display.innerText = zero;
  });
  const buttonOne = document.getElementById('Num1');
  buttonOne.addEventListener('click', () => {
    const one = 1;
    display.innerText = one;
    //store num
  });
  const buttonTwo = document.getElementById('Num2');
  buttonTwo.addEventListener('click', () => {
    //store num
    const two = 2;
    display.innerText = two;
  });
  const buttonThree = document.getElementById('Num3');
  buttonThree.addEventListener('click', () => {
    //store num
    const three = 3;
    display.innerText = three;
  });
  const buttonFour = document.getElementById('Num4');
  buttonFour.addEventListener('click', () => {
    //store num
    const four = 4;
    display.innerText = four;
  });
  const buttonFive = document.getElementById('Num5');
  buttonFive.addEventListener('click', () => {
    //store num
    const five = 5;
    display.innerText = five;
  });
  const buttonSix = document.getElementById('Num6');
  buttonSix.addEventListener('click', () => {
    //store num
    const six = 6;
    display.innerText = six;
  });
  const buttonSeven = document.getElementById('Num7');
  buttonSeven.addEventListener('click', () => {
    //store num
    const seven = 7;
    display.innerText = seven;
  });
  const buttonEight = document.getElementById('Num8');
  buttonEight.addEventListener('click', () => {
    //store num
    const eight = 8;
    display.innerText = eight;
  });
  const buttonNine = document.getElementById('Num9');
  buttonNine.addEventListener('click', () => {
    //store num
    const nine = 9;
    display.innerText = nine;
  });




//math fx buttons and housekeeping buttons
  const buttonClear = document.getElementById('CLEAR');
  buttonClear.addEventListener('click', () => {
   // array.remove(); //to remove the stored arrays
    //clear stored numbers, display & fxs
  });
  const buttonDelete = document.getElementById('DELETE');
  buttonDelete.addEventListener('click', () => {
    //remove last available button click
  });
  const buttonSub = document.getElementById('Subtract');
  buttonSub.addEventListener('click', () => {
    //perform fx and display calculated #
  });
  const buttonMult = document.getElementById('Multiply');
  buttonMult.addEventListener('click', () => {
    //perform fx and display calculated #
  });
  const buttonDiv = document.getElementById('Divide');
  buttonDiv.addEventListener('click', () => {
    //perform fx and display calculated #
  });
  const buttonDec = document.getElementById('Decimal');
  buttonDec.addEventListener('click', () => {
    //make number a decimal
    display.innerText = buttonDec;
  });
  const buttonSum = document.getElementById('Sum');
  buttonSum.addEventListener('click', () => {
    //perform fx and display calculated #
  });
  const buttonEqual = document.getElementById('Equal');
  buttonEqual.addEventListener('click', () => {
    //perform fx and display calculated #
    //display.innerText = //result of math fxs
  });



//math functions
  function multiply(a, b) {return a * b;};

  function add(a, b) {return a + b;};

  function subtract(a, b) {return a - b;};

  function divide(a, b) {return a / b;};

//how to make a function for EQUAL??????
//do i need to add 'c' to all of the fxs? like a + b = c?



//WHEN a number button, a fx button, and another # btn are clicked, run OPERATE
  function operate(operator, a, b) {
      num1 = Number(a);
      num2 = Number(b);
      switch (operator) {
        case 'add':
          display.innerText = add(num1, num2);
          break;
        case 'subtract':
          display.innerText = subtract(num1, num2);
          break;
        case 'multiply':
          display.innerText = multiply(num1, num2);
          break;
        case 'divide':
          display.innerText = divide(num1, num2);
      }
  };

};

calculate();
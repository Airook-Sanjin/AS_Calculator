const buttonIds = [
  "clear",
  "delete",
  "exponent",
  "divide",
  "seven",
  "eight",
  "nine",
  "multiply",
  "four",
  "five",
  "six",
  "minus",
  "one",
  "two",
  "three",
  "plus",
  "zero",
  "equal",
  "dot",
  "split",
  "radic",
  "sqr",
  "dot",
  "percent",
  "equal"
];
const button = {};
buttonIds.forEach((id) => {
  button[id] = document.getElementById(id);
});
const split = document.getElementById("split");
const prenumber = document.createElement("p");
const numberInp = document.getElementById("number");
prenumber.style.color = "hsl(0,0%,80%)";

let clicked = false;
var firstNumber = [];
var secondNumber = [];

function numberButtonClick(number) {
  if (!clicked) {
    firstNumber.push(number);
    numberInp.innerHTML = firstNumber.join("");
  } else if (clicked) {
    secondNumber.push(number);
    numberInp.innerHTML = secondNumber.join("");
  }
}
function operatorButtonClick(op) {
  if (!clicked) {
    operator = op;
    switch (operator) {
      case "+":
      case "-":
      case "÷":
      case "*":
        prenumber.innerHTML = firstNumber.join("") + " " + operator;
        split.appendChild(prenumber);
        numberInp.innerHTML = "";
        clicked = true;
        break;
    }
  }
}

button.one.addEventListener("click", function () {
  numberButtonClick("1");
});

button.two.addEventListener("click", function () {
  numberButtonClick("2");
});

button.three.addEventListener("click", function () {
  numberButtonClick("3");
});

button.four.addEventListener("click", function () {
  numberButtonClick("4");
});

button.five.addEventListener("click", function () {
  numberButtonClick("5");
});

button.six.addEventListener("click", function () {
  numberButtonClick("6");
});

button.seven.addEventListener("click", function () {
  numberButtonClick("7");
});

button.eight.addEventListener("click", function () {
  numberButtonClick("8");
});

button.nine.addEventListener("click", function () {
  numberButtonClick("9");
});
button.dot.addEventListener("click", function () {
  numberButtonClick(".");
});
button.zero.addEventListener("click", function () {
  numberButtonClick("0");
});

button.clear.addEventListener("click", function () {
  firstNumber.splice(0);
  secondNumber.splice(0);
  clicked = false;
  numberInp.innerHTML = firstNumber;
  prenumber.innerHTML = secondNumber;
});

button.radic.addEventListener("click", function () {
  let num1 = Number(firstNumber.join(""));
  switch (true) {
    case num1 >= 0:
      let sqrtresult = Math.sqrt(num1);
      prenumber.innerHTML = "√(" + firstNumber.join("") + ") = ";
      split.appendChild(prenumber);
      numberInp.innerHTML = sqrtresult.toString();
      firstNumber = [sqrtresult.toString()];
      secondNumber = [];
      clicked = false;
      break;
    case !clicked:
      numberInp.innerHTML = "error";
    default:
      numberInp.innerHTML = "error";
  }
});
button.sqr.addEventListener("click", function () {
  let num1 = Number(firstNumber.join(""));
  switch (true) {
    case num1 >= 0:
      let sqrsum = num1 * num1;

      prenumber.innerHTML = "sqr (" + firstNumber.join("") + ") = ";
      split.appendChild(prenumber);
      numberInp.innerHTML = sqrsum.toString();
      firstNumber = [sqrsum.toString()];
      secondNumber = [];
      clicked = false;
      break;
    default:
      numberInp.innerHTML = "error";
      break;
  }
});
button.percent.addEventListener("click", function () {
  let num1 = Number(firstNumber.join(""));
  switch (true) {
    case num1 >= 0:
      let percentsum = 0.01 * num1;
      prenumber.innerHTML = percentsum.toString();
      firstNumber = [percentsum.toString()];
      secondNumber = [];
      numberInp.innerHTML = firstNumber;
      firstNumber = [];
      clicked = false;
      break;
    default:
      numberinp.innerHTML = "error";
  }
});

button.equal.addEventListener("click", function () {
  let num1 = Number(firstNumber.join(""));
  let num2 = Number(secondNumber.join(""));
  let sum;
  switch (operator) {
    case "+":
      sum = num1 + num2;
      break;
    case "-":
      sum = num1 - num2;
      break;
    case "*":
      sum = num1 * num2;
      break;
    case "÷":
      sum = num1 / num2;
      break;
    default:
      sum = "error";
  }
  prenumber.innerHTML = num1 + " " + operator + " " + num2 + " " + "=";
  numberInp.innerHTML = sum.toString();
});
button.plus.addEventListener("click", function () {
  operatorButtonClick("+");
});
button.minus.addEventListener("click", function () {
  operatorButtonClick("-");
});
button.multiply.addEventListener("click", function () {
  operatorButtonClick("*");
});
button.divide.addEventListener("click", function () {
  operatorButtonClick("÷");
});

button.delete.addEventListener("click", function () {
  if (!clicked) {
    firstNumber.pop();
    firstNumber = firstNumber.join(``);
    number.innerHTML = firstNumber;
    firstNumber = firstNumber.split("");
  } else if (clicked) {
    secondNumber.pop();
    secondNumber = secondNumber.join(``);
    number.innerHTML = secondNumber;
    secondNumber = secondNumber.split("");
  }
});
// calculator();

// function calculator() {
//   operator = (prompt("What do you want to do?  '+', '-', '/', '*'"));
//   result = mathy(operator)
//   console.log(result);
// }
// function mathy(operator) {
//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//   }
//   return result;
// }

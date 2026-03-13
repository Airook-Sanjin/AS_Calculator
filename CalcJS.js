
const buttonCont = document.querySelector(".buttons");
const lightDark = document.querySelector(".light-dark");

const split = document.getElementById("split");
const prenumber = document.createElement("p");
const numberInp = document.getElementById("number");
prenumber.style.color = "var(--prenumber-text)";


const setTheme=(theme)=> {
  document.documentElement.style.colorScheme=theme;
  
  
  if(theme === 'dark'){
    document.documentElement.style.colorScheme='dark';
    lightDark.innerHTML = "Light Mode"
  }
  else{
    lightDark.innerHTML = "Dark Mode"
  }
  localStorage.setItem('theme',theme);
}

const loadTheme=()=>{
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme){
    setTheme(savedTheme);
  }
};
lightDark.addEventListener("click",(event)=>{
  if(!event.target.matches("button")) return;
  let value = event.target.innerHTML;
  if (value === "Light Mode"){
    setTheme('light')
    // event.target.innerHTML = "Dark Mode"
  }
  else if (value === "Dark Mode"){
    setTheme('dark')
    // event.target.innerHTML = "Light Mode"
  }
});
loadTheme();

let justCalced=false;
let clicked = false;
let firstNumber = [];
let secondNumber = [];
let operator;

function equalState(sum){
  firstNumber=[sum];
  secondNumber=[];
  operator="";
  clicked = false;
  
}
function numberButtonClick(number) {
  if(justCalced){
    firstNumber=[];
    numberInp.innerHTML=firstNumber;
  }
  justCalced=false;

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
        if(justCalced){
            justCalced=false;
          }
        prenumber.innerHTML = firstNumber.join("") + " " + op;
        split.appendChild(prenumber);
        numberInp.innerHTML = "";
        clicked = true;
      
  }
}

buttonCont.addEventListener("click",(event)=>{
  if(!event.target.matches("button")) return;
  const value = event.target.innerText;
  let num1;
  let num2;
  let sum;
  
  switch (value) {
      case"1":
      case"2":
      case"3":
      case"4":
      case"5":
      case"6":
      case"7":
      case"8":
      case"9":
      case"0":
        numberButtonClick(value);
        break;
        case".":
        if(!clicked){
          if(!firstNumber.includes(".")){
            numberButtonClick(value);
          }
        }
        else{
          if(!secondNumber.includes(".")){
            numberButtonClick(value);
          }
        }
        break;
      case "+":
        operatorButtonClick("+");
        break;
      case "-":
        operatorButtonClick("-");
        break;
      case "x":
        operatorButtonClick("*");
        break;
      case "/":
        operatorButtonClick("/");
        break;
      case "=":
        if(!operator){
          sum = "error";
          break;
        }
        num1 = Number(firstNumber.join(""));
        num2 = Number(secondNumber.join(""));
        
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
            if(num2!=0){
            sum = num1 / num2;
            }else{sum="Error"}
            break;
          default:
            sum = "error";
        }
          sum=sum.toString()
          prenumber.innerHTML = num1 + " " + operator + " " + num2 + " " + "=";
          numberInp.innerHTML = sum;
          equalState(sum);
          justCalced=true;
        break;
        case "AC":
        firstNumber.splice(0);
        secondNumber.splice(0);
        clicked = false;
        justCalced=false;
        operator="";
        numberInp.innerHTML = "";
        prenumber.innerHTML = "";
        break;
      case "%":
        if(!clicked){
          num1 = Number(firstNumber.join(""));
        switch (true) {
          case num1 >= 0:
            let percentsum = 0.01 * num1;
            prenumber.innerHTML = percentsum.toString();
            firstNumber = [percentsum.toString()];
            secondNumber = [];
            numberInp.innerHTML = firstNumber.join("");
            clicked = false;
            break;
          default:
            numberInp.innerHTML = "error";
        }
        justCalced=true;
        }else{
        num2 = Number(secondNumber.join(""));
        switch (true) {
          case num2 >= 0:
            let percentsum = 0.01 * num2;
            
            secondNumber = [percentsum.toString()]
            numberInp.innerHTML = secondNumber.join("");
            break;
          default:
            numberInp.innerHTML = "error";
        }
      }
        break;
      case "C":
        if (!clicked) {
          firstNumber.pop();
          numberInp.innerHTML = firstNumber.join(``);
         
        } else if (clicked) {
          secondNumber.pop();
          numberInp.innerHTML = secondNumber.join(``);
          
        }
        break;

    }
});



// button.radic.addEventListener("click", function () {
//   let num1 = Number(firstNumber.join(""));
//   switch (true) {
//     case num1 >= 0:
//       let sqrtresult = Math.sqrt(num1);
//       prenumber.innerHTML = "√(" + firstNumber.join("") + ") = ";
//       split.appendChild(prenumber);
//       numberInp.innerHTML = sqrtresult.toString();
//       firstNumber = [sqrtresult.toString()];
//       secondNumber = [];
//       clicked = false;
//       break;
//     case !clicked:
//       numberInp.innerHTML = "error";
//     default:
//       numberInp.innerHTML = "error";
//   }
// });
// button.sqr.addEventListener("click", function () {
//   let num1 = Number(firstNumber.join(""));
//   switch (true) {
//     case num1 >= 0:
//       let sqrsum = num1 * num1;

//       prenumber.innerHTML = "sqr (" + firstNumber.join("") + ") = ";
//       split.appendChild(prenumber);
//       numberInp.innerHTML = sqrsum.toString();
//       firstNumber = [sqrsum.toString()];
//       secondNumber = [];
//       clicked = false;
//       break;
//     default:
//       numberInp.innerHTML = "error";
//       break;
//   }
// });

const firstRowEl = document.querySelector(".first-row");
const secondRowEl = document.querySelector(".second-row");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");
const decimalDotBtn = document.querySelector(".decimal");
const clearBtn = document.querySelector(".clearBtn");
const backspaceBtn = document.querySelector(".backspace");

for (let i = 0; i < numberBtn.length; i++) {
  secondRowEl.innerHTML = "";
  numberBtn[i].addEventListener("click", function () {
    secondRowEl.innerHTML += numberBtn[i].value;
  });
}
decimalDotBtn.addEventListener("click", function () {
  if (secondRowEl.innerHTML.includes(".")) return;
  secondRowEl.innerHTML += decimalDotBtn.value;
});
for (let i = 0; i < operatorBtn.length; i++) {
  operatorBtn[i].addEventListener("click", function () {
    if (firstRowEl.innerHTML.includes("+", "-", "*", "/")) return;
    firstRowEl.innerHTML += secondRowEl.innerHTML + operatorBtn[i].value;
    secondRowEl.innerHTML = "";
  });
}
equalBtn.addEventListener("click", function () {
  let firstNumber = parseFloat(firstRowEl.innerHTML);
  let secondNumber = parseFloat(secondRowEl.innerHTML);
  if (isNaN(firstNumber) || isNaN(secondNumber)) return;
  firstRowEl.innerHTML = firstRowEl.innerHTML + secondRowEl.innerHTML;
  secondRowEl.innerHTML = "";

  if (firstRowEl.innerHTML.includes("+")) {
    secondRowEl.innerHTML += firstNumber + secondNumber;
    firstRowEl.innerHTML = secondRowEl.innerHTML;
    firstRowEl.innerHTML = "";
    return;
  }
  if (firstRowEl.innerHTML.includes("-")) {
    secondRowEl.innerHTML += firstNumber - secondNumber;
    firstRowEl.innerHTML = secondRowEl.innerHTML;
    firstRowEl.innerHTML = "";
    return;
  }
  if (firstRowEl.innerHTML.includes("*")) {
    secondRowEl.innerHTML += firstNumber * secondNumber;
    firstRowEl.innerHTML = secondRowEl.innerHTML;
    firstRowEl.innerHTML = "";
    return;
  }
  if (firstRowEl.innerHTML.includes("/")) {
    secondRowEl.innerHTML += firstNumber / secondNumber;
    firstRowEl.innerHTML = secondRowEl.innerHTML;
    firstRowEl.innerHTML = "";
    return;
  }
});
clearBtn.addEventListener("click", function () {
  firstRowEl.innerHTML = "";
  secondRowEl.innerHTML = "";
});
backspaceBtn.addEventListener("click", function () {
  secondRowEl.innerHTML = secondRowEl.innerHTML.slice(0, -1);
});

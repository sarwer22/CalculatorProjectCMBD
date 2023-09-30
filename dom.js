let text = document.getElementById("text");
text.innerText = "Calculatro:)";

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");

// addition:
let addBtn = document.getElementById("add");
addBtn.addEventListener("click", () => {
  result.innerText = parseInt(num1.value) + parseInt(num2.value);
});
// subtract:
let subtractBtn = document.getElementById("subtract");
subtractBtn.addEventListener("click", () => {
  result.innerText = parseInt(num1.value) - parseInt(num2.value);
});
// division:
let divisionBtn = document.getElementById("division");
divisionBtn.addEventListener("click", () => {
  result.innerText = parseInt(num1.value) / parseInt(num2.value);
});
// multiplication:
let multiplicationBtn = document.getElementById("multiplication");
multiplicationBtn.addEventListener("click", () => {
  result.innerText = parseInt(num1.value) * parseInt(num2.value);
});
// modulus:
let modulusBtn = document.getElementById("modulus");
modulusBtn.addEventListener("click", () => {
  result.innerText = parseInt(num1.value) % parseInt(num2.value);
});
// exponentiation:
let exponentiationBtn = document.getElementById("exponentiation");
exponentiationBtn.addEventListener("click", () => {
  result.innerText = parseInt(num1.value) ** parseInt(num2.value);
});

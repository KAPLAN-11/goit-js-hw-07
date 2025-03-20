function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destoryAllBoxs() {
  allBox.innerHTML = "";
}

function createBoxes(amount) {
  destoryAllBoxs();
  let initialSize = 30;
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${initialSize}px`;
    box.style.height = `${initialSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    allBox.appendChild(box);
    initialSize += 10;
  }
}

// Sellectors
const controls = document.querySelector("#controls");
const inputNumber = document.querySelector("#inputNumber");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const allBox = document.querySelector("#boxes");

// Eventlerin handlerları
function createHandler() {
  const amount = parseInt(inputNumber.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNumber.value = "";
  }
}
function destroyHandler() {
  destoryAllBoxs();
}

// Event eklemeleri
createButton.addEventListener("click", createHandler);
destroyButton.addEventListener("click", destroyHandler);

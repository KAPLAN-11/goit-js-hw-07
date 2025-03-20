function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function writeFirstColor() {
  colorText.innerHTML = "#fafafa";
}

function buttonHandler(event) {
  let randomHexColor = getRandomHexColor();
  console.log("Handler'ın içi: ", randomHexColor);
  document.body.style.backgroundColor = randomHexColor;
  // updateText();
  colorText.innerHTML = randomHexColor;
}

// ----------------------------------------------------------------
const colorText = document.querySelector(".color");
writeFirstColor();
const changeColorButton = document.querySelector(".change-color");
changeColorButton.addEventListener("click", buttonHandler);

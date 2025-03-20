const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", () => {
  let names = input.value.trim();

  if (names === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = names;
  }
});

const tamForm = document.querySelector(".login-form");
const email = document.querySelector("#emailID");
const password = document.querySelector("#passwordID");
const submit = document.querySelector("#submitButtonID");

const formValues = {
  email: "",
  password: "",
};

function submitForm() {
  console.log("Form submitted successfully");
  formValues.email = email.value;
  formValues.password = password.value;
  console.log(formValues);
  tamForm.reset();
}

gonder.addEventListener("click", (event) => {
  event.preventDefault();

  if (password.value === "" || email.value === "") {
    alert("Fields must be filled!");
  } else if (!email.value.match("@")) {
    alert("Please enter a valid email!");
  } else {
    submitForm();
  }
});

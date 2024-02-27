const form = document.getElementById("Login_form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
const validateInputs = () => {
  let checkEmail =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required!");
  } else if (!emailValue.match(checkEmail)) {
    setError(email, "Provide a valid Email address!");
  } else {
    setSuccess(email);
  }
  if (passwordValue === "") {
    setError(password, "Password is required!");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at 8 characters.");
  } else {
    setSuccess(password);
  }
};

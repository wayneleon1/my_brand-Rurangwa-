const form = document.getElementById("Register");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const password = document.getElementById("password");
const email = document.getElementById("email");
const photo = document.getElementById("photo");
const role = document.getElementById("role");

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
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const passwordValue = password.value.trim();
  const emailValue = email.value.trim();
  const photoValue = photo.value.trim();
  const roleValue = role.value.trim();
  let checkEmail =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (firstNameValue === "") {
    setError(firstName, "First Name is required!");
  } else {
    setSuccess(firstName);
  }
  if (lastNameValue === "") {
    setError(lastName, "Last Name is required!");
  } else {
    setSuccess(lastName);
  }
  if (passwordValue === "") {
    setError(password, "Password  is required!");
  } else {
    setSuccess(password);
  }

  if (emailValue === "") {
    setError(email, "email is required!");
  } else if (!emailValue.match(checkEmail)) {
    setError(email, "Provide a valid Email address!");
  } else {
    setSuccess(email);
  }
  if (photoValue === "") {
    setError(photo, "Photo  is required!");
  } else {
    setSuccess(photo);
  }
  if (roleValue === "") {
    setError(role, "role is required!");
  } else {
    setSuccess(role);
  }
};

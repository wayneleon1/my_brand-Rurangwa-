const form = document.getElementById("Login_form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userAuthentication();
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
// validate function
const validateInputs = () => {
  let checkEmail =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required!");
    return false;
  } else if (!emailValue.match(checkEmail)) {
    setError(email, "Provide a valid Email address!");
    return false;
  } else {
    setSuccess(email);
  }
  if (passwordValue === "") {
    setError(password, "Password is required!");
    return false;
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at 8 characters.");
    return false;
  } else {
    setSuccess(password);
  }
  return true;
};

// Login Function
const userAuthentication = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (validateInputs() == true) {
    // Get the stored users from local storage
    let storedUsers = JSON.parse(localStorage.getItem("Users"));
    // Check if the entered email exists in stored users
    let user = storedUsers.find(function (u) {
      return u.email === email;
    });

    // Check if the user exists and the password matches
    if (user && user.password === password) {
      alert("Login successful!");

      localStorage.setItem("isLoggedIn", true);
      window.location.href = "../admin/dashboard.html";
    } else {
      alert("Invalid email or password. Please try again.");
      form.reset();
    }
  }
};

document
  .getElementById("Login_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });

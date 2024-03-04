const form = document.getElementById("Register");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const password = document.getElementById("password");
const email = document.getElementById("email");
const photo = document.getElementById("photo");
const role = document.getElementById("role");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addData();
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
    return false;
  } else {
    setSuccess(firstName);
  }
  if (lastNameValue === "") {
    setError(lastName, "Last Name is required!");
    return false;
  } else {
    setSuccess(lastName);
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
  if (emailValue === "") {
    setError(email, "email is required!");
    return false;
  } else if (!emailValue.match(checkEmail)) {
    setError(email, "Provide a valid Email address!");
    return false;
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
    return false;
  } else {
    setSuccess(role);
  }
  return true;
};

function addData() {
  if (validateInputs() == true) {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const photo = document.getElementById("photo").files[0];
    const role = document.getElementById("role").value;

    // / Read the file as a data URL
    const reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onload = function () {
      const photoData = reader.result;

      // Save the Base64 data to local storage
      localStorage.setItem("photo", photoData);

      let Users;
      if (localStorage.getItem("Users") == null) {
        Users = [];
      } else {
        Users = JSON.parse(localStorage.getItem("Users"));
      }

      Users.push({
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email,
        photo: photoData,
        role: role,
        timestamp: new Date().toDateString(),
      });

      localStorage.setItem("Users", JSON.stringify(Users));
      document.getElementById("Register").reset();
      alert("User registered successfully!");
    };
  }
}

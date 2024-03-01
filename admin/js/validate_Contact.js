const form = document.getElementById("contact-form");
const names = document.getElementById("names");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

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
  const namesValue = names.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();
  let checkEmail =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (namesValue === "") {
    setError(names, "Names is required!");
    return false;
  } else {
    setSuccess(names);
  }
  if (emailValue === "") {
    setError(email, "Email is required!");
  } else if (!emailValue.match(checkEmail)) {
    setError(email, "Provide a valid Email address!");
    return false;
  } else {
    setSuccess(email);
  }

  if (subjectValue === "") {
    setError(subject, "Subject is required!");
    return false;
  } else {
    setSuccess(subject);
  }

  if (messageValue === "") {
    setError(message, "Message is required!");
    return false;
  } else {
    setSuccess(message);
  }
  return true;
};

function addData() {
  if (validateInputs() == true) {
    const names = document.getElementById("names").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    let messageList;
    if (localStorage.getItem("messageList") == null) {
      messageList = [];
    } else {
      messageList = JSON.parse(localStorage.getItem("messageList"));
    }

    messageList.push({
      names: names,
      email: email,
      subject: subject,
      message: message,
      timestamp: new Date().getDate(),
    });

    localStorage.setItem("messageList", JSON.stringify(messageList));
    document.getElementById("contact-form").reset();
    alert("Message sent successfully!");
  }
}

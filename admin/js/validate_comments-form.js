const form = document.getElementById("comment-form");
const names = document.getElementById("names");
const email = document.getElementById("email");
const contentMsg = document.getElementById("contentMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addComment();
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
  const contentMsgValue = contentMsg.value.trim();

  let checkEmail =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (namesValue === "") {
    setError(names, "Names is required!");
    return false;
  } else {
    setSuccess(names);
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
  if (contentMsgValue === "") {
    setError(contentMsg, "Message is required!");
    return false;
  } else {
    setSuccess(contentMsg);
  }
  return true;
};
// Function add Comment
function addComment() {
  if (validateInputs() == true) {
    const names = document.getElementById("names").value;
    const email = document.getElementById("email").value;
    const contentMsg = document.getElementById("contentMsg").value;

    // Parse the URL to extract the index parameter
    const urlParams = new URLSearchParams(window.location.search);
    const index = parseInt(urlParams.get("index")); // Parse index as integer

    let blogList;
    if (localStorage.getItem("blogList") == null) {
      blogList = [];
    } else {
      blogList = JSON.parse(localStorage.getItem("blogList"));
    }
    blogList[index].comments.push({
      names: names,
      email: email,
      contentMsg: contentMsg,
      timestamp: new Date().toDateString(),
    });

    localStorage.setItem("blogList", JSON.stringify(blogList));
    document.getElementById("comment-form").reset();
    alert("Comment added successfully!");
  }
}

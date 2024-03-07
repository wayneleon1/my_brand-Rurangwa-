const form = document.getElementById("comment-form");
const names = document.getElementById("names");
const email = document.getElementById("email");
const contentMsg = document.getElementById("contentMsg");

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
// Function add data
// function addData() {
//   if (validateInputs() == true) {
//     const blogTitle = document.getElementById("blogTitle").value;
//     const category = document.getElementById("category").value;
//     const blogContent = document.getElementById("blogContent").value;
//     const photo = document.getElementById("photo").files[0];

//     // / Read the file as a data URL
//     const reader = new FileReader();
//     reader.readAsDataURL(photo);
//     reader.onload = function () {
//       const photoData = reader.result;

//       // Save the Base64 data to local storage
//       localStorage.setItem("photo", photoData);

//       let blogList;
//       if (localStorage.getItem("blogList") == null) {
//         blogList = [];
//       } else {
//         blogList = JSON.parse(localStorage.getItem("blogList"));
//       }

//       blogList.push({
//         blogTitle: blogTitle,
//         category: category,
//         blogContent: blogContent,
//         photo: photoData, // Save the Base64 data here
//         timestamp: new Date().toDateString(),
//         comments: [],
//       });

//       localStorage.setItem("blogList", JSON.stringify(blogList));
//       document.getElementById("blog-form").reset();
//       alert("Blog added successfully!");
//     };
//   }
// }

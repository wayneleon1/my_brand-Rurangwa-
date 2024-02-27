const form = document.getElementById("blog-form");
const blogTitle = document.getElementById("blogTitle");
const category = document.getElementById("category");
const blogContent = document.getElementById("blogContent");
const statusInput = document.getElementById("status");
const photo = document.getElementById("photo");

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
  const blogTitleValue = blogTitle.value.trim();
  const categoryValue = category.value.trim();
  const blogContentValue = blogContent.value.trim();
  const statusValue = statusInput.value.trim();
  const photoValue = photo.value.trim();

  if (blogTitleValue === "") {
    setError(blogTitle, "blog Title Name is required!");
  } else {
    setSuccess(blogTitle);
  }
  if (categoryValue === "") {
    setError(category, "category  is required!");
  } else {
    setSuccess(category);
  }

  if (blogContentValue === "") {
    setError(blogContent, "blog Content  is required!");
  } else {
    setSuccess(blogContent);
  }
  if (photoValue === "") {
    setError(photo, "Photo  is required!");
  } else {
    setSuccess(photo);
  }
  if (statusValue === "") {
    setError(statusInput, "status is required!");
  } else {
    setSuccess(statusInput);
  }
};

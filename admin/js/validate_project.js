const form = document.getElementById("project-form");
const projectName = document.getElementById("projectName");
const category = document.getElementById("category");
const githubLink = document.getElementById("githubLink");
const hostedLink = document.getElementById("hostedLink");
const photo = document.getElementById("photo");
const description = document.getElementById("description");

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
  const projectNameValue = projectName.value.trim();
  const categoryValue = category.value.trim();
  //   const githubLinkValue = githubLink.value.trim();
  //   const hostedLinkValue = hostedLink.value.trim();
  //   const photoValue = photo.value.trim();
  //   const descriptionValue = description.value.trim();

  if (projectNameValue === "") {
    setError(projectName, "project Name is required!");
  } else {
    setSuccess(projectName);
  }
  if (categoryValue === "") {
    setError(category, "category  is required!");
  } else {
    setSuccess(category);
  }
};

const form = document.getElementById("project-form");
const projectName = document.getElementById("projectName");
const category = document.getElementById("category");
const githubLink = document.getElementById("githubLink");
const hostedLink = document.getElementById("hostedLink");
const photo = document.getElementById("photo");
const description = document.getElementById("description");

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
  const projectNameValue = projectName.value.trim();
  const categoryValue = category.value.trim();
  const githubLinkValue = githubLink.value.trim();
  const hostedLinkValue = hostedLink.value.trim();
  // const photoValue = photo.value.trim();
  const descriptionValue = description.value.trim();

  if (projectNameValue === "") {
    setError(projectName, "project Name is required!");
    return false;
  } else {
    setSuccess(projectName);
  }
  if (categoryValue === "") {
    setError(category, "category  is required!");
    return false;
  } else {
    setSuccess(category);
  }
  if (githubLinkValue === "") {
    setError(githubLink, "github Link  is required!");
    return false;
  } else {
    setSuccess(githubLink);
  }

  if (hostedLinkValue === "") {
    setError(hostedLink, "Hosted Link  is required!");
    return false;
  } else {
    setSuccess(hostedLink);
  }
  // if (photoValue === "") {
  //   setError(photo, "Photo  is required!");
  //   return false;
  // } else {
  //   setSuccess(photo);
  // }
  if (descriptionValue === "") {
    setError(description, "Description  is required!");
    return false;
  } else {
    setSuccess(description);
  }
  return true;
};

function addData() {
  if (validateInputs() == true) {
    const projectName = document.getElementById("projectName").value;
    const category = document.getElementById("category").value;
    const githubLink = document.getElementById("githubLink").value;
    const hostedLink = document.getElementById("hostedLink").value;
    const photo = document.getElementById("photo").files[0].name;
    const description = document.getElementById("description").value;

    let projectList;
    if (localStorage.getItem("projectList") == null) {
      projectList = [];
    } else {
      projectList = JSON.parse(localStorage.getItem("projectList"));
    }

    projectList.push({
      projectName: projectName,
      category: category,
      githubLink: githubLink,
      hostedLink: hostedLink,
      photo: photo,
      description: description,
     
    });

    localStorage.setItem("projectList", JSON.stringify(projectList));
    document.getElementById("project-form").reset();
    alert("Data saved successfully!");
  }
}

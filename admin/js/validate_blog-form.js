const form = document.getElementById("blog-form");
const blogTitle = document.getElementById("blogTitle");
const category = document.getElementById("category");
const blogContent = document.getElementById("blogContent");
const photo = document.getElementById("photo");

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
  const blogTitleValue = blogTitle.value.trim();
  const categoryValue = category.value.trim();
  const blogContentValue = blogContent.value.trim();
  const photoValue = photo.value.trim();

  if (blogTitleValue === "") {
    setError(blogTitle, "blog Title Name is required!");
    return false;
  } else {
    setSuccess(blogTitle);
  }
  if (categoryValue === "") {
    setError(category, "category  is required!");
    return false;
  } else {
    setSuccess(category);
  }

  if (blogContentValue === "") {
    setError(blogContent, "blog Content  is required!");
    return false;
  } else {
    setSuccess(blogContent);
  }
  if (photoValue === "") {
    setError(photo, "Photo  is required!");
    return false;
  } else {
    setSuccess(photo);
  }
  return true;
};
// Function add data
function addData() {
  if (validateInputs() == true) {
    const blogTitle = document.getElementById("blogTitle").value;
    const category = document.getElementById("category").value;
    const blogContent = document.getElementById("blogContent").value;
    const photo = document.getElementById("photo").files[0].name;

    let blogList;
    if (localStorage.getItem("blogList") == null) {
      blogList = [];
    } else {
      blogList = JSON.parse(localStorage.getItem("blogList"));
    }

    blogList.push({
      blogTitle: blogTitle,
      category: category,
      blogContent: blogContent,
      photo: photo,
      timestamp: new Date().toDateString(),
      comments: [],
    });

    localStorage.setItem("blogList", JSON.stringify(blogList));
    document.getElementById("blog-form").reset();
    alert("Blog added successfully!");
  }
}

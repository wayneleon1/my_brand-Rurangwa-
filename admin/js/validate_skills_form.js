const form = document.getElementById("skills_form");
const Language = document.getElementById("Language");
const type = document.getElementById("type");
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
  const LanguageValue = Language.value.trim();
  const typeValue = type.value.trim();
  const photoValue = photo.value.trim();

  if (LanguageValue === "") {
    setError(Language, "Language is required!");
    return false;
  } else {
    setSuccess(Language);
  }

  if (typeValue === "") {
    setError(type, "Language type is required!");
    return false;
  } else {
    setSuccess(type);
  }

  // if (photoValue === "") {
  //   setError(photo, "Photo  is required!");
  // } else {
  //   setSuccess(photo);
  // }

  return true;
};

function addData() {
  if (validateInputs() == true) {
    const Language = document.getElementById("Language").value;
    const type = document.getElementById("type").value;
    // const photo = document.getElementById("photo").value;

    let Skill_list;
    if (localStorage.getItem("Skill_list") == null) {
      Skill_list = [];
    } else {
      Skill_list = JSON.parse(localStorage.getItem("Skill_list"));
    }

    Skill_list.push({
      Language: Language,
      type: type,
      // photo: photo,
      timestamp: new Date().toDateString(),
    });

    localStorage.setItem("Skill_list", JSON.stringify(Skill_list));
    document.getElementById("skills_form").reset();
    alert("Skill added successfully!");
  }
}

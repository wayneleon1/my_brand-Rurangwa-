const toggleBtn = document.querySelector(".toggle_Btn");
const toggle_BtnIcon = document.querySelector(".toggle_Btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");
toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggle_BtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

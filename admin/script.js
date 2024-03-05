// Check if the user is logged in
var isLoggedIn = localStorage.getItem("isLoggedIn");
if (!isLoggedIn) {
  window.location.href = "../pages/signin.html";
}

// active Links for Dashboard
const activePage = window.location.pathname;
const sideLinks = document
  .querySelectorAll(".tab-container a")
  .forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add("active");
    }
  });

const clickedBtn = document.querySelector(".logo_container");
const tabContainer = document.querySelector(".tab-container");
clickedBtn.onclick = function () {
  tabContainer.classList.toggle("open");
};

const logout = () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "../pages/signin.html";
};

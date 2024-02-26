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

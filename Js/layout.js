// Nav Modals etc.

const menuBtn = document.querySelector(".menu")
const menu = document.querySelector(".menu__nav")
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden")
});
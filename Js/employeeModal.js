import { createCarousel } from "./createCarousel.js";
import { employees } from "./script.js";

const modal = document.querySelector(".employee__modal");
const closeBtn = document.querySelector(".modal__close-btn")
// Nav
// const menuBtn = document.querySelector(".menu")
// const menu = document.querySelector(".menu__nav")
// menuBtn.addEventListener("click", () => {
//   menu.classList.toggle("hidden")
// });

closeBtn.addEventListener("click", () => {
  modal.close()
})

modal.addEventListener('click', outsideClick);
function outsideClick(event) {
  if (event.target === modal) {
    modal.close();
  }
}

export function createModal(id) {
  const modalBody = document.querySelector(".modal__body");
  modalBody.innerHTML = "";

  modal.showModal();
  // get info from array to display info
  const employee = employees.find((employee) => employee.id === id);
  // TODO: Find out how to get the rating in the modal
  modalBody.innerHTML = `
  <h3>${employee.name}</h3>
  <img src="${employee.image}" alt="employee image" />
  
  <p>${employee.age} ${employee.gender}</p>
  
  <div>
  <h4>Services</h4>

  </div>
  <address>
  <span>${employee.city} ${employee.state}</span>
  <a href="tel:${employee.cell}">${employee.cell}</a>
  <a href="mailto:${employee.email}">${employee.email}</a>
  </address>
  `;
  createCarousel()
}
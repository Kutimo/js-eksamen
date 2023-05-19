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
// opens and creates the modal text content from the array of employees
export function createModal(id) {
  const modalBody = document.querySelector(".modal__body");
  modalBody.innerHTML = "";

  modal.showModal();
  // get info from array to display info
  const employee = employees.find((employee) => employee.id === id);

  const rating = document.createElement("div");
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("span");
    star.classList.add("card__star");
    if (i < employee.rating) {
      star.classList.add("filled");
    }
    rating.appendChild(star);
  }
  modalBody.innerHTML = `
  <h3 class="body__title">${employee.name}</h3>
  <img class="body__img" src="${employee.image}" alt="employee image" />
  <div class="body__info">
     <p>${employee.age} ${employee.gender}</p>
    <div class="body__rating">
       ${rating.innerHTML}
    </div>
    <span>${employee.city} ${employee.state}</span>
  </div>
  <div class="body__services-and-prices">
    <ul>
     <li><h4>Services</h4></li> 
     ${employee.services.map(service => `<li>${service}</li>`).join('')}
    </ul >
    <ul>
      <li>${employee.hourRate} per Hour</li>
      ${employee.nightRate !== "" ? `<li>${employee.nightRate} per Night</li>` : ""} 
    </ul >
</div >
    <address class="body__address">
      <a href="tel:${employee.cell}">${employee.cell}</a>
      <a href="mailto:${employee.email}">${employee.email}</a>
    </address>
  `;
  createCarousel()
}
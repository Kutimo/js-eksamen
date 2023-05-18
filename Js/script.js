import { createCarousel } from "./createCarousel.js";

export const container = document.querySelector("#employeeContainer");

export let employees = [];

async function getEmployees() {
  // add a map with adresse of all employees?
  fetch("https://randomuser.me/api/?nat=no&results=10")
    .then((response) => response.json())
    .then((data) => {
      // TODO: CONSOLE
      // console.log(data);
      employees = data.results.map((employee) => {
        return {
          name: `${employee.name.first} ${employee.name.last}`,
          rating: Math.floor(Math.random() * 6),
          id: employee.id.value,
          age: employee.dob.age,
          gender: employee.gender,
          city: employee.location.city,
          state: employee.location.state,
          email: employee.email,
          cell: employee.cell,
          image: employee.picture.large,
        };
      });
      createEmployees();
      // TODO: CONSOLE
      console.log(employees);
    })
    .catch((error) => console.error(error));
}
getEmployees();

const services = ["Dog walking", "Pet sitting", "Training", "Overnight care"];

export function createEmployees() {
  container.innerHTML = ""
  employees.forEach((employee) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", employee.id);

    const thumbnail = document.createElement("img");
    thumbnail.src = employee.image;
    thumbnail.alt = "employee image";
    thumbnail.classList.add("card__image");
    thumbnail.height = "120";
    thumbnail.width = "120";

    const name = document.createElement("h3");
    name.innerHTML = employee.name;
    name.classList.add("card__name");

    const city = document.createElement("p");
    city.innerHTML = `${employee.city} ${employee.state}`;
    city.classList.add("card__city");

    const rating = document.createElement("div");
    for (let i = 0; i < 5; i++) {
      const star = document.createElement("span");
      star.classList.add("card__star");
      if (i < employee.rating) {
        star.classList.add("filled");
      }
      rating.appendChild(star);
    }

    const text = document.createElement("p");
    text.classList.add("card__text");
    text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde?";

    const badgeContainer = document.createElement("div");
    badgeContainer.classList.add("card__badge");

    const badgeAmount = Math.floor(Math.random() * services.length);

    for (let i = 0; i < badgeAmount; i++) {
      const randomNumber = Math.floor(Math.random() * services.length);
      if (!badgeContainer.textContent.includes(services[randomNumber])) {
        badgeContainer.innerHTML += `<span>${services[randomNumber]}</span>`;
      }
    }

    card.append(thumbnail, name, city, rating, text, badgeContainer);
    container.appendChild(card);
  });
  // Calls the view card
  viewCard();
}

// Done like this so the querySelectorAll is called after the cards are rendered.
function viewCard() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    card.addEventListener("click", (event) => {
      const clickedCard = event.target.closest(".card");
      createModal(clickedCard.dataset.id);
    });
  });
}

// opens and creates the modal text content from the array of employees
function createModal(id) {
  const modal = document.querySelector(".employee__modal");
  const modalBody = document.querySelector(".modal__body");
  modalBody.innerHTML = "";

  modal.showModal();
  // get info from array to display info
  const employee = employees.find((employee) => employee.id === id);
  // TODO: Find out how to get the rating in the modal
  modalBody.innerHTML = `
  <h3>${employee.firstName} ${employee.lastName}</h3>
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


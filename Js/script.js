import { createModal } from "./employeeModal.js"

const container = document.querySelector("#employeeContainer");

export let employees = [];

async function getEmployees() {
  fetch("https://randomuser.me/api/?nat=no&results=10")
    .then((response) => response.json())
    .then((data) => {
      employees = data.results.map((employee) => {
        const services = generateServices()
        let nightRate = "";
        if (services.includes("Overnight care")) {
          nightRate = generatePrice(450, 900)
        }
        const hourRate = generatePrice(75, 200)

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
          services: services,
          hourRate: hourRate,
          nightRate: nightRate
        };
      });
      createEmployeesCard(employees);
    })
    .catch((error) => console.error(error));
}
getEmployees();

function generateServices() {
  const services = ["Dog walking", "Pet sitting", "Training", "Overnight care"];
  const randomNumber = Math.floor(Math.random() * services.length);
  return services.slice(randomNumber, randomNumber + 3);
}

function generatePrice(min, max) {
  const randomPrice = Math.floor(Math.random() * (max - min + 1) + min)
  const roundedPrice = Math.min(randomPrice, max);
  return Math.round(roundedPrice / 5) * 5;
}

export function createEmployeesCard(employees) {
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

    const price = document.createElement("p");
    if (employee.nightRate !== "") {
      price.innerHTML = `${employee.hourRate}/hour - ${employee.nightRate}/night`
    } else {
      price.innerHTML = `${employee.hourRate}/hour`
    }
    price.classList.add("card__rates");

    const badgeContainer = document.createElement("div");
    badgeContainer.classList.add("card__badge");

    if (employee.services.length > 0) {
      employee.services.forEach(service => {
        badgeContainer.innerHTML += `<span>${service}</span>`;
      })
    }

    card.append(thumbnail, name, city, rating, price, badgeContainer);
    container.appendChild(card);
  });
  viewCard();
}

function viewCard() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    card.addEventListener("click", (event) => {
      const clickedCard = event.target.closest(".card");
      createModal(clickedCard.dataset.id);
    });
  });
}
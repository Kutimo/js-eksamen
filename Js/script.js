const container = document.querySelector("#employeeContainer");

let employees = [];

async function getEmployees() {
  // add a map with adresse of all employees?
  fetch("https://randomuser.me/api/?nat=no&results=10")
    .then((response) => response.json())
    .then((data) => {
      // TODO: CONSOLE
      console.log(data);
      employees = data.results.map((employee) => {
        return {
          firstName: employee.name.first,
          lastName: employee.name.last,
          rating: Math.floor(Math.random() * 6),
          id: employee.id.value,
          dob: employee.dob,
          gender: employee.gender,
          city: employee.location.city,
          state: employee.location.state,
          postcode: employee.location.postcode,
          email: employee.email,
          username: employee.login.username,
          cell: employee.cell,
          image: employee.picture.large,
        };
      });
      createEmployees();
      console.log(employees);
    })
    .catch((error) => console.error(error));
}
getEmployees();

const services = ["Dog walking", "Pet sitting", "Training", "Overnight care"];

function createEmployees() {
  // container.innerHTML = ""
  const ratingContainer = document.querySelector("#ratingContainer");
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
    name.innerHTML = `${employee.firstName}  ${employee.lastName}`;
    name.classList.add("card__name");

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

    card.append(thumbnail, name, rating, text, badgeContainer);
    container.appendChild(card);
  });
  // Calls the view card 
  viewCard()
}




// Done like this so the querySelectorAll is called after the cards are rendered.
function viewCard() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    card.addEventListener("click", (event) => {
      const clickedCard = event.target.closest(".card");
      createModal(clickedCard.dataset.id)
    });
  });
}

// Change name?
function createModal(id) {
  // const modal = document.createElement("dialog");
  // container.appendChild(modal);
  const modal = document.querySelector(".modal")
  modal.showModal()
  const selectedCard = employees.find(employee => employee.id === id)
  console.log(id)
  console.log(selectedCard)
}
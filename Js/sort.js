import { employees, createEmployees } from "./script.js";
const searchBar = document.querySelector("#searchBar");
const sortDropdown = document.querySelector("#sortDropdown");

// let searchValue = "";
// let sortValue = "";

sortDropdown.addEventListener("change", () => {
  const searchValue = searchBar.value.toLocaleLowerCase();
  const sortValue = sortDropdown.value;
  sortCards(searchValue, sortValue);
});

searchBar.addEventListener("keyup", () => {
  const searchValue = searchBar.value.toLocaleLowerCase();
  const sortValue = sortDropdown.value;
  sortCards(searchValue, sortValue);
  const key = event.key;
  if (searchBar.value.length <= 1 || key === "Escape") {
    if (key === "Backspace" || key === "Delete" || key === "Escape") {
      sortCards(" ", sortValue);
    }
  }
});

// function applySearchAndSort() {
//   const filteredSearch = 
// }

// Search and sort function
function sortCards(searchValue, sortValue) {
  const cards = document.querySelectorAll(".card");
  console.log(searchValue, sortValue);

  if (sortValue) {
    if (sortValue === "name") {
      employees.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return nameA.localeCompare(nameB);
      });
    } else if (sortValue === "rating-l-h") {
      employees.sort((a, b) => {
        return a.rating - b.rating;
      });
    } else if (sortValue === "rating-h-l") {
      employees.sort((a, b) => {
        return b.rating - a.rating;
      });
    }
    createEmployees();
  }

  if (searchValue) {
    cards.forEach((card) => {
      const city = card.querySelector(".card__city").textContent.toLocaleLowerCase();
      const name = card.querySelector(".card__name").textContent.toLowerCase();
      const badge = card.querySelector(".card__badge").textContent.toLocaleLowerCase();
      if (name.includes(searchValue) || city.includes(searchValue) || badge.includes(searchValue)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }
}

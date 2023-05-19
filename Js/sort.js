import { employees, createEmployees } from "./script.js"
const searchBar = document.querySelector("#searchBar")
const sortDropdown = document.querySelector("#sortDropdown")


sortDropdown.addEventListener("change", () => {
  const searchValue = searchBar.value.toLocaleLowerCase()
  const sortValue = sortDropdown.value
  sortCards(searchValue, sortValue)
})

searchBar.addEventListener("keydown", () => {
  const searchValue = searchBar.value.toLocaleLowerCase()
  const sortValue = sortDropdown.value
  sortCards(searchValue, sortValue)
  const key = event.key;
  if (searchBar.value.length <= 2) {
    if (key === "Backspace" || key === "Delete") {
      sortCards(" ", sortValue)
    }
  }
})

// servicesDropdown.addEventListener("change", () => {
//   const searchValue = searchBar.value.toLocaleLowerCase()
//   const sortValue = servicesDropdown.value
//   sortCards(searchValue, sortValue)
// })

// Search and sort function 
function sortCards(searchValue, sortValue) {
  const cards = document.querySelectorAll(".card")

  if (searchValue) {
    cards.forEach(card => {
      const city = card.querySelector(".card__city").textContent.toLocaleLowerCase()
      const name = card.querySelector(".card__name").textContent.toLowerCase()
      const badge = card.querySelector(".card__badge").textContent.toLocaleLowerCase()
      console.log(city)
      if (name.includes(searchValue) || city.includes(searchValue) || badge.includes(searchValue)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  if (sortValue) {
    if (sortValue === "name") {
      employees.sort((a, b) => {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()
        return nameA.localeCompare(nameB)
      })
      createEmployees()
    }
  }
}
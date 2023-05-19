import { employees, createEmployeesCard } from "./script.js";
const searchBar = document.querySelector("#searchBar");
const sortDropdown = document.querySelector("#sortDropdown");

sortDropdown.addEventListener("change", applyFilterAndSort);
searchBar.addEventListener("keyup", applyFilterAndSort);

function applyFilterAndSort() {
  let searchValue = searchBar.value.toLocaleLowerCase();
  let sortValue = sortDropdown.value;

  let filteredEmployees = filterEmployee(searchValue);
  let sortedEmployees = sortEmployees(filteredEmployees, sortValue);

  createEmployeesCard(sortedEmployees);
}

function sortEmployees(employees, sortValue) {
  let sortedEmployees = [...employees];

  if (sortValue === "name") {
    sortedEmployees.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } else if (sortValue === "rating-l-h") {
    sortedEmployees.sort((a, b) => {
      return a.rating - b.rating;
    });
  } else if (sortValue === "rating-h-l") {
    sortedEmployees.sort((a, b) => {
      return b.rating - a.rating;
    });
  } else if (sortValue === "hourRate-l-h") {
    sortedEmployees.sort((a, b) => {
      return a.hourRate - b.hourRate;
    });
  } else if (sortValue === "hourRate-h-l") {
    sortedEmployees.sort((a, b) => {
      return b.hourRate - a.hourRate;
    });
  } else if (sortValue === "nightRate-l-h") {
    sortedEmployees = sortedEmployees.filter((employee) => employee.nightRate !== "");
    sortedEmployees.sort((a, b) => {
      return a.nightRate - b.nightRate;
    });
  } else if (sortValue === "nightRate-h-l") {
    sortedEmployees = sortedEmployees.filter((employee) => employee.nightRate !== "");
    sortedEmployees.sort((a, b) => {
      return b.nightRate - a.nightRate;
    });
  }
  return sortedEmployees;
}

function filterEmployee(searchValue) {
  const cards = document.querySelectorAll(".card");

  return employees.filter((employee) => {
    const name = employee.name.toLowerCase();
    const city = employee.city.toLowerCase();
    const state = employee.state.toLowerCase();
    const services = employee.services.map((service) => service.toLowerCase());

    const hasMatchingService = services.some((service) => service.includes(searchValue));
    return (
      name.includes(searchValue) || city.includes(searchValue) || state.includes(searchValue) || hasMatchingService
    );
  });
}


let employees = []

async function getEmployees() {
  // add a map with adresse of all employees?
  fetch("https://randomuser.me/api/?nat=no")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      employees = data.results.map((employee) => {
        return {
          firstName: employee.name.first,
          lastName: employee.name.last,
          dob: employee.dob,
          gender: employee.gender,
          city: employee.location.city,
          state: employee.location.state,
          postcode: employee.location.postcode,
          email: employee.email,
          username: employee.login.username,
          cell: employee.cell,
          image: employee.picture
        }
      })
    })
    .catch(error => console.log(error))
}
getEmployees()


// fetch(URL)
//   .then((res) => res.json())
//   .then((data) => {
//     characters = data.map((character) => {
//       return {
//         name: character.name,
//         image: character.image,
//         yearOfBirth: character.yearOfBirth,
//         alive: character.alive,
//         house: character.house,
//       };
//     });
//     createCards();
//   });
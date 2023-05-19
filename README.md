
## Exam in JS and API
For this exam in js i have chosen to select the dog sitter application.
Required functionality of the app
 -Fetch
 -CRUD
 -Array of objects
 
## Intro
For this exam in js i started with a design in Figma and then continued with the RandomUser API as the main focus of the application building. The user is first greeted by a landing page with 2 buttons to either register or go to the walkers page.
Also there is a button in the navigation bar to both register and login, as well as a link to the walkers page. 

In the walkers page the the user can search, sort and view the cards created with information from the random user API. When a card is view a dialog modal is shown and another fetch request is made to randomDog API to retrieve and display the cards in a carousel.

If the user tries to login or registerer, then the user will be redirected to a successful login page and have to option to click a button to take the user to the walkers page.

All of the js functions and code is made in a modular way with exports and imports to keep the code readable and concise.

## Description
**Index.html / nav.js**
For the landing page nav.js is the only js used for the page, here the code is to open, close and create html elements for the modals.  

firstly there is a event listener for the nav menu to open and close, this is also used in the other html pages.

then the the 2nd part of this js file is for the login and registrer forms. The login form is opened by the login button in the nav menu, this then opens the form modal and adds the login form with innerHTML.

For the register modal, the register form is opened by 2 buttons. Either the Get started button in the hero section or by the one in the nav menu. Same logic as the login modal, here we also use the same dialog and change the innerHTML in the same manner.


**Walkers.html / script.js, sort.js, employeeModal.js**
Here we have the biggest part of the application where first have a search and sort header, and then the cards from the random user API.
*script.js* 
As this is the entry point for the walkers.html we will start here, first we import the createModal function from employeeModal.js, we then query select the card container, create and export the employees array. 

And we then call the getEmployees function which then fetches the random user API, then returns the respons as json and then maps it and adds the information we need to the employee array.
Also we make 3 function calls in the for each employee card, 1 to generate services for each employee with the generateServices function, that creates a random amount of services from the services array with math floor method that returns a random number that is then multiplied by the length of the services array, this number is then used to give a random index position in the array and return 3 services for the employee. 

then when the services is returned to the fetch method, we check to see if ut contains a service called Overnight care and if it does. The generatePrice function is called with 2 parameters as min and max for the function.  
Here we generate a random number and with the parameters provided which will return a number between the min and max numbers. Then we then put the number through Math.round method that gives us a number rounded to the nearest multiple of 5.

Then when these 3 function calls are made the data is added to the employee array of objects and the create EmployeeCard function is called. There is also a catch clause in the fetch call that will create a error message.

For the createEmployeesCard we have 1 parameter that we use to create the cards, this can be both the employee array of objects or the one created by the search/sort functions. 
Here we first add a empty string to the cards container, and map the 
## sources and inspiration
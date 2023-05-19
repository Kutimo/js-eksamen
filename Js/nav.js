const menuBtn = document.querySelector(".menu");
const menu = document.querySelector(".menu__nav");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const modal = document.querySelector(".nav__dialog");
const modalBody = document.querySelector(".dialog__body");
const loginBtn = document.querySelector(".login");
const registerBtn = document.querySelector(".register");
const heroBtn = document.querySelector(".hero__button");
const closeBtn = document.querySelector(".dialog__close-btn");

closeBtn.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", outsideClick);
function outsideClick(event) {
  if (event.target === modal) {
    modal.close();
  }
}

loginBtn.addEventListener("click", () => {
  modal.showModal();
  modalBody.innerHTML = `
  <form action="./success.html" method="get">
     <label class="form__label" for="email">
       Email
        <input class="form__input" type="email" required>
      </label>
     <label class="form__label" for="password">
       Password
        <input class="form__input" type="password" id="password" required/>
      </label>
    <button class="form__button" type="submit">Login</button>
  </form>
  `;
});

registerBtn.addEventListener("click", () => {
  register();
});

heroBtn.addEventListener("click", () => {
  register();
});

function register() {
  modal.showModal();
  modalBody.innerHTML = `
  <form action="./success.html" method="get">
     <label class="form__label" for="fName">
       First name
        <input name="fName" class="form__input" type="text" required>
      </label>
     <label class="form__label" for="lName">
       Last name
        <input name="lName" class="form__input" type="text" required>
      </label>
     <label class="form__label" for="email">
       Email
        <input name="email" class="form__input" type="email" required>
      </label>
     <label class="form__label" for="password">
       Password
        <input name="password" class="form__input" type="password" id="password" required/>
      </label>
    <button class="form__button" type="submit">Register</button>
  </form>
  `;
}

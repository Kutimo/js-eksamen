const menuBtn = document.querySelector(".menu")
const menu = document.querySelector(".menu__nav")

const modal = document.querySelector(".nav__dialog")
const modalBody = document.querySelector(".dialog__body")
const loginBtn = document.querySelector(".login")
const registrerBtn = document.querySelector(".registrer")

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden")
});

if (menu.classList.contains("hidden")) {
  document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      menu.classList.add("hidden")
      console.log("esc")
    }
  })
}

loginBtn.addEventListener("click", () => {
  modal.showModal()
  modalBody.innerHTML = `
  <form action="">
     <label class="form__email-label">
        <input class="form__email-input" type="text"  placeholder=" " />
        <span class="form__email-span">Email</span>
      </label>
     <label class="form__password-label">
        <input class="form__password-input" type="password" name="search" id="searchBar" placeholder=" " />
        <span class="form__password-span">Email</span>
      </label>
    <button type="submit">Login</button>
  </form>
  `
})


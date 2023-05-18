export async function createCarousel() {
  const carouselItems = document.querySelector(".carousel__items");
  fetch("https://dog.ceo/api/breeds/image/random/5")
    .then((response) => response.json())
    .then((data) => {
      // TODO: CONSOLE
      console.log(data);
      const dataArray = data.message
      carouselItems.innerHTML = ""
      dataArray.forEach((img) => {
        carouselItems.innerHTML += `
        <img class="carousel__image" src="${img}" alt="dog" height="250" width="250"  />
        `
      });
    })
    .catch((error) => console.error(error));;
  carouselControls()
}

function carouselControls() {
  const carouselItems = document.querySelector(".carousel__items");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const itemWidth = carouselItems.clientWidth;
  let currentPosition = 0;

  if (currentPosition === 0) {
    prevButton.classList.add('hidden');
    nextButton.classList.remove('hidden');
  }

  // Function to slide the carousel to a given position
  const slideToPosition = (position) => {
    carouselItems.style.transform = `translateX(-${position}px)`;
    currentPosition = position;
    if (currentPosition != 0) {
      prevButton.classList.remove("hidden")
    } else if (currentPosition === 0) {
      prevButton.classList.add("hidden")
    }
  };
  // Called here in case the modal where to be reopened
  slideToPosition(0)

  prevButton.addEventListener("click", function () {
    if (currentPosition > 0) {
      slideToPosition(currentPosition - itemWidth);
    }
  });

  //next button
  nextButton.addEventListener("click", function () {
    if (currentPosition < carouselItems.scrollWidth - itemWidth) {
      slideToPosition(currentPosition + itemWidth);
    } else if (currentPosition === carouselItems.scrollWidth - itemWidth) {
      slideToPosition(0);
    }
  });
};

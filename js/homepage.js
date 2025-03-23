window.onresize = adapt;
window.onload = adapt;

function adapt() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    // Rimuovi la classe carousel
    let carousel = document.getElementById("carousel-inner");
    carousel.classList.remove("carousel-inner");

    // Rimuovi la classe carousel-item e aggiungi la classe col-4
    let carouselItems = document.getElementsByClassName("bol");
    for (let i = 0; i < carouselItems.length; i++) {
      carouselItems[i].classList.remove("carousel-item");
    }
    // aggiungi la classe row
    carousel.classList.add("row");
  }

  if (window.matchMedia("(max-width: 992px)").matches) {
    let carousel = document.getElementById("carousel-inner");

    carousel.classList.remove("row");
    carousel.classList.add("carousel-inner");

    let carouselItems = document.getElementsByClassName("bol");
    for (let i = 0; i < carouselItems.length; i++) {
      carouselItems[i].classList.add("carousel-item");
    }
  }
}

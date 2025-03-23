let slideIndex = 0;
window.onload = (event) => {
  if (
    window.location.pathname.includes("fisherBoatParty.html") ||
    window.location.pathname.includes("ilPrimoFisherBot.html") ||
    window.location.pathname.includes("scopriFisherbot.html")
  ) {
    showSlides();
  }
};

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activated", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activated";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

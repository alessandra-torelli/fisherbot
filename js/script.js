function toggleLogo() {
  let logo = document.getElementById("logo-top-mobile");
  if (logo.style.display === "none") {
    setTimeout(function () {
      logo.style.display = "block";
    }, 320);
  } else {
    logo.style.display = "none";
  }

  let content = document.getElementById("content-hidden");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

function bgToggler() {
  let background = document.getElementById("toggler");
  background.classList.toggle("close");
}

function toggleNav() {
  toggleLogo();
  bgToggler();
}

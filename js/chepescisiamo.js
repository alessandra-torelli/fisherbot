// SCRIPT PER SLIDER

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let texts = document.getElementsByClassName("brand-text");
    let logos = document.getElementsByClassName("brand-logo");
    let dots = document.getElementsByClassName("point");

    if (n > texts.length) {slideIndex = 1}
    if (n < 1) {slideIndex = texts.length}
    for (i = 0; i < texts.length; i++) {
        texts[i].style.display = "none";
        logos[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" activeA", "");
    }

    texts[slideIndex-1].style.display = "block";
    logos[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " activeA";
}


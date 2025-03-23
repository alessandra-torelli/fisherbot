//AUTOMAZIONE  AL RESIZE PER CAROSELLO O COLONNE
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

// AL CLIC SUI P DELL'INDICE, LI TRASFORMA IN H3
// e se ci sono h3 li rimette p
var list = document.getElementById("index");
var items = list.getElementsByTagName("p");
var currentItem = null;
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        if (currentItem !== null) {
            currentItem.classList.remove("selected-index");
            currentItem.classList.add("body-strong");
        }
        this.classList.remove("body-strong");
        this.classList.add("selected-index");
        currentItem = this;
    });
}

// SCRIPT PER SLIDER MOBILE
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    let i;
    let paragrafo = document.getElementsByClassName("prove");
    if (n > paragrafo.length) {slideIndex = 1}
    if (n < 1) {slideIndex = paragrafo.length}
    for (i = 0; i < paragrafo.length; i++) {
        paragrafo[i].style.display = "none";
    }
    paragrafo[slideIndex-1].style.display = "block";
}

// CODICE PER INDICI E PARAGRAFI DESKTOP
if (window.matchMedia("(min-width: 992px)").matches)
// seleziona i paragrafi nascosti
    var hiddenParagraphs = document.getElementsByClassName("paragraph");

// seleziona le voci dell'indice
var indexEntries = document.getElementsByClassName("headings");

// nascondi i paragrafi nascosti
for (let i = 0; i < hiddenParagraphs.length; i++) {
    hiddenParagraphs[i].style.display = "none";
}

// ascolta i clic su ciascuna voce dell'indice
for (var i = 0; i < indexEntries.length; i++) {
    indexEntries[i].addEventListener("click", function() {
        for (var i = 0; i < hiddenParagraphs.length; i++) {
            hiddenParagraphs[i].style.display = "none";
        }
        // seleziona l'id del paragrafo da mostrare/nascondere
        var paragraphId = this.getAttribute("data-paragraph-id");

        // seleziona il paragrafo corrispondente
        var paragraph = document.getElementById(paragraphId);

        // mostra/nascondi il paragrafo
        if (paragraph.style.display === "none") {
            paragraph.style.display = "block";
        }
    });
}
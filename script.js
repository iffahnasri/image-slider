// script.js
// JavaScript code for the image slider
var currentSlide = 0;
var slides = document.querySelectorAll(".slider img");

function showSlide(index) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
}

showSlide(currentSlide);

document.querySelector(".next").addEventListener("click", function () {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
});

document.querySelector(".prev").addEventListener("click", function () {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
});

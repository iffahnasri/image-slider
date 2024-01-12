const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let slideIndex = 0;

prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slider.children.length) % slider.children.length;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slider.children.length;
    updateSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

let totalSlides = document.querySelectorAll('.slider__item').length;
let alturaSlides = document.querySelector('.slider').clientHeight;
let prevBtn = document.querySelector('.right');
let nextBtn = document.querySelector('.left');

let currentSlide = 0;

document.querySelector('.slider__content').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.controls').style.height = `${alturaSlides}px`;

prevBtn.addEventListener('click', () => {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    updateMargin();
});

nextBtn.addEventListener('click', () => {
    currentSlide++;
    if(currentSlide > (totalSlides-1)) {
        currentSlide = 0;
    }

    updateMargin();
});

function updateMargin() {
    let newMargin = (currentSlide * document.body.clientWidth);
    document.querySelector('.slider__content').style.marginLeft = `-${newMargin}px`
}

setInterval(() => {
    currentSlide++;
    if(currentSlide > (totalSlides-1)) {
        currentSlide = 0;
    }

    updateMargin();
}, 5000);
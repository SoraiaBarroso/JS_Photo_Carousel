const left_btn = document.querySelector(".btn-left");
const right_btn = document.querySelector(".btn-right");
const photos = document.querySelectorAll(".slide"); // returns a list, photos[0]
let currentSlide = 0;

right_btn.addEventListener("click", function() {
    if (currentSlide == photos.length - 1) {
        photos[currentSlide].classList.remove('active');
        currentSlide = 0;
        photos[currentSlide].classList.add('active');
    } else {
        photos[currentSlide].classList.remove('active');
        photos[currentSlide + 1].classList.add('active');
        currentSlide++;
    }
});

left_btn.addEventListener("click", function() {
    if (currentSlide == 0) {
        photos[currentSlide].classList.remove('active');
        currentSlide = photos.length - 1;
        photos[currentSlide].classList.add('active');
    } else {
        photos[currentSlide].classList.remove('active');
        photos[currentSlide - 1].classList.add('active');
        currentSlide--;
    }

});
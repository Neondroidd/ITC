const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function changeSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Change slide every 5 seconds
setInterval(changeSlide, 5000);

// Initial slide display
showSlide(currentSlide);

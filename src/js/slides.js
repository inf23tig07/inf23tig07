let slideIndex = 1;
let slideInterval;

function initSlideshow() {
    showSlides(slideIndex);
    //Intervalo de 3 segundos entre os slides
    slideInterval = setInterval(() => {
        showSlides(++slideIndex);
    }, 3000);
}

function currentSlide(n) {
    clearInterval(slideInterval); 
    showSlides(slideIndex = n);
    slideInterval = setInterval(() => {
        showSlides(++slideIndex);
    }, 3000); 
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("fade-in");
        slides[i].classList.add("fade-out");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    setTimeout(() => {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].classList.remove("fade-out");
        slides[slideIndex - 1].classList.add("fade-in");
    }, 1000);
    dots[slideIndex - 1].classList.add("active");
}

initSlideshow();
const hamburger = document.querySelector('.hamburger-icon');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const carousel1 = document.querySelector('.carousel-1');
const carousel2 = document.querySelector('.carousel-2');
const carousel3 = document.querySelector('.carousel-3');
const carouselUp = document.querySelector('.carousel-up');
const carouselDown = document.querySelector('.carousel-down');
const carousels = document.querySelectorAll('.carousel');
const dots = document.querySelectorAll('.dots');
const dot1 = document.querySelector('.dot-1');
const dot2 = document.querySelector('.dot-2');
const dot3 = document.querySelector('.dot-3');
let index = 0;

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show-nav-links');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'white';
        navbar.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        navbar.style.boxShadow = 'none';
    }
});


carousel1.style.opacity = 1;
carousel2.style.opacity = 0;
carousel3.style.opacity = 0;



carouselUp.addEventListener('click', () => {
    carousels[index].style.opacity = 0;
    index = (index + 1) % carousels.length;
    carousels[index].style.opacity = 1;
});

carouselDown.addEventListener('click', () => {
    carousels[index].style.opacity = 0;
    index = (index - 1 + carousels.length) % carousels.length;
    carousels[index].style.opacity = 1;
});



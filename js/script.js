// SELECTORS
const header = document.querySelector('.header');
const navMobile = document.querySelector('#nav-mobile');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const sections = document.querySelectorAll('section');

// MOBILE MENU TOGGLE
navMobile.addEventListener('click', () => {
    navMobile.classList.toggle('nav-open');
    navMenu.classList.toggle('open-menu');
});

// CLOSE MENU ON LINK CLICK
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMobile.classList.remove('nav-open');
        navMenu.classList.remove('open-menu');
    });
});

// STICKY HEADER & ACTIVE LINKS ON SCROLL
window.addEventListener('scroll', () => {
    // Scroll Progress
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector(".scroll-progress").style.width = scrolled + "%";

    // Sticky Header
    header.classList.toggle('sticky', window.scrollY > 100);

    // Active Link Highlighting
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// INITIAL ACTIVE LINK ON LOAD
window.addEventListener('load', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

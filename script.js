/*===== Toggle icon navbar =====*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*===== Scroll sections active link + sticky navbar =====*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');

window.onscroll = () => {
    let top = window.scrollY;

    // Sticky navbar
    header.classList.toggle('sticky', top > 100);

    // Active link highlighting
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) activeLink.classList.add('active');
        }
    });
};

/*===== Remove toggle icon and navbar when click navbar link =====*/
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

/*===== Scroll Reveal Animation =====*/
        ScrollReveal({
            reset: true,
            distance: '80px',
            duration: 2000,
            delay: 200
        });

        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

        /*===== Typed JS Effect =====*/
        const typed = new Typed('.multiple-text', {
            strings: ['Next Albert Einstein', 'Tiga-Tiganya Sibuk', 'Next Albert Einstein'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

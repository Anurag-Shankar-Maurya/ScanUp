// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if (this.getAttribute('href') !== '#') {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }

        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top button
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Back to top button
document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeToggle.classList.toggle('fa-sun');
    themeToggle.classList.toggle('fa-moon');
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.classList.remove('fa-sun');
    themeToggle.classList.add('fa-moon');
}

particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 500,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#888888" // bubble color
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,  // No outlines, pure smooth bubbles
                "color": "#ffffff"
            }
        },
        "opacity": {
            "value": 0.7,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.3,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false // No connecting lines
        },
        "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "bottom", // Bubbles rising
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": true, // Simulates merging dynamics
        }
    },
    "interactivity": {
        "detect_on": "canvas", // window or canvas or both
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble" // Makes bubbles swell when hovered
            },
            "onclick": {
                "enable": true,
                "mode": "repulse" // Bubbles separate on click
            },
            "resize": true
        },
        "modes": {
            "bubble": {
                "distance": 120,
                "size": 20,
                "duration": 1,
                "opacity": 0.8,
                "speed": 2
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            }
        }
    },
    "retina_detect": true
});


// Animated counter for stats
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

function animateCounters() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Start counters when section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('#home');
if (statsSection) {
    observer.observe(statsSection);
}

// Countdown timer for offer
function updateCountdown() {
    const now = new Date();
    const offerEnd = new Date();
    offerEnd.setHours(now.getHours() + 48); // 48 hours from now

    const diff = offerEnd - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});

// Form submission
const contactForm = document.getElementById('growth-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Here you would typically send the form data to your server
        // For demo purposes, we'll just show an alert
        alert('Thank you for your inquiry! Our team will contact you shortly.');
        contactForm.reset();
    });
}

// ScrollReveal animations
ScrollReveal().reveal('.navbar', {
    delay: 200,
    duration: 1000,
    distance: '20px',
    origin: 'top'
});

ScrollReveal().reveal('#home .container > *', {
    delay: 300,
    duration: 1000,
    distance: '30px',
    interval: 200,
    origin: 'bottom'
});

ScrollReveal().reveal('.stat-item', {
    delay: 500,
    duration: 1000,
    distance: '30px',
    interval: 200,
    origin: 'bottom'
});

ScrollReveal().reveal('.section-title, h2', {
    delay: 200,
    duration: 1000,
    distance: '20px',
    origin: 'top'
});

ScrollReveal().reveal('.service-card, .process-card, .case-study-card, .blog-card', {
    delay: 300,
    duration: 800,
    distance: '30px',
    interval: 200,
    origin: 'bottom',
    viewFactor: 0.2
});

ScrollReveal().reveal('.testimonial-card', {
    delay: 300,
    duration: 800,
    distance: '30px',
    interval: 200,
    origin: 'left',
    viewFactor: 0.2
});

ScrollReveal().reveal('.faq-item', {
    delay: 300,
    duration: 800,
    distance: '30px',
    interval: 200,
    origin: 'bottom',
    viewFactor: 0.2
});

ScrollReveal().reveal('.contact-method, .contact-form', {
    delay: 300,
    duration: 1000,
    distance: '30px',
    interval: 200,
    origin: 'bottom'
});

// Animate elements when they come into view
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .process-card, .case-study-card, .blog-card, .testimonial-card, .faq-item').forEach(card => {
    animateOnScroll.observe(card);
});

// Pause testimonial animation on hover of any testimonial card
const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialCards = document.querySelectorAll('.testimonial-card');

testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        testimonialTrack.classList.add('paused');
    });
    card.addEventListener('mouseleave', () => {
        testimonialTrack.classList.remove('paused');
    });
});

// Mouse interactive radiating light effect on cards with glass blur
const cards = document.querySelectorAll('.service-card, .case-study-card, .testimonial-card, .blog-card, .process-card');

cards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
        card.style.removeProperty('--mouse-x');
        card.style.removeProperty('--mouse-y');
    });
});

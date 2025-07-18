// This file contains JavaScript code for interactivity on the website.

// Function to handle form submission in the contact section
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.target); // Get form data
    const data = Object.fromEntries(formData.entries()); // Convert form data to an object

    // Here you can add code to send the data to a server or process it as needed
    console.log('Form submitted:', data);
}

// Add event listener to the contact form
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact-form'); // Select the contact form
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit); // Attach submit event listener
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Section entrance animation
    const animatedSections = document.querySelectorAll('main section');
    animatedSections.forEach(section => {
        section.classList.add('section-animate');
    });
    function revealSectionsOnScroll() {
        animatedSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                section.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealSectionsOnScroll);
    revealSectionsOnScroll(); // Initial check
});
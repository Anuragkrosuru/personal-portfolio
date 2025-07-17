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
});

// Function to smooth scroll to sections
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target element
    }
}

// Add event listeners for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        smoothScroll(this.getAttribute('href')); // Call smooth scroll function
    });
});
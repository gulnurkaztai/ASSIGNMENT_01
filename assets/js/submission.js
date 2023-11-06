document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmation');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
        // Hide the form, show the confirmation message
        contactForm.style.display = 'none';
        confirmationMessage.style.display = 'block';
    });
});

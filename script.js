// script.js file to handle form submission and display messages

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData(form);

        // Process form data here if needed

        // Display a success message
        messageDiv.innerText = 'Form submitted successfully!';
    });
});

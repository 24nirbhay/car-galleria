document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerLink = document.getElementById('registerLink');

    // Simple validation for username (letters only)
    function isValidUsername(username) {
        return /^[A-Za-z]+$/.test(username);
    }

    // Simple validation for password (8+ characters)
    function isValidPassword(password) {
        return password.length >= 8;
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        // Validate inputs
        if (!isValidUsername(username)) {
            alert('Username must contain only letters (no numbers or special characters)');
            return;
        }

        if (!isValidPassword(password)) {
            alert('Password must be at least 8 characters long');
            return;
        }

        // If valid, show success message and redirect
        alert('Logged in successfully!');
        window.location.href = 'home.html';
    });

    // For demo purposes, register link just shows an alert
    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('users currently full, please try again later');
    });
});

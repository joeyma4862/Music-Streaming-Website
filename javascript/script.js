document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var name = document.getElementById('nameInput').value.trim();
        var email = document.getElementById('emailInput').value.trim();
        var password = document.getElementById('passwordInput').value.trim();
        var age = document.getElementById('ageInput').value.trim();
        var gender = document.querySelector('input[name="gender"]:checked');

        if (name === '') {
            alert('Please enter your name.');
            return;
        }

        if (email === '') {
            alert('Please enter your email.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (password === '') {
            alert('Please enter a password.');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        if (age === '') {
            alert('Please enter your age.');
            return;
        }

        if (!gender) {
            alert('Please select your gender.');
            return;
        }

        alert('Form submitted successfully!');
    });

    function isValidEmail(email) {
        const atIndex = email.indexOf('@');
        if (atIndex < 1 || email.indexOf('@', atIndex + 1) !== -1) {
            return false;
        }
    
        const localPart = email.slice(0, atIndex);
        const domainPart = email.slice(atIndex + 1);
    
        if (!localPart || !domainPart) {
            return false;
        }
    
        const dotIndex = domainPart.indexOf('.');
        if (dotIndex < 1 || dotIndex === domainPart.length - 1) {
            return false;
        }
    
        const domainName = domainPart.slice(0, dotIndex);
        const domainExtension = domainPart.slice(dotIndex + 1);
        if (!domainName || !domainExtension) {
            return false;
        }
    
        return true;
    }    
});
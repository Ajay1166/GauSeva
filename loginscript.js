function toggleForm() {
    document.querySelector('.container').classList.toggle('switched');
    document.querySelector('.form-container').classList.toggle('show-signup');

    const registerLink = document.getElementById('register-link');
    registerLink.textContent = document.querySelector('.form-container').classList.contains('show-signup')
        ? "Already have an account? Login"
        : "Don't have an account? Register Now";
}

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    handleFormSubmission('login.php', new FormData(this));
});

document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    handleFormSubmission('signup.php', new FormData(this));
});

function handleFormSubmission(url, formData) {
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Display response as an alert

        if (data.includes("Login Successful")) {
            window.location.href = 'home.html'; // Redirect only if login is successful
        } else {
            // Clear the input fields
            document.querySelector('form[action="' + url + '"]').reset();
        }
    })
    .catch(error => {
        alert("An error occurred: " + error);
    });
}



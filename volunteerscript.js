document.getElementById('volunteer-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    let formData = new FormData(this);

    // Send data using fetch API
    fetch('submit_volunteer.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('response-message').innerHTML = data;
        document.getElementById('response-message').style.color = '#FF6F00';
        document.getElementById('volunteer-form').reset();
    })
    .catch(error => {
        document.getElementById('response-message').innerHTML = "An error occurred. Please try again.";
        document.getElementById('response-message').style.color = 'red';
        console.error('Error:', error);
    });
});

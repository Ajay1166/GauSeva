<?php
// Database connection settings
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "GauSeva";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo "Database connection failed.";
    exit();
}

// Get form data
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$message = trim($_POST['message']);
$experience = trim($_POST['experience']);

// Validate input
if (empty($name) || empty($email) || empty($phone) || empty($message) || empty($experience)) {
    echo "Please fill in all fields.";
    exit();
}

// Insert data into the database
$sql = "INSERT INTO volunteers (name, email, phone, message, experience) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $name, $email, $phone, $message, $experience);

if ($stmt->execute()) {
    echo "Thank you, $name! We will contact you soon.";
} else {
    echo "Error: Could not submit your form. Please try again.";
}

$stmt->close();
$conn->close();
?>

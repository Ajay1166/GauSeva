<?php
$servername = "localhost"; // usually localhost
$username = "root"; // MySQL username, usually 'root'
$password = ""; // MySQL password, usually an empty string
$dbname = "GauSeva"; // the database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

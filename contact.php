<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
    $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : '';
    $message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';

    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        echo "All fields are required.";
    } else {
        $to = 'ajay24comp@student.mes.ac.in';
        $subject = 'New Contact Form Submission';
        $body = "You have a new message from GauSeva:\n\n"
              . "Name: $name\n"
              . "Email: $email\n"
              . "Phone: $phone\n"
              . "Message: $message\n";

        $headers = "From: $email\r\n"
                 . "Reply-To: $email\r\n"
                 . "Content-Type: text/plain; charset=UTF-8\r\n";

        if (mail($to, $subject, $body, $headers)) {
            echo "Submitted successfully!";
        } else {
            echo "Failed to send email. Please try again later.";
        }
    }
}
?>

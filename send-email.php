<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $to = 'krishanthan2022.4.4@gmail.com'; // Replace with your own email address
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $headers = "From: $name <$email>" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  if (mail($to, $subject, $message, $headers)) {
    // Email sent successfully
    header('Location: thankyou.html'); // Redirect to thank-you page
    exit;
  } else {
    // Email failed to send
    header('Location: error.html'); // Redirect to error page
    exit;
  }
}
?>

 <?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$from = $_POST['email'];
$subject = "New mail Inquiry";
$body = "From: $name.\n"."E-Mail: $email\n"."Message:\n $message";

$to = "info@hiralbhut.thecompletewebhosting.com";
$headers = "From: $from \r\n";
$headers .= "Reply-To: $email \r\n";

if (!$_POST['name']) {
      $errName = 'Please enter your name';
      echo $errName;
      
    }

  if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
      $errEmail = 'Please enter a valid email address';
      echo $errEmail;
      
    }

  if (!$_POST['message']) {
      $errMessage = 'Please enter your message';
      echo $errMessage;
      
    }

  // If there are no errors, send the email
   if (!$errName && !$errEmail && !$errMessage && !$errHuman) {
      
  if (mail ($to, $subject, $body, $headers)) {
   
    $success ='<div class="alert alert-success"> Thank you! mail has been sent. We will contact you soon.</div>';
    echo $success;
   
  } else {
    $result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
    echo $result;
  }
   }

?>
<?php
/*$name = $_POST["cli_name"];
$phone = $_POST["cli_phone"];
$date = $_POST["cli_date"];
$email = $_POST["cli_email"];*/


// Check for empty fields
if(empty($_POST['cli_name'])      ||
   empty($_POST['cli_phone'])     ||
   empty($_POST['cli_date'])     ||
   empty($_POST['cli_email'])   ||
   !filter_var($_POST['cli_email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
else{
    $name = strip_tags(htmlspecialchars($_POST['cli_name']));
    $email = strip_tags(htmlspecialchars($_POST['cli_email']));
    $phone = strip_tags(htmlspecialchars($_POST['cli_phone']));
    $date = strip_tags(htmlspecialchars($_POST['cli_date']));

    // Create the email and send the message
    $to = 'appointments@dentalcarecenterusa.com';
    $email_subject = 'New Appointment From Dental Care Center USA';

    $message = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">';
    $message .= '<head>';
    $message .= ' <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';
    $message .= '<meta name="viewport" content="width=device-width, initial-scale=1">';
    $message .= '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
    $message .= '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
    $message .= '<title></title>';
    $message .= '<style type="text/css">';
    $message .= '</style>  ';
    $message .= '</head>';
    $message .= '<body style="margin:0; padding:0; background-color:#F2F2F2;">';
    $message .= '<center>';
    $message .= '<table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#F2F2F2">';
    $message .= '<tr>';
    $message .= '<td align="center" valign="top">New Appointment Received';
    $message .= '</td>';
    $message .= '</tr>';

    $message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($name) . "</td></tr>";
    $message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($email) . "</td></tr>";
    $message .= "<tr><td><strong>Phone Number:</strong> </td><td>" . strip_tags($phone) . "</td></tr>";
    $message .= "<tr><td><strong>Date:</strong> </td><td>" . strip_tags($date) . "</td></tr>";

    $message .= '</table>';
    $message .= '</center>';
    $message .= '</body>';
    $message .= '</html>';

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $headers .= "From: Dental Care Center USA <appointments@dentalcarecenterusa.com>\r\n"; 

    //dirección de respuesta, si queremos que sea distinta que la del remitente 
    $headers .= "Reply-To: $email\r\n";

    //direcciones que recibián copia 
    $headers .= "Cc: contact@dentalcarecenterrp.com,preventivedentalcare1@hotmail.com\r\n";
    
    $headers .= "Bcc: alan.ctz.vlz@gmail.com\r\n"; 


    // $message .= '<html lang="en">';

            

    if (mail($to, $email_subject, $message, $headers)) {
        echo "El mail ha sido enviado";
    }else{
        echo "Error de envio " . mysql_error();
    }
}
?>
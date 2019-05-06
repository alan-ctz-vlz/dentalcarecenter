<?php
// Cargamos la clase PHPMailer
require_once("clases/class.phpmailer.php");
 
// Incluimos la configuración de PHPMailer
include("includes/inc.configuracion_email.php");

// ********************* <[ Envío al administrador ]>
// Cargamos la plantilla admin para el cuerpo del Email
$body = file_get_contents("template/Email.html");
 
// Añadimos el asunto
$mail->Subject    = "Appointment Dental Care Center";
 
// Aquí indicas tu Email.
$mail->AddAddress("dnuez3204@gmail.com", "Admin");
 
// Aquí cambiamos las etiquetas de la plantilla por los datos del formulario
$sustituir_nombre = "%usuario_nombre%";
$por_nombre = trim(utf8_decode($_POST[cli_name]));
$body = str_replace($sustituir_nombre, $por_nombre, $body);
 
$sustituir_email = "%usuario_email%";
$por_email = trim(utf8_decode($_POST[cli_phone]));
$body = str_replace($sustituir_email, $por_email, $body);
 
// $sustituir_asunto = "%usuario_asunto%";
$por_asunto = "Nueva reservación";
$body = str_replace($sustituir_asunto, $por_asunto, $body);
 
$sustituir_mensaje = "%usuario_mensaje%";
$por_mensaje = stripslashes(trim(utf8_decode($_POST[cli_date])));
$body = str_replace($sustituir_mensaje, $por_mensaje, $body);
 
// Aquí incluimos el cuerpo del mensaje ya modificado
$mail->MsgHTML($body);
 
// Mandamos el Email y comprobamos que se ha mandado
if(!$mail->Send()) {
    $email = false;
} else {
    $email = true;
}
 
// // ********************* <[ Envío al usuario ]>
 
// // Borramos direcciones y adjuntos (por si los hubiera)
// $mail->ClearAddresses();
// $mail->ClearAttachments();
 
// // Cargamos la plantilla usuario para el cuerpo del Email
// $body = file_get_contents("emails/email.contactar_usuario.html");
 
// // Añadimos el asunto
// $mail->Subject    = "PHP y Javascript usuario contactar";
 
// // Aquí Añadimos el Email del usuario que puso en el formulario de contacto.
// $mail->AddAddress(trim($_POST[tu_email]), trim(utf8_decode($_POST[tu_nombre])));
 
// // Aquí cambiamos las etiquetas de la plantilla por los datos del formulario
// $body = str_replace($sustituir_nombre, $por_nombre, $body);
 
// $body = str_replace($sustituir_email, $por_email, $body);
 
// $body = str_replace($sustituir_asunto, $por_asunto, $body);
 
// $body = str_replace($sustituir_mensaje, $por_mensaje, $body);
 
// Aquí incluimos el cuerpo del mensaje ya modificado
$mail->MsgHTML($body);
 
// Y ahora mandamos el Email al usuario, este no lo vamos a comprobar
$mail->Send();
<?php
if(empty($_POST['nombre'])      ||
   empty($_POST['email'])     ||
	empty($_POST['mensaje'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo json_encode('falso');
   
   }

$name = strip_tags(htmlspecialchars($_POST['nombre']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['mensaje']));

$to = 'ambelkin@gmail.com'; 
$email_body = "Tenes un mensaje";
$headers = "Nombre: $name\n\nEmail: $email_address\n\n$message";
mail($to,$email_body,$headers);
echo json_encode('verdadero');
//header('Location: http://www.alejandrobelkin.com');
?>

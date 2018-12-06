<?php

if(empty($_POST['nombre'])      ||
   empty($_POST['email'])     ||
	empty($_POST['mensaje'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo json_encode('falso');
   
   } else {echo json_encode('verdadero');

   }

//header('Location: http://www.alejandrobelkin.com');


?>

<?php
if(isset($_POST['submit'])){

    $para = "182044@upslp.edu.mx";
    $asunto = "Enviando informacion";
    $nombre = $_POST('nombre');
    $correo = $_POST('email');
    $mensaje = $_POST('mensaje');
    $headers = "MIME-Version: 1.0\r\n";
    $header = "Content-type: text/html;charset=utf8\r\n";
    $cuerpo = "Enviado por: $nombre\n Email:$correo\n Mensaje: $mensaje\n";

    $bool = mail($para,$asunto,$cuerpo,$header);
}
else{
    echo "Algo ocurrio mal...";
}
?>
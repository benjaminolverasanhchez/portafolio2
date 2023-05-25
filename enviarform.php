<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nombre = $_POST['nombre'];
  $email = $_POST['correo'];
  $mensaje = $_POST['CQS'];

  $to = '182044@upslp.edu.mx'; // Reemplaza con tu dirección de correo
  $subject = 'Nuevo mensaje del formulario de contacto';
  $message = "Nombre: $nombre\n";
  $message .= "Email: $email\n";
  $message .= "Mensaje: $mensaje\n";

  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";

  if (mail($to, $subject, $message, $headers)) {
    header('Location: formulario_contacto.php?status=success');
  } else {
    echo 'Error al enviar el mensaje. Por favor, inténtalo nuevamente.';
  }
}
?>

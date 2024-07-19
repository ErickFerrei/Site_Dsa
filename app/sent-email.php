<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';


if (isset($_POST['enviar'])) {

  $mail = new PHPMailer(true);

  try {
    //Conexão com o server 
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host       = 'mail.dsasoftweb.com.br';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'contato@dsasoftweb.com.br';
    $mail->Password   = '9625asdf157';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;


    $mail->setFrom('contato@dsasoftweb.com.br', 'Mailer');
    $mail->addAddress('contato@dsasoftweb.com.br', 'Joe User');

    // Carregar template HTML
    $body = file_get_contents('template.html');

    // Substituir placeholders pelos dados do formulário
    $body = str_replace('{nome}', $_POST['nome'], $body);
    $body = str_replace('{email}', $_POST['email'], $body);
    $body = str_replace('{telefone}', $_POST['telefone'], $body);
    $body = str_replace('{segmento}', $_POST['segmento'], $body);
    $body = str_replace('{assunto}', $_POST['assunto'], $body);

    $mail->isHTML(true);
    $mail->Subject = 'Contato vindo do Site';
    $mail->Body    = $body;
    $mail->send();


    echo '<script>window.alert("👍 Mensagem enviada com sucesso!!"), window.location = "../index.html" </script>';
  } catch (Exception $e) {
    echo "Menssagem não enviada com sucesso. Mailer Error: {$mail->ErrorInfo}";
  }
}

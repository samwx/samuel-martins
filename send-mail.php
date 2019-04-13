<?php
$subjectPrefix = '[Contato via Site]';
$emailTo = 'samuelmartins.sw@gmail.com';

$user_name = $_POST['user_name'];
$user_email = $_POST['user_email'];
$user_phone = $_POST['user_phone'];
$user_msg = $_POST['user_msg'];
$send = $_POST['send'];

$subject = "$subjectPrefix";
$body = "<b>Nome:</b> $user_name <br /> <b>E-mail:</b> $user_email <br /> <b>Telefone:</b> $user_phone <br /> <b>Mensagem:</b> $user_msg <br /> ";

$headers  = 'MIME-Version: 1.1' . PHP_EOL;
$headers .= 'Content-type: text/html; charset=utf-8' . PHP_EOL;
$headers .= "From: $nome <$user_email>" . PHP_EOL;
$headers .= "Return-Path: $emailTo" . PHP_EOL;
$headers .= "Reply-To: $user_email" . PHP_EOL;
$headers .= 'X-Mailer: PHP/'. phpversion() . PHP_EOL;

if( $user_name != '' && $user_email != '' && $user_msg != '' && $send == '' ) {
  mail($emailTo, $subject, $body, $headers);
  echo 'Obrigado por enviar seu email!';
} else {
  echo 'Falha ao enviar =/';
}
?>

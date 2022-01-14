<?php
//Сбор данных из полей формы. 
$email = $_POST['email'];// Берём данные из input c атрибутом name="name"
$message = $_POST['message']; // Берём данные из input c атрибутом name="phone"
// $email = $_POST['mail']; // Берём данные из input c атрибутом name="mail"

$token = "5041937071:AAHrJWKTF4kB_FMo-ghkAmkRtMbnZ0lKBBE"; // Тут пишем токен
$chat_id = "-742055798"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "My site"; //Указываем название сайта

$arr = array(

  'Заказ с сайта: ' => $sitename,
  'Email: ' => $email,
  'Request: ' => $message
  // 'Почта' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>
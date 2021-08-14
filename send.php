<?php
$req = $_POST['req'];
$email = $_POST['email'];
$req = htmlspecialchars($req);
$email = htmlspecialchars($email);
$req = urldecode($req);
$email = urldecode($email);
$req = trim($req);
$email = trim($email);
//echo $req;
//echo "<br>";
//echo $email;
if (mail("nikitakoshik064@gmail.com", "Заявка с сайта", "ФИО:".$req.". E-mail: ".$email ,"From: nikitakoshyk17@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>
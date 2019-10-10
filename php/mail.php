<?php
$con_name       = $_POST['con_name'];
$con_email      = $_POST['con_email'];
$con_phone	    = $_POST['con_phone'];
$con_company    = $_POST['con_company'];
$con_message    = $_POST['con_message'];


$to             = 'expjoomworker@gmail.com';
$subject        = 'Synergy User Query';


$message = '<strong>Name : </strong>'.$con_name.'<br/><br/>';
$message .= '<strong>Eamil : </strong>'.$con_email.'<br/><br/>';
$message .= $con_phone.'<br/>';
$message .= $con_company.'<br/>';
$message .= $con_message.'<br/>';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <'.$con_email.'>' . "\r\n";

mail($to,$subject,$message,$headers);
echo 1;
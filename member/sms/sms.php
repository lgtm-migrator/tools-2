<?php
if (!defined('JZEG_NET_SMS')) die('');
if ($_GET) die();

if ($_POST['accessKeyId'] && $_POST['accessSecret'] && $_POST['PhoneNumbers'] && $_POST['TemplateCode']) {
//    require_once dirname(__FILE__) . '/sms_send.php';
} else {
    die();
}

$accessKeyId = '';
$accessSecret = '';
$PhoneNumbers = $_POST['PhoneNumbers'];
$TemplateCode = $_POST['TemplateCode'];

$sms_send_type = $_POST['sms_send_type'];

require_once dirname(__FILE__) . '/sms_send.php';


//if ('batch' === $_POST['sms_send_type']) {
//    require_once dirname(__FILE__) . '/SendBatchSms.php';
//} else {
//    require_once dirname(__FILE__) . '/SendSms.php';
//}

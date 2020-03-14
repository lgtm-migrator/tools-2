<?php
if (!defined('JZEG_NET_SMS')) define('JZEG_NET_SMS', 0);
if ($_GET) die();

if (isset($_POST['_token'])) {
    ('' === $_POST['_token']) ?: die();
} elseif (!isset($_POST['_token'])) {
    die();
}

if ($_POST['jt_sms_send_accessKeyId'] && $_POST['jt_sms_send_accessSecret'] && $_POST['jt_sms_send_PhoneNumbers'] && $_POST['jt_sms_send_TemplateCode']) {
    if (isset($_POST['jt_sms_send_type']) && 'batch' === $_POST['jt_sms_send_type']) {
        $batch_send_sms = true;
    } else {
        $batch_send_sms = false;
    }
} else {
    die();
}

$accessKeyId = $_POST['jt_sms_send_accessKeyId'];
$accessSecret = $_POST['jt_sms_send_accessSecret'];
$PhoneNumbers = $_POST['jt_sms_send_PhoneNumbers'];
$action_name = $_POST['jt_sms_send_TemplateCode'];


require_once dirname(__FILE__) . "/template.php";
global $template_json;

$default_action_names = array_keys($template_json);
if (true === array_key_exists($action_name, $default_action_names)) {
    die('模板不存在');
}

$action_value = ($batch_send_sms) ? 'SendBatchSms' : 'SendSms';
$result_json = array(
    "product" => "Dysmsapi",
    "scheme" => "http",//生产模式的时候使用https
    "version" => "2017-05-25",
    "action" => $action_value,
    "method" => "POST",
    "host" => "dysmsapi.aliyuncs.com",
);


$TemplateCode_value = $template_json[$action_name]['templateCode'];
$TemplateParam_value = json_encode($template_json[$action_name]['templateParam']);


$RegionId = 'cn-hangzhou';
//接收短信的手机号码,手机号码之间以英文逗号（,）分隔。上限为1000个手机号码。
//$PhoneNumbers = '15227731266';
//短信签名名称
$SignName = '杰格网';
//短信模板ID
$TemplateCode = $TemplateCode_value;
//短信模板变量对应的实际值，JSON格式。
$TemplateParam = $TemplateParam_value;
//上行短信扩展码
$SmsUpExtendCode = '';
//外部流水扩展字段。
$OutId = '';


if (true === $batch_send_sms) {
    require_once dirname(__FILE__) . '/SendBatchSms.php';
} else {
    require_once dirname(__FILE__) . '/SendSms.php';
}


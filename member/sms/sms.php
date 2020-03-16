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
$TemplateName = $_POST['jt_sms_send_TemplateCode'];
$SmsContent = null;


require_once dirname(__FILE__) . "/template.php";
global $template_json;

$default_action_names = array_keys($template_json);
if (true === array_key_exists($TemplateName, $default_action_names)) {
    die('模板不存在');
}

$action_value = ($batch_send_sms) ? 'SendBatchSms' : 'SendSms';
$result_json = array(
    "product" => "Dysmsapi",
    "scheme" => "https",//生产模式的时候使用https
    "version" => "2017-05-25",
    "action" => $action_value,
    "method" => "POST",
    "host" => "dysmsapi.aliyuncs.com",
);


$TemplateCode_value = $template_json[$TemplateName]['templateCode'];
$TemplateParam_value = json_encode($template_json[$TemplateName]['templateParam']);


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
$SmsUpExtendCode = null;
//外部流水扩展字段。
$OutId = null;


global $result;

if (true === $batch_send_sms) {
    require_once dirname(__FILE__) . '/SendBatchSms.php';
} else {
    require_once dirname(__FILE__) . '/SendSms.php';
}


$sql_add_data['PhoneNumbers'] = $PhoneNumbers;
$sql_add_data['SignName'] = $SignName;
$sql_add_data['AccessKeyId'] = $accessKeyId;
$sql_add_data['RegionId'] = $RegionId;
$sql_add_data['Action'] = $result_json['action'];
$sql_add_data['OutId'] = $OutId;
$sql_add_data['SmsUpExtendCode'] = $SmsUpExtendCode;
$sql_add_data['TemplateName'] = $TemplateName;
$sql_add_data['TemplateCode'] = $TemplateCode;
$sql_add_data['TemplateParam'] = $TemplateParam;
$sql_add_data['SmsContent'] = $SmsContent;
$sql_add_data['Host'] = $result_json['host'];
$sql_add_data['Scheme'] = $result_json['scheme'];
$sql_add_data['Method'] = $result_json['method'];
$sql_add_data['Version'] = $result_json['version'];
$sql_add_data['Product'] = $result_json['product'];
$sql_add_data['RequestId'] = $request_result['RequestId'];
$sql_add_data['Code'] = $request_result['Code'];
$sql_add_data['BizId'] = (isset($request_result['BizId'])) ? $request_result['BizId'] : null;
$sql_add_data['Message'] = $request_result['Message'];

//global $sms_database;
$sms_database = $sql_add_data;

require_once dirname(__FILE__) . "/database_add_sms.php";

//echo json_encode($sms_database);
//echo "\n\n\n";

echo json_encode($result);

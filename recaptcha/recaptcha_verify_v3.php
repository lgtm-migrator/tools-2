<?php
require_once "recaptcha_key.php";
require_once "recaptcha.php";
require_once "vendor/autoload.php";

$recaptcha_v3_secret_key = $recaptcha_key["v3"]["secret"];

$action = filter_input(INPUT_POST, "action");
$response = filter_input(INPUT_POST, "token");
$hostname = filter_input(INPUT_POST, $_SERVER['SERVER_NAME']);
$threshold = 0.8;
$remoteIp = $_SERVER["REMOTE_ADDR"];
$timeoutSeconds = 4000;


$recaptcha = new ReCaptcha\ReCaptcha($recaptcha_v3_secret_key, new ReCaptcha\RequestMethod\Post($siteVerifyUrl));
$resp = ReCaptcha_verify($response);

verify_result();

function verify_result()
{
    global $resp;

    if ($resp->isSuccess()) {
//        die(json_encode($resp->toArray()));
        return true;
    } else {
//        $errors = $resp->getErrorCodes();
//        die(json_encode($errors));
//        die(json_encode($resp->toArray()));
        return false;
    }
}
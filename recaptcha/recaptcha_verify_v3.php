<?php
require_once "recaptcha_key.php";
require_once "../vendor/autoload.php";


$action = filter_input(INPUT_POST, "action");
$response = filter_input(INPUT_POST, "token");
$hostname = filter_input(INPUT_POST, $_SERVER['SERVER_NAME']);
$threshold = 0.8;
$remoteIp = $_SERVER["REMOTE_ADDR"];
$timeoutSeconds = 4000;

function verify_result()
{
    $resp = ReCaptcha_verify();

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


function ReCaptcha_verify($Response = null, $Action = null, $HostName = null, $Threshold = null, $TimeOutSeconds = null, $RemoteIp = null)
{
    global $recaptcha_v3_secret_key, $siteVerifyUrl, $response, $action, $hostname, $threshold, $timeoutSeconds, $remoteIp;

    $Response = (is_null($Response)) ? $response : $Response;
    $Action = (is_null($Action)) ? $action : $Action;
    $HostName = (is_null($HostName)) ? $hostname : $HostName;
    $Threshold = (is_null($Threshold)) ? $threshold : $Threshold;
    $TimeOutSeconds = (is_null($TimeOutSeconds)) ? $timeoutSeconds : $TimeOutSeconds;
    $RemoteIp = (is_null($RemoteIp)) ? $remoteIp : $RemoteIp;

    $recaptcha = new ReCaptcha\ReCaptcha($recaptcha_v3_secret_key, new ReCaptcha\RequestMethod\Post($siteVerifyUrl));
    $resp = $recaptcha
        ->setExpectedAction($Action)
        ->setExpectedHostname($HostName)
        ->setScoreThreshold($Threshold)
        ->setChallengeTimeout($TimeOutSeconds)
        ->verify($Response, $RemoteIp);
    return $resp;
}
<?php
$action = filter_input(INPUT_POST, 'action');
$response = filter_input(INPUT_POST, 'token');
$hostname = filter_input(INPUT_SERVER, 'SERVER_NAME');
$remoteIp = filter_input(INPUT_SERVER, 'REMOTE_ADDR', FILTER_VALIDATE_IP);
$timeoutSeconds = 4500;
$threshold = 0.9;

if ($action && $response) {
    verify_result('json');
}

function verify_result($type = 'json', $Response = null, $Action = null)
{
    $resp = ReCaptcha_verify($Response, $Action);
    $resp_array = $resp->toArray();
    $resp_json = json_encode($resp_array);

    require_once 'recaptcha_database.php';
    recaptcha_data_to_database($resp_array);

    if ($type === 'bool') {
        if ($resp->isSuccess()) {
            return true;
        } else {
            return false;
        }
    } elseif ($type === 'json') {
        if ($resp->isSuccess()) {
            die($resp_json);
        } else {
            die($resp_json);
        }
    }

}


function ReCaptcha_verify($Response = null, $Action = null, $HostName = null, $Threshold = null, $TimeOutSeconds = null, $RemoteIp = null)
{
    global $recaptcha_v3_secret_key, $siteVerifyUrl, $response, $action, $hostname, $threshold, $timeoutSeconds, $remoteIp;
    require_once 'recaptcha_key.php';
    require_once '../vendor/autoload.php';

    $Response = (is_null($Response)) ? $response : $Response;
    $Action = (is_null($Action)) ? $action : $Action;
    $HostName = (is_null($HostName)) ? $hostname : $HostName;
    $Threshold = (is_null($Threshold)) ? $threshold : $Threshold;
    $TimeOutSeconds = (is_null($TimeOutSeconds)) ? $timeoutSeconds : $TimeOutSeconds;
    $RemoteIp = (is_null($RemoteIp)) ? $remoteIp : $RemoteIp;

    $recaptcha = new ReCaptcha\ReCaptcha($recaptcha_v3_secret_key, new ReCaptcha\RequestMethod\Post($siteVerifyUrl));
    return $recaptcha
        ->setExpectedAction($Action)
        ->setExpectedHostname($HostName)
        ->setScoreThreshold($Threshold)
        ->setChallengeTimeout($TimeOutSeconds)
        ->verify($Response, $RemoteIp);
}


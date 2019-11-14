<?php
$action = filter_input(INPUT_POST, 'action');
$response = filter_input(INPUT_POST, 'token');
$hostname = filter_input(INPUT_SERVER, 'SERVER_NAME');
$remoteIp = filter_input(INPUT_SERVER, 'REMOTE_ADDR', FILTER_VALIDATE_IP);
$timeoutSeconds = 4500;
$threshold = 1.0;

if ($action && $response && $response && $hostname) {
    verify_result();
} else {
    die();
}

function verify_result()
{
    $resp = ReCaptcha_verify();
    $resp_array = $resp->toArray();
    $resp_json = json_encode($resp->toArray());

    if ($resp->isSuccess()) {
        die($resp_json);
//        return true;
    } else {
//        $errors = $resp->getErrorCodes();
//        echo json_encode($errors);
        recaptcha_data_to_database($resp_array);

        die($resp_json);
//        return false;
    }
}


function ReCaptcha_verify($Response = null, $Action = null, $HostName = null, $Threshold = null, $TimeOutSeconds = null, $RemoteIp = null)
{
    global $recaptcha_v3_secret_key, $siteVerifyUrl, $response, $action, $hostname, $threshold, $timeoutSeconds, $remoteIp;
    require_once "recaptcha_key.php";
    require_once "../vendor/autoload.php";

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


function recaptcha_data_to_database($resp_array)
{

    global $db_host, $db_user, $db_pwd, $db_database;
    global $threshold, $remoteIp, $timeoutSeconds;
    require_once "../mysqli/config.php";

    $udate = new DateTime();
    $created_time = $udate->format("Y-m-d H:i:s.u");
    $user_agent = filter_input(INPUT_SERVER, "HTTP_USER_AGENT");

    $google_recaptcha_data = array(
        "action" => $resp_array['action'],
        "hostname" => $resp_array['hostname'],
        "challenge_ts" => $resp_array['challenge_ts'],
        "score" => $resp_array['score'],
        "error_codes" => json_encode($resp_array['error-codes']),
        "apk_package_name" => $resp_array['apk_package_name'],
        "threshold" => $threshold,
        "remote_ip" => $remoteIp,
        "timeout_seconds" => $timeoutSeconds,
        "user_agent" => $user_agent,
        "created_time" => $created_time,
        "category" => "",
    );


    $db = new MysqliDb();
    $db->addConnection("google_recaptcha_data", array(
        'host' => $db_host,
        'username' => $db_user,
        'password' => $db_pwd,
        'db' => $db_database,
//        'port' => 3306,
//        'prefix' => '',
//        'charset' => 'utf8'
    ));

    try {
        $id = $db->connection("google_recaptcha_data")->insert("jzeg_tools.google_recaptcha_data", $google_recaptcha_data);
    } catch (Exception $e) {
        die($e->getMessage());
    }

    if (!$id) {
        $message = array(
            'result' => "提交失败",
            'last_errno' => $db->getLastErrno(),
            'last_error' => $db->getLastError(),
//                'data' => $google_recaptcha_data,
        );

        die(json_encode($message));
    }
}
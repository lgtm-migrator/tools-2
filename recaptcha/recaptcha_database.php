<?php
/**
 * 保存信息到数据库
 */
function recaptcha_data_to_database($resp_array, $Threshold = null)
{
    global $db_host, $db_user, $db_pwd, $db_database;
    global $threshold, $remoteIp, $timeoutSeconds;
    require_once dirname(dirname(__FILE__)) . "/mysqli/config.php";

    $now = new DateTime();

    $success_value = $resp_array['success'] ? 1 : 0;
    $error_codes_json = (count($resp_array['error-codes']) > 0) ? json_encode($resp_array['error-codes']) : '';

    $success = $success_value;
    $action = $resp_array['action'];
    $hostname = $resp_array['hostname'];
    $score = $resp_array['score'];
    $Threshold = is_null($Threshold) ? $threshold : $Threshold;
    $error_codes = $error_codes_json;
    $challenge_ts = $resp_array['challenge_ts'];
    $challenge_ts_time = return_YmdHisu(challenge_ts_to_dataTime($challenge_ts));
    $created_time = $now->format("Y-m-d H:i:s.u");
    $category = "";
    $apk_package_name = $resp_array['apk_package_name'];
    $user_agent = filter_input(INPUT_SERVER, "HTTP_USER_AGENT");

    $google_recaptcha_data = array(
        "success" => $success,
        "action" => $action,
        "hostname" => $hostname,
        "score" => $score,
        "threshold" => $Threshold,
        "remote_ip" => $remoteIp,
        "error_codes" => $error_codes,
        "timeout_seconds" => $timeoutSeconds,
        "challenge_ts" => $challenge_ts,
        "challenge_ts_time" => $challenge_ts_time,
        "created_time" => $created_time,
        "category" => $category,
        "apk_package_name" => $apk_package_name,
        "user_agent" => $user_agent,
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
        $db->connection("google_recaptcha_data");
        $id = $db->insert("jzeg_tools.google_recaptcha_data", $google_recaptcha_data);
    } catch (Exception $e) {
        die($e->getMessage());
    }

    if (!$id) {
        $result['message']['recaptcha']['failure'] = 'reCAPTCHA保存失败';
        $result['error']['recaptcha']['last_errno'] = $db->getLastErrno();
        $result['error']['recaptcha']['last_error'] = $db->getLastError();
        $result['error']['recaptcha']['data'] = $google_recaptcha_data;

//        die(json_encode($result));
    }
}


/** 修改时间格式 **/
function challenge_ts_to_dataTime($challenge_ts)
{
    $challenge_ts = is_string($challenge_ts) ? $challenge_ts : (string)$challenge_ts;
    $patterns = array(
        '/T/',
        '/Z$/'
    );
    $replace = array(
        ' ',
        ''
    );
    $challenge_ts = preg_replace($patterns, $replace, $challenge_ts, 1);
    try {
        $new_dateTime = new DateTime($challenge_ts);
    } catch (Exception $e) {
        die($e->getMessage());
    }
    return $new_dateTime;
}

function return_YmdHisu($dataTime)
{
    return $dataTime->format("Y-m-d H:i:s.u");
}

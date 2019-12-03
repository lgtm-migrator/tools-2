<?php
if (filter_has_var(INPUT_POST, "data")) {
    $phone_number_data_post = filter_input(INPUT_POST, 'data');
} else {
    die("访问受限");
}
$data_post_array = json_decode($phone_number_data_post, true);


$udate = new DateTime();
$create_date = $udate->format("Y-m-d H:i:s.u");
$modify_date = $udate->format("Y-m-d H:i:s.u");
$udate = null;

$PREG_rules = array(
    "chinese_name" => "/^([\u4e00-\u9fa5·]{2,16})$/",
    "tel_number" => "/\d{3}-\d{8}|\d{4}-\d{7}/",
    "a_zA_Z4" => "/[a-zA-Z]{1,4}/",
    "mobile_number" => "/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/",
);


$server_remote_addr = filter_input(INPUT_SERVER, "REMOTE_ADDR", FILTER_VALIDATE_IP);

$validate_ip_v4 = filter_var($server_remote_addr, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4);
$validate_ip_v6 = filter_var($server_remote_addr, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6);

$ip = "";
$ip_v4 = "";
$ip_v6 = "";
if ($validate_ip_v4) {
    $ip_v4 = $server_remote_addr;
} elseif ($validate_ip_v6) {
    $ip_v6 = $server_remote_addr;
} else {
    $ip = "unset";
}


$static = array(
    'n' => 'no',
    'y' => 'yes',
    'v' => 'Verify',
    'vd' => 'Verified',
);

//矿区
$regional_array = array(
    'un' => 'unset',
    'xm' => 'xingmei',
    'gq' => 'gequan',
    'dp' => 'dongpang',
    'xdw' => 'xiandewang',
);
$regional_key = filter_var($data_post_array["info"]["regional"], FILTER_VALIDATE_REGEXP, filter_validate_options_regexp($PREG_rules["a_zA_Z4"])) ? filter_var($data_post_array["info"]["regional"], FILTER_VALIDATE_REGEXP, filter_validate_options_regexp($PREG_rules["a_zA_Z4"])) : "un";
$regional = $regional_array[$regional_key];

function filter_validate_options_regexp($regexp_rule_string)
{
    $regexp_array = array(
        "options" => array(
            "regexp" => $regexp_rule_string
        )
    );
    return $regexp_array;
}

//区队、科室
$department = array(
    'un' => 'unset',
    'bwk' => 'baoweike',
);
$user_agent = filter_input(INPUT_SERVER, "HTTP_USER_AGENT");


$data_count = count($data_post_array) - 1;
for ($i = 0; $i < $data_count; $i++) {
    $phone_number_data[$i] = array(
        "phone_name" => $data_post_array["$i"]["phone_name"],
        "phone_nick_name" => "",
        "note" => "",
        "tel_number" => $data_post_array[$i]['tel_number'],
        "mobile_number" => $data_post_array[$i]['mobile_number'],
        "static" => $static['n'],
        "regional" => $regional,
        "department" => $department['un'],
        "create_data" => $create_date,
        "modify_data" => $modify_date,
        "ip" => $ip,
        "ip_v4" => $ip_v4,
        "ip_v6" => $ip_v6,
        "user_agent" => $user_agent,
    );
}


require_once "../mysqli/mysqli.php";

try {
    $db->connection("add_phone_number");
} catch (Exception $e) {
    die($e->getMessage());
}

try {
    $id = $db->insertMulti("phone_number", $phone_number_data);
} catch (Exception $e) {
    die($e->getMessage());
}

if (!$id) {
    $phone_number_error_data = $phone_number_data;
    foreach ($phone_number_error_data as $k => $v) {
        unset($phone_number_error_data[$k]["phone_nick_name"]);
        unset($phone_number_error_data[$k]["note"]);
        unset($phone_number_error_data[$k]["static"]);
        unset($phone_number_error_data[$k]["regional"]);
        unset($phone_number_error_data[$k]["department"]);
        unset($phone_number_error_data[$k]["create_data"]);
        unset($phone_number_error_data[$k]["modify_data"]);
        unset($phone_number_error_data[$k]["ip"]);
        unset($phone_number_error_data[$k]["ip_v4"]);
        unset($phone_number_error_data[$k]["ip_v6"]);
        unset($phone_number_error_data[$k]["user_agent"]);
    }
    $message = array(
        'result' => "提交失败",
        'Errno' => $db->getLastErrno(),
        'Error' => $db->getLastError(),
        'data' => $phone_number_error_data,
    );
} else {
    $message = array(
        'result' => "您提交的" . $data_count . "个号码已经成功被收录",
    );
}
echo json_encode($message);


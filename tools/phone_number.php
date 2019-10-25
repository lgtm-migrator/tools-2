<?php
if ($_POST) {
    $phone_number_data_post = $_POST["data"];
}

require_once "mysqli.php";
$db = new MysqliDb($db_host, $db_user, $db_pwd, $db_database);

$udate = new DateTime();
$create_data = $udate->format("Y-m-d H:i:s.u");
$modify_data = $udate->format("Y-m-d H:i:s.u");
$udate = null;


//$ip = $_SERVER['SERVER_ADDR'];
$ip = $_SERVER['REMOTE_ADDR'];
$ip_v4 = $_SERVER['REMOTE_ADDR'];
$ip_v6 = "test";
$static = array(
    'n' => 'no',
    'y' => 'yes',
    'v' => 'Verify',
    'vd' => 'Verified',
);
$regional = array(
    'xm' => 'xingmei',
    'gq' => 'gequan',
    'dp' => 'dongpang',
    'xdw' => 'xiandewang',
);
$user_agent = $_SERVER['HTTP_USER_AGENT'];

$data_post_array = json_decode($phone_number_data_post, true);

$data_count = count(json_decode($phone_number_data_post));
for ($i = 0; $i < $data_count; $i++) {
    $phone_number_data[$i] = array(
        "phone_name" => $data_post_array["$i"]["phone_name"],
        "phone_nick_name" => $data_post_array[$i]['phone_name'],
        "tel_number" => $data_post_array[$i]['tel_number'],
        "mobile_number" => $data_post_array[$i]['mobile_number'],
        "static" => $static['n'],
        "regional" => $regional['xm'],
        "create_data" => $create_data,
        "modify_data" => $modify_data,
        "ip" => $ip,
        "ip_v4" => $ip_v4,
        "ip_v6" => $ip_v6,
        "user_agent" => $user_agent,
    );
}

$id = $db->insertMulti("phone_number", $phone_number_data);

if (!$id) {
    $message = array(
        'result' => "提交失败",
        'Errno' => $db->getLastErrno(),
        'Error' => $db->getLastError(),
    );
//    die('无法插入数据: ' . $db->getLastErrno() . "&nbsp;&nbsp;&nbsp;&nbsp;" . $db->getLastError());
} else {
    $message = array(
        'count' => $data_count,
        'result' => "您提交的号码已经成功被收录",
        'data' => $phone_number_data,
        'data_post' => $data_post_array,
    );
}
echo json_encode($message);


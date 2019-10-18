<?php
if ($_POST) {
    $phone_number_data_post = $_POST;

    if (empty($phone_number_data_post['nick_name'])) {
        $phone_number_data_post['nick_name'] = $phone_number_data_post['phone_name'];
    }
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
$phone_number_data_post['user_agent'] = $_SERVER['HTTP_USER_AGENT'];

$regional = array(
    'xm' => 'xingmei',
    'gq' => 'gequan',
    'dp' => 'dongpang',
    'xdw' => 'xiandewang',
);

$phone_number_data = array(
    "phone_name" => $phone_number_data_post['phone_name'],
    "phone_nick_name" => $phone_number_data_post['nick_name'],
    "tel_number" => $phone_number_data_post['tel_number'],
    "mobile_number" => $phone_number_data_post['mobile_number'],
    "static" => "yes",
    "regional" => $regional['xm'],
    "create_data" => $create_data,
    "modify_data" => $modify_data,
    "ip" => $ip,
    "ip_v4" => $ip_v4,
    "ip_v6" => $ip_v6,
    "user_agent" => $phone_number_data_post['user_agent'],
);

$id = $db->insert("phone_number", $phone_number_data);

if (!$id) {
    $message = array(
        'result' => "提交失败\n",
    );
    die('无法插入数据: ' . $db->getLastErrno() . "&nbsp;&nbsp;&nbsp;&nbsp;" . $db->getLastError());
} else {
    $message = array(
        'result' => "您提交的号码已经成功被收录\n",
    );
}
echo json_encode($message);


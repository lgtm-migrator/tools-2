<?php
if (isset($_POST['phone_number_search']['search_type'])) {
    require_once "mysqli.php";
    $db = new MysqliDb($db_host, $db_user, $db_pwd, $db_database);
} else {
    $message = array(
        'result' => "页面出错，请刷新本页面后重试。",
    );
    die(json_encode($message));
}

if ($db->getLastErrno()) {
    $message = array(
        'result' => "数据库连接出错。",
    );
    die(json_encode($message));
};

$query_key = $_POST['phone_number_search']['search_value'];
$result_columns = ["id", "phone_name", "phone_nick_name", "tel_number", "mobile_number"];

$static = "no";
$regional = "xingmei";

$db->Where("static", $static);
$db->Where("regional", $regional);

switch ($_POST['phone_number_search']['search_type']) {
    case "number":
        $db->orHaving("tel_number", "%$query_key%", 'LIKE');
        $db->orHaving("mobile_number", "%$query_key%", 'LIKE');

        $query = $db->get("phone_number", null, $result_columns);
        break;
    case "name":
        $db->orHaving("phone_name", "%$query_key%", 'LIKE');
        $db->orHaving("phone_nick_name", "%$query_key%", 'LIKE');

        $query = $db->get("phone_number", null, $result_columns);
        break;
    default:
}

echo json_encode($query);
unset($query);

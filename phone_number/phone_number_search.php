<?php
//if (isset($_POST['phone_number_search']['search_type'])) {
//    require_once "mysqli.php";
//    $db = new MysqliDb($db_host, $db_user, $db_pwd, $db_database);
//} else {
//    die("访问11受限");
//}
if (filter_has_var(INPUT_POST, 'search_type')) {
    require_once "mysqli.php";
    $db = new MysqliDb($db_host, $db_user, $db_pwd, $db_database);
    $search_type=filter_input(INPUT_POST, 'search_type');
} else {
    die("访问受限");
}

if ($db->getLastErrno()) {
    $message = array(
        'result' => "数据库连接出错。",
    );
    die(json_encode($message));
};

$query_key = filter_input(INPUT_POST,'search_value');

$result_columns = ["phone_name", "tel_number", "mobile_number","department", "phone_nick_name", "note"];

$static = "yes";
$regional = "xingmei";

$db->Where("static", $static);
$db->Where("regional", $regional);

switch ($search_type) {
    case "number":
        $db->orHaving("tel_number", "%$query_key%", 'LIKE');
        $db->orHaving("mobile_number", "%$query_key%", 'LIKE');

        $query = $db->get("phone_number", null, $result_columns);
        break;
    case "name":
        $db->orHaving("phone_name", "%$query_key%", 'LIKE');
        $db->orHaving("phone_nick_name", "%$query_key%", 'LIKE');
        $db->orHaving("note", "%$query_key%", 'LIKE');

        $query = $db->get("phone_number", null, $result_columns);
        break;
    default:
}

echo json_encode($query);
unset($query);
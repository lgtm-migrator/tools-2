<?php
if (isset($_POST['phone_number_search']['search_type'])) {
    require_once "mysqli.php";
    $db = new MysqliDb($db_host, $db_user, $db_pwd, $db_database);
}

$query_key = $_POST['phone_number_search']['search_value'];
$result_columns = ["phone_name", "tel_number", "mobile_number"];

switch ($_POST['phone_number_search']['search_type']) {
    case "number":
        $db->Where("tel_number", $query_key);
        $db->orWhere("mobile_number", $query_key);

        $query = $db->get("phone_number", null, $result_columns);
        break;
    case "name":
    default:
        $db->Where("phone_name", $query_key);
        $db->orWhere("phone_nick_name", $query_key);

        $query = $db->get("phone_number", null, $result_columns);
        break;
}

echo json_encode($query);

<?php
if (isset($_POST['phone_number_search']['search_type'])) {
    require_once "mysqli.php";
    $db = new MysqliDb($db_host, $db_user, $db_pwd, $db_database);
}


$name = array(
    "name_1" => "aaa",
    "name_2" => "bbb",
    "name_3" => "ccc",
    "name_4" => "ddd",
    "name_5" => "eee",
);
$number = array(
    "number_1" => "aaa",
    "number_2" => "bbb",
    "number_3" => "ccc",
    "number_4" => "ddd",
    "number_5" => "eee",
);


//switch ($_POST['phone_number_search']['search_type']) {
//    case "name":
//        echo json_encode($name);
//        break;
//    case "number":
//        echo json_encode($number);
//        break;
//}

$query = $db->get("phone_number", $_POST['phone_number_search']['search_value'], 'id,phone_name,tel_number,mobile_number');
echo json_encode($query);

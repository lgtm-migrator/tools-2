<?php
if (isset($_POST['number_stored'])) {
    require_once "../mysqli/mysqli.php";
    $result = table_num_rows("jzeg_tools/phone_number");
    echo $result;
}

function table_num_rows($database_table, $db_other = "information_schema")
{
    global $db_host, $db_user, $db_pwd;
//    $db = new MysqliDb($db_host, $db_user, $db_pwd, $db_other);
    $db = new MysqliDb();
    $db->addConnection("number_stored", array(
        'host' => $db_host,
        'username' => $db_user,
        'password' => $db_pwd,
        'db' => $db_other,
//        'port' => 3306,
//        'prefix' => '',
//        'charset' => 'utf8'
    ));

    $db->connection("number_stored");
    $db->where("NAME", $database_table);
    $query = $db->get("INNODB_TABLESTATS", null, "NUM_ROWS");
//    return $query[0]["NUM_ROWS"] === 0 ? "数据获取失败" : $query[0]["NUM_ROWS"];
    return (!$query[0]["NUM_ROWS"]) ? "数据获取失败" : $query[0]["NUM_ROWS"];
}

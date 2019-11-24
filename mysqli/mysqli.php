<?php
require_once "config.php";
require_once "../vendor/autoload.php";


$db = new MysqliDb();
$db_addConnection_params = array(
    'host' => $db_host,
    'username' => $db_user,
    'password' => $db_pwd,
    'db' => $db_database,
//        'port' => 3306,
//        'prefix' => '',
//        'charset' => 'utf8'
);
$db->addConnection("add_phone_number", $db_addConnection_params);
$db->addConnection("phone_number_search", $db_addConnection_params);
$db->addConnection("photo_info", $db_addConnection_params);

$db->addConnection("number_stored", array(
    'host' => $db_host,
    'username' => $db_user,
    'password' => $db_pwd,
    'db' => "information_schema",
//        'port' => 3306,
//        'prefix' => '',
//        'charset' => 'utf8'
));

function table_num_rows($database_table)
{
    global $db;
    $db->connection("number_stored");
    $db->where("NAME", $database_table);
    $query = $db->get("INNODB_TABLESTATS", null, "NUM_ROWS");
//    return $query[0]["NUM_ROWS"] === 0 ? "数据获取失败" : $query[0]["NUM_ROWS"];
    return (!$query[0]["NUM_ROWS"]) ? "数据获取失败" : $query[0]["NUM_ROWS"];
}
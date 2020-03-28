<?php
require_once dirname(__FILE__) . "/config.php";
require_once dirname(__DIR__) . "/vendor/autoload.php";


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
$db->addConnection("recaptcha", $db_addConnection_params);
$db->addConnection("jt_session", $db_addConnection_params);

$db->addConnection("number_stored", array(
    'host' => $db_host,
    'username' => $db_user,
    'password' => $db_pwd,
    'db' => "information_schema",
//        'port' => 3306,
//        'prefix' => '',
//        'charset' => 'utf8'
));

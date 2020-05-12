<?php
require_once dirname(dirname(__DIR__)) . '/mysqli/mysqli.php';

$db->addConnection("uid", $db_addConnection_params);

try {
  $db->connection('uid');
} catch (Exception $e) {
  die($e->getMessage());
}

require_once dirname(__FILE__) . '/database_common.php';

$status = $uid_status['val'];

$result_columns = ["uid"];


$db->Where("status", $status);

$db->Where("uid", $query_key);


try {
  $query_result = $db->get("user", null, $result_columns);
} catch (Exception $e) {
  die($e->getMessage());
}

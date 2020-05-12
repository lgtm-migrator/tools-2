<?php
require_once dirname(dirname(__DIR__)) . '/mysqli/mysqli.php';

$db->addConnection("uid", $db_addConnection_params);

try {
  $db->connection('uid');
} catch (Exception $e) {
  die($e->getMessage());
}

try {
  $id = $db->insert('user', $uid_data);
} catch (Exception $e) {
  die($e->getMessage());
}

if (!$id) {
  $result['uid']['error']['errno'] = $db->getLastErrno();
  try {
    $result['uid']['error']['error'] = $db->getLastError();
  } catch (Exception $e) {
    die($e->getMessage());
  }
  $data_result['uid'] = 'no';
} else {
  $data_result['uid'] = 'yes';
}

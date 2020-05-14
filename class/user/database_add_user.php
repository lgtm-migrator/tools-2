<?php
require_once dirname(dirname(__DIR__)) . '/mysqli/mysqli.php';

$db->addConnection("register", $db_addConnection_params);

try {
  $db->connection('register');
} catch (Exception $e) {
  die($e->getMessage());
}

try {
  $id = $db->insert('user_base', $user_base_data);
} catch (Exception $e) {
  die($e->getMessage());
}

if (!$id) {
  $result['add_user']['error']['errno'] = $db->getLastErrno();
  try {
    $result['add_user']['error']['error'] = $db->getLastError();
  } catch (Exception $e) {
    die($e->getMessage());
  }
  $data_result['register'] = 'no';
} else {
  $data_result['register'] = 'yes';
}

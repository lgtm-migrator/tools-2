<?php
if ($_POST) {
  if (isset($_POST['signUp_tos']) && $_POST['signUp_tos'] === 'on') {
    $user_name = $_POST['signUp_user_name'];
    $user_email = $_POST['signUp_email'];
    $user_password = $_POST['signUp_password'];
//  $user_phone = $_POST['signUp_phone'];
  }
} elseif ($_GET) {
  $result['register'] = 'no';
  $result['error'] = '登录方式错误';
  die();
}

require_once dirname(dirname(__DIR__)) . '/class/user/database_common.php';
require_once dirname(dirname(__DIR__)) . '/class/user/set_uid.php';
$uid = $uuid;
$status = $uid_status['val'];
$data_result = null;

$uid_data = array(
  'uid' => $uid,
  'status' => $status,
);


//require_once dirname(dirname(__DIR__)) . "/class/user/database_query_user.php";
require_once dirname(dirname(__DIR__)) . "/class/user/database_add_uid.php";
//if ($data_result['uid'] === 'no') {
//  die('uid==== ' . $uid);
//}


$user_base_data = array(
  'uid' => $uid,
  'user_name' => $user_name,
  'password' => $user_password,
  'email' => $user_email,
//  'phone' => $user_phone,
);
require_once dirname(dirname(__DIR__)) . "/class/user/database_add_user.php";
//if ($data_result['register'] === 'no') {
//  die('register==== x');
//}


if ($data_result['uid'] === 'yes' && $data_result['register'] === 'yes') {
  $result['register'] = 'yes';
}

echo json_encode($result);

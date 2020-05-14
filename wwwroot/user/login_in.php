<?php
if ($_POST) {

} elseif ($_GET) {
  $result['login_in'] = 'no';
  $result['error'] = '登录方式错误';
  die();
}

$result['login_in'] = 'yes';

echo $result;

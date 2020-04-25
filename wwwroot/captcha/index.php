<?php
session_start();

require_once dirname(dirname(__DIR__)) . '/captcha/index.php';
require_once dirname(dirname(__DIR__)) . '/class/session/session_tmp.php';

$captcha_hash = $captcha->getPhrase();
set_session_cookie('captcha_hash', $captcha_hash);

$result = array(
  'success' => 'true',
  'captcha' => array(
    'img_base64' => $captcha->inline(15),
    'hash' => $captcha_hash,
  ),
);

if ('1' === $_POST['reVerify']) {
  echo json_encode($result);
} else {
  echo $result['captcha']['img_base64'];
}

<?php
//session_start();

require_once dirname(dirname(__DIR__)) . '/class/session/session_tmp.php';
require_once dirname(dirname(__DIR__)) . '/captcha/index.php';

$captcha_phrase = for_md5(1000, $captcha->getPhrase());
set_session_cookie('captcha_hash', $captcha_phrase);
set_session_cookie('captcha_phrase', $captcha->getPhrase());
set_session_cookie('captcha_size', 4);

$captcha_img_base64 = $captcha->inline(15);

$result = array(
  'success' => 'true',
  'captcha' => array(
    'img_base64' => $captcha_img_base64,
    'phrase' => $captcha->getPhrase(),
    'hash' => $captcha_phrase,
  ),
);

if (isset($_POST['reVerify']) && '1' === $_POST['reVerify']) {
  echo json_encode($result);
} else {
  echo $result['captcha']['img_base64'];
}

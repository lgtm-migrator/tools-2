<?php
require_once dirname(__FILE__) . "/captcha.php";

$captcha_dir = dirname(__DIR__) . '/wwwroot/captcha/';
if (!file_exists($captcha_dir)) mk_dir($captcha_dir);

$captcha
//    ->setBackgroundImages(array())
  ->setBackgroundColor(255, 255, 255)
  ->setIgnoreAllEffects(true)
  ->build(100, 24)
  ->save($captcha_dir . '/captcha.jpg', 50);

//$captcha->get(90);
//$captcha->output(90);

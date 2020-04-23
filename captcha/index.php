<?php
require_once dirname(__FILE__) . "/captcha.php";

//global $captcha;

$captcha
//    ->setBackgroundImages(array())
  ->setBackgroundColor(255, 255, 255)
  ->setIgnoreAllEffects(true)
  ->build(100, 24)
  ->save(dirname(__DIR__) . '/wwwroot/captcha/captcha.jpg', 50);

//$captcha->get(90);
//$captcha->output(90);

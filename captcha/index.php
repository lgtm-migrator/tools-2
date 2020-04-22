<?php
require_once dirname(__DIR__) . "/vendor/autoload.php";

use Gregwar\Captcha\CaptchaBuilder;
use Gregwar\Captcha\PhraseBuilder;

$phraseBuilder = new PhraseBuilder(4,);
$captcha = new CaptchaBuilder(null, $phraseBuilder);

$captcha
//    ->setBackgroundImages(array())
  ->setBackgroundColor(255, 255, 255)
  ->setIgnoreAllEffects(true)
  ->build(100, 24)
  ->save('captcha.jpg', 50);

header('Content-type: image/jpeg');

//$captcha->get(90);
//$captcha->output(90);

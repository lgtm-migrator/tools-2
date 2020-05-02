<?php
require_once dirname(__DIR__) . "/vendor/autoload.php";

use Gregwar\Captcha\CaptchaBuilder;
use Gregwar\Captcha\PhraseBuilder;

$phrase_length = mt_rand(4, 6);
$phraseBuilder = new PhraseBuilder($phrase_length, 'abcdefghijklmnpqrstuvwxyz123456789');
$captcha = new CaptchaBuilder(null, $phraseBuilder);

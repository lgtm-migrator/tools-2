<?php
$recaptcha_key = array(
    "v2-standard" => array(
        "site" => "6Lczw8EUAAAAAGexxbo3mfHZoPGotc_FDYyE6TZP",
        "secret" => "6Lczw8EUAAAAADZbzP80S0FX_QJRe83DiKU6KCkd",
    ),
    "v2-invisible" => array(
        "site" => "6Ldmw8EUAAAAADh1TvGvlav47LQyB5mtP16tb3x9",
        "secret" => "6Ldmw8EUAAAAAJLKHTrXA1V1E44xIwS_F47ibiAJ",
    ),
    "v2-android" => array(
        "site" => "",
        "secret" => "",
    ),
    "v3" => array(
        "site" => "6LcvIcEUAAAAAEUgtbN0VFiH_n2VHw-luW3rdZFv",
        "secret" => "6LcvIcEUAAAAAOY8_yO8euzdodKxuN2w5BalA69K",
    ),
);

$recaptcha_v3_secret_key = $recaptcha_key["v3"]["secret"];
$siteVerifyUrl = "https://www.recaptcha.net/recaptcha/api/siteverify";

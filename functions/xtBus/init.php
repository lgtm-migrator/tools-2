<?php
require_once dirname(__FILE__) . '/config.php';

global $cityKey;

$post_data = array(
    'CMD' => '205',
    'CITYKEY' => $cityKey,
);

require_once dirname(__FILE__) . '/curl.php';
global $curl;

$responseResult = $curl->getResponse();

echo $responseResult;

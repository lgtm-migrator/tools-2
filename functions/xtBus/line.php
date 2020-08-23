<?php
require_once dirname(__FILE__) . '/config.php';

global $cityName, $cityKey;

$lineName = '3路';
$direction = '1';

$post_data = array(
    'CMD' => '103',
    'CITYNAME' => $cityName,
    'CITYKEY' => $cityKey,
    'LINENAME' => $lineName,
    'DIRECTION' => $direction,
);

require_once dirname(__FILE__) . '/curl.php';
global $curl;

$responseResult = $curl->getResponse();

echo $responseResult;

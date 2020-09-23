<?php
require_once dirname(__FILE__) . '/config.php';

global $cityName, $cityKey;

$lineName = $_POST['lineName'];
$direction = $_POST['direction'];
$cmd = $_POST['cmd'];

$post_data = array(
    'CMD' => $cmd,
    'CITYNAME' => $cityName,
    'CITYKEY' => $cityKey,
    'LINENAME' => $lineName,
    'DIRECTION' => $direction,
);

require_once dirname(__FILE__) . '/curl.php';
global $CurlResult;

$responseResult = $CurlResult['result'];

echo $responseResult;

<?php
require_once dirname(__FILE__) . '/config.php';

global $cityName, $cityKey;

$keyword = $_POST['keyword'];
$cmd = $_POST['cmd'];

$post_data = array(
    'CMD' => $cmd,
    'CITYNAME' => $cityName,
    'CITYKEY' => $cityKey,
    'KEYWORD' => $keyword,
);

require_once dirname(__FILE__) . '/curl.php';
global $curl;

$responseResult = $curl->getResponse();

echo $responseResult;

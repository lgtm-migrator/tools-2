<?php
require_once dirname(__FILE__) . '/config.php';

global $cityName, $cityKey;

$keyword = $_POST['keyword'];

$post_data = array(
    'CMD' => 102,
    'CITYNAME' => $cityName,
    'CITYKEY' => $cityKey,
    'KEYWORD' => $keyword,
);

require_once dirname(__FILE__) . '/curl.php';
global $curl;

$responseResult = $curl->getResponse();
echo $responseResult;

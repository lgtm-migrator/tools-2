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
global $CurlResult;

$responseResult = $CurlResult['result'];

switch ($_POST['type']) {
  case 'queryLines':
    $responseResult = json_decode($responseResult, true);
    unset($responseResult['busstations']);
    exit(json_encode($responseResult));
  case 'queryStations':
    $responseResult = json_decode($responseResult, true);
    unset($responseResult['buslines']);
    exit(json_encode($responseResult));
  default:
    break;
}

echo $responseResult;

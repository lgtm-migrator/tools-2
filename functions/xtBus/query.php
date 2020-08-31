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

if ($_POST['type'] === 'query') {
  $responseResult = $curl->getResponse();
  echo $responseResult;
} elseif ($_POST['type'] === 'queryLines') {
  $responseResult = json_decode($curl->getResponse(), true);
  unset($responseResult['busstations']);
  echo json_encode($responseResult);
} elseif ($_POST['type'] === 'queryStations') {
  $responseResult = json_decode($curl->getResponse(), true);
  unset($responseResult['buslines']);
  echo json_encode($responseResult);
}

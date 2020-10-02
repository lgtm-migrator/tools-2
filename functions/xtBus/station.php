<?php
require_once dirname(__FILE__) . '/config.php';

global $cityName, $cityKey;

$stationName = $_POST['stationName'];
$myLat = $_POST['myLat'];
$myLng = $_POST['myLng'];


$post_data = array(
  'CMD' => 105,
  'CITYKEY' => $cityKey,
  'CITYNAME' => $cityName,
  'STATIONNAME' => $stationName,
  'MYLAT' => $myLat,
  'MYLNG' => $myLng,
);

require_once dirname(__FILE__) . '/curl.php';
global $CurlResult;

$responseResult = $CurlResult['result'];

echo $responseResult;

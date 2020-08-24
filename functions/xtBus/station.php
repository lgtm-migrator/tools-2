<?php
require_once dirname(__FILE__) . '/config.php';

global $cityName, $cityKey;

$cmd = $_POST['cmd'];
$stationName = $_POST['stationName'];
$myLat = $_POST['myLat'];
$myLng = $_POST['myLng'];


$post_data = array(
  'CMD' => $cmd,
  'CITYKEY' => $cityKey,
  'CITYNAME' => $cityName,
  'STATIONNAME' => $stationName,
  'MYLAT' => $myLat,
  'MYLNG' => $myLng,
);

require_once dirname(__FILE__) . '/curl.php';
global $curl;

$responseResult = $curl->getResponse();

echo $responseResult;

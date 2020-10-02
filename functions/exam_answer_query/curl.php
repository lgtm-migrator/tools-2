<?php
require_once dirname(dirname(__DIR__)) . '/vendor/autoload.php';

use Curl\Curl;

global $RequestURL;

$curl = new Curl();
$curl->get($RequestURL);
$curl->close();

if ($curl->error) {
  $CurlResult = array(
    'result' => $curl->response,
    'success' => 'no',
    'error' => array(
      'code' => $curl->errorCode,
      'msg' => $curl->errorMessage,
    ),
  );
  exit(json_encode($CurlResult));
}

$CurlResult = array(
  'result' => $curl->response,
  'success' => 'yes',
  'error' => array(
    'code' => $curl->errorCode,
    'msg' => $curl->errorMessage,
  ),
);

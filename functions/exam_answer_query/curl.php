<?php
require_once dirname(dirname(__DIR__)) . '/vendor/autoload.php';

use Curl\Curl;

global $url;

$curl = new Curl();

$curl->get($url);

if ($curl->error) {
  $curlResult = array(
    'result' => $curl->response,
    'success' => 'no',
    'error' => array(
      'code' => $curl->errorCode,
      'msg' => $curl->errorMessage,
    ),
  );
  exit(json_encode($curlResult));
}

$curlResult = array(
  'result' => $curl->response,
  'success' => 'yes',
  'error' => array(
    'code' => $curl->errorCode,
    'msg' => $curl->errorMessage,
  ),
);

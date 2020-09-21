<?php
require_once dirname(dirname(__DIR__)) . '/vendor/autoload.php';

use Curl\Curl;

global $RequestURL;

$curl = new Curl();
$curl->get($RequestURL);

if ($curl->error) {
  $CurlResult = array(
    'curlError' => 'curl出错：' . $curl->errorCode . ': ' . $curl->errorMessage,
    'success' => 'no',
  );
  exit(json_encode($CurlResult));
}

$CurlResult = $curl->response;

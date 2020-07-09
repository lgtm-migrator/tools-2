<?php

use Curl\Curl;

$curl = new Curl();

global $request_url;
$url = $request_url;

$curl->get($url);

if ($curl->error) {
  exit('curl出错：' . $curl->errorCode . ': ' . $curl->errorMessage . "\n");
}

$url_response = $curl->response;

<?php

use Curl\Curl;

$curl = new Curl();

global $request_url;
$url = $request_url;

$curl->get($url);

if ($curl->error) {
  $error = array(
    'curlError' => 'curl出错：' . $curl->errorCode . ': ' . $curl->errorMessage,
    'success' => 'no',
  );
  exit(json_encode($error));
}

$url_response = $curl->response;

<?php

require_once dirname(__DIR__) . "/class/curl.php";

global $request_url;
$url = $request_url;

$curl->get($url);

if ($curl->error) {
  echo 'curl出错：' . $curl->errorCode . ': ' . $curl->errorMessage . "\n";
  exit();
}

$url_response = $curl->response;

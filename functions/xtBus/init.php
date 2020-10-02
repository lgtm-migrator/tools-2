<?php
require_once dirname(__FILE__) . '/config.php';

global $cityKey;

$cmd = $_POST['cmd'];

$post_data = array(
    'CMD' => $cmd,
    'CITYKEY' => $cityKey,
);

require_once dirname(__FILE__) . '/curl.php';
global $CurlResult;

$responseResult = $CurlResult['result'];

echo $responseResult;

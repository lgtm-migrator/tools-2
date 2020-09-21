<?php
require_once dirname(dirname(__DIR__)) . "/config/functions.php";

global $RequestURL;
$url = $RequestURL;

require_once dirname(__FILE__) . '/curl.php';

global $CurlResult;

$leId = getBetween($CurlResult['result'], 'var leid = "', '";var vp4tokenleid =');
$tokenLeId = getBetween($CurlResult['result'], 'var vp4tokenleid = "', '";var tid =');

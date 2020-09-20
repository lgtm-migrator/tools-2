<?php
global $get_url;
$url = $get_url;

require_once dirname(__FILE__) . '/curl.php';
require_once dirname(dirname(__DIR__)) . "/config/functions.php";

global $curlResult;

$leId = getBetween($curlResult['result'], 'var leid = "', '";var vp4tokenleid =');
$tokenLeId = getBetween($curlResult['result'], 'var vp4tokenleid = "', '";var tid =');

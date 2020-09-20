<?php
global $get_url;
$url = $get_url;

require_once dirname(__FILE__) . '/curl.php';
global $curlResult;

$leId = getBetween($curlResult['result'], 'var leid = "', '";var vp4tokenleid =');
$tokenLeId = getBetween($curlResult['result'], 'var vp4tokenleid = "', '";var tid =');


/* * php截取指定两个字符之间字符串 * */
function get_between(string $string, string $start, string $end)
{
  return substr($string, strlen($start) + strpos($string, $start), (strlen($string) - strpos($string, $end)) * (-1));
}

function getBetween($string, $start = "", $end = "")
{
  if (strpos($string, $start)) { // required if $start not exist in $string
    $startCharCount = strpos($string, $start) + strlen($start);
    $firstSubStr = substr($string, $startCharCount, strlen($string));
    $endCharCount = strpos($firstSubStr, $end);
    if ($endCharCount == 0) {
      $endCharCount = strlen($firstSubStr);
    }
    return substr($firstSubStr, 0, $endCharCount);
  } else {
    return '';
  }
}

<?php
require_once dirname(dirname(__DIR__)) . '/vendor/autoload.php';

use Curl\Curl;

global $UserAgent, $apiUrlRoot, $post_data, $opt_httpHeader_data, $Cookie_UM_distinctid, $Cookie_CNZZDATA1278716313;

$curl = new Curl();
//$curl->setHeader('Host', 'h5.mygolbs.com');
$curl->setHeader('Connection', 'keep-alive');
//$curl->setHeader('Content-Length','24');
//$curl->setHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
$curl->setHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
$curl->setHeader('X-Requested-With', 'XMLHttpRequest');
$curl->setUserAgent($UserAgent);//在HTTP请求中包含一个"User-Agent: "头的字符串。
$curl->setHeader('Origin', 'https://h5.mygolbs.com');
$curl->setReferer($opt_httpHeader_data['referer']);//在HTTP请求头中"Referer: "的内容。
$curl->setHeader('Accept-Encoding', 'gzip, deflate, br');
$curl->setHeader('Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8');
$curl->setHeader('Sec-Fetch-Site', 'same-origin');//提取元数据标头指示请求发起者的来源与资源来源之间的关系.
$curl->setHeader('Sec-Fetch-Mode', 'cors');//提取元数据标头指示请求的模式.
$curl->setHeader('Sec-Fetch-Dest', 'empty');//提取元数据标头指示请求的目的地，即将如何使用所提取的数据.

//$curl->setCookie('UM_distinctid', $Cookie_UM_distinctid);
//$curl->setCookie('CNZZDATA1278716313', $Cookie_CNZZDATA1278716313);

$curl->setOpt(CURLOPT_MAXREDIRS, 2);//指定最多的 HTTP 重定向次数，这个选项是和CURLOPT_FOLLOWLOCATION一起使用的。
$curl->setOpt(CURLOPT_FOLLOWLOCATION, true);//TRUE 时将会根据服务器返回 HTTP 头中的 "Location: " 重定向。（注意：这是递归的，"Location: " 发送几次就重定向几次，除非设置了 CURLOPT_MAXREDIRS，限制最大重定向次数。）。

//$curl->setOpt(CURLOPT_REFERER, $opt_httpHeader_data['referer']);//在HTTP请求头中"Referer: "的内容。
$curl->setOpt(CURLOPT_AUTOREFERER, true);//TRUE 时将根据 Location: 重定向时，自动设置 header 中的Referer:信息。

$curl->setOpt(CURLOPT_DNS_CACHE_TIMEOUT, 1200);//设置在内存中保存DNS信息的时间，默认为120秒。

$curl->setOpt(CURLOPT_TIMEOUT_MS, 3000);//设置cURL允许执行的最长毫秒数
//$curl->setOpt(CURLOPT_TIMEOUT, 2);//设置cURL允许执行的最长秒数

$curl->post($apiUrlRoot, $post_data);
//$curl->get($apiUrlRoot, $post_data);


if ($curl->error) {
  $errorCode = '错误代码：' . $curl->errorCode . '<br>';
  $errorMessage = '错误信息：' . $curl->errorMessage . '<br>';
  exit($errorCode . $errorMessage . '<br>');
}

$curl->close();


//$reForeach = $curl->responseHeaders;
//$reForeach = $curl->requestHeaders;
//foreach ($reForeach as $key => $value) {
//    echo $key . ' ==== ' . $value . '<br>';
//}

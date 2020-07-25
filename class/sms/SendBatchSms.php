<?php

namespace JZEG_NET\Member\Sms\SendBatchSms;

if (!defined('JZEG-NET-SMS')) die();
require_once dirname(dirname(__DIR__)) . '/vendor/autoload.php';

global $accessKeyId,
       $accessSecret,
       $result_json,
       $RegionId,
       $PhoneNumberJson,
       $SignNameJson,
       $TemplateCode,
       $TemplateParamJson,
       $SmsUpExtendCodeJson;

use AlibabaCloud\Client\AlibabaCloud;
use AlibabaCloud\Client\Exception\ClientException;
use AlibabaCloud\Client\Exception\ServerException;

// Download：https://github.com/aliyun/openapi-sdk-php
// Usage：https://github.com/aliyun/openapi-sdk-php/blob/master/README.md

AlibabaCloud::accessKeyClient($accessKeyId, $accessSecret)
  ->regionId($RegionId)
  ->asDefaultClient();

try {
  $request_result = AlibabaCloud::rpc()
    ->product($result_json['product'])
    ->scheme($result_json['scheme'])
    ->version($result_json['version'])
    ->action($result_json['action'])
    ->method($result_json['method'])
    ->host($result_json['host'])
    ->options([
      'query' => [
        'RegionId' => $RegionId,
        'PhoneNumberJson' => $PhoneNumberJson,
        'SignNameJson' => $SignNameJson,
        'TemplateCode' => $TemplateCode,
        'TemplateParamJson' => $TemplateParamJson,
        'SmsUpExtendCodeJson' => $SmsUpExtendCodeJson,
      ],
    ])
    ->request();
//    print_r($request_result->toArray());
  $result['request'] = $request_result;
  return $result;
} catch (ClientException $e) {
  echo $e->getErrorMessage() . PHP_EOL;
} catch (ServerException $e) {
  echo $e->getErrorMessage() . PHP_EOL;
}

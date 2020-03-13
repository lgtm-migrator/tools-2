<?php
//if (!defined('JZEG_NET_SMS')) die('');
require_once dirname(dirname(__DIR__)) . '/vendor/autoload.php';

global $accessKeyId,
       $accessSecret,
       $result_json,
       $RegionId,
       $PhoneNumbers,
       $SignName,
//       $SmsUpExtendCode,
//       $OutId,
       $TemplateCode,
       $TemplateParam;

use AlibabaCloud\Client\AlibabaCloud;
use AlibabaCloud\Client\Exception\ClientException;
use AlibabaCloud\Client\Exception\ServerException;

// Download：https://github.com/aliyun/openapi-sdk-php
// Usage：https://github.com/aliyun/openapi-sdk-php/blob/master/README.md

AlibabaCloud::accessKeyClient($accessKeyId, $accessSecret)
    ->regionId($RegionId)
    ->asDefaultClient();

try {
    $result = AlibabaCloud::rpc()
        ->product($result_json['product'])
        ->scheme($result_json['scheme'])
        ->version($result_json['version'])
        ->action($result_json['action'])
        ->method($result_json['method'])
        ->host($result_json['host'])
        ->options([
            'query' => [
                'RegionId' => $RegionId,
                'PhoneNumbers' => $PhoneNumbers,
                'SignName' => $SignName,
                'TemplateCode' => $TemplateCode,
                'TemplateParam' => $TemplateParam,
//                'SmsUpExtendCode' => $SmsUpExtendCode,
//                'OutId' => $OutId,
            ],
        ])
        ->request();
    print_r($result->toArray());
} catch (ClientException $e) {
    echo $e->getErrorMessage() . PHP_EOL;
} catch (ServerException $e) {
    echo $e->getErrorMessage() . PHP_EOL;
}

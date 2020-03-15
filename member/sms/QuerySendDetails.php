<?php

use AlibabaCloud\Client\AlibabaCloud;
use AlibabaCloud\Client\Exception\ClientException;
use AlibabaCloud\Client\Exception\ServerException;

// Download：https://github.com/aliyun/openapi-sdk-php
// Usage：https://github.com/aliyun/openapi-sdk-php/blob/master/README.md

AlibabaCloud::accessKeyClient('<accessKeyId>', '<accessSecret>')
    ->regionId('cn-hangzhou')
    ->asDefaultClient();

try {
    $result = AlibabaCloud::rpc()
        ->product('Dysmsapi')
        // ->scheme('https') // https | http
        ->version('2017-05-25')
        ->action('QuerySendDetails')
        ->method('POST')
        ->host('dysmsapi.aliyuncs.com')
        ->options([
            'query' => [
                'RegionId' => "cn-hangzhou",
                'PhoneNumber' => "15227731266",
                'SendDate' => "20200314",
                'PageSize' => "10",
                'CurrentPage' => "1",
                'BizId' => "0",
            ],
        ])
        ->request();
    print_r($result->toArray());
} catch (ClientException $e) {
    echo $e->getErrorMessage() . PHP_EOL;
} catch (ServerException $e) {
    echo $e->getErrorMessage() . PHP_EOL;
}

<?php
require_once dirname(dirname(__DIR__)) . '/mysqli/mysqli.php';

$db->addConnection("sms", $db_addConnection_params);


try {
    $db->connection('sms');
} catch (Exception $e) {
    die($e->getMessage());
}

try {
    global $sms_database;
    $id = $db->insert('history_sms', $sms_database);
} catch (Exception $e) {
    die($e->getMessage());
}


if (!$id) {
//    global $result;
    $error_data = $sms_database;

    $result['message']['qrcode']['failure'] = '';
    $result['error']['errno'] = $db->getLastErrno();
    try {
        $result['error']['error'] = $db->getLastError();
    } catch (Exception $e) {
        die($e->getMessage());
    }
    $result['error']['data'] = $error_data;
} else {
    $result['message']['qrcode']['success'] = 'yes';
}

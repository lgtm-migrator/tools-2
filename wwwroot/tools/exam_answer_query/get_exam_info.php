<?php
if ($_GET) exit('当前不认为需要支持此方式进行查询');
if (!$_POST) exit('参数错误');

if ('examInfo' !== $_POST['type']) exit('模式类型错误');
if (!isset($_POST['leId']) || !isset($_POST['tokenLeId'])) exit('参数不完整');


$leId = $_POST['leId'];
$tokenLeId = $_POST['tokenLeId'];
$RequestURL = 'https://www.examcoo.com/editor/rpc/getreexamcontent/leid/' . $leId . '/tokenleid/' . $tokenLeId;

require_once dirname(dirname(dirname(__DIR__))) . '/functions/exam_answer_query/curl.php';
global $CurlResult;

echo json_encode($CurlResult['result']);

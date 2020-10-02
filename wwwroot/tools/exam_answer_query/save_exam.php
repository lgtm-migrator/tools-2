<?php
if ($_GET) exit('当前不认为需要支持此方式进行查询');
if (!$_POST) exit('参数错误');

if (!isset($_POST['data'])) exit('无待发送的数据');

$SendType = $_POST['type'];
$SendData = $_POST['data'];

switch ($SendType) {
  case 'TempSaveExam':
    $RequestURL = 'https://www.examcoo.com/editor/rpc/tempsaveexam';
    break;
  case 'SaveExam':
    $RequestURL = 'https://www.examcoo.com/editor/rpc/saveexam';
    break;
  default:
    exit('不支持的提交');
}

require_once dirname(dirname(dirname(__DIR__))) . '/functions/exam_answer_query/curl_post.php';
global $CurlResult;

echo json_encode($CurlResult['result']);

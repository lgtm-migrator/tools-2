<?php
if ($_GET) exit('方式错误');

if (!isset($_POST['mode']) && !isset($_POST['le_id']) && !isset($_POST['token_le_id']) && !isset($_POST['p_id']) && !isset($_POST['token_p_id'])) exit('参数不完整');

$examMode = $_POST['mode'];

switch ($examMode) {
  case 'exercise':
  case 'exam':
    $examLeId = $_POST['le_id'];
    $examTokenLeId = $_POST['token_le_id'];
    break;
  case 'view':
    $examPId = $_POST['p_id'];
    $examTokenPId = $_POST['token_p_id'];
    break;
  default:
    exit('模式错误');
}

switch ($examMode) {
  case 'exercise':
    $RequestURL = 'https://www.examcoo.com/editor/rpc/getexercisecontent/leid/' . $examLeId . '/tokenleid/' . $examTokenLeId;
    break;
  case 'exam':
    $RequestURL = 'https://www.examcoo.com/editor/rpc/getreexamcontent/leid/' . $examLeId . '/tokenleid/' . $examTokenLeId;
    break;
  case 'view':
    $RequestURL = 'https://www.examcoo.com/editor/rpc/getpapercontent/pid/' . $examPId . '/tokenpid/' . $examTokenPId . '/fromAction/view';
    break;
  default:
    exit('模式错误');
}

require_once dirname(dirname(dirname(__DIR__))) . '/functions/exam_answer_query/curl.php';
global $CurlResult;

echo json_encode($CurlResult['result']);

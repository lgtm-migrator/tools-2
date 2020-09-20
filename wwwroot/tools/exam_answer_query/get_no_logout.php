<?php
if (!$_POST) exit('0');

$tid = $_POST['tid'];
$tokenTid = $_POST['tokenTid'];

$get_url = 'https://www.examcoo.com/embed/do/exam/tid/' . $tid . '/tokentid/' . $tokenTid . '/nologout/1';

require_once dirname(dirname(dirname(__DIR__))) . '/functions/exam_answer_query/get_no_logout_id_info.php';
global $leId, $tokenLeId;

$result = array(
  'leId' => $leId,
  'tokenLeId' => $tokenLeId,
);

echo json_encode($result);

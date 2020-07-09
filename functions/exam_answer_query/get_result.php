<?php

if ($_GET) exit('方式错误');

if (isset($_POST['data']) && $_POST['data'] === 'get_answer_result') {
  require_once dirname(dirname(__DIR__)) . '/config/init.php';
} else {
  exit('方式错误');
}

if (!defined('JZEG-NET')) exit('版权保护');

require_once dirname(dirname(__DIR__)) . '/vendor/autoload.php';
require_once dirname(dirname(__DIR__)) . "/config/functions.php";
require_once dirname(dirname(__DIR__)) . "/config/env.php";

//模式判断
$exam_answer_query_mode = $_ENV['EXAM_ANSWER_QUERY_MODE'];
if ('view' === $exam_answer_query_mode) {
  $request_url = $_ENV['EXAM_ANSWER_QUERY_VIEW_REQUEST_URL'];
} elseif ('exam' === $exam_answer_query_mode) {
  $request_url = $_ENV['EXAM_ANSWER_QUERY_EXAM_REQUEST_URL'];
} elseif ('exercise' === $exam_answer_query_mode) {
  $request_url = $_ENV['EXAM_ANSWER_QUERY_EXERCISE_REQUEST_URL'];
}

require_once dirname(__FILE__) . '/request_remote.php';
$response = $url_response;

require_once dirname(__FILE__) . '/extract_data.php';
global $database_result;
$database = $database_result;


if ('yes' === $database['success']) {
  $result = array(
    'success' => 'yes'
  );
} else {
  $result = array(
    'success' => 'no',
    'response' => $response,
    'database' => $database,
  );
}

echo json_encode($result);

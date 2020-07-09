<?php

if ($_GET) exit('方式错误');

if (isset($_POST['q']) && isset($_POST['action']) && $_POST['action'] === 'query_answer') {
  $category_list = ['single', 'multiple', 'determine'];
  if (!isset($_POST['category']) || !in_array($_POST['category'], $category_list)) {
    exit('查询参数错误');
  }
} else {
  exit('参数错误');
}

if (!defined('JZEG-NET')) exit('版权保护');

$query_key = $_POST['q'];
$category = $_POST['category'];


$database_data = array(
  'table_name' => 'exam_answer_query_answer',
  'where' => array(
    'category' => $category,
  ),
  'query_key' => $query_key,
  'result_columns' => array("id", "category", "result", "result_text", "text", "options"),
);
require_once dirname(__FILE__) . '/database/database_query.php';

echo json_encode($query_result);

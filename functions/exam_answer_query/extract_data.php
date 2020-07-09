<?php

$raw_response = object2array($response);
$response_array = $raw_response['b'];
$response_array_count = count($response_array);


require_once dirname(__FILE__) . '/database/cache/table_answers_id_list_field.php';

//$database_data = array(
//  'table_name' => 'answers_id_list',
//  'new_data' => $answers_list_fields,
//);
//
//include dirname(__DIR__) . '/database/database_add.php';
//unset($database_data);

$category_array = array(
  's1' => 'single',
  's2' => 'multiple',
  's3' => 'determine',
);

require_once dirname(__FILE__) . '/database/cache/index.php';

for ($i = 1; $i < $response_array_count; $i++) {
  $response_array_i = $response_array[$i];
  if (gettype($response_array_i['c']) === 'string') {
    $response_array_i_b = isset($response_array_i['b']) ? $response_array_i['b'] : '';
    $result = isset($response_array_i['c']) ? $response_array_i['c'] : '';
    $response_array_i_h = isset($response_array_i['h']) ? $response_array_i['h'] : '';

    //解析问题编号
    $response_array_i_id = $response_array_i['id'];
    //拆分id
    $x_id = explode('_', $response_array_i_id);
    $pre_id = $x_id[0];
    $s_id = $x_id[1];

    $category = $category_array[$pre_id];//题型

    if ('determine' === $category) {
      $result_text = $judgment_12[$result];
    } elseif ('single' === $category || 'multiple' === $category) {
      $result_text = $choice_123[$result];
    } else {
      $result_text = 'unset';
    }

    $new_data[$i] = array(
      'sid' => (int)$s_id,
      'aid' => (int)$a_id,
      'options' => (string)$response_array_i_b,
      'result' => (int)$result,
      'result_text' => (string)$result_text,
      'category' => (string)$category,
      'score' => (float)$response_array_i['d'],
      'text' => (string)$response_array_i['a'],
      'e' => (int)$response_array_i['e'],
      'f' => (int)$response_array_i['f'],
      'h' => (int)$response_array_i_h,
    );
  }
}

$database_data = array(
  'table_name' => 'exam_answer_query_answer',
  'new_data' => $new_data,
);

require_once dirname(__FILE__) . '/database/database_add.php';

<?php
global $response_array;
$response_array_0 = $response_array[0];
$response_array_f_datetime = $response_array_0['f'];
$a_id = $response_array_0['id'];
$response_array_f_datetime = date('Y-m-d h:i:s', $response_array_0['f']);

$answers_list_fields = array(
  'a_id' => (int)$a_id,
  'title' => (string)$response_array_0['a'],
  'b' => (int)$response_array_0['b'],
  'c' => (string)$response_array_0['c'],
  'd' => (string)$response_array_0['d'],
  'e' => (int)$response_array_0['e'],
  'f' => (int)$response_array_0['f'],
  'f_datetime' => (string)$response_array_f_datetime,
  'h' => (int)$response_array_0['h'],
  'i' => (int)$response_array_0['i'],
  'j' => (int)$response_array_0['j'],
  'l' => (int)$response_array_0['l'],
  'm' => (int)$response_array_0['m'],
  'n' => (int)$response_array_0['n'],
  'o' => (int)$response_array_0['o'],
  'p' => (int)$response_array_0['p'],
);


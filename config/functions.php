<?php
function custom_header_404($Context = 'No input file specified.')
{
    header('HTTP/1.1 404 Not Found');
    die($Context);
}

function redirect_header_302_login()
{
  header('location: /login.php');
  exit();
}

function redirect_header_302_join()
{
  header('location: /join.php');
  exit();
}

function mk_dir($pathname, $mode = 0744, $recursive = true)
{
    mkdir($pathname, $mode, $recursive);
}

//获取文件扩展名
function get_file_ext_name($file_name)
{
    $file_ext_name = substr($file_name, strrpos($file_name, '.') + 1);
    $file_ext_name = mb_strtolower($file_ext_name);

    return $file_ext_name;
}

function for_md5(int $number, $array_or_string)
{
  $value = (is_array($array_or_string)) ? implode('', $array_or_string) : $array_or_string;
  if ($value === false) return false;
  $result = $value;
  for ($i = 0; $i <= $number; $i++) {
    $result = md5($result);
  }
  return $result;
}

function for_crypt(int $number, $array_or_string, $salt = null)
{
  $value = (is_array($array_or_string)) ? implode('', $array_or_string) : $array_or_string;
  if ($value === false) return false;
  $result = '';
  for ($i = 0; $i <= $number; $i++) {
    $result = crypt($value, $salt);
  }
  return $result;
}

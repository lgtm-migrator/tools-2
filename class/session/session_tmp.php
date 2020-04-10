<?php
function session_init()
{
  require_once dirname(dirname(__DIR__)) . "/config/defined.php";
  require_once dirname(dirname(__DIR__)) . "/config/functions.php";

  if (!file_exists(SESSION_YMD_DIR)) mk_dir(SESSION_YMD_DIR);
  session_save_path(SESSION_YMD_DIR);

  session_name('jt_session');
//  session_id();

  session_set_cookie_params(set_session_params());

//设置session存储到数据库中
  $cookie_data = session_get_cookie_params();
  $session_data = array(
    'session_lifetime' => $cookie_data['lifetime'],
    'session_expires' => '',
    'session_path' => $cookie_data['path'],
    'session_domain' => $cookie_data['domain'],
    'session_secure' => $cookie_data['secure'],
    'session_httpOnly' => $cookie_data['httponly'],
    'session_sameSite' => $cookie_data['samesite'],
  );

//session_set_save_handler();

  session_start();
}

function set_session()
{
  set_session_id();
  set_timestamp();
}

function set_session_cookie($session_name, $session_value)
{
  $params = set_cookie_params();
  setcookie($session_name, $session_value, $params);
}

//清除时
//判断Cookie中是否存在session ID
//if (isset($_COOKIE[session_name()])) {
//  //删除包含Session ID的cookie，注意第四个参数一定要和php.ini设置的路径相同
//  setcookie(session_name(), '', time() - 3600, '/');
//}

function set_session_params()
{
  $session_params = array();
  $current_domain = $_SERVER['HTTP_HOST'];

  if ('http' === $_SERVER['REQUEST_SCHEME']) {
    $session_params = array(
//  "lifetime" => 0,
      "path" => '/',
      "domain" => $current_domain,
      "secure" => false,
      "httponly" => true,
//  "samesite" => '',
    );
  } else if ('https' === $_SERVER['REQUEST_SCHEME']) {
    $session_params = array(
//  "lifetime" => 0,
      "path" => '/',
      "domain" => $current_domain,
      "secure" => true,
      "httponly" => true,
//  "samesite" => '',
    );
  }
  return $session_params;
}

function set_cookie_params()
{
  $cookie_params = array();
  $current_domain = $_SERVER['HTTP_HOST'];

  if ('http' === $_SERVER['REQUEST_SCHEME']) {
    $cookie_params = array(
      "expires" => 0,
      "path" => '/',
      "domain" => $current_domain,
      "secure" => false,
      "httponly" => false,
//  "samesite" => '',
    );
  } else if ('https' === $_SERVER['REQUEST_SCHEME']) {
    $cookie_params = array(
      "expires" => 0,
      "path" => '/',
      "domain" => $current_domain,
      "secure" => true,
      "httponly" => false,
//  "samesite" => '',
    );
  }
  return $cookie_params;
}

function set_user_loggedIn()
{
  $_SESSION['logged_in'] = 'no';
}

function set_token()
{
  $ip = (isset($_SERVER['REMOTE_ADDR'])) ? $_SERVER['REMOTE_ADDR'] : null;
  $ua = (isset($_SERVER['HTTP_USER_AGENT'])) ? $_SERVER['HTTP_USER_AGENT'] : null;
  $md5_array = [$ip, $ua, $_SESSION['session_id'], $_SESSION['timestamp']];
  $jt_sess_token = for_md5(2000, $md5_array);
  $_SESSION['_token'] = $jt_sess_token;
}

function set_session_id()
{
  $session_id = session_id();
  $_SESSION['session_id'] = $session_id;
}

function set_timestamp()
{
  $timestamp = time();
  $_SESSION['timestamp'] = $timestamp;
}

function for_md5(int $number, array $value_array)
{
  $value = (is_array($value_array)) ? implode('', $value_array) : false;
  if ($value === false) return false;
  $result = '';
  for ($i = 0; $i <= $number; $i++) {
    $result = md5($value);
  }
  return $result;
}

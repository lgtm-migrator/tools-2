<?php

//封装 session_open函数  连接数据库
function jt_session_open()
{
  global $db, $db_addConnection_params;
  require_once dirname(__DIR__) . '/mysqli/mysqli.php';
  $db->addConnection("jt_session", $db_addConnection_params);

  try {
    if ($db->connection('jt_session')) return (true);
  } catch (Exception $e) {
  }
  return (false);
}

//封装session_close()函数,关闭数据库连接
function jt_session_close()
{
  global $db;
  require_once dirname(__DIR__) . '/mysqli/mysqli.php';
  $db->disconnect('jt_session');
  return (true);
}

//封装session_read()函数,该函数只能返回字符串
function jt_session_read($key)
{

  global $db;
  require_once dirname(__DIR__) . '/mysqli/mysqli.php';

  $cols = array(
    'session_id',
    'session_key',
    'session_value',
    'session_expires',
    'session_domain',
    'session_httpOnly',
    'session_maxAge',
    'session_path',
    'session_sameSite',
    'session_secure',
  );

  $db->where('session_id_status', 1)
    ->joinWhere('session_key', $key);

  try {
    $db->getOne('jt_session', $cols);
  } catch (Exception $e) {
    die($e->getMessage() . 'getOne');
  }

  $result = json_encode($db);
//  $db->disconnect('jt_session');

  if ($result) {
    return $result;
  }

  return '';
}

//根据session_key判断数据存在,存在修改,否则添加
function jt_session_write($key, $data = [])
{
  global $db;
  require_once dirname(__DIR__) . '/mysqli/mysqli.php';

  try {
    $db->connection('jt_session');
  } catch (Exception $e) {
    die($e->getMessage() . "\njt_session_write--connection---1");
  }
  $db->where('session_id_status', 1)
    ->where('session_key', $key);

  try {
    $db->getOne('jt_session', 'session_value');
  } catch (Exception $e) {
    die($e->getMessage() . "\njt_session_write--getOne");
  }

  print_r($db);
//  echo "<br><br><br>";

//  $db->disconnect('jt_session');
  try {
    $db->connection('jt_session');
  } catch (Exception $e) {
    die($e->getMessage() . "\njt_session_write--connection---2");
  }
  $db->where('session_id_status', 1)
    ->where('session_key', $key);
  if ($db !== null) {
    try {
      if ($db->update('jt_session', $data)) return (true);
    } catch (Exception $e) {
      die($e->getMessage() . "\njt_session_write--update");
    }
  } else {
    try {
      if ($db->insert('jt_session', $data)) return (true);
    } catch (Exception $e) {
      die($e->getMessage() . "\njt_session_write--insert");
    }
  }
  return (false);
}

//封装session_destroy()函数,根据$key 值将数据库中的session状态改为无效
function jt_session_status_destroy($key)
{
  global $db;
  require_once dirname(__DIR__) . '/mysqli/mysqli.php';
  $session_status = array(
    'session_id_status' => 0,
  );

  try {
    $db->connection('jt_session');
  } catch (Exception $e) {
    die($e->getMessage() . "\njt_session_write--connection---3");
  }
  $db->where('session_id_status', 1)
    ->where('session_key', $key);
  try {
    if ($db->update('jt_session', $session_status)) return (true);
  } catch (Exception $e) {
    die($e->getMessage() . "\njt_session_status_destroy");
  }

  return (false);
}

//封装session_gc()函数,根据给出的实效时间删除过期Session
function jt_session_gc()
{
  global $db;
  require_once dirname(__DIR__) . '/mysqli/mysqli.php';
  $timeout = time();
  $session_status = array(
    'session_id_status' => 0,
  );

  try {
    $db->connection('jt_session');
  } catch (Exception $e) {
    die($e->getMessage() . "\njt_session_write--connection---4");
  }
  $db->where('session_id_status', 1)
    ->where('session_expires', $timeout, '<');
  try {
    if ($db->update('jt_session', $session_status)) return (true);
  } catch (Exception $e) {
    die($e->getMessage() . "\njt_session_gc");
  }

  return (false);
}

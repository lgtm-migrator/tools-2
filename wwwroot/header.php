<?php
date_default_timezone_set('Asia/Shanghai');

require_once dirname(__DIR__) . "/config/defined.php";
require_once dirname(__DIR__) . "/config/functions.php";
require_once dirname(__DIR__) . "/session/session_functions.php";

if (!file_exists(SESSION_YMD_DIR)) mk_dir(SESSION_YMD_DIR);
session_save_path(SESSION_YMD_DIR);

session_name('JZEG_NET');

$cookie_params = array(
  "httponly" => true,
//  "secure" => true,
);
session_set_cookie_params($cookie_params);

//设置session存储到数据库中
$cookie_data = session_get_cookie_params();
$session_data = array(
  'session_expires' => $cookie_data['lifetime'],
  'session_path' => $cookie_data['path'],
  'session_domain' => $cookie_data['domain'],
  'session_secure' => $cookie_data['secure'],
  'session_httpOnly' => $cookie_data['httponly'],
  'session_sameSite' => $cookie_data['samesite'],
);

$session_opens = jt_session_open();
$session_close = jt_session_close();
$session_read = jt_session_read(session_id());
$session_write = jt_session_write(session_id(), $session_data);
$session_status_destroy = jt_session_status_destroy(session_id());
$session_gc = jt_session_gc();

session_set_save_handler($session_opens, $session_close, $session_read, $session_write, $session_status_destroy, $session_gc);


session_start();
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="applicable-device" content="pc,mobile">
  <meta name="renderer" content="webkit">
  <meta name="referrer" content="always">
  <meta http-equiv="Cache-Control" content="no-siteapp">
  <meta http-equiv="Cache-Control" content="no-transform">

  <!--    <link rel="apple-touch-icon" href="">-->
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="/static/css/animate.min.css">
  <link rel="stylesheet" href="/static/css/hover.min.css">
  <link rel="stylesheet" href="/static/css/hamburgers.min.css">
  <link rel="stylesheet" href="/static/css/bootstrap_5.min.css">
  <link rel="stylesheet" href="/static/css/bootstrap.min.css">
  <link rel="stylesheet" href="/static/css/bootstrap-table.min.css">
  <link rel="stylesheet" href="/static/font/css/all.min.css">
  <link rel="stylesheet" href="/static/css/tools.min.css">

  <noscript>
    <div class="container mx-auto" style="cursor: pointer;">
      <div class="alert alert-danger shadow btn-outline-danger text-center font-weight-bold h4">
        <p></p>
        <p>您当前的浏览器没有开启 JavaScript 功能</p>
        <p>将会影响您正常使用本网站提供的工具</p>
        <p>如您需要正常访问本站，请开启 JavaScript 功能</p>
      </div>
    </div>
  </noscript>

  <title><?php echo title; ?></title>
  <!-- Global Site Tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-158181386-2"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'UA-158181386-2');
  </script>
  <script src="/static/js/fundebug.min.js"></script>
</head>
<body>
<div id="body" hidden>
  <div class="bg-white" id="jt_header">
    <div class="py-1 py-lg-2 container" id="logo">
      <a class="text-decoration-none" href="/" title="在线小工具">
        <span class="mr-1 logo-img hvr-icon-spin">
          <i class="mb-0 text-warning h4 fa-fw fas fa-tools hvr-icon"></i>
        </span>
        <span class="logo-name"><h1 class="mb-0 d-inline text-info h5">在线小工具</h1></span>
      </a>
      <span class="py-1 position-relative badge badge-pill badge-danger" style="bottom:5px;font-size: 75%;">测试版不保存数据 欢迎反馈</span>
    </div>
    <div class="border-bottom"></div>
  </div>
  <div id="jt_content" class="min-vh-100">

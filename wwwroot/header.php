<?php
date_default_timezone_set('Asia/Shanghai');
require_once dirname(__DIR__) . '/class/session/session_tmp.php';
session_init();
set_session();
set_user_loggedIn();
set_token();
set_session_cookie('_token', $_SESSION['_token']);
set_session_cookie('logged_in', $_SESSION['logged_in']);
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
  <link rel="stylesheet" href="/static/css/bootstrap_next.min.css">
  <link rel="stylesheet" href="/static/css/bootstrap.min.css">
  <link rel="stylesheet" href="/static/css/bootstrap-table.min.css">
  <link rel="stylesheet" href="/static/font/css/all.min.css">
  <link rel="stylesheet" href="/static/css/tools.min.css">
  <link rel="stylesheet" href="/static/css/account_form.min.css">

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
    <nav class="py-1 container d-flex justify-content-between align-items-center">
      <div>
        <h1 class="position-relative mb-0 h4 d-flex align-items-center hvr-icon-spin">
          <i class="text-warning fas fa-fw fa-tools hvr-icon"></i>
          <a class="ml-1 stretched-link text-decoration-none text-info" href="/" title="小工具">小工具</a>
        </h1>
      </div>
<!--      <div>菜单</div>-->
      <div class="position-absolute d-flex justify-content-between" id="account" style="right: 0;">
        <div class="btn-group btn-group-sm" id="account_sign">
          <button class="btn border btn-outline-secondary modal_tab" type="button" data-modal_target="#sign"
                  data-tab_target="#tab-sign_in">
            <i class="fas fa-lg fa-sign-in-alt"></i>
            <span class="d-none d-xl-unset">登录</span>
          </button>
          <button class="btn border btn-outline-secondary modal_tab" type="button" data-modal_target="#sign"
                  data-tab_target="#tab-sign_up">
            <i class="fas fa-lg fa-user-plus"></i>
            <span class="d-none d-xl-unset">注册</span>
          </button>
        </div>
        <div class="ml-1 ml-sm-3" id="account_sign_out">
          <button type="button" class="btn border btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                  data-toggle="dropdown">
            <i class="fas fa-user mr-1"></i>
          </button>
          <div class="pb-0 dropdown-menu shadow-lg dropdown-menu-right">
            <div class="px-2 d-flex justify-content-between">
              <a href="javascript:" class="min-w-rem-9 text-decoration-none text-reset">
                <i class="fas fa-user-alt"></i>
                <span>用户名</span>
              </a>
              <a href="javascript:" class="text-decoration-none text-danger">
                <i class="fas fa-sign-out-alt"></i>
                <span>退出</span>
              </a>
            </div>
            <div class="dropdown-divider"></div>
            <div class="px-2 d-flex justify-content-between">
              <div class="d-flex align-items-center flex-column">
                <a href="javascript:" class="mb-2 px-4 border rounded-circle btn btn-outline-secondary">
                  <i class="fas fa-2x fa-user-lock"></i>
                  <span class="d-block">我的资料</span>
                </a>
                <a href="javascript:" class="mb-2 px-4 border rounded-circle btn btn-outline-secondary">
                  <i class="fas fa-2x fa-user-cog"></i>
                  <span class="d-block">个人设置</span>
                </a>
              </div>
              <div class="d-flex align-items-center flex-column">
                <a href="javascript:" class="mb-2 px-4 border rounded-circle btn btn-outline-secondary">
                  <i class="fas fa-2x fa-user-secret"></i>
                  <span class="d-block">隐私设置</span>
                </a>
                <a href="javascript:" class="mb-2 px-4 border rounded-circle btn btn-outline-secondary">
                  <i class="fas fa-2x fa-cog"></i>
                  <span class="d-block">网站设置</span>
                </a>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="p-2 bg-dark-50 d-flex justify-content-between text-center small">
              <a class="min-w-rem-5 text-white-50" href="javascript:" target="_blank">建议反馈</a>
              <a class="min-w-rem-5 text-white-50" href="javascript:" target="_blank">宣传合作</a>
              <a class="min-w-rem-5 text-white-50" href="javascript:" target="_blank">技术合作</a>
              <a class="min-w-rem-5 text-white-50" href="javascript:" target="_blank">邀请朋友</a>
            </div>
          </div>
        </div>
        <?php require_once dirname(__FILE__) . '/member/account_form/panel_user.php'; ?>
      </div>
    </nav>
    <div class="border-bottom"></div>
  </div>
  <div id="jt_content" class="min-vh-100">

<?php
if (!defined('title')) define('title', '账户表单');
require_once dirname(dirname(__DIR__)) . '/header.php';
if (!defined('JZEG_NET')) die();
?>
  <link rel="stylesheet" href="/static/css/account_form.min.css">
  <div class="py-2 container" id="user_info">
    <div class="mb-2 font-weight-bolder">账户表单</div>
    <div class="d-flex justify-content-between" id="user_status_manage">
      <div>
        <a href="javascript:" target="_blank" class="btn btn-sm btn-outline-secondary text-dark">
          <i class="fas fa-sign-out-alt">&nbsp;退出</i>
        </a>
      </div>
      <div class="">
        <div class="btn-group">
          <a class="btn btn-outline-secondary btn-sm" href="#" data-toggle="modal" data-target="#modalLogin" data-modaltab="login">
            <i class="fas fa-sign-in-alt mr-1 mr-lg-2">&nbsp;登录</i>
          </a>
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
            <span class="sr-only">下拉菜单</span>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item" type="button" data-toggle="modal" data-target="#modalLogin" data-modaltab="register">
              <i class="fas fa-user-plus mr-1 mr-lg-2">&nbsp;注册</i>
            </button>
            <button class="dropdown-item" type="button" data-toggle="modal" data-target="#modalLogin" data-modaltab="lostPassword">
              <i class="fas fa-user-md mr-1 mr-lg-2">&nbsp;找回密码</i>
            </button>
          </div>
        </div>
      </div>
      <?php require_once dirname(__FILE__) . '/panel_user.php'; ?>
    </div>
  </div>
  <div class="d-none">
    <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
    <script src="/static/js/account_form.min.js"></script>
  </div>
<?php
require_once dirname(dirname(__DIR__)) . '/footer.php';

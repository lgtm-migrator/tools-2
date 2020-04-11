<?php
if (!defined('title')) define('title', '账户表单');
require_once dirname(dirname(__DIR__)) . '/header.php';
if (!defined('JZEG_NET')) die();
?>
  <link rel="stylesheet" href="/static/css/account_form.min.css">
  <div class="py-2 container" id="account_form">
    <div class="mb-2 font-weight-bolder">账户表单</div>
    <div class="d-flex justify-content-around" id="account_sign">
      <div id="account_sign_out">
        <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
          <i class="fas fa-user mr-1 mr-lg-2"></i>
        </button>
        <div class="dropdown-menu min-w-rem-7 shadow text-center dropdown-menu-right">
          <div class="btn-group-sm btn-group-vertical">
            <button class="min-w-rem-9 border-0 rounded-0 btn btn-outline-secondary" type="button">
              <i class="fas fa-user mr-1 mr-lg-2">&nbsp;用户名</i>
            </button>
          </div>
          <div class="dropdown-divider border-secondary"></div>
          <div class="btn-group-sm btn-group-vertical">
            <button class="min-w-rem-9 border-0 rounded-0 btn btn-outline-secondary" type="button">
              <i class="fas fa-sign-out-alt mr-1 mr-lg-2">&nbsp;退出</i>
            </button>
          </div>

        </div>
      </div>
      <div class="btn-group btn-group-sm" id="account_sign">
        <a class="btn btn-outline-secondary" href="#" data-toggle="modal" data-target="#sign" data-modaltab="sign_in">
          <i class="fas fa-sign-in-alt mr-1 mr-lg-2">&nbsp;登录</i>
        </a>
        <a class="btn btn-outline-secondary" href="#" data-toggle="modal" data-target="#sign" data-modaltab="sign_up">
          <i class="fas fa-user-plus mr-1 mr-lg-2">&nbsp;注册</i>
        </a>
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

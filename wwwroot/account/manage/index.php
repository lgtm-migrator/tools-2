<?php
if (!defined('title')) define('title', '账号管理');
require_once dirname(dirname(__DIR__)) . '/header.php';
if (!defined('JZEG_NET')) die();
?>
  <link rel="stylesheet" href="/static/css/account_manage.min.css">
  <div class="py-2 container-lg" id="account_manage">
    <div class="row">
      <div class="col-12 col-sm-4 col-md-3">
        <div class="mb-3 mb-sm-0 card">
          <div class="card-body">
            <div class="d-flex align-items-center flex-column">
              <img class="mb-1 rounded-circle img-thumbnail bg_square bg-light-50" width="150" height="150" alt="用户头像" style="min-height: 150px;">
              <span class="mb-1 card-title">用户名</span>
              <span class="card-subtitle mb-2 text-muted">123</span>
            </div>
          </div>
          <div class="dropdown-divider"></div>
          <div class="card-body">
            <div class="d-flex flex-column align-items-center">
              <i class="position-absolute align-self-end text-black-50 fas fa-edit"></i>
              <span>昵称</span>
              <span>abc@xyz.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-8 col-md-9">
        <div class="mb-2 card">
          <div class="nav nav-pills nav-justified flex-nowrap text-nowrap" style="overflow-x: auto;">
            <a class="nav-item border rounded-0 text-reset nav-link active" href="#profile" data-toggle="tab">轮廓</a>
            <a class="nav-item border rounded-0 text-reset nav-link" href="#preference" data-toggle="tab">偏好</a>
            <a class="nav-item border rounded-0 text-reset nav-link" href="#password" data-toggle="tab">密码</a>
            <a class="nav-item border rounded-0 text-reset nav-link" href="#Bind_account" data-toggle="tab">绑定账号</a>
            <a class="nav-item border rounded-0 text-reset nav-link" href="#TwoFactorAuthentication" data-toggle="tab">双重验证</a>
            <a class="nav-item border rounded-0 text-reset nav-link" href="#PersonalData" data-toggle="tab">个人数据</a>
          </div>
        </div>
        <div class="card">
          <div class="tab-content">
            <div class="tab-pane fade active show" id="profile">
              <div class="card-body">用户基本信息</div>
            </div>
            <div class="tab-pane fade" id="preference">
              <div class="card-body">网站偏好</div>
            </div>
            <div class="tab-pane fade" id="password">
              <div class="card-body">用户密码</div>
            </div>
            <div class="tab-pane fade" id="Bind_account">
              <div class="card-body">账号绑定</div>
            </div>
            <div class="tab-pane fade" id="TwoFactorAuthentication">
              <div class="card-body">两步验证</div>
            </div>
            <div class="tab-pane fade" id="PersonalData">
              <div class="card-body">注销账号，删除个人数据</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="d-none">
    <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
    <script src="/static/js/account_manage.min.js"></script>
  </div>
<?php
require_once dirname(dirname(__DIR__)) . '/footer.php';

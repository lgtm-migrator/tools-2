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
              <span>nick_name</span>
              <span>abc@xyz.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-8 col-md-9">
        <div class="mb-2 list-group flex-row text-center text-nowrap" style="overflow-x: auto;">
          <span class="list-group-item list-group-item-action active" data-toggle="tab" data-target="#profile">轮廓</span>
          <span class="list-group-item list-group-item-action" data-toggle="tab" data-target="#preference">偏好</span>
          <span class="list-group-item list-group-item-action" data-toggle="tab" data-target="#password">密码</span>
          <span class="list-group-item list-group-item-action" data-toggle="tab" data-target="#Bind_account">绑定账号</span>
          <span class="list-group-item list-group-item-action" data-toggle="tab" data-target="#TwoFactorAuthentication">双重验证</span>
          <span class="list-group-item list-group-item-action" data-toggle="tab" data-target="#PersonalData">个人数据</span>
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

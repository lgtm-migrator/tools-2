<?php
if (!defined('SITE_HEAD')) die();
?>
<div class="d-flex align-items-center" id="navBar-account">
  <div class="d-flex" id="account_sign">
    <button class="ml-1 btn btn-sm border btn-outline-secondary d-flex align-items-center modal_tab" type="button" data-modal_target="#sign" data-tab_target="#tab-sign_in">
      <i class="px-1 px-md-0 fas fa-2x fa-sign-in-alt text-darkorange"></i>
      <span class="ml-1 d-none d-md-block fa-lg">登录</span>
    </button>
    <button class="ml-1 btn btn-sm border btn-outline-secondary d-flex align-items-center modal_tab" type="button" data-modal_target="#sign" data-tab_target="#tab-sign_up">
      <i class="px-1 px-md-0 fas fa-2x fa-user-plus text-yellowgreen"></i>
      <span class="ml-1 d-none d-md-block fa-lg">注册</span>
    </button>
  </div>
  <div class="d-flex" id="account_sign_out">
    <div class="ml-1 dropdown">
      <button class="btn border-0 btn-sm btn-outline-secondary d-flex align-items-center dropdown-toggle dropdown-toggle-split" type="button" id="dropdown_notices" data-toggle="dropdown">
        <i class="mr-n1 fas fa-2x fa-bell text-dodgerblue"></i>
        <span class="badge badge-danger badge-pill border" style="top: -.5rem;right: .2rem;">1</span>
        <span class="d-none mx-xl-1 d-xl-unset fa-lg">提醒</span>
      </button>
      <div class="py-0 shadow-lg dropdown-menu dropdown-menu-right" style="width: 250px;">
        <div class="card border-0">
          <div class="px-2 py-1 card-header border-0 btn-block btn-group" id="notices_nav_tabs">
            <a class="btn btn-outline-secondary active" href="/notifications/notices/message.php" target="_blank" data-target="#notices_message">
              <i class="fas fa-lg fa-mail-bulk"></i>
              <span>消息</span>
            </a>
            <a class="btn btn-outline-secondary" href="/notifications/notices/info.php" target="_blank" data-target="#notices_info">
              <i class="fas fa-lg fa-mail-bulk"></i>
              <span>提醒</span>
            </a>
          </div>
          <div class="card-body p-0 d-flex justify-content-center align-items-center min-h-rem-8 tab-content">
            <div class="tab-pane fade show active" id="notices_message">
              <div class="text-center">当前没有新消息</div>
            </div>
            <div class="tab-pane fade" id="notices_info">
              <div class="text-center">当前没有新提醒</div>
            </div>
          </div>
          <div class="card-footer border-0 d-flex justify-content-between bg-dark-50 bg_square_x small">
            <a class="text-white-50" href="javascript:" target="_blank">标记当前全部已读</a>
            <a class="text-white-50" href="javascript:" target="_blank">忽略全部</a>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-1 dropdown">
      <button class="btn border-0 btn-sm btn-outline-secondary d-flex align-items-center dropdown-toggle dropdown-toggle-split" type="button" id="dropdown_account" data-toggle="dropdown">
        <i class="fas fa-2x fa-user text-crimson"></i>
        <span class="d-none mx-xl-1 d-xl-unset fa-lg">账号</span>
      </button>
      <div class="mt-2 dropdown-menu shadow-lg dropdown-menu-right">
        <div class="px-2 d-flex justify-content-between">
          <a href="javascript:" class="px-2 py-1 d-flex align-items-center min-w-rem-9 border rounded-pill text-decoration-none text-reset">
            <i class="pr-1 fas fa-lg fa-user-alt text-muted"></i>
            <span>用户名</span>
          </a>
          <a href="javascript:" class="px-2 py-1 d-flex align-items-center border rounded-pill text-decoration-none text-reset" id="account_sign_exit">
            <i class="pr-1 fas fa-lg fa-sign-out-alt text-danger"></i>
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
            <a href="/account/manage/index.php" class="mb-2 px-4 border rounded-circle btn btn-outline-secondary">
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
        <div class="mb-n2 p-2 bg-dark-50 rounded-bottom d-flex justify-content-between text-center small">
          <a class="min-w-rem-5 text-white-50" href="javascript:" target="_blank">建议反馈</a>
          <a class="min-w-rem-5 text-white-50" href="javascript:" target="_blank">宣传合作</a>
          <a class="min-w-rem-5 text-white-50" href="javascript:" target="_blank">技术合作</a>
          <a class="min-w-rem-5 text-white-50" href="javascript:" target="_blank">邀请朋友</a>
        </div>
      </div>
    </div>
  </div>
</div>

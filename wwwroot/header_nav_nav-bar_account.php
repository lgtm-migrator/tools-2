<div class="d-flex align-items-center" id="navBar-account">
  <div class="d-flex" id="account_sign">
    <button class="btn btn-sm border-0 btn-outline-secondary d-flex align-items-center modal_tab" type="button" data-modal_target="#sign"
            data-tab_target="#tab-sign_in">
      <i class="fas fa-2x fa-sign-in-alt text-darkorange"></i>
      <span class="ml-1 fa-lg">登录</span>
    </button>
    <button class="btn btn-sm border-0 btn-outline-secondary d-flex align-items-center modal_tab" type="button" data-modal_target="#sign"
            data-tab_target="#tab-sign_up">
      <i class="fas fa-2x fa-user-plus text-yellowgreen"></i>
      <span class="ml-1 fa-lg">注册</span>
    </button>
  </div>
  <div class="ml-1 ml-sm-3" id="account_sign_out">
    <div class="btn-group">
      <button type="button" class="btn border-0 btn-sm btn-outline-secondary d-flex align-items-center dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
        <i class="mr-n1 fas fa-2x fa-bell text-dodgerblue"></i>
        <span class="badge badge-danger badge-pill border" style="top: -.6rem;right: .2rem;">1</span>
        <span class="d-none mx-xl-1 d-xl-unset fa-lg">提醒</span>
      </button>
      <div class="dropdown-menu shadow-lg dropdown-menu-right">
        <div id="notices">
          <div class="nav nav-tabs row-cols-2">
            <button class="nav-item nav-link active" type="button" data-toggle="tab" data-target="#notices_message">
              <i class="fab fa-lg fa-facebook-messenger"></i>
              <span>消息</span>
            </button>
            <button class="nav-item nav-link" type="button" data-toggle="tab" data-target="#notices_info">
              <i class="fas fa-lg fa-user"></i>
              <span>提醒</span>
            </button>
          </div>
          <div class="px-2 py-1 tab-content">
            <div class="tab-pane fade show active" id="notices_message">当前没有新消息</div>
            <div class="tab-pane fade" id="notices_info">当前没有新提醒</div>
          </div>
        </div>
        <div class="dropdown-divider"></div>
        <div class="mb-n2 p-2 bg-dark-50 rounded-bottom d-flex justify-content-between text-center small">
          <a class="min-w-rem-8 text-white-50" href="javascript:" target="_blank">标记当前全部已读</a>
          <a class="min-w-rem-8 text-white-50" href="/notifications/notices" target="_blank">查看全部</a>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <button type="button" class="btn border-0 btn-sm btn-outline-secondary d-flex align-items-center dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
        <i class="fas fa-2x fa-user text-crimson"></i>
        <span class="d-none mx-xl-1 d-xl-unset fa-lg">账号</span>
      </button>
      <div class="dropdown-menu shadow-lg dropdown-menu-right">
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

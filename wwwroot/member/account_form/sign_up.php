<div id="account_sign_up">
  <div class="form-group form-row align-items-center">
    <div class="col-auto col-sm-2">
      <label class="mb-1 d-inline-block min-w-100 text-align-last" for="signUp_user_name">用户名</label>
    </div>
    <div class="col-12 col-sm-10 input-group">
      <input class="form-control" type="text" id="signUp_user_name" placeholder="请设置你的用户名" minlength="5"
             maxlength="20" autocomplete="off" required>
    </div>
  </div>
  <div class="form-group form-row align-items-center">
    <div class="col-auto col-sm-2">
      <label class="mb-1 d-inline-block min-w-100 text-align-last" for="signUp_email">邮箱</label>
    </div>
    <div class="col-12 col-sm-10 input-group">
      <input class="form-control" type="text" id="signUp_email" placeholder="请输入您的Email" minlength="5" maxlength="20"
             autocomplete="off" required>
    </div>
  </div>
  <div class="form-group form-row align-items-center">
    <div class="col-auto col-sm-2">
      <label class="mb-1 d-inline-block min-w-100 text-align-last" for="signUp_password">密码</label>
    </div>
    <div class="col-12 col-sm-10 input-group">
      <input class="form-control" type="password" id="signUp_password" placeholder="设置你的登录密码" minlength="8"
             maxlength="16" autocomplete="off" required>
      <div class="input-group-append">
        <div class="input-group-text">
          <i class="fas fa-fw fa-lg fa-eye password_switch" title="显示密码"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="form-group form-row align-items-center">
    <div class="col-auto col-sm-2">
      <label class="mb-1 d-inline-block min-w-100 text-align-last" for="signUp_rePassword">密码</label>
    </div>
    <div class="col-12 col-sm-10 input-group">
      <input class="form-control" type="password" id="signUp_rePassword" placeholder="请再次输入你的密码" minlength="8"
             maxlength="16" autocomplete="off" required>
      <div class="input-group-append">
        <div class="input-group-text">
          <i class="fas fa-fw fa-lg fa-eye password_switch" title="显示密码"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="d-flex justify-content-end justify-content-sm-center custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="signUp_tos">
      <label class="custom-control-label" for="signUp_tos">同意服务条款</label>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <button class="w-50 btn btn-secondary" type="button" id="signUp_submit">注册</button>
  </div>
</div>

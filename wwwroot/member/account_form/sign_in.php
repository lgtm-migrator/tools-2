<div id="account_sign_in">
  <div class="form-group form-row align-items-center align-items-sm-stretch">
    <div class="col-auto col-sm-2">
      <label class="mb-1 mb-sm-0 pt-0 pt-sm-1 d-inline-block min-w-100 text-align-last" for="signIn_user_name">用户名</label>
    </div>
    <div class="col-12 col-sm-10 input-group">
      <input class="form-control" type="text" id="signIn_user_name" placeholder="请输入用户名" minlength="5" maxlength="20" pattern="" autocomplete="off" required>
    </div>
  </div>
  <div class="form-group form-row align-items-center align-items-sm-stretch">
    <div class="col-auto col-sm-2">
      <label class="mb-1 mb-sm-0 pt-0 pt-sm-1 d-inline-block min-w-100 text-align-last" for="signIn_password">密码</label>
    </div>
    <div class="col-12 col-sm-10 input-group">
      <input class="form-control" type="password" id="signIn_password" placeholder="请输入密码" minlength="8" maxlength="16" pattern="" autocomplete="off" required>
      <div class="input-group-append">
        <div class="input-group-text">
          <i class="text-muted fas fa-fw fa-lg fa-eye password_switch" title="显示密码"></i>
        </div>
      </div>
    </div>
  </div>
  <?php include dirname(__FILE__) . "/recaptcha_tools.php"; ?>
  <?php include dirname(__FILE__) . "/captcha_form-group.php"; ?>
  <div class="form-group">
    <div class="d-flex justify-content-end justify-content-sm-center custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="signIn_rememberMe">
      <label class="custom-control-label" for="signIn_rememberMe">30天内免登录</label>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <button class="w-50 rounded-pill btn btn-secondary" type="button" id="signIn_submit">登录</button>
  </div>
  <div class="my-2 py-2 d-flex justify-content-end border rounded-lg small">
    <a class="mx-1 text-decoration-none sign_tab" href="javascript:" data-target="#tab-sign_in_phone">
      <i class="fas fa-lg fa-mobile-alt"></i>
      <span class="text-muted">手机号登录</span>
    </a>
    <a class="mx-1 text-decoration-none sign_tab" href="javascript:" data-target="#tab-password_reset">
      <i class="fas fa-lg fa-user-injured"></i>
      <span class="text-muted">忘记密码</span>
    </a>
  </div>
</div>

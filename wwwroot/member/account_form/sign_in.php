<div id="account_sign_in">
  <div class="form-group">
    <label class="sr-only text-dark" for="signIn_user_name">用户名</label>
    <div class="input-group">
      <input class="form-control" type="text" id="signIn_user_name" placeholder="请输入用户名" minlength="5" maxlength="20"
             autocomplete="off" required>
    </div>
  </div>
  <div class="form-group">
    <label class="sr-only text-dark" for="signIn_password">密码</label>
    <div class="input-group">
      <input class="form-control" type="password" id="signIn_password" placeholder="请输入密码" minlength="5" maxlength="20"
             autocomplete="off" required>
      <div class="input-group-append">
        <div class="input-group-text">
          <i class="fas fa-fw fa-lg fa-eye" title="显示密码" id="password_switch"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-2 d-flex justify-content-end">
    <button class="ml-2 btn btn-sm btn-link text-decoration-none text-secondary sign_tab" type="button" data-target="sign_in_phone">手机号登录</button>
    <button class="ml-2 btn btn-sm btn-link text-decoration-none text-secondary sign_tab" type="button" data-target="password_reset">忘记密码</button>
  </div>
  <div class="d-flex flex-column align-items-center justify-content-center" id="reCaptcha_status" style="display: none!important;">
    <div id="reCaptcha_check">
      <span class="text-danger">正在检测您的运行环境</span>
      <span id="captcha_number">10</span>
      <a class="text-decoration-none text-muted" href="javascript:" id="reCaptcha_recheck" title="重新检测">重试</a>
      <input type="hidden" name="reCaptcha_check_hidden" id="reCaptcha_check_hidden">
    </div>
    <div id="reCaptcha_pass">
      <span class="text-success">您已经通过了验证</span>
    </div>
  </div>
  <div class="form-group">
    <div class="input-group">
      <label class="sr-only text-dark" for="modal_login_captcha">验证码</label>
      <div class="input-group-prepend">
        <div class="input-group-text">
          <div id="captcha">123456</div>
        </div>
      </div>
      <input class="form-control" type="text" id="modal_login_captcha" placeholder="请输入验证码" minlength="4"
             maxlength="6" autocomplete="off" required>
    </div>
  </div>
  <div class="form-group">
    <div class="d-flex justify-content-center custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="signIn_rememberMe">
      <label class="custom-control-label" for="signIn_rememberMe">30天内免登录</label>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <button class="btn btn-secondary" type="button" id="signIn_submit">登录</button>
  </div>
</div>

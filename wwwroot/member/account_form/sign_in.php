<div id="account_sign_in">
  <div class="form-group">
    <label class="d-none text-dark" for="signIn_user_name">用户名</label>
    <div class="input-group">
      <input class="form-control" type="text" id="signIn_user_name" placeholder="请输入用户名" minlength="5" maxlength="20"
             autocomplete="off" required>
    </div>
  </div>
  <div class="form-group">
    <label class="d-none text-dark" for="signIn_password">密码</label>
    <div class="input-group">
      <input class="form-control" type="text" id="signIn_password" placeholder="请输入密码" minlength="5" maxlength="20"
             autocomplete="off" required>
      <div class="input-group-append">
        <div class="input-group-text">
          <i id="toggle_password" class="fas fa-lg fa-eye" title="显示密码"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-end">
    <a class="small text-decoration-none text-secondary" id="modalTab_lostPassword" href="#password_reset"
       data-toggle="tab">忘记密码</a>
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
      <div class="input-group-prepend">
        <label class="input-group-text" for="modal_login_captcha" id="captcha">验证码<div>123456</div></label>
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
    <button class="btn btn-outline-info" type="button" id="signIn_submit">登录</button>
  </div>
</div>

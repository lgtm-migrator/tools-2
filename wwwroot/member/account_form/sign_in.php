<div id="account_sign_in">
  <div class="form-group form-row align-items-center">
    <div class="col-auto col-sm-2">
      <label class="mb-1 d-inline-block min-w-100 text-align-last" for="signIn_user_name">用户名</label>
    </div>
    <div class="col-12 col-sm-10 input-group">
      <input class="form-control" type="text" id="signIn_user_name" placeholder="请输入用户名" minlength="5" maxlength="20"
             autocomplete="off" required>
    </div>
  </div>
  <div class="form-group form-row align-items-center">
    <div class="col-auto col-sm-2">
      <label class="mb-1 d-inline-block min-w-100 text-align-last" for="signIn_password">密码</label>
    </div>
    <div class="col-12 col-sm-10 input-group">
      <input class="form-control" type="password" id="signIn_password" placeholder="请输入密码" minlength="8" maxlength="16"
             autocomplete="off" required>
      <div class="input-group-append">
        <div class="input-group-text">
          <i class="fas fa-fw fa-lg fa-eye" title="显示密码" id="password_switch"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex flex-column align-items-center justify-content-center" style="display: none!important;"
       id="recaptcha_status">
    <div id="recaptcha_check">
      <span class="text-danger" id="recaptcha_check_text">正在检测您的运行环境</span>
      <a class="text-decoration-none text-muted" href="javascript:" id="recaptcha_check_retry" title="重新检测">重试</a>
      <div class="progress bg-light-50" id="recaptcha_progress">
        <span class="progress-bar progress-bar-striped bg-secondary progress-bar-animated" id="recaptcha_progress_bar"
              style="width: 15%;">15%</span>
      </div>
    </div>
    <div id="recaptcha_result">
      <span class="text-success" id="recaptcha_result_success">您已经通过了验证</span>
      <span class="text-danger" id="recaptcha_result_failure">您没有通过验证</span>
    </div>
  </div>
  <div class="form-group form-row align-items-center">
    <div class="col-auto col-sm-2">
      <label class="mb-1 d-inline-block min-w-100 text-align-last text-dark" for="modal_login_captcha">验证码</label>
    </div>
    <div class="col-12 col-sm-10 input-group">
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
  <div class="mb-2 d-flex justify-content-end">
    <button class="ml-2 btn btn-sm btn-link text-decoration-none text-secondary sign_tab" type="button"
            data-target="sign_in_phone">手机号登录
    </button>
    <button class="ml-2 btn btn-sm btn-link text-decoration-none text-secondary sign_tab" type="button"
            data-target="password_reset">忘记密码
    </button>
  </div>
</div>

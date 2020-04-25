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
          <i class="fas fa-fw fa-lg fa-eye password_switch" title="显示密码"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="form-group form-row align-items-center">
    <div class="col-auto col-sm-2">
      <label class="mb-1 d-inline-block min-w-100 text-align-last text-dark" for="modal_login_captcha">验证码</label>
    </div>
    <div class="col-12 col-sm-10 input-group">
      <div class="input-group-prepend">
        <div class="px-0 py-0 input-group-text" id="captcha">
          <img width="100" height="36" alt="验证码" id="reVerify"
               src="<?php require_once dirname(dirname(dirname(__DIR__))) . "/wwwroot/captcha/index.php";?>">
        </div>
      </div>
      <input class="form-control" type="text" id="modal_login_captcha" placeholder="请输入验证码" minlength="4"
             maxlength="6" autocomplete="off" required>
    </div>
  </div>
  <div class="d-flex flex-column align-items-center" style="display: none!important;" id="recaptcha_tools">
    <div class="w-75 w-sm-50 progress bg-light-50" id="recaptcha_progress">
      <span id="recaptcha_progress_bar"
            class="progress-bar progress-bar-striped bg-secondary progress-bar-animated transition-timing_ease-in-out transition-property-width transition-duration-2s w-100"></span>
    </div>
    <div id="recaptcha_check">
      <span class="text-danger" id="recaptcha_check_text">正在检测您的运行环境</span>
      <a class="text-decoration-none text-muted" href="javascript:" id="recaptcha_recheck" title="重新检测">重试</a>
    </div>
    <div class="d-flex flex-column align-items-center" id="recaptcha_result">
      <span class="text-success" id="recaptcha_result_success">您已经通过了验证</span>
      <span class="text-danger" id="recaptcha_result_failure">您没有通过验证</span>
    </div>
  </div>
  <div class="form-group">
    <div class="d-flex justify-content-end justify-content-sm-center custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="signIn_rememberMe">
      <label class="custom-control-label" for="signIn_rememberMe">30天内免登录</label>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <button class="w-50 btn btn-secondary" type="button" id="signIn_submit">登录</button>
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

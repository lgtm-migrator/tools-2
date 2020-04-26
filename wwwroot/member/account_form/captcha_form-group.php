<div class="form-group form-row align-items-center">
  <div class="col-auto col-sm-2">
    <label class="mb-1 d-inline-block min-w-100 text-align-last text-dark" for="modal_login_captcha">验证码</label>
  </div>
  <div class="col-12 col-sm-10 input-group">
    <div class="input-group-prepend">
      <div class="px-0 py-0 input-group-text">
        <img width="100" height="36" alt="验证码" class="reVerify" src="<?php include dirname(dirname(dirname(__DIR__))) . "/wwwroot/captcha/index.php"; ?>">
      </div>
    </div>
    <input class="form-control captcha_input" type="text" placeholder="请输入验证码" minlength="4" maxlength="6" autocomplete="off" required>
  </div>
</div>

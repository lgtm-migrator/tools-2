<div class="form-group form-row align-items-center align-items-sm-stretch">
  <div class="col-auto col-sm-2">
    <label class="mb-1 d-inline-block min-w-100 text-align-last text-dark">验证码</label>
  </div>
  <div class="col-12 col-sm-10 input-group needs-validation">
    <div class="input-group-prepend">
      <div class="px-0 py-0 input-group-text">
        <img width="100" height="36" alt="验证码" class="reVerify" src="">
      </div>
    </div>
    <input class="form-control captcha_input" type="text" placeholder="请输入验证码" minlength="4" maxlength="6" pattern="[a-z0-9]" autocomplete="off" required>
    <div class="px-0 col-12 needs-validation-feedback"><span class="small text-muted">验证码不区分大小写</span></div>
    <span class="invalid-feedback">错误</span>
    <span class="valid-feedback">正确</span>
  </div>
</div>

<div class="form-group form-row align-items-center align-items-sm-stretch">
  <div class="col-auto col-sm-2">
    <label class="mb-1 d-inline-block min-w-100 text-align-last text-dark">验证码</label>
  </div>
  <div class="col-12 col-sm-10 input-group">
    <div class="input-group-prepend">
      <div class="px-0 py-0 input-group-text">
        <img width="110" height="36" alt="验证码" class="reVerify">
      </div>
    </div>
    <input class="form-control rounded-right captcha_input needs-validation" type="text" placeholder="请输入验证码" minlength="4" maxlength="6" pattern="[a-z0-9]" autocomplete="off" required>
    <span class="invalid-feedback">字母均为小写</span>
  </div>
</div>

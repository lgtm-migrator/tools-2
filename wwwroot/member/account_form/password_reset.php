<div id="account_password_reset">
  <div class="form-group form-row align-items-center">
    <div class="col-auto col-sm-2">
      <label class="mb-1 d-inline-block min-w-100 text-align-last" for="password_reset_account">账号</label>
    </div>
    <div class="col-12 col-sm-10 input-group">
      <input class="form-control" type="text" id="password_reset_account" placeholder="请输入您的账号或者邮箱" minlength="5" maxlength="40" pattern="" autocomplete="off" required>
    </div>
  </div>
  <?php include dirname(__FILE__) . "/captcha_form-group.php"; ?>
  <div class="d-flex justify-content-center">
    <button class="rounded-pill btn btn-secondary" type="button" id="password_reset_submit" disabled>找回密码</button>
  </div>
</div>

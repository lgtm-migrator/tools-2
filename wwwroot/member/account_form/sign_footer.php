<div class="my-2 py-2 d-flex justify-content-end border rounded-lg small nav">
  <a class="mx-1 text-decoration-none sign_modal_tab" href="javascript:" data-target="#tab-sign_in_phone">
    <i class="fas fa-lg fa-mobile-alt"></i>
    <span class="text-muted">手机号登录</span>
  </a>
  <a class="mx-1 text-decoration-none sign_modal_tab" href="javascript:" data-target="#tab-password_reset">
    <i class="fas fa-lg fa-user-injured"></i>
    <span class="text-muted">忘记密码</span>
  </a>
</div>
<div class="dropdown-divider border-top-dotted"></div>
<div class="my-2 position-relative d-flex justify-content-center align-items-center">
  <?php include_once dirname(__FILE__) . '/sign_tab.php' ?>
</div>
<?php include_once dirname(__FILE__) . '/oauth_sign_in.php' ?>

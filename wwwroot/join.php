<?php
define('title', '创建账号 - 杰格网');
require_once dirname(__FILE__) . '/common/blank/header.php';
if (!defined('SITE_HEAD')) die();
?>

<div class="mt-5 container">
  <div class="row row-cols-1 row-cols-lg-2">
    <div class="p-5"></div>
    <div class="p-5 shadow rounded bg-white">
      <div class="tab-content">
        <div class="tab-pane fade" id="tab-sign_in">
          <?php include_once dirname(__FILE__) . '/member/account_form/sign_in.php'; ?>
        </div>
        <div class="tab-pane fade" id="tab-sign_in_phone">
          <?php include_once dirname(__FILE__) . '/member/account_form/sign_in_phone.php'; ?>
        </div>
        <div class="tab-pane fade active show" id="tab-sign_up">
          <?php include_once dirname(__FILE__) . '/member/account_form/sign_up.php'; ?>
        </div>
        <div class="tab-pane fade" id="tab-password_reset">
          <?php include_once dirname(__FILE__) . '/member/account_form/password_reset.php'; ?>
        </div>
      </div>
      <?php include_once dirname(__FILE__) . '/member/account_form/sign_footer.php'; ?>
    </div>
  </div>
</div>

<div class="d-none">
  <?php require_once dirname(__FILE__) . "/common/blank/javascript.php"; ?>
</div>

<?php
require_once dirname(__FILE__) . '/common/blank/footer.php';
?>


<?php
define('title', '在线小工具');
require_once dirname(__FILE__) . '/header.php';
if (!defined('SITE_HEAD')) die();
?>

<div class="mt-3 container">
  <div class="row">
    <div class="col-auto col-sm-1 col-md-2 col-lg-3 col-xl-4"></div>
    <div class="col-auto col-sm-10 col-md-8 col-lg-6 col-xl-4">
      <div class="tab-content">
        <div class="tab-pane fade active show" id="tab-sign_in">
          <?php include_once dirname(__FILE__) . '/member/account_form/sign_in.php'; ?>
        </div>
        <div class="tab-pane fade" id="tab-sign_in_phone">
          <?php include_once dirname(__FILE__) . '/member/account_form/sign_in_phone.php'; ?>
        </div>
        <div class="tab-pane fade" id="tab-sign_up">
          <?php include_once dirname(__FILE__) . '/member/account_form/sign_up.php'; ?>
        </div>
        <div class="tab-pane fade" id="tab-password_reset">
          <?php include_once dirname(__FILE__) . '/member/account_form/password_reset.php'; ?>
        </div>
      </div>
    </div>
    <div class="col-auto col-sm-1 col-md-2 col-lg-3 col-xl-4"></div>
  </div>
  <?php include_once dirname(__FILE__) . '/member/account_form/sign_footer.php'; ?>
</div>

<div class="d-none">
  <?php require_once dirname(__FILE__) . "/javascript.php"; ?>
</div>

<?php
require_once dirname(__FILE__) . '/footer.php';
?>


<?php
define('title', '创建账号 - 杰格网');
require_once dirname(__FILE__) . '/common/blank/header.php';
if (!defined('SITE_HEAD')) die();
?>

<div class="container">
  <div class="d-flex align-items-center justify-content-center flex-column-reverse flex-md-row min-vh-90">
    <?php include_once dirname(__FILE__) . '/common/ad/member_sign_ad.php'; ?>
    <div class="p-5 shadow rounded bg-white">
      <?php include_once dirname(__FILE__) . '/member/account_form/sign_up.php'; ?>
      <?php include_once dirname(__FILE__) . '/member/account_form/oauth_sign_in.php'; ?>
      <?php include_once dirname(__FILE__) . '/member/account_form/footer_join.php'; ?>
    </div>
  </div>
</div>

<div class="d-none">
  <?php require_once dirname(__FILE__) . "/common/blank/javascript.php"; ?>
</div>

<?php
require_once dirname(__FILE__) . '/common/blank/footer.php';
?>

<?php
if (!defined('title')) define('title', '账户表单');
require_once dirname(dirname(__DIR__)) . '/header.php';
if (!defined('JZEG_NET')) die();
?>
  <link rel="stylesheet" href="/static/css/account_form.min.css">
  <div class="py-2 container" id="account_form">
    <div class="mb-2 font-weight-bolder">账户表单</div>
  </div>
  <div class="d-none">
    <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
    <script src="/static/js/account_form.min.js"></script>
  </div>
<?php
require_once dirname(dirname(__DIR__)) . '/footer.php';

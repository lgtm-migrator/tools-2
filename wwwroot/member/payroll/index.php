<?php
if (!defined('title')) define('title', '工资单');
require_once dirname(__DIR__) . '/header.php';
if (!defined('JZEG_NET')) die();
?>
  <link rel="stylesheet" href="/static/css/payroll.min.css">
  <div class="py-2 container" id="jt_payroll">
    <div class="mb-2 font-weight-bolder">工资单</div>
    <form class="px-3 py-2 rounded border" action="/member/payroll/payroll.php" method="post" enctype="multipart/form-data">
      <div class="form-group text-center">
        <button type="submit" class="btn btn-outline-success" id="jt_payroll_submit">保存</button>
      </div>
    </form>
  </div>
  <div class="d-none">
    <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
    <script src="/static/js/payroll.min.js"></script>
  </div>
<?php
require_once dirname(__DIR__) . '/footer.php';

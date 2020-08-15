<?php
require_once dirname(__DIR__) . '/header.php';
if (!defined('SITE_HEAD')) die();
?>
<div class="container">
  <div class="d-flex justify-content-center align-items-center min-vh-90">
    <div class="card bg-light">
      <div class="card-header">
        <span class="h5 mb-0">欢迎光临杰格网</span>
      </div>
      <div class="card-body">
        <span>杰格网正在建设中，请先加入页面底部的钉钉群进行主讨论，微信群和QQ群为辅助讨论。</span>
        <span class="mt-2 d-flex justify-content-end">2020.08.16</span>
      </div>
    </div>
  </div>
</div>
<div class="d-none">
  <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
</div>

<?php
require_once dirname(__DIR__) . '/footer.php';
?>

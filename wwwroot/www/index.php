<?php
require_once dirname(__DIR__) . '/header.php';
if (!defined('SITE_HEAD')) die();
?>
<link rel="stylesheet" href="static/css/www.min.css">

<div class="container">
  <div class="d-flex justify-content-center align-items-center min-vh-90">
    <div class="card bg-light">
      <div class="card-header">
        <strong class="text-dodgerblue">欢迎光临杰格网</strong>
      </div>
      <div class="card-body small">
        <div>杰格网正在建设中，请先加入页面底部的钉钉群进行主讨论，微信群和QQ群为辅助讨论。</div>
        <div>账号暂未开放，目前无需注册，内容访问不受影响。</div>
        <div class="mt-2 d-flex justify-content-end">2020.08.16</div>
      </div>
    </div>
  </div>
</div>
<div class="d-none">
  <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
  <script src="static/js/www.min.js"></script>
</div>

<?php
require_once dirname(__DIR__) . '/footer.php';
?>

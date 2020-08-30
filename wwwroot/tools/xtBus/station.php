<?php
define('title', '站牌信息查询');
require_once dirname(dirname(__DIR__)) . "/header.php";
?>
<link rel="stylesheet" href="/static/css/xtBus/station.min.css">

<div class="container mt-5" id="jt_container">
  <div class="mb-3">
    <div class="mb-2 font-weight-bolder">公交站牌查询</div>
    <div class="mb-2">
      <div class="mb-1 text-orange">站牌名称</div>
      <div class="d-flex align-items-center" id="routeUpperOrDown">
      </div>
    </div>
  </div>
</div>

<div class="d-none">
  <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
  <script src="/static/js/xtBus/index.min.js"></script>
  <script src="/static/js/xtBus/station.min.js"></script>
</div>
<?php
require_once dirname(dirname(__DIR__)) . "/footer.php";
?>

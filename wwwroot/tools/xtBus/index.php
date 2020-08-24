<?php
define('title', '公共汽车查询');
require_once dirname(dirname(__DIR__)) . "/header.php";
?>
<link rel="stylesheet" href="/static/css/xtBus/index.min.css">

<div class="container mt-5" id="jt_container">
  <div class="mb-3 d-flex justify-content-around">
    <a href="init.php" target="_blank">init</a>
    <a href="line.php" target="_blank">line</a>
    <a href="query.php" target="_blank">query</a>
  </div>
  <div class="mb-3 d-flex justify-content-around" id="xtBus_btn">
    <button type="button" class="btn btn-sm btn-outline-secondary" data-type="init">init</button>
    <button type="button" class="btn btn-sm btn-outline-secondary" data-type="line">line</button>
    <button type="button" class="btn btn-sm btn-outline-secondary" data-type="query">query</button>
  </div>
</div>

<div class="d-none">
  <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
  <script src="/static/js/xtBus/index.min.js"></script>
</div>
<?php
require_once dirname(dirname(__DIR__)) . "/footer.php";
?>

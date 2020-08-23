<?php
define('title', 'query');
require_once dirname(dirname(__DIR__)) . "/header.php";
?>
<link rel="stylesheet" href="/static/css/xtBus/query.min.css">

<div class="container mt-5" id="jt_container">
  <?php require_once dirname(dirname(dirname(__DIR__))) . '/functions/xtBus/query.php'; ?>
</div>

<div class="d-none">
  <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
  <script src="/static/js/xtBus/query.min.js"></script>
</div>
<?php
require_once dirname(dirname(__DIR__)) . "/footer.php";
?>

<?php
define('title', 'init');
require_once dirname(dirname(__DIR__)) . "/header.php";
?>
<link rel="stylesheet" href="/static/css/xtBus/init.min.css">

<div class="container mt-5" id="jt_container">
</div>

<div class="d-none">
  <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
  <script src="/static/js/xtBus/init.min.js"></script>
</div>
<?php
require_once dirname(dirname(__DIR__)) . "/footer.php";
?>

<?php

define('title', '动态二维码');
require_once '../header.php';
?>
<link rel="stylesheet" href="/static/css/jt_qrcode.min.css">
<div class="container mt-5" id="jt_container"></div>
<div>
    <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
    <script src="/static/js/jt_qrcode.min.js"></script>
</div>

<?php
require_once '../footer.php';
?>

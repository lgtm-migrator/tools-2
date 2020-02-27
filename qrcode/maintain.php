<?php

define('title', '维护灵活码');
require_once '../header.php';
?>
<link rel="stylesheet" href="/static/css/jt_qrcode.min.css">
<div class="py-3 container bg-white" id="jt_container">
    <div class="mb-3 p-3 border rounded">
        <form action="update.php" method="post" enctype="multipart/form-data">
            <div class="mb-3 custom-file">
                <input class="custom-file-input" type="file" name="lhm_img" id="lhm_img"
                       accept="image/jpeg,image/png" required>
                <label class="custom-file-label" for="lhm_img" data-browse="浏览">需要维护的灵活码图片文件</label>
            </div>
            <div class="mb-3 input-group">
                <div class="input-group-prepend">
                    <label class="sr-only" for="lhm_identifier">灵活码标识</label>
                    <span class="input-group-text">灵活码标识</span>
                </div>
                <input class="form-control" type="text" name="lhm_identifier" id="lhm_identifier" placeholder="灵活码标识"
                       maxlength="10" value="LHM-0001">
            </div>
            <div class="mb-3 input-group">
                <div class="input-group-prepend">
                    <label class="sr-only" for="lhm_password">管理密码</label>
                    <span class="input-group-text">管理密码</span>
                </div>
                <input class="form-control" type="password" name="lhm_password" id="lhm_password"
                       placeholder="请输入您之前设置的管理密码" required>
            </div>
            <div class="mb-3 form-group text-center">
                <input class="btn btn-outline-success" type="submit" name="" id="submit" value="登录">
            </div>
        </form>
    </div>
</div>
<div>
    <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
    <script src="/static/js/jt_qrcode.min.js"></script>
</div>

<?php
require_once '../footer.php';
?>

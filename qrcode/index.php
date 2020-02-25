<?php

define('title', '动态二维码');
require_once '../header.php';
?>
<link rel="stylesheet" href="/static/css/jt_qrcode.min.css">
<div class="container mt-5" id="jt_container">
    <div>
        <div class="mb-1 text-dark">二维码图片动态控制工具</div>
        <div class="mb-3 small text-muted">本工具可以实现同一张二维码图片，在不修改成品图的情况下，自由控制二维码图片、标题、和内容。</div>
        <div class="mb-3 small text-secondary">本工具目前试运营期，免费开放使用。</div>
        <div class="mb-3 small text-success">
            <span class="small">具体说明：一张微信群的二维码图片，发布到一个固定的场所后，这个图片自己不能再修改了（如打印出来或者网络社区帖子中），这个群满了以后，还需要再重新打印新的微信群二维码图片，会产出重复成本（如重新打印、重新宣传、重新张贴、重新发布社区帖子等时间和金钱成本）或者成本浪费（宣传效果过量造成的各种浪费）不再过多介绍。</span>
            <span class="small"></span>
            <span class="small"></span>
        </div>
        <span class="mb-3 text-success"></span>
    </div>
    <div class="mb-3 small text-danger">
        <span>为防止发布网络钓鱼类信息，本站只允许上传阿里系、字节跳动系、腾讯系等知名公司旗下的社群二维码。其他类型二维码，暂不支持，请勿上传。</span>
        <div class="text-success">
            <span class="d-block">符合条件可反馈，目前支持列表：</span>
            <ol>
                <li>支付宝群</li>
                <li>钉钉群</li>
                <li>微信群</li>
                <li>QQ群</li>
            </ol>
        </>
    </div>
    <form action="img.php" method="post" enctype="multipart/form-data">
        <div class="mb-3 custom-file">
            <input class="custom-file-input" type="file" name="qrcode_img" id="qrcode_img" accept="image/jpeg,image/png"
                   required>
            <label class="custom-file-label" for="qrcode_img" data-browse="浏览">二维码图片</label>
        </div>
        <div class="mb-3 input-group">
            <div class="input-group-prepend">
                <label class="sr-only" for="qrcode_title">二维码标题</label>
                <span class="input-group-text">二维码标题</span>
            </div>
            <input class="form-control" type="text" name="qrcode_title" id="qrcode_title" value="默认标题"
                   placeholder="图片标题" required>
        </div>
        <div class="mb-3 input-group">
            <div class="input-group-prepend">
                <label class="sr-only" for="qrcode_description">二维码介绍</label>
                <span class="input-group-text">二维码介绍</span>
            </div>
            <input class="form-control" type="text" name="qrcode_description" id="qrcode_description" value="默认介绍"
                   placeholder="图片介绍" required>
        </div>
        <div class="small text-danger">请务必牢记这个密码，密码是您唯一调整二维码信息的方式。如忘记管理密码，需要通过验证找回密码，请联系管理。</div>
        <div class="mb-3 input-group">
            <div class="input-group-prepend">
                <label class="sr-only" for="qrcode_password">管理密码</label>
                <span class="input-group-text">维护管理密码</span>
            </div>
            <input class="form-control" type="password" name="qrcode_password" id="qrcode_password" value="000000"
                   required placeholder="复杂并牢记密码">
        </div>
        <div class="mb-3 form-group text-center">
            <input class="btn btn-outline-success" type="submit" name="" id="submit">
        </div>
    </form>
</div>
<div>
    <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
    <script src="/static/js/jt_qrcode.min.js"></script>
</div>

<?php
require_once '../footer.php';
?>

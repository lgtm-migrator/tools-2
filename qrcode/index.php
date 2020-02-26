<?php

define('title', '灵活码');
require_once '../header.php';
?>
<link rel="stylesheet" href="/static/css/jt_qrcode.min.css">
<div class="py-3 container bg-white" id="jt_container">
    <div>
        <div class="mb-1 font-weight-bold text-dark">灵活码</div>
        <div class="mb-3 small text-muted">灵活码可以实现同一个二维码，在不修改的情况下，自主维护更新扫描结果内容（二维码、标题、和内容），即动态控制二维码。</div>
        <div class="small text-secondary">灵活码目前试运营期，免费开放使用。</div>
        <div class="mb-3 small text-secondary">试运营期创建的灵活码，有效期自生成之日起2个月（31&times;2=62天）内有效。</div>
    </div>
    <div class="mb-3 small text-danger">
        <span>为防止网络钓鱼类信息，灵活码只允许上传阿里系、字节跳动系、腾讯系等知名公司旗下的社群二维码图片。其他软件生成的二维码，暂不支持，请勿上传。</span>
        <div class="text-success">
            <span class="d-block">如有知名可信赖类型的社交软件可反馈，可增加支持，灵活码目前支持列表：</span>
            <ul>
                <li>支付宝群</li>
                <li>钉钉群</li>
                <li>微信群</li>
                <li>QQ群</li>
            </ul>
        </div>
    </div>
    <div class="mb-3 p-3 border rounded">
        <form action="img.php" method="post" enctype="multipart/form-data">
            <div class="mb-3 custom-file">
                <input class="custom-file-input" type="file" name="qrcode_img" id="qrcode_img"
                       accept="image/jpeg,image/png" required>
                <label class="custom-file-label" for="qrcode_img" data-browse="浏览">二维码图片</label>
            </div>
            <div class="mb-3 input-group">
                <div class="input-group-prepend">
                    <label class="sr-only" for="qrcode_title">灵活码标题</label>
                    <span class="input-group-text">灵活码标题</span>
                </div>
                <input class="form-control" type="text" name="qrcode_title" id="qrcode_title" value="默认标题"
                       placeholder="灵活码标题" required>
            </div>
            <div class="mb-3 input-group">
                <div class="input-group-prepend">
                    <label class="sr-only" for="qrcode_description">灵活码介绍</label>
                    <span class="input-group-text">灵活码介绍</span>
                </div>
                <input class="form-control" type="text" name="qrcode_description" id="qrcode_description" value="默认介绍"
                       placeholder="灵活码介绍" required>
            </div>
            <div class="small text-danger">请务必牢记这个密码，密码是您唯一调整灵活码信息的方式，相同的二维码不能重复提交。如忘记管理密码，需要通过验证找回密码，请联系管理。</div>
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
    <div class="mb-3 small text-success">
        <span class="mb-2 d-block small">一句话说明，本站提供的二维码图片X，可以是微信群二维码图片A的内容，也可以是微信群二维码图片B的内容，可以一直维护更新，累计节约成本。</span>
        <span class="mb-2 d-block small">简单的具体说明：一张微信群A的二维码图片，发布到一个固定的场所后，这个A群二维码图片发布后不能再修改了（如打印出来或者网络社区帖子中），这个A群满了以后，需要创建B群，还需要再重新打印微信群B的二维码图片，会产出重复成本（如重新打印、重新宣传、重新张贴、重新发布社区帖子等时间和金钱成本）或者成本浪费（宣传效果过量造成的各种浪费）不再过多介绍。</span>
        <span class="mb-2 d-block small">灵活码可以解决：创建微信群A后，通过本工具将微信群A生成的二维码图片上传，额外可以添加灵活码标题和灵活码文字介绍，提交后获得新的灵活码图片X，由灵活码图片X替代原本的微信群A的二维码，即可进行宣传，微信群A人数满了以后，您将微信群B生成的二维码图片通过灵活码维护页面，修改灵活码图片X的信息，灵活码X的内容会更新为修改后的微信群B的二维码图片，之前宣传内容随之更新，至此，您无需再进行重复宣传微信群B的二维码图片，节约多种成本。</span>
    </div>
</div>
<div>
    <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
    <script src="/static/js/jt_qrcode.min.js"></script>
</div>

<?php
require_once '../footer.php';
?>

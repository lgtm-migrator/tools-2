<?php

if ($_POST) {
    require_once "photo_info.php";
    die();
}

define('title', '照片信息解析');
require_once '../header.php';
?>
    <link rel="stylesheet" href="/photo_info/css/photo_info.css">

    <div class="container mt-5" id="jt_container">
        <div class="mb-3 d-flex justify-content-center">
            <div class="custom-file col-11 col-sm-8">
                <input class="custom-file-input" type="file" id="photo_input"
                       accept="image/jpeg,image/tiff" multiple>
                <label class="custom-file-label text-truncate text-info border border-info" for="photo_input"
                       id="photo_label" data-browse="浏览">上传您的照片</label>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <a href="javascript:" class="mx-2 btn btn-outline-success" id="photo_submit" style="z-index: 1;">
                <i class="fas fa-image">&nbsp;&nbsp;</i>提交</a>
        </div>
    </div>

    <div class="upload_preview sr-only" id="preview">
        <div id="upload_list_0" class="upload_list">
            <a href="javascript:" class="upload_img">
                <img id="uploadImage_0" class="upload_image" src="">
            </a>
        </div>
    </div>

    <div>
        <?php require_once dirname(dirname(__FILE__)) . "/javascript.php"; ?>
        <script src="/photo_info/js/photo_info.js"></script>
    </div>

<?php
require_once '../footer.php';
?>
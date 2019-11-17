<?php

if ($_POST) {
    require_once "photo_info.php";
    die();
}

define('title', '照片信息解析');
require_once '../header.php';
?>
    <div class="container mt-5" id="jt_container">
        <div class="form-row justify-content-center">
            <div class="form-group col-11 col-sm-8">
                <label class="custom-file-label" for="photo_input" data-browse="提交照片">照片</label>
                <input class="form-control form-control-file fa text-center" type="file" id="photo_input"
                       accept="image/jpeg,image/tiff" placeholder="原始图片&nbsp;&nbsp;&#xf03e;&nbsp;&nbsp;&#xf1c5;">
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <a href="javascript:" class="mx-2 btn btn-success" id="phone_name_search_btn">
                <i class="fas fa-image">&nbsp;&nbsp;</i>提交图片</a>
        </div>
    </div>


    <div>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap-modal-js@1.0.1/dist/bootstrap-modal-js.min.js"></script>
        <script src="/tools/photo_info/js/photo_info.js"></script>
    </div>

<?php
require_once '../footer.php';
?>
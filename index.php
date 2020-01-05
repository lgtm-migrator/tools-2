<?php
define('title', '在线小工具');
require_once './header.php';
?>
<link rel="stylesheet" href="tools_static/css/index.min.css">

<div class="container" id="jt_index">
    <div class="mb-3 btn-toolbar justify-content-center" id="jt_category">
        <div class="btn-group btn-group-sm">
            <button type="button" class="btn border btn-outline-secondary active" id="all">所有</button>
            <button type="button" class="btn border btn-outline-secondary" id="enquiry">查询</button>
            <button type="button" class="btn border btn-outline-secondary" id="other">其他</button>
        </div>
    </div>
    <div class="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 tab-content"
         id="jt_list">
        <div class="col mb-3 tab_pane-enquiry tab-pane fade active show">
            <div class="card h-100">
                <div class="d-flex justify-content-between card-header py-1 py-md-2">
                    <a class="text-success font-weight-bold text-decoration-none category_link"
                       href="/phone_number/index.php" title="公共电话本" style="font-size: 95%;">
                        <i class="mr-1 fa-fw fas fa-address-book"></i>公共电话本</a>
                    <div class="category_name text-muted small">[&nbsp;查询&nbsp;]</div>
                </div>
                <div class="card-body">
                    <p class="card-desc card-text small">公开的电话号码本。</p>
                </div>
            </div>
        </div>
        <div class="col mb-3 tab_pane-other tab-pane fade active show">
            <div class="card h-100">
                <div class="d-flex justify-content-between card-header py-1 py-md-2">
                    <a class="text-success font-weight-bold text-decoration-none category_link"
                       href="/photo_info/index.php" title="照片详情信息" style="font-size: 95%;">
                        <i class="mr-1 fa-fw fas fa-image"></i>照片详情信息</a>
                    <div class="category_name text-muted small">[&nbsp;其他&nbsp;]</div>
                </div>
                <div class="card-body">
                    <p class="card-desc card-text small">查看照片的EXIF信息。</p>
                </div>
            </div>
        </div>
    </div>

</div>

<div>
    <?php require_once "javascript.php"; ?>
    <script src="tools_static/js/index.min.js"></script>
</div>

<?php
require_once './footer.php';
?>

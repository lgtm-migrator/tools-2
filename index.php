<?php
define('title', '在线小工具');
require_once './header.php';
?>
    <div class="container" id="jt_index">
        <div id="jt_category"></div>

        <div class="d-flex flex-wrap" id="jt_list">
            <div class="card mr-2 mb-2">
                <div class="d-flex justify-content-between card-header px-4 py-2">
                    <a class="text-success font-weight-bold" id="phoneNumber" href="/phone_number/index.php"
                       title="公共电话本">公共电话本</a>
                    <div class="category text-muted">[&nbsp;查询&nbsp;]</div>
                </div>
                <p class="card-desc card-text p-2">公开的电话号码本。</p>
            </div>

            <div class="card mr-2 mb-2">
                <div class="d-flex justify-content-between card-header px-4 py-2">
                    <a class="text-success font-weight-bold" id="phoneNumber" href="/photo_info/index.php"
                       title="照片详情信息">照片详情信息</a>
                    <div class="category text-muted">[&nbsp;查询&nbsp;]</div>
                </div>
                <p class="card-desc card-text p-2">查看照片的EXIF信息。</p>
            </div>

        </div>

    </div>

    <div>
        <?php require_once "javascript.php"; ?>
    </div>

<?php
require_once './footer.php';
?>
<?php
define('title', '在线小工具');
require_once './header.php';
?>
    <div class="container" id="jt_index">
        <div id="jt_category"></div>

        <div class="d-flex flex-wrap no-gutters" id="jt_list">
            <div class="col-12 col-md-8 col-lg-3 card mr-2 mb-3">
                <div class="d-flex justify-content-between card-header px-4 py-2">
                    <a class="text-success font-weight-bold" id="phoneNumber" href="/phone_number/index.php"
                       title="公共电话本" style="font-size: 95%;">公共电话本</a>
                    <div class="category text-muted small">[&nbsp;查询&nbsp;]</div>
                </div>
                <p class="card-desc card-text p-2 small">公开的电话号码本。</p>
            </div>

            <div class="col-12 col-md-8 col-lg-3 card mr-2 mb-3">
                <div class="d-flex justify-content-between card-header px-4 py-2">
                    <a class="text-success font-weight-bold" id="phoneNumber" href="/photo_info/index.php"
                       title="照片详情信息" style="font-size: 95%;">照片详情信息</a>
                    <div class="category text-muted small">[&nbsp;查询&nbsp;]</div>
                </div>
                <p class="card-desc card-text p-2 small">查看照片的EXIF信息。</p>
            </div>

        </div>

    </div>

    <div>
        <?php require_once "javascript.php"; ?>
    </div>

    <script>
        let wenjuan = "<div class='text-center'><b>" +
            "<a href='https://www.wenjuan.com/s/jMjUfeE/' target='_blank' class='text-success'>网站功能反馈</a>" +
            "</b></div>";

        bootstrapModalJs("", wenjuan, "", "sm", true);
    </script>

<?php
require_once './footer.php';
?>
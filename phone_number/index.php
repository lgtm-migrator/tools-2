<?php
if ($_POST) {
    require_once "phone_number.php";
    die();
}

define('title', '公共电话本');
require_once '../header.php';
?>
    <link rel="stylesheet" href="/static/css/phone_number.min.css">

    <div class="container mt-5" id="jt_container">
        <div class="form-row justify-content-center">
            <div class="form-group col-11 col-sm-10 col-md-8 col-lg-6">
                <label class="sr-only" for="phone_number_input">单位名称、简称或者号码</label>
                <input class="form-control fas text-center" type="search" id="phone_number_input" minlength="2"
                       maxlength="15"
                       placeholder="单位名称、简称或者号码&nbsp;&nbsp;&#xf015;&nbsp;&nbsp;&#xf095;&nbsp;&nbsp;&#xf3cd;">
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <a href="javascript:" class="mx-2 btn btn-success" id="phone_name_search_btn">
                <i class="fa-fw fas fa-home"></i>按名称搜索</a>
            <a href="javascript:" class="mx-2 btn btn-danger" id="phone_number_search_btn">
                <i class="fa-fw fas fa-phone"></i>
                <i class="fa-fw fas fa-mobile-alt"></i>按号码搜索</a>
        </div>
    </div>

    <div class="container mt-5 d-none" id="phone_search_result">
        <span class="small font-weight-bold text-success">查询结果</span>
        <div class="container mt-1 pt-3" id="number_list"></div>
    </div>
    <div class="container mt-5 text-center d-none" id="add">
        <a href="javascript:" class="my-2 btn btn-sm btn-outline-primary" id="add_new_number">我要添加新号码</a>
    </div>

    <div class="container mt-5">
        <div class="px-4 py-3 border border-info rounded fade d-none" id="add_phone_number_form">
            <div class="container mb-5 mb-sm-4 mb-md-3 sr-only" id="regional">
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="regional_xm" name="regional" value="xm" class="custom-control-input"
                           checked>
                    <label class="custom-control-label" for="regional_xm">邢煤</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="regional_gq" name="regional" value="gq" class="custom-control-input"
                           disabled>
                    <label class="custom-control-label" for="regional_gq">葛泉</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="regional_dp" name="regional" value="dp" class="custom-control-input"
                           disabled>
                    <label class="custom-control-label" for="regional_dp">东庞</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="regional_xdw" name="regional" value="xdw" class="custom-control-input"
                           disabled>
                    <label class="custom-control-label" for="regional_xdw">显德旺</label>
                </div>
            </div>
            <div class="my-2 text-center" id="number_submit">
                <button class="btn btn-primary" id="phone_number_submit">提交新号码</button>
            </div>
        </div>
        <div class="text-right" id="number_stored"></div>
    </div>

    <div>
        <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
        <script src="/static/js/phone_number.min.js"></script>
    </div>
<?php
require_once '../footer.php';
?>

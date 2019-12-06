<?php

if ($_POST) {
    require_once "phone_number.php";
    die();
}

define('title', '公共电话本');
require_once '../header.php';
?>
    <link rel="stylesheet" href="/phone_number/css/phone_number.min.css">

    <div class="container mt-5" id="jt_container">
        <div class="form-row justify-content-center">
            <div class="form-group col-11 col-sm-10 col-md-8 col-lg-6">
                <label class="sr-only" for="phone_number_input">单位名称、简称或者号码</label>
                <input class="form-control fa text-center" type="search" id="phone_number_input" minlength="2"
                       maxlength="15" autofocus="autofocus"
                       placeholder="单位名称、简称或者号码&nbsp;&nbsp;&#xf015;&nbsp;&nbsp;&#xf095;&nbsp;&nbsp;&#xf3cd;">
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <a href="javascript:" class="mx-2 btn btn-success" id="phone_name_search_btn">
                <i class="fa fa-home">&nbsp;&nbsp;</i>按名称搜索</a>
            <a href="javascript:" class="mx-2 btn btn-danger" id="phone_number_search_btn">
                <i class="fa fa-phone">&nbsp;&nbsp;</i>
                <i class="fa fa-mobile-alt">&nbsp;&nbsp;</i>按号码搜索</a>
        </div>
    </div>

    <div class="container mt-4" id="phone_search_result">
        <span class="font-weight-bold text-monospace text-success" style="font-size: 85%;">查询结果</span>
        <div class="mt-1 px-4 pt-3 border border-info rounded" id="number_list"></div>
        <a href="javascript:" class="my-2 btn btn-sm btn-outline-primary" id="add_new_number">我要添加新号码</a>
    </div>

    <div class="container mt-3">
        <div class="p-4 border border-info rounded fade d-none" id="add_phone_number_form">
            <div class="mb-5 mb-sm-4 mb-md-3 sr-only" id="regional">
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
            <div class="my-2 d-flex justify-content-center" id="number_submit">
                <button class="btn btn-lg btn-primary d-flex" id="phone_number_submit">提交新号码</button>
            </div>
        </div>
        <span class="float-right" id="number_stored"></span>
    </div>

    <div>
        <?php require_once dirname(dirname(__FILE__)) . "/javascript.php"; ?>
        <script src="/phone_number/js/phone_number.min.js"></script>
    </div>


<?php
require_once '../footer.php';
?>
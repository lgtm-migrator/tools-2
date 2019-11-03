<?php

if ($_POST) {
    require_once "phone_number.php";
    die();
}

define('title', '电话号码查询');
require_once '../header.php';
?>
    <div id="jt_content">

        <div class="container mt-5" id="jt_container">
            <div class="form-row justify-content-center">
                <div class="form-group col-11 col-sm-8">
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
            <span class="font-weight-bold text-success">查询结果</span>
            <div class="mt-1 p-4 border border-info rounded" id="number_list"></div>
            <a href="javascript:" class="my-2 btn btn-sm btn-outline-primary" id="add_new_number">我要添加新号码</a>
        </div>

        <div class="container mt-3">
            <div class="p-4 border border-info rounded fade d-none" id="add_phone_number_form">
                <div class="my-2 d-flex justify-content-center" id="number_submit">
                    <button class="btn btn-lg btn-primary" id="phone_number_submit">提交新号码</button>
                </div>
            </div>
            <span class="float-right" id="number_stored"></span>
        </div>

    </div>


<?php
require_once '../footer.php';
?>
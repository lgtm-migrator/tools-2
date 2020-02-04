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
    <div id="search_number_tools">
        <div class="form-row justify-content-center">
            <div class="mb-3 input-group input-group-lg col-11 col-sm-10 col-md-8 col-lg-6">
                <div class="input-group-prepend">
                    <button type="button" class="btn btn-light border-secondary" title="区域" data-toggle="dropdown" id="search_regional">
                        <i class="text-muted fa-fw fas fa-map-signs"></i>
                    </button>
                    <div class="dropdown-menu min-w-rem-7 shadow text-center" id="search_regional_dropdown_menu">
                        <div class="btn-group-vertical btn-group-toggle" data-toggle="buttons">
                            <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-danger" for="search_regional_dp">
                                <input type="radio" name="search_regional" id="search_regional_dp" value="dp">东庞</label>
                            <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-danger" for="search_regional_gq">
                                <input type="radio" name="search_regional" id="search_regional_gq" value="gq">葛泉</label>
                            <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-danger" for="search_regional_xdw">
                                <input type="radio" name="search_regional" id="search_regional_xdw" value="xdw">显德汪</label>
                            <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-danger" for="search_regional_xm">
                                <input type="radio" name="search_regional" id="search_regional_xm" value="xm">邢煤</label>
                            <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-danger" for="search_regional_xd">
                                <input type="radio" name="search_regional" id="search_regional_xd" value="xd">邢东</label>
                            <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-danger" for="search_regional_zc">
                                <input type="radio" name="search_regional" id="search_regional_zc" value="zc">章村</label>
                        </div>
                        <div class="dropdown-divider border-secondary"></div>
                        <div class="btn-group-vertical">
                            <button class="min-w-rem-9 border-0 rounded-0 btn btn-outline-success" type="button" id="add_new_number">
                                <i class="fas fa-plus-circle">&nbsp;添加新的号码</i></button>
                        </div>
                    </div>
                </div>
                <label class="sr-only" for="phone_number_input">单位名称、简称或者号码</label>
                <input class="form-control border-secondary fas text-center" type="search" id="phone_number_input"
                       minlength="3" maxlength="10"
                       placeholder="&nbsp;&nbsp;&#xf015;&nbsp;&nbsp;&#xf095;&nbsp;&nbsp;&#xf3cd;">
            </div>
        </div>
        <div class="d-flex justify-content-center" id="search_btn">
            <a href="javascript:" class="mx-2 btn btn-success name">
                <i class="fa-fw fas fa-home"></i>按名称搜索</a>
            <a href="javascript:" class="mx-2 btn btn-danger number">
                <i class="fa-fw fas fa-phone"></i>
                <i class="fa-fw fas fa-mobile-alt"></i>按号码搜索</a>
        </div>
    </div>

    <div class="mt-5 d-none" id="search_result">
        <span class="small font-weight-bold text-success">查询结果</span>
        <div class="mt-1 pt-3" id="search_result_number_list"></div>
    </div>

    <div class="mt-5 px-4 py-3 text-center border border-info rounded fade d-none" id="add_number_form">
        <div class="mb-3 mb-sm-4 mb-md-4 btn-group btn-group-sm btn-group-toggle" data-toggle="buttons" id="add_regional">
            <label class="btn btn-outline-secondary" for="add_regional_dp">
                <input type="radio" name="add_regional" id="add_regional_dp" value="dp">东庞</label>
            <label class="btn btn-outline-secondary" for="add_regional_gq">
                <input type="radio" name="add_regional" id="add_regional_gq" value="gq">葛泉</label>
            <label class="btn btn-outline-secondary" for="add_regional_xdw">
                <input type="radio" name="add_regional" id="add_regional_xdw" value="xdw">显德汪</label>
            <label class="btn btn-outline-secondary" for="add_regional_xm">
                <input type="radio" name="add_regional" id="add_regional_xm" value="xm">邢煤</label>
            <label class="btn btn-outline-secondary" for="add_regional_xd">
                <input type="radio" name="add_regional" id="add_regional_xd" value="xd">邢东</label>
            <label class="btn btn-outline-secondary" for="add_regional_zc">
                <input type="radio" name="add_regional" id="add_regional_zc" value="zc">章村</label>
        </div>
        <a href="javascript:" class="my-2 btn btn-primary" id="add_number_submit">提交新号码</a>
        <div class="text-right" id="number_stored"></div>
    </div>
</div>


<div class="d-none">
    <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
    <script src="/static/js/phone_number.min.js"></script>
</div>
<?php
require_once '../footer.php';
?>

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
        <div class="mb-3 input-group col-11 col-sm-10 col-md-8 col-lg-6">
            <div class="input-group-prepend">
                <button type="button" class="btn btn-light border-secondary dropdown-toggle" id="regional">邢煤</button>
                <div class="dropdown-menu min-w-rem-7 text-center" id="regional_list">
                    <span class="p-0 dropdown-item">
                        <a class="py-1 d-block small btn-outline-secondary text-decoration-none" href="javascript:">东庞</a>
                    </span>
                    <span class="p-0 dropdown-item">
                        <a class="py-1 d-block small btn-outline-secondary text-decoration-none" href="javascript:">葛泉</a>
                    </span>
                    <span class="p-0 dropdown-item">
                        <a class="py-1 d-block small btn-outline-secondary text-decoration-none" href="javascript:">显德汪</a>
                    </span>
                    <span class="p-0 dropdown-item">
                        <a class="py-1 d-block small btn-outline-secondary text-decoration-none" href="javascript:">邢煤</a>
                    </span>
                    <span class="p-0 dropdown-item">
                        <a class="py-1 d-block small btn-outline-secondary text-decoration-none" href="javascript:">邢东</a>
                    </span>
                    <span class="p-0 dropdown-item">
                        <a class="py-1 d-block small btn-outline-secondary text-decoration-none" href="javascript:">章村</a>
                    </span>
                    <div class="dropdown-divider border-secondary" role="separator"><span class="sr-only">分隔符</span></div>
                    <span class="p-0 dropdown-item">
                        <a class="py-1 d-block small btn-outline-success text-decoration-none" href="javascript:">添加新的号码</a>
                    </span>
                </div>
            </div>
            <label class="sr-only" for="phone_number_input">单位名称、简称或者号码</label>
            <input class="form-control border-secondary fas text-center" type="search" id="phone_number_input"
                   minlength="3" maxlength="10"
                   placeholder="单位名称、简称或者号码&nbsp;&nbsp;&#xf015;&nbsp;&nbsp;&#xf095;&nbsp;&nbsp;&#xf3cd;">
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

<div class="container mt-5 d-none" id="phone_search_result">
    <span class="small font-weight-bold text-success">查询结果</span>
    <div class="mt-1 pt-3" id="number_list"></div>
</div>
<div class="container mt-5 text-center d-none" id="add">
    <a href="javascript:" class="my-2 btn btn-sm btn-outline-primary" id="add_new_number">我要添加新号码</a>
</div>

<div class="container mt-5">
    <div class="px-4 py-3 border border-info rounded fade d-none" id="add_phone_number_form">
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

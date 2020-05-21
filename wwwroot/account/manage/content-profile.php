<?php
if (!defined('SITE_HEAD')) die();
?>
<div class="card-body">
  <div class="mb-2 text-muted font-weight-bold">基本信息</div>
  <div class="ml-2">
    <div class="form-group form-row">
      <div class="col-4 col-sm-3 col-md-2">
        <label class="mb-0 px-2 px-md-3 px-lg-4 rounded border min-w-100 text-align-last col-form-label-sm" for="user_name">用户名</label>
      </div>
      <div class="col-8 col-sm-9 col-md-10">
        <input class="border-0 form-control form-control-sm form-control-plaintext disabled" type="text" id="user_name" value="abc123">
      </div>
    </div>

    <div class="form-group form-row">
      <div class="col-4 col-sm-3 col-md-2">
        <label class="mb-0 px-2 px-md-3 px-lg-4 rounded border min-w-100 text-align-last col-form-label-sm" for="nick_name">昵称</label>
      </div>
      <div class="col-8 col-sm-9 col-md-10">
        <input class="border-0 form-control form-control-sm form-control-plaintext disabled" type="text" id="nick_name" value="杰格网用户">
      </div>
    </div>

    <div class="form-group form-row">
      <div class="col-4 col-sm-3 col-md-2">
        <div class="mb-0 px-2 px-md-3 px-lg-4 rounded border min-w-100 text-align-last col-form-label-sm">性别</div>
      </div>
      <div class="col-8 col-sm-9 col-md-10 d-flex align-items-center">
        <div class="d-flex justify-content-between justify-content-sm-start">
          <div class="mr-2 mr-sm-3 custom-control custom-radio">
            <input class="custom-control-input" type="radio" id="user_gender_x" name="user_gender" value="x">
            <label class="custom-control-label" for="user_gender_x">保密</label>
          </div>
          <div class="mr-2 mr-sm-3 custom-control custom-radio">
            <input class="custom-control-input" type="radio" id="user_gender_f" name="user_gender" value="f">
            <label class="custom-control-label" for="user_gender_f">女</label>
          </div>
          <div class="mr-2 mr-sm-3 custom-control custom-radio">
            <input class="custom-control-input" type="radio" id="user_gender_m" name="user_gender" value="m">
            <label class="custom-control-label" for="user_gender_m">男</label>
          </div>
        </div>
      </div>
    </div>

  </div>
  <hr class="my-4 border-secondary border-top-dotted">
  <div class="mb-2 text-muted font-weight-bold">社交信息</div>
</div>

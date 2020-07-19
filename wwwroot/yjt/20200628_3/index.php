<?php
define('title', '河北省2020年应急安全知识网络竞赛');
require_once dirname(dirname(__DIR__)) . '/header.php';
?>
<link rel="stylesheet" href="/static/css/yjt/20200628_3/index.min.css">
<div class="mt-5 container-fluid">
  <div class="container px-0">
    <div class="px-1 btn-group d-flex text-nowrap" style="overflow-x: auto;" id="categoryList">
      <input type="radio" class="btn-check" name="categories" id="categories_Public" autocomplete="off">
      <label class="btn btn-outline-secondary" for="categories_Public" data-question="QUESTION_BANK1">公共安全</label>
      <input type="radio" class="btn-check" name="categories" id="categories_Chemicals" autocomplete="off">
      <label class="btn btn-outline-secondary" for="categories_Chemicals" data-question="QUESTION_BANK2">自然灾害防范</label>
      <input type="radio" class="btn-check" name="categories" id="categories_mine" autocomplete="off">
      <label class="btn btn-outline-secondary" for="categories_mine" data-question="QUESTION_BANK3">危险品化学</label>
      <input type="radio" class="btn-check" name="categories" id="categories_Limited" autocomplete="off">
      <label class="btn btn-outline-secondary" for="categories_Limited" data-question="QUESTION_BANK4">有限空间作业</label>
    </div>
  </div>
  <div class="mt-5 mb-3 container px-2 py-2 rounded border">
    <span>参考答案：</span>
    <div class="d-" id="tip">
      <span class="text-info" id="category">题目类别</span>
      <span>题目数量为</span>
      <span class="text-primary" id="quantity">500</span>
      <span>道题</span>
      <hr>
    </div>
    <div id="answer"></div>
  </div>
</div>

<div class="d-none">
  <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
  <script src="/static/js/yjt/20200628_3/index.min.js"></script>
</div>
<?php
require_once dirname(dirname(__DIR__)) . '/footer.php';
?>

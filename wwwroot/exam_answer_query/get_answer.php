<?php
if ($_POST) {
  require_once dirname(dirname(__DIR__)) . '/functions/get_result.php';
  exit();
} elseif ($_GET) {
  exit('当前不认为需要支持此方式进行查询');
}

define('title', '获取参考');
require_once dirname(__DIR__) . '/header.php';
?>
<link rel="stylesheet" href="/static/css/exam_answer_query/get_answer.min.css">
<div class="mt-5 container-fluid">
  <div class="mt-5 py-4 container rounded border">
    <div class="mb-3 g-0 input-group">
      <label class="input-group-text" for="mode">访问模式 MODE</label>
      <select class="form-select" id="mode">
        <optgroup label="基础功能">
          <option value="exercise" selected>逐题</option>
        </optgroup>
        <optgroup label="高级功能（当前不可用）" disabled>
          <option value="view">查阅</option>
          <option value="exam">测试</option>
        </optgroup>
      </select>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
      <div class="mb-3">
        <div class="input-group">
          <label class="input-group-text" for="le_id">LE_ID</label>
          <input class="form-control" type="text" id="le_id" placeholder="LE_ID">
        </div>
      </div>
      <div class="mb-3">
        <div class="input-group">
          <label class="input-group-text" for="token_le_id">TOKEN_LE_ID</label>
          <input class="form-control" type="text" id="token_le_id" placeholder="TOKEN_LE_ID">
        </div>
      </div>
      <div class="mb-3">
        <div class="input-group">
          <label class="input-group-text" for="tid">TID</label>
          <input class="form-control" type="text" id="tid" placeholder="TID">
        </div>
      </div>
      <div class="mb-3">
        <div class="input-group">
          <label class="input-group-text" for="pid">PID</label>
          <input class="form-control" type="text" id="pid" placeholder="试卷编号">
        </div>
      </div>
    </div>
    <div class="text-center">
      <button class="py-2 btn btn-sm btn-secondary" type="button" id="get_answer">抓取参考信息到服务器</button>
    </div>
  </div>
  <div class="mb-3 pt-5 d-flex justify-content-center flex-column align-items-center">
    <div class="px-4 py-2 border border-secondary shadow rounded-lg d-flex align-items-center user-select-none"
         id="crawlStatus" data-toggle="collapse" data-target="#help_color_circle">
      <span>抓取状态：</span>
      <i class="mx-2 text-black-50 fa-lg fas fa-circle"></i>
    </div>
  </div>
  <div class="collapse" id="help_color_circle">
    <div class="d-flex justify-content-center">
      <div class="my-4 user-select-none" data-toggle="collapse" data-target="#help_color_circle">
        <table class="text-center table table-sm table-bordered table-info table-striped table-hover table-responsive">
          <thead>
          <tr>
            <th>图形</th>
            <th>含义</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><i class="px-4 text-dark fas fa-circle"></i></td>
            <td class="px-3">服务器故障，不可抓取</td>
          </tr>
          <tr>
            <td><i class="px-4 text-black-50 fas fa-circle"></i></td>
            <td class="px-3">等待抓取</td>
          </tr>
          <tr>
            <td><i class="px-4 text-warning fas fa-circle"></i></td>
            <td class="px-3">抓取中</td>
          </tr>
          <tr>
            <td><i class="px-4 text-primary fas fa-circle"></i></td>
            <td class="px-3">抓取故障</td>
          </tr>
          <tr>
            <td><i class="px-4 text-danger fas fa-circle"></i></td>
            <td class="px-3">抓取失败</td>
          </tr>
          <tr>
            <td><i class="px-4 text-success fas fa-circle"></i></td>
            <td class="px-3">抓取成功</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div>
    <div class="container d-flex flex-column align-items-center">
      <a class="my-2" href="./index.php" target="_blank">查询参考</a>
    </div>
  </div>
</div>

<div class="d-none">
  <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
  <script src="/static/js/exam_answer_query/get_answer.min.js"></script>
</div>

<?php
require_once dirname(__DIR__) . '/footer.php';
?>

<?php
if ($_POST) {
  require_once dirname(dirname(__DIR__)) . '/database/query_answer.php';
  exit();
} elseif ($_GET) {
  exit('当前不认为需要支持此方式进行查询');
}

define('title', '查询参考');
require_once dirname(__DIR__) . '/header.php';
?>
<link rel="stylesheet" href="/static/css/exam_answer_query/index.min.css">
<div class="mt-5 py-5 border rounded-lg container">
  <div class="mb-4 d-flex flex-column flex-sm-row">
    <div class="mx-0 mx-sm-1 mb-3 mb-sm-0 btn-group flex-fill">
      <input type="radio" class="btn-check" name="category" id="determine" autocomplete="off">
      <label class="btn btn-outline-success" for="determine">判断题</label>
    </div>
    <div class="mx-0 mx-sm-1 mb-3 mb-sm-0 btn-group flex-fill">
      <input type="radio" class="btn-check" name="category" id="single" autocomplete="off">
      <label class="btn btn-outline-primary" for="single">单项选择题</label>
    </div>
    <div class="mx-0 mx-sm-1 mb-3 mb-sm-0 btn-group flex-fill">
      <input type="radio" class="btn-check" name="category" id="multiple" autocomplete="off">
      <label class="btn btn-outline-info" for="multiple">多项选择题</label>
    </div>
  </div>
  <div class="input-group">
    <label class="input-group-text" for="answer_text">问题</label>
    <input class="form-control" type="text" id="answer_text" placeholder="查询关键字" maxlength="20" autofocus>
  </div>
  <div class="mb-4 small text-muted">
    <span class="small">提示：手机输入法支持语音输入文字。</span>
  </div>
  <div class="text-center">
    <button class="px-5 btn btn-dark" id="get_query">
      <i class="fas fa-search"></i>
      <span class="ml-1">查询</span>
    </button>
  </div>
</div>
<div class="mt-5 py-5 border rounded-lg container">
  <div class="d-flex justify-content-center row row-cols-1 row-cols-sm-3 row-cols-md-5 row-cols-lg-6 text-center">
    <div class="mb-5 mb-sm-0 d-flex flex-column align-items-center">
      <button class="px-4 py-3 rounded-circle btn btn-sm btn-outline-success fa-2x fas fa-microphone"
              type="button"></button>
      <span class="mt-1">判断题</span>
    </div>
    <div class="mb-5 mb-sm-0 d-flex flex-column align-items-center">
      <button class="px-4 py-3 rounded-circle btn btn-sm btn-outline-primary fa-2x fas fa-microphone"
              type="button"></button>
      <span class="mt-1">单选题</span>
    </div>
    <div class="mb-5 mb-sm-0 d-flex flex-column align-items-center">
      <button class="px-4 py-3 rounded-circle btn btn-sm btn-outline-info fa-2x fas fa-microphone"
              type="button"></button>
      <span class="mt-1">多选题</span>
    </div>
  </div>
</div>
<div class="mt-5">
  <div class="collapse" id="help_microphone">
    <div class="d-flex justify-content-center">
      <div class="user-select-none" data-toggle="collapse" data-target="#help_microphone">
        <table
          class="text-center table table-sm table-bordered table-secondary table-striped table-hover table-responsive">
          <thead>
          <tr>
            <th>颜色</th>
            <th>含义</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><i class="px-4 py-2 text-success fa-lg fas fa-microphone"></i></td>
            <td class="px-3 py-2">搜索判断题</td>
          </tr>
          <tr>
            <td><i class="px-4 py-2 text-primary fa-lg fas fa-microphone"></i></td>
            <td class="px-3 py-2">搜索单选题</td>
          </tr>
          <tr>
            <td><i class="px-4 py-2 text-info fa-lg fas fa-microphone"></i></td>
            <td class="px-3 py-2">搜索多选题</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="my-3 text-center">
    <a class="small text-muted text-decoration-none fas" data-toggle="collapse" href="#help_microphone">
      <i class="fas fa-question"></i>
      <span class="mx-1">语音使用说明</span>
      <i class="fas fa-question"></i>
    </a>
  </div>
</div>

<div class="d-none">
  <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
  <script src="/static/js/exam_answer_query/index.min.js"></script>
</div>

<?php
require_once dirname(__DIR__) . '/footer.php';
?>

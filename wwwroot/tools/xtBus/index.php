<?php
define('title', '公共汽车查询');
require_once dirname(dirname(__DIR__)) . "/header.php";
?>
<link rel="stylesheet" href="/static/css/xtBus/index.min.css">

<div class="container" id="jt_container">
  <div id="bus">
    <div class="font-weight-bolder text-text-dodgerblue" id="busArea"></div>
    <div></div>
  </div>
</div>
<div class="container mt-5" id="jt_container">
  <div class="mb-3 d-flex justify-content-around">
    <a href="init.php" target="_blank">init</a>
    <a href="line.php" target="_blank">line</a>
    <a href="query.php" target="_blank">query</a>
    <a href="station.php" target="_blank">station</a>
  </div>
  <div class="mb-3 d-flex justify-content-around" id="xtBus_btn">
    <button type="button" class="btn btn-sm btn-outline-secondary" data-type="init">init</button>
    <button type="button" class="btn btn-sm btn-outline-secondary" data-type="line">line</button>
    <button type="button" class="btn btn-sm btn-outline-secondary" data-type="query">query</button>
    <button type="button" class="btn btn-sm btn-outline-secondary" data-type="station">station</button>
  </div>
  <div>
    <div class="card">
      <div class="card-header">
        <div class="nav">
          <div class="btn-group">
            <button type="button" class="btn btn-outline-secondary active" data-toggle="tab" data-target="#lines">查询线路</button>
            <!--          <input type="radio" class="btn-check" name="btn-query-lines" id="btn-query-lines">-->
            <!--          <label class="btn btn-outline-secondary" for="btn-query-lines" data-toggle="tab" data-target="#lines">查询线路</label>-->
            <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
              <span class="sr-only">切换下拉菜单</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-right">
              <li><a class="dropdown-item" href="line.php" target="_blank" rel="noreferrer nofollow">所有线路</a></li>
            </ul>
          </div>
          <div class="btn-group">
            <button type="button" class="btn btn-outline-secondary" data-toggle="tab" data-target="#stations">查询站牌</button>
            <!--          <input type="radio" class="btn-check" name="btn-query-stations" id="btn-query-stations">-->
            <!--          <label class="btn btn-outline-secondary" for="btn-query-stations" data-toggle="tab" data-target="#stations">查询站牌</label>-->
            <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
              <span class="sr-only">切换下拉菜单</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-right">
              <li><a class="dropdown-item" href="station.php" target="_blank" rel="noreferrer nofollow">所有站牌</a></li>
            </ul>
          </div>
        </div>
<!--        <nav class="nav nav-pills card-header-pills justify-content-evenly">-->
<!--          <span class="nav-link border border-secondary active" data-toggle="tab" data-target="#lines">查询线路</span>-->
<!--          <span class="nav-link border border-secondary" data-toggle="tab" data-target="#stations">查询站牌</span>-->
<!--        </nav>-->
      </div>
      <div class="card-body">
        <div class="tab-content">
          <div class="tab-pane active" id="lines">
            <div>所有线路</div>
            <div class="input-group">
              <span class="input-group-text">线路数字</span>
              <input type="text" class="form-control" placeholder="例如：3" aria-label="1">
              <span class="input-group-text">路车</span>
            </div>
          </div>
          <div class="tab-pane" id="stations">
            <div>所有站牌</div>
            <div class="input-group">
              <span class="input-group-text">站牌名称</span>
              <input type="text" class="form-control" placeholder="例如：人民医院" aria-label="2">
              <span class="input-group-text">站点</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer"></div>
    </div>
    <div class="mb-2">
    </div>
    <div class="mb-2">
    </div>
  </div>
</div>

<div class="d-none">
  <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
  <script src="/static/js/xtBus/index.min.js"></script>
  <script src="/static/js/xtBus/init.min.js"></script>
  <script src="/static/js/xtBus/line.min.js"></script>
  <script src="/static/js/xtBus/query.min.js"></script>
  <script src="/static/js/xtBus/station.min.js"></script>
</div>
<?php
require_once dirname(dirname(__DIR__)) . "/footer.php";
?>

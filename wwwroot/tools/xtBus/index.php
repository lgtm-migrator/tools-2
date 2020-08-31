<?php
define('title', '公共汽车查询');
require_once dirname(dirname(__DIR__)) . "/header.php";
?>
<link rel="stylesheet" href="/static/css/xtBus/index.min.css">

<div class="container" id="jt_container">
  <div id="bus">
    <div class="font-weight-bolder text-text-dodgerblue" id="busArea"></div>
    <div></div>
    <div class="card">
      <div class="card-header">
        <div class="nav justify-content-between justify-content-sm-around justify-content-md-evenly" id="busQuery">
          <div class="btn-group dropdown">
            <button class="btn btn-outline-secondary active" type="button" role="tab" data-target="#lines" aria-controls="lines" aria-selected="true" aria-pressed="true">查询线路</button>
            <button class="btn btn-outline-dark dropdown-toggle dropdown-toggle-split" type="button" data-toggle="dropdown" aria-expanded="true">
              <span class="sr-only">切换下拉菜单</span>
            </button>
            <div class="p-3 dropdown-menu dropdown-menu-right">
              <div class="mb-1 text-muted small">
                <span class="small">如果要查看所有公交线路，请点击下面的链接按钮进行查看。</span>
              </div>
              <a class="d-block text-center btn btn-sm btn-secondary" href="line.php" target="_blank">所有线路</a>
            </div>
          </div>
          <div class="btn-group dropdown">
            <button class="btn btn-outline-secondary" type="button" role="tab" data-target="#stations" aria-controls="stations" aria-selected="false" aria-pressed="false">查询站牌</button>
            <button class="btn btn-outline-dark dropdown-toggle dropdown-toggle-split" type="button" data-toggle="dropdown" aria-expanded="false">
              <span class="sr-only">切换下拉菜单</span>
            </button>
            <div class="p-3 dropdown-menu dropdown-menu-right">
              <div class="mb-1 text-muted small">
                <span class="small">如果要查看所有站牌名称，请点击下面的链接按钮进行查看。</span>
              </div>
              <a class="d-block text-center btn btn-sm btn-secondary" href="station.php" target="_blank">所有站牌</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="tab-content">
          <div class="tab-pane fade show active" id="lines">
            <div class="input-group">
              <span class="input-group-text">线路数字</span>
              <input type="number" class="form-control form-control-lg" placeholder="例如：3" id="getRelatedLines" aria-label="线路名称">
              <span class="input-group-text">路车</span>
            </div>
          </div>
          <div class="tab-pane fade" id="stations">
            <div class="input-group">
              <span class="input-group-text">站牌名称</span>
              <input type="text" class="form-control form-control-lg" placeholder="例如：人民医院" id="getRelatedStations" aria-label="站牌名称">
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer"></div>
    </div>
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

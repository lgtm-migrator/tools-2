<?php
define('title', '邢台公交路线实时查询');
define('descriptionContent', '提供实时查询邢台公交车路线信息、站牌信息、倒车转乘路线信息。');
define('keywordsContent', '公交车实时查询,公交车实时路线,公交车查询,邢台公交,实时公交查询,实时线路查询,掌上公交');
require_once dirname(dirname(__DIR__)) . "/header.php";
?>
<link rel="stylesheet" href="/static/css/xtBus/index.min.css">

<div class="container" id="jt_container">
  <div id="bus">
    <div class="py-3 font-weight-bolder text-text-dodgerblue" id="busArea"></div>
    <div class="card">
      <div class="card-header">
        <div class="nav justify-content-between justify-content-sm-around justify-content-md-evenly" id="busQuery">
          <div class="btn-group btn-group-sm dropdown">
            <button class="btn btn-outline-primary active" type="button" role="tab" data-target="#lines"
                    aria-controls="lines" aria-selected="true" aria-pressed="true"><i class="mr-1 fas fa-bus"></i>查线路
            </button>
            <button class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" type="button"
                    data-toggle="dropdown" aria-expanded="true">
              <span class="sr-only">切换下拉菜单</span>
            </button>
            <div class="p-3 dropdown-menu dropdown-menu-right">
              <div class="mb-1 text-muted small">
                <span class="small">如果要查看所有公交线路，请点击下面的链接按钮进行查看。</span>
              </div>
              <a class="d-block text-center btn btn-sm btn-primary" href="line.php" target="_blank">所有线路</a>
            </div>
          </div>
          <div class="btn-group btn-group-sm dropdown">
            <button class="btn btn-outline-info" type="button" role="tab" data-target="#stations"
                    aria-controls="stations" aria-selected="false" aria-pressed="false"><i class="mr-1 fas fa-sign"></i>查站牌
            </button>
            <button class="btn btn-outline-info dropdown-toggle dropdown-toggle-split" type="button"
                    data-toggle="dropdown" aria-expanded="false">
              <span class="sr-only">切换下拉菜单</span>
            </button>
            <div class="p-3 dropdown-menu dropdown-menu-right">
              <div class="mb-1 text-muted small">
                <span class="small">如果要查看所有站牌名称，请点击下面的链接按钮进行查看。</span>
              </div>
              <a class="d-block text-center btn btn-sm btn-info" href="station.php" target="_blank">所有站牌</a>
            </div>
          </div>
          <div class="btn-group btn-group-sm dropdown">
            <button class="btn btn-outline-danger" type="button" role="tab" data-target="#transfer"
                    aria-controls="transfer" aria-selected="false" aria-pressed="false">
              <i class="mr-1 fas fa-map-signs"></i>查换乘
            </button>
          </div>
        </div>
      </div>
      <div class="py-5 card-body">
        <div class="tab-content">
          <div class="tab-pane fade show active" id="lines">
            <div class="input-group">
              <label class="input-group-text btn btn-lg btn-primary" for="getRelatedLines" data-toggle="collapse"
                     data-target="#getRelatedLinesCollapse">线路</label>
              <input type="text" class="form-control form-control-lg" placeholder="例如：3" id="getRelatedLines"
                     pattern="/^\d{1,}$/" autocomplete="off" maxlength="15" aria-label="线路名称">
<!--              <div class="dropdown-menu" id="getRelatedLinesDropdown">-->
<!--                <div class="p-3">1111</div>-->
<!--              </div>-->
              <span class="input-group-text">路车</span>
            </div>
            <div class="fade collapse" id="getRelatedLinesCollapse">
              <div class="my-2 text-muted small font-weight-bolder">
                <div>要查询的公交线路，返回实时路线</div>
                <div>例如：想乘坐2路车，输入数字 2</div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="stations">
            <div class="input-group">
              <label class="input-group-text btn btn-lg btn-info" for="getRelatedStations" data-toggle="collapse"
                     data-target="#getRelatedStationsCollapse">站牌</label>
              <input type="text" class="form-control form-control-lg" placeholder="例如：人民医院" id="getRelatedStations"
                     autocomplete="off" maxlength="15" aria-label="站牌名称">
            </div>
            <div class="fade collapse" id="getRelatedStationsCollapse">
              <div class="my-2 text-muted small font-weight-bolder">
                <div>要查询的站牌名称，返回途径的公交车</div>
                <div>例如：想查看途经人民医院的公交车，输入 人民医院。</div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="transfer">
            <div class="mb-3">
              <div class="input-group mb-1">
                <label class="input-group-text btn btn-lg btn-success" for="startingStationName" data-toggle="collapse"
                       data-target="#startingStationNameCollapse">起点</label>
                <input type="text" class="form-control form-control-lg" placeholder="例如：人民医院" id="startingStationName"
                       autocomplete="off" aria-label="起点站牌名称">
              </div>
              <div class="fade collapse" id="startingStationNameCollapse">
                <div class="my-2 text-muted small font-weight-bolder">
                  <div>上车的站牌名称</div>
                  <div>例如：准备从市三院开始坐车，输入 市三院。</div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="input-group mb-1">
                <label class="input-group-text btn btn-lg btn-danger" for="stopStationName" data-toggle="collapse"
                       data-target="#stopStationNameCollapse">终点</label>
                <input type="text" class="form-control form-control-lg" placeholder="例如：医院" id="stopStationName"
                       autocomplete="off" aria-label="终点站牌名称">
              </div>
              <div class="fade collapse" id="stopStationNameCollapse">
                <div class="my-2 text-muted small font-weight-bolder">
                  <div>下车的站牌名称</div>
                  <div>例如：准备从人民医院下车，输入 人民医院。</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer bg-transparent d-none" id="searchResult">
        <div class="mb-3 font-weight-bolder text-orange">结果</div>
        <div class="d-none max-vh-60 overflow-auto" id="lineResult"></div>
        <div class="d-none max-vh-60 overflow-auto" id="stationResult"></div>
        <div class="d-none max-vh-60 overflow-auto" id="transferResult"></div>
      </div>
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

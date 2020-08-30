<?php
define('title', '信息查询');
require_once dirname(dirname(__DIR__)) . "/header.php";
?>
<link rel="stylesheet" href="/static/css/xtBus/line.min.css">

<div class="container mt-5" id="jt_container">
  <div class="mb-3">
    <div class="mb-2 font-weight-bolder">公交线路实时查询</div>
    <div class="mb-2">
      <div class="text-orange">正向与反向</div>
      <div class="d-flex align-items-center" id="routeUpperOrDown">
        <div class="btn-group btn-group-sm">
          <input type="radio" class="btn-check" name="UpperOrDown" id="routeUpper" value="1" checked>
          <label class="btn btn-outline-secondary" for="routeUpper">正向</label>
          <input type="radio" class="btn-check" name="UpperOrDown" id="routeDown" value="2">
          <label class="btn btn-outline-secondary" for="routeDown">反向</label>
        </div>
      </div>
    </div>
    <div class="mb-2">
      <div class="text-orange">所有路线</div>
      <div class="d-flex align-items-center">
        <div class="btn-group btn-group-sm" id="routeNameList">
          <input type="radio" class="btn-check" name="routeName" id="routeName_1" value="1路">
          <label class="btn btn-outline-secondary" for="routeName_1">1路</label>
          <input type="radio" class="btn-check" name="routeName" id="routeName_2" value="2路">
          <label class="btn btn-outline-secondary" for="routeName_2">2路</label>
          <input type="radio" class="btn-check" name="routeName" id="routeName_3" value="3路">
          <label class="btn btn-outline-secondary" for="routeName_3">3路</label>
          <input type="radio" class="btn-check" name="routeName" id="routeName_4" value="4路">
          <label class="btn btn-outline-secondary" for="routeName_4">4路</label>
          <input type="radio" class="btn-check" name="routeName" id="routeName_5" value="5路">
          <label class="btn btn-outline-secondary" for="routeName_5">5路</label>
          <input type="radio" class="btn-check" name="routeName" id="routeName_6" value="6路">
          <label class="btn btn-outline-secondary" for="routeName_6">6路</label>
          <input type="radio" class="btn-check" name="routeName" id="routeName_7" value="7路">
          <label class="btn btn-outline-secondary" for="routeName_7">7路</label>
          <input type="radio" class="btn-check" name="routeName" id="routeName_8" value="8路">
          <label class="btn btn-outline-secondary" for="routeName_8">8路</label>
          <input type="radio" class="btn-check" name="routeName" id="routeName_9" value="9路">
          <label class="btn btn-outline-secondary" for="routeName_9">9路</label>
          <input type="radio" class="btn-check" name="routeName" id="routeName_10" value="10路">
          <label class="btn btn-outline-secondary" for="routeName_10">10路</label>
          <input type="radio" class="btn-check" name="routeName" id="routeName_11" value="11路">
          <label class="btn btn-outline-secondary" for="routeName_11">11路</label>
          <input type="radio" class="btn-check" name="routeName" id="routeName_12" value="12路">
          <label class="btn btn-outline-secondary" for="routeName_12">12路</label>
          <input type="radio" class="btn-check" name="routeName" id="routeName_13" value="13路">
          <label class="btn btn-outline-secondary" for="routeName_13">13路</label>
          <input type="radio" class="btn-check" name="routeName" id="routeName_14" value="14路">
          <label class="btn btn-outline-secondary" for="routeName_14">14路</label>
          <input type="radio" class="btn-check" name="routeName" id="routeName_15" value="15路">
          <label class="btn btn-outline-secondary" for="routeName_15">15路</label>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="d-none">
  <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
  <script src="/static/js/xtBus/index.min.js"></script>
  <script src="/static/js/xtBus/line.min.js"></script>
</div>
<?php
require_once dirname(dirname(__DIR__)) . "/footer.php";
?>

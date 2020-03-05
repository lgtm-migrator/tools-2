<?php

define('title', '灵活码');
require_once dirname(__DIR__) . '/header.php';
?>
<link rel="stylesheet" href="/static/css/jt_qrcode.min.css">
<div class="py-3 container bg-white" id="jt_container">
    <div class="mb-4" id="jt_lhm_toolbar">
        <div class="px-4 py-3 border rounded" id="lhm_editor">
            <div class="mb-2 font-weight-bolder">灵活码图片设置</div>
            <div class="form-group">
                <div class="mb-1 input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="lhm_editor_size_value">尺寸</label>
                    </div>
                    <input type="number" class="form-control text-right" min="100" max="3000" step="10" value="300"
                           id="lhm_editor_size_value">
                    <div class="input-group-append">
                        <span class="input-group-text">px&nbsp;(像素)</span>
                    </div>
                </div>
                <label class="sr-only" for="lhm_editor_size_range">尺寸范围</label>
                <input type="range" class="col-12 custom-range" min="100" max="3000" step="10" value="300"
                       id="lhm_editor_size_range">
            </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="lhm_editor_color_dark">前景色</label>
                    </div>
                    <input type="color" class="form-control" value="#000000" id="lhm_editor_color_dark">
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="lhm_editor_color_light">背景色</label>
                    </div>
                    <input type="color" class="form-control" value="#ffffff" id="lhm_editor_color_light">
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="lhm_editor_type">格式</label>
                    </div>
                    <select class="custom-select" size="2" id="lhm_editor_type">
                        <option value="png" selected>PNG</option>
                        <option value="jpg">JPG</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <div class="mb-1 input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="lhm_editor_quality">图片质量</label>
                    </div>
                    <input type="number" class="form-control text-right" min="0.1" max="1.0" step="0.1" value="0.9"
                           id="lhm_editor_quality">
                    <div class="input-group-append">
                        <span class="input-group-text">%</span>
                    </div>
                </div>
                <label class="sr-only" for="lhm_editor_size_range">质量范围</label>
                <input type="range" class="col-12 custom-range" min="0.1" max="1.0" step="0.1" value="0.9"
                       id="lhm_editor_size_range">
            </div>
            <div class="form-group">
                <div class="mb-1 input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="lhm_editor_margin">边距</label>
                    </div>
                    <input type="number" class="form-control text-right" min="0" max="30" step="1" value="10"
                           id="lhm_editor_margin">
                    <div class="input-group-append">
                        <span class="input-group-text">px&nbsp;(像素)</span>
                    </div>
                </div>
                <label class="sr-only" for="lhm_editor_size_range">边距范围</label>
                <input type="range" class="col-12 custom-range" min="0" max="30" step="1" value="10"
                       id="lhm_editor_size_range">
            </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="lhm_editor_errorCorrectionLevel">容错级别</label>
                    </div>
                    <select class="custom-select" size="4" id="lhm_editor_errorCorrectionLevel">
                        <option value="l">低（7%）</option>
                        <option value="m">中（15%）</option>
                        <option value="q">1/4（25%）</option>
                        <option value="h">高（30%）</option>
                    </select>
                </div>
            </div>
            <div class="mb-2">
                <div>效果预览</div>
                <div class="text-center">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt=""
                         class="img-thumbnail border-info" id="lhm_editor_preview">
                </div>
            </div>
        </div>
    </div>
</div>
<div>
    <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
    <script src="/static/js/jt_qrcode.min.js"></script>
</div>

<?php
require_once dirname(__DIR__) . '/footer.php';
?>

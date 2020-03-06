<?php

define('title', '灵活码');
require_once dirname(__DIR__) . '/header.php';
?>
<link rel="stylesheet" href="/static/css/jt_qrcode.min.css">
<div class="py-3 container bg-white" id="jt_container">
    <div class="mb-4" id="jt_lhm_toolbar">
        <div class="px-4 py-3 border rounded" id="lhm_editor">
            <div class="mb-3 font-weight-bolder">灵活码图片设置</div>
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
                <div class="form-text small text-muted">
                    <span>生成的灵活码图片是正方形。</span>
                </div>
                <label class="sr-only" for="lhm_editor_size_range">尺寸范围</label>
                <input type="range" class="custom-range" min="100" max="3000" step="10" value="300"
                       id="lhm_editor_size_range">
            </div>
            <div class="form-group">
                <div class="mb-1 input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="lhm_editor_margin_value">边距</label>
                    </div>
                    <input type="number" class="form-control text-right" min="0" max="50" step="1" value="10"
                           id="lhm_editor_margin_value">
                    <div class="input-group-append">
                        <span class="input-group-text">px&nbsp;(像素)</span>
                    </div>
                </div>
                <div class="form-text small text-muted">
                    <span>生成的灵活码图片四边的空白区域宽度。</span>
                </div>
                <label class="sr-only" for="lhm_editor_margin_range">边距范围</label>
                <input type="range" class="custom-range" min="0" max="50" step="1" value="10"
                       id="lhm_editor_margin_range">
            </div>
            <div class="form-group form-row">
                <div class="col-6 input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="lhm_editor_color_dark">前景色</label>
                    </div>
                    <input type="color" class="form-control" value="#000000" id="lhm_editor_color_dark">
                </div>
                <div class="col-6 input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="lhm_editor_color_light">背景色</label>
                    </div>
                    <input type="color" class="form-control" value="#ffffff" id="lhm_editor_color_light">
                </div>
                <div class="col-auto form-text small text-muted">
                    <span>默认情况下，前景色是黑色，背景色是白色。</span>
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="lhm_editor_errorCorrectionLevel">容错级别</label>
                    </div>
                    <select class="p-0 custom-select" size="4" id="lhm_editor_errorCorrectionLevel">
                        <option class="px-3 py-1" value="l">低（≈7%）</option>
                        <option class="px-3 py-1" value="m">中（≈15%）</option>
                        <option class="px-3 py-1" value="q">1/4（≈25%）</option>
                        <option class="px-3 py-1" value="h">高（≈30%）</option>
                    </select>
                </div>
                <div class="form-text small text-muted">
                    <span>数值是指可遮挡范围的比例。</span>
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="lhm_editor_type">格式</label>
                    </div>
                    <select class="p-0 custom-select" size="2" id="lhm_editor_type">
                        <option class="px-3 py-1" value="png">PNG</option>
                        <option class="px-3 py-1" value="jpg">JPG</option>
                    </select>
                </div>
                <div class="form-text small text-muted">
                    <span>生成的图片文件格式。</span>
                </div>
            </div>
            <div class="form-group">
                <div class="mb-1 input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="lhm_editor_quality_value">图片质量</label>
                    </div>
                    <input type="number" class="form-control text-right" min="1" max="100" step="1" value="90"
                           id="lhm_editor_quality_value">
                    <div class="input-group-append">
                        <span class="input-group-text">%</span>
                    </div>
                </div>
                <div class="form-text small text-muted">
                    <span>数值越高，清晰度越高，生成的文件越大。</span>
                </div>
                <label class="sr-only" for="lhm_editor_quality_range">质量范围</label>
                <input type="range" class="custom-range" min="1" max="100" step="1" value="90"
                       id="lhm_editor_quality_range">
            </div>
            <div class="mb-2">
                <div>效果预览</div>
                <div class="text-center">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="灵活码"
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

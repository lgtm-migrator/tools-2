<?php

define('title', '灵活码');
require_once dirname(__DIR__) .'/header.php';
?>
<link rel="stylesheet" href="/static/css/jt_qrcode.min.css">
<div class="py-3 container bg-white" id="jt_container">
    <div id="lhm_description">
        <div class="mb-3">
            <div class="mb-1 font-weight-bold text-dark">灵活码</div>
            <div class="mb-1 small text-muted">同一个二维码，在不更换的情况下，自主维护更新扫描结果的内容，即称为灵活码。</div>
            <div class="small text-muted">扫描结果的内容包含但不限于：二维码图片、文字标题和文字简介。</div>
        </div>
        <div class="mb-3 small">
            <div class="mb-1 small">
                <div class="font-weight-bolder">灵活码免费说明</div>
                <div class="small text-secondary">目前处于试运营期，免费开放使用，所有人都可以制作灵活码。</div>
                <div class="mb-3 small text-secondary">试运营期间创建的，有效期自灵活码生成之日起2个月（31&times;2=62天）内有效。</div>
            </div>
            <div class="mb-1 small">
                <div class="font-weight-bolder">付费方式</div>
                <div class="small text-success">实行先管理，后付费方式。</div>
                <div class="small text-muted">
                    在需要重新更新灵活码内容时，可以直接登录，进行调整灵活码的结果内容（二维码图片、文字标题和文字简介），新的灵活码结果内容会进入审核阶段（审核阶段新二维码立刻生效可用），
                </div>
                <div class="small text-muted">15分钟内完成付费，审核通过，15分钟后，未付费的灵活码，停止使用，无有效扫描结果。</div>
            </div>
            <div class="mb-1 small">
                <div class="font-weight-bolder">定价</div>
                <div class="small">初次制作灵活码免费，当修改灵活码结果时需要付费，需要支付网络资源维护费10元。</div>
            </div>
            <div class="mb-1 small">
                <div class="font-weight-bolder">续费折扣活动</div>
                <div class="small">后续维护时根据初次价格依次向下降低1折费用（费用递减10%），最低价格为初次费用的5折（50%）。</div>
                <div class="small">例如：第一次付费修改灵活码结果内容时的价格为10元，第二次修改时的价格为9元（10元-10元&times;10%=9元）</div>
            </div>
        </div>
        <div class="mb-3 small text-danger">
            <div class="font-weight-bolder">服务保障</div>
            <span>灵活码工具为网络工具，需要公共网络服务器提供计算资源，目前本着方便用户的远景，提供的产品价格未核算各种成本，粗略收费。仍是提供全天候（7&times;24小时）的不间断访问服务。</span>
            <span>我们的服务器使用阿里云ECS服务器，成本不算太高，但仍可能达不到收支平衡，我们保证所有付费使用的朋友，灵活码持久有效可用，但不能保证永久可以续费。</span>
            <span>如遇见不可抗、不可控的恶意网络攻击，服务器异常时，灵活码技术团队会尽全力保证灵活码的有效可用性，为此技术团队可能会短暂停止有效可用服务，转换更高性能的服务器，从而提供有效可用的访问服务。</span>
            <div class="font-weight-bolder">安全</div>
            <span>灵活码工具为防止网络钓鱼类信息，二维码只允许上传阿里系、字节跳动系、腾讯系等知名公司旗下的社群二维码图片。其他公司旗下软件生成的二维码，暂不支持，请勿上传。</span>
            <div class="text-success">
                <span class="d-block">如有知名可信赖类型的社交软件可提交反馈，如可信赖会增加支持，其他的二维码图片，不受支持，请勿制作灵活码。</span>
                <span class="d-block">灵活码目前支持二维码列表：</span>
                <ul>
                    <li>支付宝群二维码</li>
                    <li>钉钉群二维码</li>
                    <li>微信群二维码</li>
                    <li>QQ群二维码</li>
                </ul>
            </div>
        </div>
        <div class="mb-3 small text-secondary">
            <span class="mb-2 d-block small">一句话说明，本站提供的二维码图片X，可以是微信群二维码图片A的内容，也可以是微信群二维码图片B的内容，可以一直维护更新，累计节约成本。</span>
            <span class="mb-2 d-block small">简单的具体说明：一张微信群A的二维码图片，发布到一个固定的场所后，这个A群二维码图片发布后不能再修改了（如打印出来或者网络社区帖子中），这个A群满了以后，需要创建B群，还需要再重新打印微信群B的二维码图片，会产出重复成本（如重新打印、重新宣传、重新张贴、重新发布社区帖子等时间和金钱成本）或者成本浪费（宣传效果过量造成的各种浪费）不再过多介绍。</span>
            <span class="mb-2 d-block small">灵活码可以解决：创建微信群A后，通过本工具将微信群A生成的二维码图片上传，额外可以添加灵活码标题和灵活码文字介绍，提交后获得新的灵活码图片X，由灵活码图片X替代原本的微信群A的二维码，即可进行宣传，微信群A人数满了以后，您将微信群B生成的二维码图片通过灵活码维护页面，修改灵活码图片X的信息，灵活码X的内容会更新为修改后的微信群B的二维码图片，之前宣传内容随之更新，至此，您无需再进行重复宣传微信群B的二维码图片，节约多种成本。</span>
        </div>
    </div>
    <div class="mb-3 p-3 border rounded" id="lhm_make">
        <div class="mb-1 font-weight-bolder text-warning">制作灵活码</div>
        <form action="img.php" method="post" enctype="multipart/form-data">
            <div class="form-group">
                <div class="custom-file">
                    <input class="custom-file-input" type="file" name="qrcode_img" id="qrcode_img"
                           accept="image/jpeg,image/png" required>
                    <label class="custom-file-label" for="qrcode_img" data-browse="浏览">二维码图片</label>
                </div>
                <div class="form-text small text-muted">
                    <span>提示：上传要转到的二维码图片文件，相同的二维码不能重复提交</span>
                    <span class="text-danger">查看图片要求</span>
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="qrcode_title">灵活码标题</label>
                    </div>
                    <input class="form-control" type="text" name="qrcode_title" id="qrcode_title" placeholder="灵活码标题"
                           maxlength="10" value="默认标题" required>
                </div>
                <div class="form-text small text-muted">提示：文字上限15个</div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="qrcode_description">灵活码介绍</label>
                    </div>
                    <textarea class="form-control" type="text" name="qrcode_description" id="qrcode_description"
                              rows="6"
                              cols="" wrap="soft" maxlength="150" placeholder="灵活码介绍" required>默认介绍</textarea>
                </div>
                <div class="form-text small text-muted">提示：文字上限150个</div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="qrcode_password">管理密码</label>
                    </div>
                    <input class="form-control" type="password" name="qrcode_password" id="qrcode_password"
                           value="000000"
                           required placeholder="复杂并牢记密码">
                </div>
                <div class="form-text small text-muted">
                    <span>提示：请务必牢记这个密码，密码是您唯一调整灵活码信息的方式。</span>
                </div>
            </div>
            <div class="form-group text-center">
                <input class="btn btn-sm btn-outline-success" type="submit" name="" id="submit" value="开始制作">
            </div>
        </form>
    </div>
    <div class="mb-3 d-flex justify-content-center">
        <a class="mx-2" target="_blank" href="/qrcode/manage.php" title="管理灵活码">管理灵活码</a>
        <a class="mx-2" target="_blank" href="/qrcode/q.php?q=LHM-1582813209" title="灵活码示例">灵活码示例</a>
    </div>
</div>
<div>
    <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
    <script src="/static/js/jt_qrcode.min.js"></script>
</div>

<?php
require_once dirname(__DIR__) . '/footer.php';
?>

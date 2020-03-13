<?php
if (!defined('title')) define('title', '发送短信');
require_once dirname(dirname(__DIR__)) . '/header.php';

if (!defined('JZEG_NET')) die();
//if (defined('JZEG_NET')) define('JZEG_NET_SMS', '');
if (defined('JZEG_NET')) if (!defined('JZEG_NET_SMS')) define('JZEG_NET_SMS', '');
?>
    <div class="py-2 container" id="jt_send_sms">
        <div class="mb-2 font-weight-bolder">发送短信</div>
        <form action="" method="post">
            <div class="form-row form-group">
                <div class="col-6 input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="accessKeyId">accessKeyId</label>
                    </div>
                    <input type="text" class="form-control" name="accessKeyId" id="accessKeyId">
                </div>
                <div class="col-6 input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="accessSecret">accessSecret</label>
                    </div>
                    <input type="text" class="form-control" name="accessSecret" id="accessSecret">
                </div>
                <div class="form-text small text-muted">
                    <span>输入AccessKeyId和AccessSecret</span>
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="PhoneNumbers">号码</label>
                    </div>
                    <input type="number" class="form-control" name="PhoneNumbers" id="PhoneNumbers">
                </div>
                <div class="form-text small text-muted">
                    <span>要发送到的手机号码，上限1000个，英文逗号分隔</span>
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="TemplateCode">TemplateCode</label>
                    </div>
                    <select class="p-0 custom-select" size="3" id="TemplateCode" style="overflow: overlay;">
                        <option class="px-3 py-1" value="forget_user_info">找回用户信息</option>
                        <option class="px-3 py-1" value="forget_user_name">找回用户名</option>
                        <option class="px-3 py-1" value="forget_user_password">重置密码</option>
                        <option class="px-3 py-1" value="user_register">验证码-注册</option>
                        <option class="px-3 py-1" value="user_login">验证码-登录</option>
                        <option class="px-3 py-1" value="change_user_password">验证码-修改密码</option>
                        <option class="px-3 py-1" value="Sensitive_operation_notification">敏感操作通知</option>
                    </select>
                </div>
                <div class="form-text small text-muted">
                    <span>发送的lbie</span>
                </div>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-outline-success">发送</button>
            </div>
        </form>
    </div>

    <div class="d-none">
        <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
        <!--        <script src="/static/js/"></script>-->
    </div>
<?php
require_once dirname(dirname(__DIR__)) . '/footer.php';

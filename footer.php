<?php
require_once "../recaptcha/recaptcha_key.php";
$recaptcha_v3_site_key = $recaptcha_key["v3"]["site"];
?>
</div>
<div class="mt-5 mb-2" id="jt_footer">
    <a class="position-fixed border border-primary rounded p-1" href="javascript:" id="to_top"
       style="right: 1.2rem;bottom: 1rem;">
        <i class="fa fa-2x fa-arrow-up"></i>
    </a>
    <div class="container" id="recaptcha_text_badge">
        <p class="text-center text-muted" style="font-size: 75%;">
            <span>本网站由 reCAPTCHA 提供保护，并适用Google</span>
            <a class="text-reset text-decoration-none" href="https://www.google.cn/intl/zh-CN/policies/privacy/"
               target="_blank">隐私权</a>
            <span>和</span>
            <a class="text-reset text-decoration-none" href="https://www.google.cn/intl/zh-CN/policies/terms/"
               target="_blank">使用条款</a>
        </p>
    </div>
</div>
<div>
    <script src="https://www.recaptcha.net/recaptcha/api.js?render=<?php echo $recaptcha_v3_site_key; ?>"></script>
    <script src="/tools/static/js/jquery.min.js"></script>
    <script src="/tools/static/js/popper.min.js"></script>
    <script src="/tools/static/js/bootstrap.min.js"></script>
    <script src="/tools/static/js/bootstrap-modal-js.min.js"></script>
    <script src="/tools/phone_number/js/phone_number.js"></script>
</div>
</body>
</html>


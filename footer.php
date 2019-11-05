<?php
require_once "recaptcha.php";
$pageAction = "localhost";
?>
<div id="jt_footer" style="min-height: 10vh;">
    <a class="position-fixed border border-primary rounded p-1" href="javascript:" id="to_top"
       style="right: 1.2rem;bottom: 1rem;">
        <i class="fa fa-2x fa-arrow-up"></i>
    </a>
    <div class="container">
        <div id="xxxx">22</div>

    </div>
</div>
<div>
    <script src="https://www.recaptcha.net/recaptcha/api.js?render=<?php echo $recaptcha_key["v3"]["site"]; ?>"></script>
    <script src="/tools/static/js/jquery.min.js"></script>
    <script src="/tools/static/js/popper.min.js"></script>
    <script src="/tools/static/js/bootstrap.min.js"></script>
    <script src="/tools/static/js/bootstrap-modal-js.min.js"></script>
    <script src="/tools/phone_number/js/phone_number.js"></script>
    <script>

         (function () {
            let xxxx = document.querySelector("#xxxx");
            xxxx.addEventListener("click", function () {
                grecaptcha.ready(function () {
                    let site ="<?php echo $recaptcha_key["v3"]["site"]?>";
                    grecaptcha.execute(site, {action: '<?php echo $pageAction; ?>'}).then(function (token) {
                        console.log(token);
                        fetch('/tools/recaptcha_verify.php?action=<?php echo $pageAction; ?>&token=' + token).then(function (response) {
                            response.json().then(function (data) {
                                console.log(JSON.stringify(data, null, 2));
                            });
                        });

                    });
                });
            })
        })();
    </script>
</div>
</body>
</html>


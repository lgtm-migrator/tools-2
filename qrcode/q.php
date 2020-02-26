<?php
if ($_POST) {
    unset($_POST);
    die('参数非法');
} elseif ($_GET) {
    unset($_GET);
} else {
    die('非法访问');
}

?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css">
    <title>灵活码</title>
</head>
<body class="min-vh-100"
      style="background-image: linear-gradient(180deg,hsla(0,0%,100%,0) 60%,#fff),linear-gradient(70deg,#dbedff 32%,#ebfff0);">
<div class="py-4 container-fluid" id="test" style="min-height:120vh;">
    <div class="mb-1 font-weight-bolder text-center text-success" style="font-size: large;">
        <span class="" id="title"></span>
    </div>
    <div class="mb-4 p-2 shadow rounded-lg border border-secondary small text-dark"
         style="line-height:1.4rem;letter-spacing:0.08rem;text-indent: 2rem;">
        <span id="description"></span>
    </div>
    <div class="text-center">
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt=""
             class="img-thumbnail shadow-lg" id="qrcode" style="max-height: 150vw;border-radius: 3rem;">
    </div>
</div>

<div class="pb-2 container-fluid text-center">
    <div class="clearfix">
        <button type="button" class="mr-2 float-right btn btn-sm btn-outline-dark">举报</button>
    </div>
    <div class="small text-black-50">杰格网提供技术支持</div>
</div>

<div class="d-none">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.bundle.min.js"></script>

    <script>
        let query = 'dd';
        let url = 'query.php';

        $.ajax({
            method: 'post',
            url: url,
            dataType: 'json',
            timeout: 4000,
            data: {
                query: query,
            },
            success: function (data) {
                set_qrcode_info(data[0]);
                set_qrcode_img(data[0]);
            },
            error: function (error) {
                console.log(error);
                let data = {
                    'title': '没有找到你扫描的灵活码',
                    'description': '请确认您的灵活码是否到期，可以使用管理密码进行维护。',
                    'img_path': 'xxx',
                };
                set_qrcode_info(data);
                set_qrcode_img(data);
            },
        });

        function set_qrcode_info(data) {
            let title = document.querySelector('#title');
            let description = document.querySelector('#description');
            let img_title = data['title'];
            let img_description = data['description'];

            title.innerText = img_title;
            description.innerText = img_description;
        }

        function set_qrcode_img(data) {
            let qrcode = document.querySelector('#qrcode');
            let protocol = window.location.protocol;
            let host = window.location.host;
            let img_path = data['img_path'];


            qrcode.src = protocol + '//' + host + '/upload' + img_path;
            qrcode.alt = data['title'];
        }

    </script>
</div>
</body>
</html>

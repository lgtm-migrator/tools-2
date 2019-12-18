<?php
?>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="applicable-device" content="pc,mobile">
    <meta name="renderer" content="webkit">
    <meta name="referrer" content="always">
    <meta http-equiv="Cache-Control" content="no-siteapp">
    <meta http-equiv="Cache-Control" content="no-transform">

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/static/css/bootstrap.min.css">
    <link rel="stylesheet" href="/static/font/css/all.min.css">

    <!--        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css">-->
    <!--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.11.2/css/all.min.css">-->

    <link rel="stylesheet" href="/tools.min.css">

    <noscript>
        <div class="container mx-auto" style="cursor: pointer;">
            <div class="alert alert-danger shadow btn-outline-danger text-center font-weight-bold h4">
                <p></p>
                <p>您当前的浏览器没有开启 JavaScript 功能</p>
                <p>将会影响您正常使用本网站提供的工具</p>
                <p>如您需要正常访问本站，请开启 JavaScript 功能</p>
            </div>
        </div>
    </noscript>

    <title><?php echo title; ?></title>

    <script src="/static/js/fundebug.min.js"></script>


</head>
<body>
<div id="body" hidden>
    <div class="mb-3 mb-lg-4" id="jt_header">
        <div class="py-1 py-lg-2 container" id="logo">
            <a class="text-decoration-none" href="/index.php" title="在线小工具">
                <span class="mr-1 mr-lg-2 logo-img"><i class="mb-0 text-warning h4 fas fa-tools"></i></span>
                <span class="logo-name"><h1 class="mb-0 d-inline text-info h5">在线小工具</h1></span>
            </a>
            <span class="py-1 position-relative badge badge-pill badge-danger"
                  style="z-index:-1;bottom:10px;font-size: 75%;">测试版</span>
        </div>
        <div class="border-bottom"></div>
    </div>
    <div id="jt_content" style="min-height: 85vh;">
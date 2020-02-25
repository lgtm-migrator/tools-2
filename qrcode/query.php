<?php
if ($_POST) {
    die('方式错误');
}

if ($_GET) {
    if ($_GET['query']) {
        $query = $_GET['query'];
    }
}


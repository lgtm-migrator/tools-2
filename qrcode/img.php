<?php

if ($_POST && $_FILES) {
    if ($_FILES['qrcode_img'] && $_POST['qrcode_title'] && $_POST['qrcode_description'] && $_POST['qrcode_password']) {
        global $new_img_file, $result;

        $qrcode_img_file = $_FILES['qrcode_img'];
        require_once "./file.php";

        $qrcode_title = $_POST['qrcode_title'];
        $qrcode_description = $_POST['qrcode_description'];
        $qrcode_password = $_POST['qrcode_password'];
    } else {
        die('参数错误');
    }
} else {
    die('方式错误');
}

//$img_path = $new_img_file['file_path'];
$img_path = $new_img_file['file_path'];
$title = $qrcode_title;
$description = $qrcode_description;
$password = $qrcode_password;
$category = 'img_qrcode';
$identifier = '0111';
$img_md5 = '111';
$qrcode_content = '111';

$qrcode_data = array(
    'img_path' => $img_path,
    'title' => $title,
    'description' => $description,
    'category' => $category,
    'identifier' => $identifier,
    'img_md5' => $img_md5,
    'qrcode_content' => $qrcode_content,
    'password' => $password,
);


$result = array();

require_once './database_add_qrcode.php';

die(json_encode($result));

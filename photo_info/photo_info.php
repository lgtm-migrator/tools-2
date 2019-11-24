<?php
if ($_POST) {
    if (isset($_POST['MAX_FILE_SIZE']) && $_FILES !== null) {
        if (count($_FILES['name']) > 3) die("最多上传3个文件");
        $image_files = $_FILES['photo_input'];
    } else {
        die("数据错误");
    }
} else {
    die("");
}


require_once dirname(dirname(__FILE__)) . "/config/defined.php";
require_once "photo_info_fun.php";

$allowed_extension_name = array("jfif", "pjpeg", "jpeg", "pjp", "jpg", "tiff", "tif");


$result = array(
    "message" => array(
        "success" => array(),
        "failed" => array(),
    ),
    "error" => array(),
);
foreach ($image_files["error"] as $k => $error) {
    $tmp_file = $image_files['tmp_name'][$k];
    $name_file = $image_files['name'][$k];
    if ($error === 0) {
        if (is_uploaded_file($tmp_file)) {
            if (!file_exists(UPLOAD_DIR_YMD . $name_file)) {
                if (!file_exists(UPLOAD_DIR_YMD)) mk_dir(UPLOAD_DIR_YMD);
                $move_file_result = move_uploaded_file($tmp_file, UPLOAD_DIR_YMD . $name_file);
                $result['message']['success'][] = "<span class='text-success'>" . $name_file . "</span>" . ($move_file_result ? "上传成功了" : "上传失败，请重试一次。");
            } else {
                $result['message']['failed'][] = "您的文件<span class='text-success'>" . $name_file . "</span>以前已经上传过了。";
            }
        }
    } else {
        switch ($error) {
            case 1:
            case 2:
            case 3:
            case 5:
            case 6:
            case 7:
            case 8:
                $result['error'][$error][] = $name_file;
            case 4:
            default:

        }
    }
}

die(json_encode($result));

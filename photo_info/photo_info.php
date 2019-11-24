<?php
if ($_POST) {
    if (isset($_POST['MAX_FILE_SIZE']) && $_FILES !== null) {
        $result = array(
            "message" => array(
                "success" => array(),
                "failed" => array(),
            ),
            "error" => array(),
        );

        if (count($_FILES['photo_input']['name']) > 3) $result['error'][] = "最多上传3个文件";

        (count($result['error']) === 0) ? $image_files = $_FILES['photo_input'] : die(json_encode($result));

    } else {
        custom_header_404();
    }
} else {
    custom_header_404();
}

function custom_header_404($Context = 'No input file specified.')
{
    header('HTTP/1.1 404 Not Found');
    die($Context);
}

require_once dirname(dirname(__FILE__)) . "/config/defined.php";
require_once "photo_info_fun.php";

$allowed_extension_name = array("jfif", "pjpeg", "jpeg", "pjp", "jpg", "tiff", "tif");


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
                break;
            case 4:
                //todo:待调试
                $result['error'][$error][] = !$name_file ? "未上传文件" : $name_file . "文件上传不完整。";
                break;
            default:
                $result['error'][$error][] = "未知错误";
        }
    }
}

die(json_encode($result));

<?php
if ($_POST) {
    if (isset($_POST['MAX_FILE_SIZE']) && $_FILES !== null) {
        $result = array(
            "message" => array(
                "success" => array(),
                "failure" => array(),
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
    $tmp_file_name = $image_files['tmp_name'][$k];
    $file_name = $image_files['name'][$k];
    $file_ext_name = get_file_ext_name($file_name);
    $file_type = $image_files['type'][$k];
    $file_size = $image_files['size'][$k];

//    $php_created_image = PHP_TMP_DIR . $file_name;
    $php_created_image = UPLOAD_DIR_YMD.'0/' . $file_name;

    if (in_array($file_ext_name, $allowed_extension_name)) {
        if ($error === 0) {
            if (is_uploaded_file($tmp_file_name)) {
                if (!file_exists(UPLOAD_DIR_YMD)) mk_dir(UPLOAD_DIR_YMD);
                if ($file_ext_name === 'jpg' || $file_ext_name === 'jpeg') {
                    $image_tmp = imagecreatefromjpeg($tmp_file_name);
                    $image_create_result = imagejpeg($image_tmp, $php_created_image, 100);
                } elseif ($file_ext_name === 'tiff' || $file_ext_name === 'tif') {
                    //todo:处理tiff格式
                    $image_tmp = imagecreatefromtiff($tmp_file_name);
                    $image_create_result = imagejpeg($image_tmp, $php_created_image, 100);
                } else {
                    $result['error']['image_create_result'] = array("failure" => $file_name);
                    $image_create_result = false;
                }
                imagedestroy($image_tmp);

                if ($image_create_result === true) {
                    //todo:改为数据库匹配图像识别字符串来判断文件是否上传过，用来达到不保存用户图片文件的目的。
                    if (!file_exists(UPLOAD_DIR_YMD . $file_name)) {
                        $move_file_result = move_uploaded_file($php_created_image, UPLOAD_DIR_YMD . $file_name);

                        if ($move_file_result === true) {
                            $result['message']['success'][] = "<span class='text-success'>" . $file_name . "</span>" . ("上传成功了");
                        } else {
                            $result['message']['failure'][] = "<span class='text-success'>" . $file_name . "</span>" . ("上传失败，请重试一次。");
                        }

                    } else {
                        $result['message']['failure'][] = "您的文件<span class='text-success'>" . $file_name . "</span>以前已经上传过了。";
                    }
                } else {
                    die(json_encode($result));
                }
            } else {
                $result['error']['invalid'][] = $file_name;
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
                    $result['error'][$error][] = $file_name;
                    break;
                case 4:
                    //todo:待调试文件上传状态
                    $result['error'][$error][] = !$file_name ? "未上传文件" : $file_name . "文件上传不完整。";
                    break;
                default:
                    $result['error'][$error][] = "未知错误";
            }
        }
    } else {
        if (file_exists($tmp_file_name)) unlink($tmp_file_name);
        $result['error']['ext_name'][] = $file_name;
    }

}


die(json_encode($result));

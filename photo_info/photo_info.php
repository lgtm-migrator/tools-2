<?php
if ($_POST) {
    if (isset($_POST['MAX_FILE_SIZE']) && $_FILES !== null) {
        $image_files = $_FILES['photo_input'];
        if (count($image_files['name']) > 4) die("请上传少于4个文件");
    } else {
        die("数据错误");
    }
} else {
    die("");
}

require_once dirname(dirname(__FILE__)) . "/defined.php";

//echo "<br>";
//echo "<br>";
////echo json_encode($_FILES);
////echo count($image_files['name']);
//echo "<br>";
//echo "<br>";


$allowed_extension_name = array("jfif", "pjpeg", "jpeg", "pjp", "jpg", "tiff", "tif");
$disallow_extension_name = array("exe", "bat", "sh", "d");

foreach ($image_files["error"] as $k => $error) {
    if ($error === 0) {
        $tmp_file = $image_files['tmp_name'][$k];
        $name_file = $image_files['name'][$k];
        if (is_uploaded_file($tmp_file)) {
            if (!file_exists(UPLOAD_DIR_YMD . $name_file)) {
                if (!file_exists(UPLOAD_DIR_YMD)) mk_dir(UPLOAD_DIR_YMD);
                $move_file_result = move_uploaded_file($tmp_file, UPLOAD_DIR_YMD . $name_file);
                echo "<span class='text-success'>" . $name_file . "</span>" . ($move_file_result ? "上传成功了<br>\n" : "上传失败，请重试一次。<br>\n");
            } else {
                echo "您的文件<span class='text-success'>" . $name_file . "</span>以前已经上传过了。<br>\n";
            }
        }
    }
}


//
function mk_dir($pathname)
{
    mkdir($pathname, 0775, true);
}

//https://www.php.net/manual/zh/features.file-upload.errors.php
function file_error_status()
{
}






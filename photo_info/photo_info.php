<?php
if ($_POST) {
    if (isset($_POST['MAX_FILE_SIZE']) && $_FILES !== null) {
        echo json_encode($_FILES) . "<br><br>" . json_encode($_POST);
    } else {
        die("数据错误");
    }
} else {
    die("");
}

require_once dirname(dirname(__FILE__)) . "/defined.php";

$image_files = $_FILES['photo_input'];

echo "<br>";
echo "<br>";
//echo json_encode($_FILES);
echo "<br>";
echo "<br>";


$allowed_extension_name = array("jfif", "pjpeg", "jpeg", "pjp", "jpg", "tiff", "tif");
$disallow_extension_name = array("exe", "bat", "sh", "d");

$uploads_dir = "D:/wwwroot/tools/upload/";

foreach ($image_files["error"] as $k => $error) {
    if ($error === 0) {
        $tmp_file = $image_files['tmp_name'][$k];
        $name_file = $image_files['name'][$k];
        if (is_uploaded_file($tmp_file)) {
            if (!file_exists(UPLOAD_DIR_YMD . $name_file)) {
                mk_dir(UPLOAD_DIR_YMD);
                move_uploaded_file($tmp_file, UPLOAD_DIR_YMD . $name_file);
            } else {
                echo '您上传的文件 ' . $name_file . ' 已经存在' . "<br>";
            }
        }
    }
}

//
function mk_dir($pathname)
{
    return mkdir($pathname, 0775, true);
}

//https://www.php.net/manual/zh/features.file-upload.errors.php
function file_error_status()
{
}






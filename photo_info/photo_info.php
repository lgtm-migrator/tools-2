<?php

$image_files = $_FILES["photo_files"];
var_dump($_FILES);


$allowed_extension_name = array("jfif", "pjpeg", "jpeg", "pjp", "jpg", "tiff", "tif");
$disallow_extension_name = array("exe", "bat", "sh", "d");
$uploads_dir = '/uploads';

foreach ($image_files["error"] as $k => $error) {
    for ($i = 0; $i < count($image_files["error"]); $i++) {
        $temp = explode(".", $image_files["name"][$i]);
        $extension_name = end($temp);//获取文件后缀名
        if (in_array($extension_name, $allowed_extension_name)) {
            $image_name[$i] = $image_files["name"][$i];
            $image_type[$i] = $image_files["type"][$i];
            $image_size[$i] = $image_files["size"][$i];
            $image_error[$i] = $image_files["error"][$i];
            $image_tmp_name[$i] = $image_files["tmp_name"][$i];
            $image[$i] = array(
                "image_name" => $image_name[$i],
                "image_type" => $image_type[$i],
                "image_size" => $image_size[$i],
                "image_error" => $image_error[$i],
                "image_tmp_name" => $image_tmp_name[$i],
            );
        }
    }

}
//var_dump($image);


function mk_dir()
{
}

//https://www.php.net/manual/zh/features.file-upload.errors.php
function file_error_status()
{
}






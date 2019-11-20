<?php

$image_files = $_FILES["photo_files"];
echo "1";


$allowed_extension_name = array("jfif", "pjpeg", "jpeg", "pjp", "jpg", "tiff", "tif");
$disallow_extension_name = array("exe", "bat", "sh", "d");

$image_files_count = count($image_files);
if($image_files_count){
    for ($i = 0; $i <= $image_files_count; $i++) {
        foreach ($image_files[$i] as $k => $v) {
            $temp = explode(".", $image_files[$i]["name"]);
            $extension_name = end($temp);//获取文件后缀名
            if (in_array($extension_name, $allowed_extension_name)) {
                $image_name[$i] = $image_files[$i]["name"];
                $image_type[$i] = $image_files[$i]["type"];
                $image_size[$i] = $image_files[$i]["size"];
                $image_error[$i] = $image_files[$i]["error"];
                $image_tmp_name[$i] = $image_files[$i]["tmp_name"];
            }

        }
    }
}


function mk_dir()
{
}

//https://www.php.net/manual/zh/features.file-upload.errors.php
function file_error_status()
{
}






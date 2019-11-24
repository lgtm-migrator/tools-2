<?php

//
function mk_dir($pathname)
{
    mkdir($pathname, 0644, true);
}

function get_file_ext_name($file_name)
{
    $file_ext_name = substr($file_name, strrpos($file_name, '.') + 1);
    $file_ext_name = mb_strtolower($file_ext_name);

    return $file_ext_name;
}


//https://www.php.net/manual/zh/features.file-upload.errors.php
function file_error_status()
{
}
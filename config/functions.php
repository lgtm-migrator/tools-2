<?php
function custom_header_404($Context = 'No input file specified.')
{
    header('HTTP/1.1 404 Not Found');
    die($Context);
}

function mk_dir($pathname, $mode = 0744, $recursive = true)
{
    mkdir($pathname, $mode, $recursive);
}

//获取文件扩展名
function get_file_ext_name($file_name)
{
    $file_ext_name = substr($file_name, strrpos($file_name, '.') + 1);
    $file_ext_name = mb_strtolower($file_ext_name);

    return $file_ext_name;
}
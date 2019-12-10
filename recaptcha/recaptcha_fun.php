<?php


/** 获取UTC格式的时间 **/
function utc_time()
{
    date_default_timezone_set('UTC');
    $timestamp = new DateTime();
    $timeStr = $timestamp->format("Y-m-d\TH:i:s\Z");
    return $timeStr;
}

function imagecreatefromtiff($tiff_file)
{
    $info = pathinfo($tiff_file);
    $filename = $info['filename'];
    $base_dir = $info['dirname']."/";

    $jpeg_file = $base_dir.$filename.".jpg";

    // comando para conversão de tiff para jpeg
    // necessita do imagemagick num servidor unix
    $command = "convert $tiff_file $jpeg_file";

    // executa o comando
    exec($command, $result);

    return imagecreatefromjpeg($jpeg_file);
}

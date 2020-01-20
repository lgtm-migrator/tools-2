<?php


/** 获取UTC格式的时间 **/
function utc_time()
{
    date_default_timezone_set('UTC');
    $timestamp = new DateTime();
    $timeStr = $timestamp->format("Y-m-d\TH:i:s\Z");
    return $timeStr;
}

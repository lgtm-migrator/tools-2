<?php
$upload_tmp_dir = dirname(dirname(dirname(__FILE__))) . "/upload_tmp_dir/";
$upload_dir = dirname(dirname(dirname(__FILE__))) . "/upload/";
$yyyy_mm_dd = date("Y/m/d/");


if (!defined("UPLOAD_TMP_DIR")) define('UPLOAD_TMP_DIR', $upload_tmp_dir);
if (!defined("UPLOAD_DIR")) define('UPLOAD_DIR', $upload_dir);

if (!defined("UPLOAD_DIR_YMD")) define('UPLOAD_DIR_YMD', $upload_dir . $yyyy_mm_dd);


if (!file_exists(UPLOAD_DIR)) mkdir(UPLOAD_DIR, 0644, true);

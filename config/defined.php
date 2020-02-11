<?php
$php_tmp_dir = sys_get_temp_dir() . '/';
$yyyy_mm_dd = date("Y/m/d/");
$upload_tmp_dir = dirname(dirname(__DIR__)) . "/upload_tmp_dir/";
$upload_dir = dirname(dirname(__DIR__)) . "/upload/";
$session_dir = dirname(dirname(__DIR__)) . "/session_files/";


if (!defined("PHP_TMP_DIR")) define('PHP_TMP_DIR', $php_tmp_dir);

if (!defined("UPLOAD_TMP_DIR")) define('UPLOAD_TMP_DIR', $upload_tmp_dir);
if (!defined("UPLOAD_DIR")) define('UPLOAD_DIR', $upload_dir);
if (!defined("SESSION_DIR")) define('SESSION_DIR', $session_dir);

if (!defined("UPLOAD_DIR_YMD")) define('UPLOAD_DIR_YMD', UPLOAD_DIR . $yyyy_mm_dd);
if (!defined("SESSION_DIR_YMD")) define('SESSION_DIR_YMD', SESSION_DIR . $yyyy_mm_dd);


if (!file_exists(UPLOAD_DIR)) mkdir(UPLOAD_DIR, 0744, true);

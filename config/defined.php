<?php
if (defined('JZEG-NET')) exit();
define('JZEG-NET', true);

$wwwRoot = dirname(__DIR__) . '/wwwroot/';
$yyyy_mm_dd = date('Y/m/d/');
$upload_dir = $wwwRoot . '/upload/';
$upload_path = $wwwRoot . '/upload/';
$session_dir = dirname(__DIR__) . '/session_files/';

$lhmResultImg_dir = 'lhm_result/';
$lhmResultSourceImg_dir = 'lhm_result_source/';
$photoInfo_dir = 'qrcode_img/';

if (!defined('PHP_TMP_DIR')) define('PHP_TMP_DIR', sys_get_temp_dir() . '/');

if (!defined('UPLOAD_DIR')) define('UPLOAD_DIR', $upload_dir);
if (!defined('UPLOAD_YMD_DIR')) define('UPLOAD_YMD_DIR', $upload_dir . $yyyy_mm_dd);
if (!defined('SESSION_DIR')) define('SESSION_DIR', $session_dir);
if (!defined('SESSION_YMD_DIR')) define('SESSION_YMD_DIR', $session_dir . $yyyy_mm_dd);

if (!defined('LHM_RESULT_IMG_DIR')) define('LHM_RESULT_IMG_DIR', $lhmResultImg_dir);
if (!defined('LHM_RESULT_IMG_PATH')) define('LHM_RESULT_IMG_PATH', $upload_path . $lhmResultImg_dir);
if (!defined('LHM_RESULT_IMG_YMD_DIR')) define('LHM_RESULT_IMG_YMD_DIR', $lhmResultImg_dir . $yyyy_mm_dd);
if (!defined('LHM_RESULT_IMG_YMD_PATH')) define('LHM_RESULT_IMG_YMD_PATH', $upload_path . $lhmResultImg_dir . $yyyy_mm_dd);


if (!file_exists(UPLOAD_DIR)) mkdir(UPLOAD_DIR, 0744, true);

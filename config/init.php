<?php
if (!file_exists(dirname(__DIR__) . '/.env')) {
  require_once __DIR__ . '/init_functions.php';
  custom_header_404('服务器未配置，请配置服务器参数后再访问。');
}

require_once __DIR__ . '/init_define.php';

<?php
require_once dirname(dirname(__DIR__)) . '/config/env.php';

echo (defined('title')) ? title . ' - ' : '';
echo $_ENV['SITE_NAME'];

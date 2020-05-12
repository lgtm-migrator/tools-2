<?php
require_once dirname(dirname(__DIR__)) . '/vendor/autoload.php';

use Ramsey\Uuid\Uuid;

$uuid = Uuid::uuid4();

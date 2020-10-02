<?php

if ($_GET) {
  require_once dirname(dirname(dirname(__DIR__))) . '/config/init_functions.php';
  custom_header_404();
  exit();
}

if ($_POST) {
  if ($_POST['type'] === 'init') require_once dirname(dirname(dirname(__DIR__))) . '/functions/xtBus/init.php';
  if ($_POST['type'] === 'query' || $_POST['type'] === 'queryLines' || $_POST['type'] === 'queryStations') require_once dirname(dirname(dirname(__DIR__))) . '/functions/xtBus/query.php';
  if ($_POST['type'] === 'line') require_once dirname(dirname(dirname(__DIR__))) . '/functions/xtBus/line.php';
  if ($_POST['type'] === 'station') require_once dirname(dirname(dirname(__DIR__))) . '/functions/xtBus/station.php';
}

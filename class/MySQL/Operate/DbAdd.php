<?php


namespace JZEG_NET\MYSQL\Operate;

require_once dirname(__DIR__) . "/DbConnection/DataBaseConnection.php";

use JZEG_NET\MYSQL\DbConnection\DataBaseConnection;

class DbAdd extends DataBaseConnection
{
  public function __construct()
  {
    parent::__construct();
  }
}

<?php


namespace JZEG_NET\MySQL\Operate;

require_once dirname(__DIR__) . "/DbConnection/DataBaseConnection.php";

use JZEG_NET\MySQL\DbConnection\DataBaseConnection;


class DbGet extends DataBaseConnection
{
  private $db;

  private $conn_params;
  private $query_key;
  private $result_columns;
  private $table_name;
  private $where;
  private $orWhere;
  private $having;
  private $orHaving;

  public function __construct(array $conn_params, string $query_key = null, string $table_name = null, $where = null, $having = null, $orWhere = null, $orHaving = null, $result_columns = null)
  {
    if (is_array($query_key)) {
      foreach ($query_key as $key => $val) {
        $$key = $val;
      }
    }

    $this->conn_params = $conn_params;
    $this->query_key = $query_key;
    $this->result_columns = $result_columns;
    $this->table_name = $table_name;
    $this->where = $where;
    $this->having = $having;
    $this->orWhere = $orWhere;
    $this->orHaving = $orHaving;

    $this->db = parent::__construct($this->conn_params);

  }
}

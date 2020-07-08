<?php


namespace JZEG_NET\MySQL\Operate;

require_once dirname(__DIR__) . "/DbConnection/DataBaseConnection.php";

use \Exception;
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

  private $queryResult;

  public function __construct(array $conn_params, string $query_key = null, string $table_name = null, array $where = null, array $having = null, array $orWhere = null, array $orHaving = null, array $result_columns = null)
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

  public function setWhere(array $where_data)
  {
    parent::Where("category", $where_data['category']);
  }

  public function setLikeWhere(array $LikeWhere_data)
  {
    parent::where("text", "%" . $LikeWhere_data['key'] . "%", 'LIKE');
  }

  public function setLikeHaving(array $LikeHaving_data)
  {
    parent::having("text", "%" . $LikeHaving_data['key'] . "%", 'LIKE');
  }

  public function setQueryResult(array $query_data)
  {
    self::setWhere($query_data['conditions']['where']);

//    self::setLikeHaving($query_data['likeHaving']);
    self::setLikeWhere($query_data['conditions']['likeWhere']);

    try {
      $this->queryResult = parent::get($query_data['table_name'], null, $query_data['result_columns']);
    } catch (Exception $e) {
      die($e->getMessage());
    }
  }

  public function getQueryResult()
  {
    return $this->queryResult;
  }
}

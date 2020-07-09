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

  private $queryData;

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

    parent::__construct($this->conn_params);
    parent::addConnection('add', parent::getConnectParams());
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

  public function getQueryResult()
  {
    try {
      return parent::get($this->queryData['table_name'], null, $this->queryData['result_columns']);
    } catch (Exception $e) {
      die($e->getMessage());
    }
  }

  public function setQueryResult(array $query_data)
  {
    $this->queryData = $query_data;
    self::setWhere($this->queryData['conditions']['where']);

    self::setLikeHaving($this->queryData['conditions']['likeHaving']);
    self::setLikeWhere($this->queryData['conditions']['likeWhere']);
  }

  public function connection($name)
  {
    parent::connection($name);
  }
}

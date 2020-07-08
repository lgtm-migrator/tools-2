<?php


namespace JZEG_NET\MySQL\DbConnection;

use \Exception;
use MysqliDb;


class DataBaseConnection extends MysqliDb
{
  private $host;
  private $db_username;
  private $db_password;
  private $db_database_name;

  private $db_port;
  private $db_charset;
  private $db_socket;
  private $db_prefix;

  private $connect_params;

  public function __construct($host = null, string $username = null, string $password = null, $db = null, int $port = null, string $charset = 'utf8', $socket = null, string $prefix = null)
  {
    if (is_array($host)) {
      foreach ($host as $key => $val) {
        $$key = $val;
      }
    }

    $this->host = $host;
    $this->db_username = $username;
    $this->db_password = $password;
    $this->db_database_name = $db;
    $this->db_port = $port;
    $this->db_charset = $charset;
    $this->db_socket = $socket;
    $this->db_prefix = $prefix;

    self::setConnectParams();

    parent::__construct();

    parent::addConnection('add', self::getConnectParams());

    self::connection('add');

  }

  public function connection($name)
  {
    try {
      return parent::connection($name);
    } catch (Exception $e) {
      exit($e->getMessage());
    }
  }


  public function setConnectParams()
  {
    $this->connect_params = array(
      'host' => $this->host,
      'username' => $this->db_username,
      'password' => $this->db_password,
      'db' => $this->db_database_name,
      'port' => $this->db_port,
      'charset' => $this->db_charset,
      'socket' => $this->db_socket,
    );
  }

  /**
   * @return array
   */
  public function getConnectParams(): array
  {
    return $this->connect_params;
  }

}

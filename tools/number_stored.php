<?php
if (isset($_POST['number_stored'])) {
    require_once "mysqli.php";
    $result = table_num_rows("jzeg_tools/phone_number");
    echo $result;
}

function table_num_rows($database_table)
{
    global $db_host, $db_user, $db_pwd;
    $db = new MysqliDb($db_host, $db_user, $db_pwd, "information_schema");
    $db->where("NAME", $database_table);
    $query = $db->get("INNODB_TABLESTATS", null, "NUM_ROWS");
    return $query[0]["NUM_ROWS"];
}

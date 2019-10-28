<?php
if (isset($_POST['number_stored'])) {
    require_once "mysqli.php";
    $db = new MysqliDb($db_host, $db_user, $db_pwd, "information_schema");
    $db->where("NAME", "jzeg_tools/phone_number");

    $query = $db->get("INNODB_TABLESTATS", null, "NUM_ROWS");

    echo $query[0]["NUM_ROWS"];
}

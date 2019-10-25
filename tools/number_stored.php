<?php
if (isset($_POST['number_stored'])) {
    require_once "mysqli.php";
    $db = new MysqliDb($db_host, $db_user, $db_pwd, $db_database);
//    $db->rawQuery();
    echo "55";
}

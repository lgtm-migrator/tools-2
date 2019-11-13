<?php
if (isset($_POST['number_stored'])) {
    require_once "../mysqli/mysqli.php";
    $result = table_num_rows("jzeg_tools/phone_number");
    echo $result;
}

<?php

//
function mk_dir($pathname)
{
    mkdir($pathname, 0644, true);
}

//https://www.php.net/manual/zh/features.file-upload.errors.php
function file_error_status()
{
}
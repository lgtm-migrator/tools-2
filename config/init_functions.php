<?php

function custom_header_404($Context = 'No input file specified.')
{
  header('HTTP/1.1 404 Not Found');
  exit($Context);
}

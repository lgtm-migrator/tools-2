<?php
$host = $_SERVER["HTTP_HOST"];
if (0 === strpos($host, 'policies')) {
  require_once dirname(__FILE__) . '/gtag_js_policies.php';
} elseif (0 === strpos($host, 'tools')) {
  require_once dirname(__FILE__) . '/gtag_js_tools.php';
} elseif (strlen($host) === 8 || 0 === strpos($host, 'www')) {
  require_once dirname(__FILE__) . '/gtag_js_www.php';
} else {
  require_once dirname(__FILE__) . '/gtag_js_unknown.php';
}

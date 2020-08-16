<?php
require_once dirname(__DIR__) . '/config/env.php';
$siteName=$_ENV['SITE_NAME'];
$host = $_SERVER["HTTP_HOST"];
if (0 === strpos($host, 'policies')) {
  ?>
  <a class="ml-1 stretched-link text-decoration-none text-nowrap text-info" href="/" title="<?php echo $siteName; ?>政策"><?php echo $siteName; ?><span class="small">政策</span></a>
  <?php
} elseif (0 === strpos($host, 'tools')) {
  ?>
  <i class="py-2 text-warning fas fa-fw fa-tools hvr-icon"></i>
  <a class="ml-1 stretched-link text-decoration-none text-nowrap text-info" href="/" title="<?php echo $siteName; ?>小工具">小工具</a>
  <?php
} elseif (strlen($host) === 8 || 0 === strpos($host, 'www')) {
  ?>
  <a class="ml-1 stretched-link text-decoration-none text-nowrap text-info" href="/" title="<?php echo $siteName; ?>"><?php echo $siteName; ?></a>
  <?php
} else {
  ?>
  <a class="ml-1 stretched-link text-decoration-none text-nowrap text-info" href="/" title="未知页面">未知页面</a>
  <?php
}

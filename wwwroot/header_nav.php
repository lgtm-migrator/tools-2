<?php
if (!defined('SITE_HEAD')) die();
?>
<nav class="py-1 navbar navbar-expand-lg navbar-light container d-flex justify-content-between align-items-center">
  <h1 class="position-relative mb-0 h4 d-flex align-items-center hvr-icon-spin">
    <?php require_once dirname(__FILE__) . '/header_nav-text.php'; ?>
  </h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="mt-2 mt-lg-0 navbar-collapse collapse" id="navBar">
    <div class="w-lg-100 d-flex justify-content-between align-items-lg-center">
      <?php include_once dirname(__FILE__) . '/header_nav_nav-bar_menu.php'; ?>
      <?php include_once dirname(__FILE__) . '/header_nav_nav-bar_account.php'; ?>
    </div>
  </div>
</nav>

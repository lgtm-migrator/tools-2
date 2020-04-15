<?php
?>
<div class="tab-content">
  <div class="tab-pane fade" id="sign_in">
    <?php require_once dirname(__FILE__) . '/sign_in.php'; ?>
  </div>
  <div class="tab-pane fade active show" id="sign_in_phone">
    <?php require_once dirname(__FILE__) . '/sign_in_phone.php'; ?>
  </div>
  <div class="tab-pane fade" id="sign_up">
    <?php require_once dirname(__FILE__) . '/sign_up.php'; ?>
  </div>
  <div class="tab-pane fade" id="password_reset">
    <?php require_once dirname(__FILE__) . '/password_reset.php'; ?>
  </div>
</div>

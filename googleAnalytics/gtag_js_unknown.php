<?php
require_once dirname(__DIR__) . '/config/env.php';
?>
<!-- Global Site Tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo $_ENV['GOOGLE_ANALYTICS_CONFIG_UNKNOWN']; ?>"></script>
<script>
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', "<?php echo $_ENV['GOOGLE_ANALYTICS_CONFIG_UNKNOWN']; ?>");
</script>

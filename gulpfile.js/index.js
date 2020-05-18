require('./common');
require('./account_manage');
require('./member');
require('./sms');
require('./tools_static');
require('./flexible_code');
require('./debug');

const {task, series, parallel} = require('gulp');

// Combined tasks
// 合并任务
task("build_static",
  series(
    "build_account",
    "build_member",
    "build_sms",
    "build_tools",
    "build_common",
    "build_flexible_code",
    "build_debug",
  )
);
task('watch_change',
  parallel(
    'watch_account',
    'watch_member',
    'watch_sms',
    'watch_tools',
    'watch_config_json',
    'watch_flexible_code',
    'watch_debug',
  )
);
task('copy',
  parallel(
    'copy_account',
    'copy_member',
    'copy_sms',
    'copy_common',
    'copy_tools',
    'copy_flexible_code',
    'copy_debug',
  )
);

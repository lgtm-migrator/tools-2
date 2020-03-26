require('./common');
require('./user');
require('./sms');
require('./tools_static');
require('./flexible_code');

const {task, series, parallel} = require('gulp');

// Combined tasks
// 合并任务
task("build_static",
  series(
    "build_user",
    "build_sms",
    "build_tools",
    "build_common",
    "build_flexible_code",
  )
);
task('watch_change',
  parallel(
    'watch_user',
    'watch_sms',
    'watch_tools',
    'watch_config_json',
    'watch_flexible_code',
  )
);
task('copy',
  parallel(
    'copy_user',
    'copy_sms',
    'copy_common',
    'copy_tools',
    'copy_flexible_code',
  )
);

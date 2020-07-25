const {task, parallel} = require('gulp');
require('./20200628_3');

// Combined tasks
// 合并任务
task('copy_yjt',
  parallel(
    'copy_yjt_20200628_3'
  )
);
task("minimize_yjt",
  parallel(
    "minimize_yjt_20200628_3"
  )
);
task("build_yjt",
  parallel(
    "build_yjt_20200628_3"
  )
);
task("watch_yjt",
  parallel(
    "watch_yjt_20200628_3"
  )
);

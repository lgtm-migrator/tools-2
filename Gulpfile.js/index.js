require('./common');
require('./tools_static');
require('./jt_qrcode');

const {task, series, parallel} = require('gulp');

// Combined tasks
// 合并任务
task("build_static",
    series(
        "build_static_tools",
        "build_static_common",
        "build_jt_qrcode",
    )
);
task('watch_change',
    parallel(
        'watch_static',
        'watch_config_json',
        'watch_jt_qrcode',
    )
);
task('copy',
    parallel(
        'copy_common',
        'copy_jt_qrcode',
    )
);

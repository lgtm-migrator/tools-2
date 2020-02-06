require('./common');
require('./tools_static');

const {task, src, dest, series, parallel, lastRun, watch, registry, symlink} = require('gulp'),
    cleanCSS = require("gulp-clean-css"),
    autoPreFixer = require("autoprefixer"),
    postcss = require("gulp-postcss"),
    terser = require("gulp-terser"),
    concat = require('gulp-concat'),
    rename = require("gulp-rename"),
    header = require('gulp-header'),
    footer = require('gulp-footer'),
    del = require("del");

// Combined tasks
// 合并任务
task("build_static",
    parallel(
        "build_tools_static",
        "build_common_static",
    )
);

const {task, src, dest, parallel, lastRun, watch} = require('gulp'),
  cleanCSS = require("gulp-clean-css"),
  autoPreFixer = require("autoprefixer"),
  postcss = require("gulp-postcss"),
  terser = require("gulp-terser"),
  // concat = require('gulp-concat'),
  rename = require("gulp-rename");
// header = require('gulp-header'),
// footer = require('gulp-footer'),
// del = require("del");

// Static Files Path
// 静态文件路径
const
  root = "./wwwroot/",
  static_path = root + "static/",
  static_js = static_path + "js/",
  static_css = static_path + "css/",
  //页面静态文件路径
  /** 路径定义 **/
  tools_static_src_path = "./tools_static_src/",
  tools_static_src_js = tools_static_src_path + "js/",
  tools_static_src_css = tools_static_src_path + "css/",
  /** photo_info **/
  debug_js_path = tools_static_src_js + "debug.js",
  debug_css_path = tools_static_src_css + "debug.css";

// Task
// 任务
task(watch_debug);

// Combined tasks
// 合并任务
task("copy_debug",
  parallel(
    copy_debug_css,
    copy_debug_js,
  )
);
task("minimize_debug",
  parallel(
    cleanCSS_debug,
    terser_debug,
  )
);
task("build_debug",
  parallel(
    "copy_debug",
    "minimize_debug",
  )
);

// Tasks function
// 任务函数
function copy_debug_css(done) {
  src([debug_css_path], {since: lastRun(copy_debug_css)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(dest(static_css));
  done();
}

function copy_debug_js(done) {
  src([debug_js_path], {since: lastRun(copy_debug_js)})
    .pipe(dest(static_js));
  done();
}

function cleanCSS_debug(done) {
  src([debug_css_path], {since: lastRun(cleanCSS_debug)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_css));
  done();
}

function terser_debug(done) {
  src([debug_js_path], {since: lastRun(terser_debug)})
    .pipe(terser())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_js));
  done();
}

function watch_debug(done) {
  watch([debug_js_path, debug_css_path], task("build_debug"));
  done();
}

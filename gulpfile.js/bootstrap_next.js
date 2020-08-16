const {task, src, dest, parallel, lastRun, watch} = require('gulp'),
  cleanCSS = require("gulp-clean-css"),
  autoPreFixer = require("autoprefixer"),
  postcss = require("gulp-postcss"),
  terser = require("gulp-terser"),
  rename = require("gulp-rename");

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
  /** bootstrap_next **/
  bootstrap_next_js_path = tools_static_src_js + "bootstrap_next.js",
  bootstrap_next_css_path = tools_static_src_css + "bootstrap_next.css";


/**
 * Task
 * 任务
 */
task(watch_bootstrap_next);

/**
 * Combined tasks
 * 合并任务
 */
task("copy_bootstrap_next",
  parallel(
    copy_bootstrap_next_css,
    copy_bootstrap_next_js,
  )
);
task("minimize_bootstrap_next",
  parallel(
    cleanCSS_bootstrap_next,
    terser_bootstrap_next,
  )
);
task("build_bootstrap_next",
  parallel(
    "copy_bootstrap_next",
    "minimize_bootstrap_next",
  )
);

// Tasks function
// 任务函数
function copy_bootstrap_next_css(done) {
  src([bootstrap_next_css_path], {since: lastRun(copy_bootstrap_next_css)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(dest(static_css));
  done();
}

function copy_bootstrap_next_js(done) {
  src([bootstrap_next_js_path], {since: lastRun(copy_bootstrap_next_js)})
    .pipe(dest(static_js));
  done();
}

function cleanCSS_bootstrap_next(done) {
  src([bootstrap_next_css_path], {since: lastRun(cleanCSS_bootstrap_next)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_css));
  done();
}

function terser_bootstrap_next(done) {
  src([bootstrap_next_js_path], {since: lastRun(terser_bootstrap_next)})
    .pipe(terser())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_js));
  done();
}

function watch_bootstrap_next(done) {
  watch([bootstrap_next_js_path,bootstrap_next_css_path], task("build_bootstrap_next"));
  done();
}

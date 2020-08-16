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
  /** www **/
  www_js_path = tools_static_src_js + "www.js",
  www_css_path = tools_static_src_css + "www.css";


/**
 * Task
 * 任务
 */
task(watch_www);

/**
 * Combined tasks
 * 合并任务
 */
task("copy_www",
  parallel(
    copy_www_css,
    copy_www_js,
  )
);
task("minimize_www",
  parallel(
    cleanCSS_www,
    terser_www,
  )
);
task("build_www",
  parallel(
    "copy_www",
    "minimize_www",
  )
);

// Tasks function
// 任务函数
function copy_www_css(done) {
  src([www_css_path], {since: lastRun(copy_www_css)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(dest(static_css));
  done();
}

function copy_www_js(done) {
  src([www_js_path], {since: lastRun(copy_www_js)})
    .pipe(dest(static_js));
  done();
}

function cleanCSS_www(done) {
  src([www_css_path], {since: lastRun(cleanCSS_www)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_css));
  done();
}

function terser_www(done) {
  src([www_js_path], {since: lastRun(terser_www)})
    .pipe(terser())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_js));
  done();
}

function watch_www(done) {
  watch([www_js_path,www_css_path], task("build_www"));
  done();
}

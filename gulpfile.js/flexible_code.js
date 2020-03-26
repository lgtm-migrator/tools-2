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
  static_img = static_path + "img/",
  //页面静态文件路径
  /** 路径定义 **/
  tools_static_src_path = "./tools_static_src/",
  tools_static_src_js = tools_static_src_path + "js/",
  tools_static_src_css = tools_static_src_path + "css/",
  tools_static_src_img = tools_static_src_path + "img/",
  /** 灵活码 **/
  flexible_code_js_path = tools_static_src_js + "flexible_code.js",
  flexible_code_css_path = tools_static_src_css + "flexible_code.css",
  flexible_code_img_manage_path = tools_static_src_img + "lhm-manage.png";

// Task
// 任务
task(copy_flexible_code_js);
task(copy_flexible_code_css);
task(copy_flexible_code_img_manage);

task(terser_flexible_code);
task(cleanCSS_flexible_code);

task(watch_flexible_code);

// Combined tasks
// 合并任务
task('copy_flexible_code',
  parallel(
    'copy_flexible_code_js',
    'copy_flexible_code_css',
    'copy_flexible_code_img_manage',
  ));
task("minimize_flexible_code",
  parallel(
    "terser_flexible_code",
    "cleanCSS_flexible_code",
  )
);
task("build_flexible_code",
  parallel(
    "minimize_flexible_code",
    "copy_flexible_code",
  )
);

function copy_flexible_code_js(done) {
  src([flexible_code_js_path], {since: lastRun(copy_flexible_code_js)})
    .pipe(dest(static_js));
  done();
}

function terser_flexible_code(done) {
  src([flexible_code_js_path], {since: lastRun(terser_flexible_code)})
    .pipe(terser())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_js));
  done();
}

function copy_flexible_code_css(done) {
  src([flexible_code_css_path], {since: lastRun(copy_flexible_code_css)})
    .pipe(dest(static_css));
  done();
}

function copy_flexible_code_img_manage(done) {
  src([flexible_code_img_manage_path], {since: lastRun(copy_flexible_code_img_manage)})
    .pipe(dest(static_img));
  done();
}

function cleanCSS_flexible_code(done) {
  src([flexible_code_css_path], {since: lastRun(cleanCSS_flexible_code)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_css));
  done();
}

function watch_flexible_code(done) {
  watch([flexible_code_js_path, flexible_code_css_path], task("build_flexible_code"));
  done();
}

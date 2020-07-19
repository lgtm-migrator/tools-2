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
  /** account_manage **/
  account_manage_js_path = tools_static_src_js + "account_manage.js",
  account_manage_css_path = tools_static_src_css + "account_manage.css";


/**
 * Task
 * 任务
 */
task(watch_account);


/**
 * Combined Tasks
 * 合并任务
 */
task('copy_account',
  parallel(
    copy_account_js,
    copy_account_css,
  ));
task("minimize_account",
  parallel(
    terser_account,
    cleanCSS_account,
  )
);
task("build_account",
  parallel(
    "minimize_account",
    "copy_account",
  )
);

function copy_account_js(done) {
  src([account_manage_js_path], {since: lastRun(copy_account_js)})
    .pipe(dest(static_js));
  done();
}

function copy_account_css(done) {
  src([account_manage_css_path], {since: lastRun(copy_account_css)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(dest(static_css));
  done();
}

function terser_account(done) {
  src([account_manage_js_path], {since: lastRun(terser_account)})
    .pipe(terser())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_js));
  done();
}

function cleanCSS_account(done) {
  src([account_manage_css_path], {since: lastRun(cleanCSS_account)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_css));
  done();
}

function watch_account(done) {
  watch([account_manage_js_path, account_manage_css_path], task("build_member"));
  done();
}

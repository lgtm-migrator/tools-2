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
  /** user_payroll **/
  payroll_js_path = tools_static_src_js + "payroll.js",
  payroll_css_path = tools_static_src_css + "payroll.css",
  /** user_index **/
  user_index_js_path = tools_static_src_js + "user_index.js",
  user_index_css_path = tools_static_src_css + "user_index.css",
  /** account_form **/
  account_form_js_path = tools_static_src_js + "account_form.js",
  account_form_css_path = tools_static_src_css + "account_form.css";


/**
 * Task
 * 任务
 */
task(copy_member_js);
task(copy_member_css);
task(terser_member);
task(cleanCSS_member);
task(watch_member);


/**
 * Combined Tasks
 * 合并任务
 */
task('copy_member',
  parallel(
    'copy_member_js',
    'copy_member_css',
  ));
task("minimize_member",
  parallel(
    "terser_member",
    "cleanCSS_member",
  )
);
task("build_member",
  parallel(
    "minimize_member",
    "copy_member",
  )
);

function copy_member_js(done) {
  src([user_index_js_path, account_form_js_path, payroll_js_path], {since: lastRun(copy_member_js)})
    .pipe(dest(static_js));
  done();
}

function copy_member_css(done) {
  src([user_index_css_path, account_form_css_path, payroll_css_path], {since: lastRun(copy_member_css)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(dest(static_css));
  done();
}

function terser_member(done) {
  src([user_index_js_path, account_form_js_path, payroll_js_path], {since: lastRun(terser_member)})
    .pipe(terser())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_js));
  done();
}

function cleanCSS_member(done) {
  src([user_index_css_path, account_form_css_path, payroll_css_path], {since: lastRun(cleanCSS_member)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_css));
  done();
}

function watch_member(done) {
  watch([user_index_js_path, user_index_css_path, payroll_css_path, account_form_js_path, account_form_css_path, payroll_css_path], task("build_member"));
  done();
}

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
  /** exam_answer_query **/
  exam_answer_query_js_path = tools_static_src_js + "exam_answer_query.js",
  exam_answer_query_css_path = tools_static_src_css + "exam_answer_query.css",
  get_answer_js_path = tools_static_src_js + "get_answer.js",
  get_answer_css_path = tools_static_src_css + "get_answer.css";

// Task
// 任务
task(copy_exam_answer_query_js);
task(copy_exam_answer_query_css);

task(terser_exam_answer_query);
task(cleanCSS_exam_answer_query);

task(watch_exam_answer_query);

// Combined tasks
// 合并任务
task('copy_exam_answer_query',
  parallel(
    'copy_exam_answer_query_js',
    'copy_exam_answer_query_css',
  ));
task("minimize_exam_answer_query",
  parallel(
    "terser_exam_answer_query",
    "cleanCSS_exam_answer_query",
  )
);
task("build_exam_answer_query",
  parallel(
    "minimize_exam_answer_query",
    "copy_exam_answer_query",
  )
);

function copy_exam_answer_query_js(done) {
  src([exam_answer_query_js_path, get_answer_js_path], {since: lastRun(copy_exam_answer_query_js)})
    .pipe(dest(static_js));
  done();
}

function terser_exam_answer_query(done) {
  src([exam_answer_query_js_path, get_answer_js_path], {since: lastRun(terser_exam_answer_query)})
    .pipe(terser())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_js));
  done();
}

function copy_exam_answer_query_css(done) {
  src([exam_answer_query_css_path, get_answer_css_path], {since: lastRun(copy_exam_answer_query_css)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(dest(static_css));
  done();
}

function cleanCSS_exam_answer_query(done) {
  src([exam_answer_query_css_path, get_answer_css_path], {since: lastRun(cleanCSS_exam_answer_query)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_css));
  done();
}

function watch_exam_answer_query(done) {
  watch([exam_answer_query_js_path, exam_answer_query_css_path, get_answer_js_path, get_answer_css_path], task("build_exam_answer_query"));
  done();
}

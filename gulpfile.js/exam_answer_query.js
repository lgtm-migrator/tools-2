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
  item_name_path = 'exam_answer_query/',
  item_static_js_path = static_js + item_name_path,
  item_static_css_path = static_css + item_name_path,
  index_js_path = tools_static_src_js + item_name_path + "index.js",
  index_css_path = tools_static_src_css + item_name_path + "index.css",
  get_answer_js_path = tools_static_src_js + item_name_path + "get_answer.js",
  get_answer_css_path = tools_static_src_css + item_name_path + "get_answer.css";

// Task
// 任务
task(watch_exam_answer_query);

// Combined tasks
// 合并任务
task('copy_exam_answer_query',
  parallel(
    copy_exam_answer_query_js,
    copy_exam_answer_query_css
  )
);
task("minimize_exam_answer_query",
  parallel(
    terser_exam_answer_query,
    cleanCSS_exam_answer_query
  )
);
task("build_exam_answer_query",
  parallel(
    "minimize_exam_answer_query",
    "copy_exam_answer_query"
  )
);

function copy_exam_answer_query_js(done) {
  src([index_js_path, get_answer_js_path], {since: lastRun(copy_exam_answer_query_js)})
    .pipe(dest(item_static_js_path));
  done();
}

function copy_exam_answer_query_css(done) {
  src([index_css_path, get_answer_css_path], {since: lastRun(copy_exam_answer_query_css)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(dest(item_static_css_path));
  done();
}

function terser_exam_answer_query(done) {
  src([index_js_path, get_answer_js_path], {since: lastRun(terser_exam_answer_query)})
    .pipe(terser())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(item_static_js_path));
  done();
}

function cleanCSS_exam_answer_query(done) {
  src([index_css_path, get_answer_css_path], {since: lastRun(cleanCSS_exam_answer_query)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(item_static_css_path));
  done();
}

function watch_exam_answer_query(done) {
  watch([index_js_path, index_css_path, get_answer_js_path, get_answer_css_path], task("build_exam_answer_query"));
  done();
}

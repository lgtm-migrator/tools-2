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
  /** yjt/20200628_3 **/
  item_name_dir = 'yjt/',
  item_version = '20200628_3',
  item_dir = item_name_dir + item_version + '/',
  item_static_js_path = static_js + item_dir,
  item_static_css_path = static_css + item_dir,
  data_js_path = tools_static_src_js + item_dir + 'backTmp/' + item_version + ".js",
  index_js_path = tools_static_src_js + item_dir + "index.js",
  index_css_path = tools_static_src_css + item_dir + "index.css";

// Task
// 任务
task(watch_yjt_20200628_3);

// Combined tasks
// 合并任务
task('copy_yjt_20200628_3',
  parallel(
    copy_yjt_20200628_3_data,
    copy_yjt_20200628_3_js,
    copy_yjt_20200628_3_css
  )
);
task("minimize_yjt_20200628_3",
  parallel(
    terser_yjt_20200628_3,
    cleanCSS_yjt_20200628_3
  )
);
task("build_yjt_20200628_3",
  parallel(
    "minimize_yjt_20200628_3",
    "copy_yjt_20200628_3"
  )
);

function copy_yjt_20200628_3_js(done) {
  src([index_js_path], {since: lastRun(copy_yjt_20200628_3_js)})
    .pipe(dest(item_static_js_path));
  done();
}

function copy_yjt_20200628_3_css(done) {
  src([index_css_path], {since: lastRun(copy_yjt_20200628_3_css)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(dest(item_static_css_path));
  done();
}

function copy_yjt_20200628_3_data(done) {
  src([data_js_path], {since: lastRun(copy_yjt_20200628_3_data)})
    .pipe(dest(item_static_js_path));
  done();
}

function terser_yjt_20200628_3(done) {
  src([index_js_path], {since: lastRun(terser_yjt_20200628_3)})
    .pipe(terser())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(item_static_js_path));
  done();
}

function cleanCSS_yjt_20200628_3(done) {
  src([index_css_path], {since: lastRun(cleanCSS_yjt_20200628_3)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(item_static_css_path));
  done();
}

function watch_yjt_20200628_3(done) {
  watch([index_js_path, index_css_path], task("build_yjt_20200628_3"));
  done();
}

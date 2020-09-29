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
  /** yjt **/
  item_name_dir = 'yjt/',
  item_version = '',
  item_dir = item_name_dir + item_version,

  item_static_js = static_js + item_dir,
  item_static_css = static_css + item_dir,

  data_js_path = tools_static_src_js + item_dir + 'data.js',
  index_js_path = tools_static_src_js + item_dir + "index.js",
  index_css_path = tools_static_src_css + item_dir + "index.css";

// Task
// 任务
task(watch_yjt);

// Combined tasks
// 合并任务
task('copy_yjt',
  parallel(
    copy_yjt_js,
    copy_yjt_css
  )
);
task("minimize_yjt",
  parallel(
    terser_yjt,
    cleanCSS_yjt
  )
);
task("build_yjt",
  parallel(
    "minimize_yjt",
    "copy_yjt"
  )
);

function copy_yjt_js(done) {
  src([data_js_path, index_js_path], {since: lastRun(copy_yjt_js)})
    .pipe(dest(item_static_js));
  done();
}

function copy_yjt_css(done) {
  src([index_css_path], {since: lastRun(copy_yjt_css)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(dest(item_static_css));
  done();
}

function terser_yjt(done) {
  src([data_js_path, index_js_path], {since: lastRun(terser_yjt)})
    .pipe(terser())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(item_static_js));
  done();
}

function cleanCSS_yjt(done) {
  src([index_css_path], {since: lastRun(cleanCSS_yjt)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(item_static_css));
  done();
}

function watch_yjt(done) {
  watch([data_js_path, index_js_path, index_css_path], task("build_yjt"));
  done();
}

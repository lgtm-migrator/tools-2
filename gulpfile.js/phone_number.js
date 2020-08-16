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
  /** phone_number **/
  phone_number_js_path = tools_static_src_js + "phone_number.js",
  phone_number_css_path = tools_static_src_css + "phone_number.css";


/**
 * Task
 * 任务
 */
task(watch_phone_number);

/**
 * Combined tasks
 * 合并任务
 */
task("copy_phone_number",
  parallel(
    copy_phone_number_css,
    copy_phone_number_js,
  )
);
task("minimize_phone_number",
  parallel(
    cleanCSS_phone_number,
    terser_phone_number,
  )
);
task("build_phone_number",
  parallel(
    "copy_phone_number",
    "minimize_phone_number",
  )
);

// Tasks function
// 任务函数
function copy_phone_number_css(done) {
  src([phone_number_css_path], {since: lastRun(copy_phone_number_css)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(dest(static_css));
  done();
}

function copy_phone_number_js(done) {
  src([phone_number_js_path], {since: lastRun(copy_phone_number_js)})
    .pipe(dest(static_js));
  done();
}

function cleanCSS_phone_number(done) {
  src([phone_number_css_path], {since: lastRun(cleanCSS_phone_number)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_css));
  done();
}

function terser_phone_number(done) {
  src([phone_number_js_path], {since: lastRun(terser_phone_number)})
    .pipe(terser())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_js));
  done();
}

function watch_phone_number(done) {
  watch([phone_number_js_path, phone_number_css_path], task("build_phone_number"));
  done();
}

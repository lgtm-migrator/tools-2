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
  /** photo_info **/
  photo_info_js_path = tools_static_src_js + "photo_info.js",
  photo_info_css_path = tools_static_src_css + "photo_info.css";


/**
 * Task
 * 任务
 */
task(watch_photo_info);

/**
 * Combined tasks
 * 合并任务
 */
task("copy_photo_info",
  parallel(
    copy_photo_info_css,
    copy_photo_info_js,
  )
);
task("minimize_photo_info",
  parallel(
    cleanCSS_photo_info,
    terser_photo_info,
  )
);
task("build_photo_info",
  parallel(
    "copy_photo_info",
    "minimize_photo_info",
  )
);

// Tasks function
// 任务函数
function copy_photo_info_css(done) {
  src([photo_info_css_path], {since: lastRun(copy_photo_info_css)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(dest(static_css));
  done();
}

function copy_photo_info_js(done) {
  src([photo_info_js_path], {since: lastRun(copy_photo_info_js)})
    .pipe(dest(static_js));
  done();
}

function cleanCSS_photo_info(done) {
  src([photo_info_css_path], {since: lastRun(cleanCSS_photo_info)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_css));
  done();
}

function terser_photo_info(done) {
  src([photo_info_js_path], {since: lastRun(terser_photo_info)})
    .pipe(terser())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_js));
  done();
}

function watch_photo_info(done) {
  watch([photo_info_js_path, photo_info_css_path], task("build_photo_info"));
  done();
}

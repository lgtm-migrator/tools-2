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
  /** 组件路径 **/
  item_name_path = 'xtBus/',
  item_static_js_path = static_js + item_name_path,
  item_static_css_path = static_css + item_name_path,
  /** xtBus **/
  all_js_path = tools_static_src_js + item_name_path + "*.js",
  all_css_path = tools_static_src_css + item_name_path + "*.css";


/**
 * Task
 * 任务
 */
task(watch_xtBus);

/**
 * Combined tasks
 * 合并任务
 */
task("copy_xtBus",
  parallel(
    copy_xtBus_css,
    copy_xtBus_js,
  )
);
task("minimize_xtBus",
  parallel(
    cleanCSS_xtBus,
    terser_xtBus,
  )
);
task("build_xtBus",
  parallel(
    "copy_xtBus",
    "minimize_xtBus",
  )
);

// Tasks function
// 任务函数
function copy_xtBus_css(done) {
  src([all_css_path], {since: lastRun(copy_xtBus_css)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(dest(item_static_css_path));
  done();
}

function copy_xtBus_js(done) {
  src([all_js_path], {since: lastRun(copy_xtBus_js)})
    .pipe(dest(item_static_js_path));
  done();
}

function cleanCSS_xtBus(done) {
  src([all_css_path], {since: lastRun(cleanCSS_xtBus)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(item_static_css_path));
  done();
}

function terser_xtBus(done) {
  src([all_js_path], {since: lastRun(terser_xtBus)})
    .pipe(terser())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(item_static_js_path));
  done();
}

function watch_xtBus(done) {
  let all_watch_files = [
    all_js_path,
    all_css_path,
  ];
  watch(all_watch_files, task("build_xtBus"));
  done();
}

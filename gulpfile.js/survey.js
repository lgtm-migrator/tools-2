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
  /** survey **/
  survey_js_path = tools_static_src_js + "survey.js",
  survey_css_path = tools_static_src_css + "survey.css";


/**
 * Task
 * 任务
 */
task(watch_survey);

/**
 * Combined tasks
 * 合并任务
 */
task("copy_survey",
  parallel(
    copy_survey_css,
    copy_survey_js,
  )
);
task("minimize_survey",
  parallel(
    cleanCSS_survey,
    terser_survey,
  )
);
task("build_survey",
  parallel(
    "copy_survey",
    "minimize_survey",
  )
);

// Tasks function
// 任务函数
function copy_survey_css(done) {
  src([survey_css_path], {since: lastRun(copy_survey_css)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(dest(static_css));
  done();
}

function copy_survey_js(done) {
  src([survey_js_path], {since: lastRun(copy_survey_js)})
    .pipe(dest(static_js));
  done();
}

function cleanCSS_survey(done) {
  src([survey_css_path], {since: lastRun(cleanCSS_survey)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_css));
  done();
}

function terser_survey(done) {
  src([survey_js_path], {since: lastRun(terser_survey)})
    .pipe(terser())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_js));
  done();
}

function watch_survey(done) {
  watch([survey_js_path, survey_css_path], task("build_survey"));
  done();
}

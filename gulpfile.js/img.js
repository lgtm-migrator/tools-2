const {task, src, dest, parallel, lastRun, watch} = require('gulp');

// Static Files Path
// 静态文件路径
const
  root = "./wwwroot/",
  static_path = root + "static/",
  static_img = static_path + "img/",
  /** footer_img **/
  socialGroupQrcode_all_jpg_path = "./tools_static_src/img/footer_img/socialGroupQrcode_*.jpg";

//Task
task(watch_all_img);

// Combined tasks
// 合并任务
task("copy_all_img",
  parallel(
    copy_all_jpg,
  )
);

//Tasks function
function copy_all_jpg(done) {
  src([socialGroupQrcode_all_jpg_path], {since: lastRun(copy_all_jpg)})
    .pipe(dest(static_img));
  done();
}

function watch_all_img(done) {
  watch([socialGroupQrcode_all_jpg_path], task('copy_all_img'));
  done();
}

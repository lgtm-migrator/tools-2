const gulp = require("gulp");
const terser = require("gulp-terser");
const rename = require("gulp-rename");
const header = require('gulp-header');
const footer = require('gulp-footer');


//Static Files Path
const static_path = "../static";
const static_js = static_path + "/js/";
const static_css = static_path + "/css/";

//FunDebug
const fundebug_js_path = "./node_modules/fundebug-javascript/release/fundebug.2.0.0.min.js";

//bootstrap-toasts
const bootstrap_toasts_js_path = "./node_modules/bootstrap-toasts/dist/bootstrap-toasts.js";
const bootstrap_toasts_min_js_path = "./node_modules/bootstrap-toasts/dist/bootstrap-toasts.min.js";

//bootstrap-modal-js
const bootstrap_modal_js_js_path = "./node_modules/bootstrap-modal-js/dist/bootstrap-modal-js.js";
const bootstrap_modal_js_min_js_path = "./node_modules/bootstrap-modal-js/dist/bootstrap-modal-js.min.js";

//lazyload
const lazyload_js_path = "./node_modules/vanilla-lazyload/dist/lazyload.js";
const lazyload_min_js_path = "./node_modules/vanilla-lazyload/dist/lazyload.min.js";
const lazyload_min_js_map_path = "./node_modules/vanilla-lazyload/dist/lazyload.min.js.map";

//jquery
const jquery_js_path = "./node_modules/jquery/dist/jquery.js";
const jquery_min_js_path = "./node_modules/jquery/dist/jquery.min.js";

// popper.js
const popper_js_path = "./node_modules/popper.js/dist/umd/popper.js";
const popper_min_js_path = "./node_modules/popper.js/dist/umd/popper.min.js";
const popper_js_map_path = "./node_modules/popper.js/dist/umd/popper.js.map";
const popper_min_js_map_path = "./node_modules/popper.js/dist/umd/popper.min.js.map";

// Bootstrap
const bs_js_path = "./node_modules/bootstrap/dist/js/bootstrap.js";
const bs_min_js_path = "./node_modules/bootstrap/dist/js/bootstrap.min.js";
const bs_js_map_path = "./node_modules/bootstrap/dist/js/bootstrap.js.map";
const bs_min_js_map_path = "./node_modules/bootstrap/dist/js/bootstrap.min.js.map";
const bs_css_path = "./node_modules/bootstrap/dist/css/bootstrap.css";
const bs_min_css_path = "./node_modules/bootstrap/dist/css/bootstrap.min.css";
const bs_css_map_path = "./node_modules/bootstrap/dist/css/bootstrap.css.map";
const bs_min_css_map = "./node_modules/bootstrap/dist/css/bootstrap.min.css.map";

//vue
const vue_js_path = "./node_modules/vue/dist/vue.js";
const vue_min_js_path = "./node_modules/vue/dist/vue.min.js";

//font
const font_css_path = "./node_modules/@fortawesome/fontawesome-free/css/all.css";
const font_min_css_path = "./node_modules/@fortawesome/fontawesome-free/css/all.min.css";
const font_webfonts_path = "./node_modules/@fortawesome/fontawesome-free/webfonts/*";

//video.js
const video_js_path = "./node_modules/video.js/dist/video.js";
const video_min_js_path = "./node_modules/video.js/dist/video.min.js";
const video_lang_js_path = "./node_modules/video.js/dist/lang/zh-CN.js";
const video_css_path = "./node_modules/video.js/dist/video-js.css";
const video_min_css_path = "./node_modules/video.js/dist/video-js.min.css";

//viewerjs
const viewerjs_min_css_path = "./node_modules/viewerjs/dist/viewer.min.css";
const viewerjs_min_js_path = "./node_modules/viewerjs/dist/viewer.min.js";

//canvas-nest.js
const canvas_nest_umd_js_path = "./node_modules/canvas-nest.js/dist/canvas-nest.umd.js";

//bowser.js
const bowser_es5_js_path = "./node_modules/bowser/es5.js";
const bowser_src_path = "./node_modules/bowser/src/*";
const bowser_bundled_js_path = "./node_modules/bowser/bundled.js";

//lax.js
const lax_js_path = "./node_modules/lax.js/lib/lax.js";
const lax_min_js_path = "./node_modules/lax.js/lib/lax.min.js";

gulp.task("copy_fonts", copy_fonts);
gulp.task("copy_jq", copy_jq);
gulp.task("copy_popper", copy_popper);
gulp.task("copy_bs", copy_bs);
gulp.task("copy_bmj", copy_bmj);
gulp.task("copy_lazyload", copy_lazyload);
gulp.task("copy_bt", copy_bt);
gulp.task("copy_vue", copy_vue);
gulp.task("copy_video", copy_video);
gulp.task("copy_viewerjs", copy_viewerjs);
gulp.task("copy_canvas_nest", copy_canvas_nest);
gulp.task("copy_bowser", copy_bowser);
gulp.task("copy_lax", copy_lax);
gulp.task("copy_fundebug", copy_fundebug);


// gulp.task("add_header", add_fundebug_api);
gulp.task("add_footer", add_fundebug_api);


function copy_fonts(done) {
    gulp.src([font_css_path, font_min_css_path]).pipe(gulp.dest(static_path + "/font/css"));
    gulp.src([font_webfonts_path]).pipe(gulp.dest(static_path + "/font/webfonts"));
    done();
}

function copy_lazyload(done) {
    gulp.src([lazyload_js_path, lazyload_min_js_path, lazyload_min_js_map_path]).pipe(gulp.dest(static_js));
    done();
}

function copy_fundebug(done) {
    gulp.src([fundebug_js_path]).pipe(gulp.dest(static_js));
    done();
}

function copy_bmj(done) {
    gulp.src([bootstrap_modal_js_js_path, bootstrap_modal_js_min_js_path]).pipe(gulp.dest(static_js));
    done();
}

function copy_bs(done) {
    gulp.src([bs_js_path, bs_min_js_path, bs_js_map_path, bs_min_js_map_path]).pipe(gulp.dest(static_js));
    gulp.src([bs_css_path, bs_min_css_path, bs_css_map_path, bs_min_css_map]).pipe(gulp.dest(static_css));
    done();
}

function copy_popper(done) {
    gulp.src([popper_js_path, popper_min_js_path, popper_js_map_path, popper_min_js_map_path]).pipe(gulp.dest(static_js));
    done();
}

function copy_bt(done) {
    gulp.src([bootstrap_toasts_js_path, bootstrap_toasts_min_js_path]).pipe(gulp.dest(static_js));
    done();
}

function copy_jq(done) {
    gulp.src([jquery_js_path, jquery_min_js_path]).pipe(gulp.dest(static_js));
    done();
}

function copy_vue(done) {
    gulp.src([vue_js_path, vue_min_js_path]).pipe(gulp.dest(static_js));
    done();
}

function copy_video(done) {
    gulp.src([video_js_path, video_min_js_path]).pipe(gulp.dest(static_js));
    gulp.src([video_lang_js_path])
        .pipe(rename({
            prefix: "video."
        }))
        .pipe(gulp.dest(static_js));
    gulp.src([video_css_path, video_min_css_path]).pipe(gulp.dest(static_css));
    done();
}

function copy_viewerjs(done) {
    gulp.src([viewerjs_min_js_path]).pipe(gulp.dest(static_js));
    gulp.src([viewerjs_min_css_path]).pipe(gulp.dest(static_css));
    done();
}

function copy_canvas_nest(done) {
    gulp.src([canvas_nest_umd_js_path]).pipe(gulp.dest(static_js));
    done();
}

function copy_bowser(done) {
    gulp.src([bowser_es5_js_path, bowser_bundled_js_path])
        .pipe(gulp.dest(static_path + "/js/bowser/"));
    gulp.src([bowser_src_path])
        .pipe(gulp.dest(static_path + "/js/bowser/src"));
    done();
}

function copy_lax(done) {
    gulp.src([lax_js_path, lax_min_js_path]).pipe(gulp.dest(static_js));
    done();
}

function add_fundebug_api(done) {
    const add_text = '\nfundebug.apikey = "3d4b48db363609255fd0abb3cfa559ca84a7a4ca4ca8922fbd42d8d38e2c36a4";\n';
    gulp.src(static_js + 'fundebug.2.0.0.min.js')
        .pipe(footer(add_text))
        .pipe(rename('fundebug.min.js'))
        .pipe(gulp.dest(static_js));
    done();
}

const gulp = require("gulp");
const terser = require("gulp-terser");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const header = require('gulp-header');
const footer = require('gulp-footer');


//Static Files Path
const static_path = "./static/",
    static_js = static_path + "js/",
    static_css = static_path + "css/",

//bootstrap-toasts
    bootstrap_toasts_js_path = "./node_modules/bootstrap-toasts/dist/bootstrap-toasts.js",
    bootstrap_toasts_min_js_path = "./node_modules/bootstrap-toasts/dist/bootstrap-toasts.min.js",

//bootstrap-modal-js
    bootstrap_modal_js_js_path = "./node_modules/bootstrap-modal-js/dist/bootstrap-modal-js.js",
    bootstrap_modal_js_min_js_path = "./node_modules/bootstrap-modal-js/dist/bootstrap-modal-js.min.js",

//bs-custom-file-input
    bs_custom_file_input_js_path = "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js",
    bs_custom_file_input_min_js_path = "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.min.js",

//lazyload
    lazyload_js_path = "./node_modules/vanilla-lazyload/dist/lazyload.js",
    lazyload_min_js_path = "./node_modules/vanilla-lazyload/dist/lazyload.min.js",
    lazyload_min_js_map_path = "./node_modules/vanilla-lazyload/dist/lazyload.min.js.map",

//js.cookie.js
    js_cookie_min_js_path = "./node_modules/js-cookie/dist/js.cookie.min.js",
    js_cookie_min_mjs_path = "./node_modules/js-cookie/dist/js.cookie.min.mjs",

//jquery
    jquery_js_path = "./node_modules/jquery/dist/jquery.js",
    jquery_min_js_path = "./node_modules/jquery/dist/jquery.min.js",

// popper.js
    popper_js_path = "./node_modules/popper.js/dist/umd/popper.js",
    popper_min_js_path = "./node_modules/popper.js/dist/umd/popper.min.js",
    popper_js_map_path = "./node_modules/popper.js/dist/umd/popper.js.map",
    popper_min_js_map_path = "./node_modules/popper.js/dist/umd/popper.min.js.map",

// Bootstrap
    bs_js_path = "./node_modules/bootstrap/dist/js/bootstrap.js",
    bs_min_js_path = "./node_modules/bootstrap/dist/js/bootstrap.min.js",
    bs_js_map_path = "./node_modules/bootstrap/dist/js/bootstrap.js.map",
    bs_min_js_map_path = "./node_modules/bootstrap/dist/js/bootstrap.min.js.map",
    bs_css_path = "./node_modules/bootstrap/dist/css/bootstrap.css",
    bs_min_css_path = "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    bs_css_map_path = "./node_modules/bootstrap/dist/css/bootstrap.css.map",
    bs_min_css_map = "./node_modules/bootstrap/dist/css/bootstrap.min.css.map",

//vue
    vue_js_path = "./node_modules/vue/dist/vue.js",
    vue_min_js_path = "./node_modules/vue/dist/vue.min.js",

//font
    font_css_path = "./node_modules/@fortawesome/fontawesome-free/css/all.css",
    font_min_css_path = "./node_modules/@fortawesome/fontawesome-free/css/all.min.css",
    font_webfonts_path = "./node_modules/@fortawesome/fontawesome-free/webfonts/*",

//video.js
    video_js_path = "./node_modules/video.js/dist/video.js",
    video_min_js_path = "./node_modules/video.js/dist/video.min.js",
    video_lang_js_path = "./node_modules/video.js/dist/lang/zh-CN.js",
    video_css_path = "./node_modules/video.js/dist/video-js.css",
    video_min_css_path = "./node_modules/video.js/dist/video-js.min.css",

//viewerjs
    viewerjs_min_css_path = "./node_modules/viewerjs/dist/viewer.min.css",
    viewerjs_min_js_path = "./node_modules/viewerjs/dist/viewer.min.js",

//canvas-nest.js
    canvas_nest_umd_js_path = "./node_modules/canvas-nest.js/dist/canvas-nest.umd.js",

//bowser.js
    bowser_es5_js_path = "./node_modules/bowser/es5.js",
    bowser_src_path = "./node_modules/bowser/src/*",
    bowser_bundled_js_path = "./node_modules/bowser/bundled.js",

//lax.js
    lax_js_path = "./node_modules/lax.js/lib/lax.js",
    lax_min_js_path = "./node_modules/lax.js/lib/lax.min.js",

//FunDebug
    fundebug_js_path = "./node_modules/fundebug-javascript/release/fundebug." + "*.*.*" + ".min.js",

//moment.js
    moment_js_path = "./node_modules/moment/src/moment.js",
    moment_min_js_path = "./node_modules/moment/min/moment.min.js",
    moment_with_locales_js_path = "./node_modules/moment/min/moment-with-locales.js",
    moment_with_locales_min_js_path = "./node_modules/moment/min/moment-with-locales.min.js",

//clipboard.js
    clipboard_min_js_path = "./node_modules/clipboard/dist/clipboard.min.js",


    /** 文件路径 **/
//tools.js
    tools_js_path = "tools.js",
    tools_dest_js_path = "./",
//tools.css
    tools_css_path = "tools.css",
    tools_dest_css_path = "./",

//index.js
    index_js_path = "index.js",
    index_dest_js_path = "./",
//index.css
    index_css_path = "index.css",
    index_dest_css_path = "./",

//phone_number.js
    phone_number_js_path = "phone_number/js/phone_number.js",
    phone_number_dest_js_path = "phone_number/js",
//phone_number.css
    phone_number_css_path = "phone_number/css/phone_number.css",
    phone_number_dest_css_path = "phone_number/css",

//photo_info.js
    photo_info_js_path = "photo_info/js/photo_info.js",
    photo_info_dest_js_path = "photo_info/js",
//photo_info.css
    photo_info_css_path = "photo_info/css/photo_info.css",
    photo_info_dest_css_path = "photo_info/css";


gulp.task("terser_tools_js", terser_tools_js);
gulp.task("terser_index_js", terser_index_js);
gulp.task("terser_phone_number_js", terser_phone_number_js);
gulp.task("terser_photo_info_js", terser_photo_info_js);

gulp.task("cleanCSS_tools_css", cleanCSS_tools_css);
gulp.task("cleanCSS_index_css", cleanCSS_index_css);
gulp.task("cleanCSS_phone_number_css", cleanCSS_phone_number_css);
gulp.task("cleanCSS_photo_info_css", cleanCSS_photo_info_css);


gulp.task("copy_fonts", copy_fonts);
gulp.task("copy_js_cookie", copy_js_cookie);
gulp.task("copy_jq", copy_jq);
gulp.task("copy_popper", copy_popper);
gulp.task("copy_bs", copy_bs);
gulp.task("copy_bmj", copy_bmj);
gulp.task("copy_bs_custom_file_input", copy_bs_custom_file_input);
gulp.task("copy_moment", copy_moment);
gulp.task("copy_clipboard", copy_clipboard);


gulp.task("copy_lazyload", copy_lazyload);
gulp.task("copy_bt", copy_bt);
gulp.task("copy_vue", copy_vue);
gulp.task("copy_video", copy_video);
gulp.task("copy_viewerjs", copy_viewerjs);
gulp.task("copy_canvas_nest", copy_canvas_nest);
gulp.task("copy_bowser", copy_bowser);
gulp.task("copy_lax", copy_lax);


// gulp.task("add_header", add_fundebug_api);
gulp.task("add_footer", add_fundebug_api);

function terser_tools_js(done) {
    gulp.src([tools_js_path])
        .pipe(terser())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(tools_dest_js_path));
    done();
}

function terser_index_js(done) {
    gulp.src([index_js_path])
        .pipe(terser())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(index_dest_js_path));
    done();
}

function terser_phone_number_js(done) {
    gulp.src([phone_number_js_path])
        .pipe(terser())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(phone_number_dest_js_path));
    done();
}

function terser_photo_info_js(done) {
    gulp.src([photo_info_js_path])
        .pipe(terser())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(photo_info_dest_js_path));
    done();
}

function cleanCSS_tools_css(done) {
    gulp.src([tools_css_path])
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(tools_dest_css_path));
    done();
}

function cleanCSS_index_css(done) {
    gulp.src([index_css_path])
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(index_dest_css_path));
    done();
}

function cleanCSS_phone_number_css(done) {
    gulp.src([phone_number_css_path])
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(phone_number_dest_css_path));
    done();
}

function cleanCSS_photo_info_css(done) {
    gulp.src([photo_info_css_path])
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(photo_info_dest_css_path));
    done();
}


function copy_fonts(done) {
    gulp.src([font_css_path, font_min_css_path]).pipe(gulp.dest(static_path + "/font/css"));
    gulp.src([font_webfonts_path]).pipe(gulp.dest(static_path + "/font/webfonts"));
    done();
}

function copy_lazyload(done) {
    gulp.src([lazyload_js_path, lazyload_min_js_path, lazyload_min_js_map_path]).pipe(gulp.dest(static_js));
    done();
}

function copy_bmj(done) {
    gulp.src([bootstrap_modal_js_js_path, bootstrap_modal_js_min_js_path]).pipe(gulp.dest(static_js));
    done();
}

function copy_bs_custom_file_input(done) {
    gulp.src([bs_custom_file_input_js_path, bs_custom_file_input_min_js_path]).pipe(gulp.dest(static_js));
    done();
}

function copy_moment(done) {
    gulp.src([moment_with_locales_js_path, moment_with_locales_min_js_path])
        .pipe(gulp.dest(static_js));
    done();
}

function copy_clipboard(done) {
    gulp.src([clipboard_min_js_path])
        .pipe(gulp.dest(static_js));
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

function copy_js_cookie(done) {
    gulp.src([js_cookie_min_js_path, js_cookie_min_mjs_path]).pipe(gulp.dest(static_js));
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

    gulp.src([fundebug_js_path])
        .pipe(footer(add_text))
        .pipe(rename('fundebug.min.js'))
        .pipe(gulp.dest(static_js));
    done();
}

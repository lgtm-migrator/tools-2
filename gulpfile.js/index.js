const {task, src, dest, series, parallel, lastRun, watch, registry, symlink} = require('gulp');
const cleanCSS = require("gulp-clean-css");
const autoPreFixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const terser = require("gulp-terser");
const concat = require('gulp-concat');
const rename = require("gulp-rename");
const header = require('gulp-header');
const footer = require('gulp-footer');
const del = require("del");

//Static Files Path
const
    static_path = "./static/",
    static_js = static_path + "js/",
    static_css = static_path + "css/",
    /** bootstrap-toasts **/
    bootstrap_toasts_js_path = "./node_modules/bootstrap-toasts/dist/bootstrap-toasts.js",
    bootstrap_toasts_min_js_path = "./node_modules/bootstrap-toasts/dist/bootstrap-toasts.min.js",
    /** bootstrap-modal-js **/
    bootstrap_modal_js_js_path = "./node_modules/bootstrap-modal-js/dist/bootstrap-modal-js.js",
    bootstrap_modal_js_min_js_path = "./node_modules/bootstrap-modal-js/dist/bootstrap-modal-js.min.js",
    /** bs-custom-file-input **/
    bs_custom_file_input_dist_path = "./node_modules/bs-custom-file-input/dist/*",
    /** lazyload **/
    lazyload_js_path = "./node_modules/vanilla-lazyload/dist/lazyload.js",
    lazyload_min_js_path = "./node_modules/vanilla-lazyload/dist/lazyload.min.js",
    lazyload_min_js_map_path = "./node_modules/vanilla-lazyload/dist/lazyload.min.js.map",
    /** js.cookie.js **/
    js_cookie_min_js_path = "./node_modules/js-cookie/dist/js.cookie.min.js",
    js_cookie_min_mjs_path = "./node_modules/js-cookie/dist/js.cookie.min.mjs",
    /** jquery **/
    jquery_js_path = "./node_modules/jquery/dist/jquery.js",
    jquery_min_js_path = "./node_modules/jquery/dist/jquery.min.js",
    /** popper.js **/
    popper_js_path = "./node_modules/popper.js/dist/umd/popper.js",
    popper_min_js_path = "./node_modules/popper.js/dist/umd/popper.min.js",
    popper_js_map_path = "./node_modules/popper.js/dist/umd/popper.js.map",
    popper_min_js_map_path = "./node_modules/popper.js/dist/umd/popper.min.js.map",
    /** Bootstrap **/
    bootstrap_js_path = "./node_modules/bootstrap/dist/js/bootstrap.js",
    bootstrap_min_js_path = "./node_modules/bootstrap/dist/js/bootstrap.min.js",
    bootstrap_js_map_path = "./node_modules/bootstrap/dist/js/bootstrap.js.map",
    bootstrap_min_js_map_path = "./node_modules/bootstrap/dist/js/bootstrap.min.js.map",
    bootstrap_css_path = "./node_modules/bootstrap/dist/css/bootstrap.css",
    bootstrap_min_css_path = "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    bootstrap_css_map_path = "./node_modules/bootstrap/dist/css/bootstrap.css.map",
    bootstrap_min_css_map = "./node_modules/bootstrap/dist/css/bootstrap.min.css.map",
    /** vue **/
    vue_js_path = "./node_modules/vue/dist/vue.js",
    vue_min_js_path = "./node_modules/vue/dist/vue.min.js",
    /** fontawesome-free **/
    all_fontawesome_free_path = "./node_modules/@fortawesome/fontawesome-free/**/*",
    /** video.js **/
    video_js_path = "./node_modules/video.js/dist/video.js",
    video_min_js_path = "./node_modules/video.js/dist/video.min.js",
    video_lang_js_path = "./node_modules/video.js/dist/lang/zh-CN.js",
    video_css_path = "./node_modules/video.js/dist/video-js.css",
    video_min_css_path = "./node_modules/video.js/dist/video-js.min.css",
    /** viewerjs **/
    viewerjs_min_css_path = "./node_modules/viewerjs/dist/viewer.min.css",
    viewerjs_min_js_path = "./node_modules/viewerjs/dist/viewer.min.js",
    /** canvas-nest.js **/
    canvas_nest_umd_js_path = "./node_modules/canvas-nest.js/dist/canvas-nest.umd.js",
    /** bowser.js **/
    bowser_es5_js_path = "./node_modules/bowser/es5.js",
    bowser_src_path = "./node_modules/bowser/src/*",
    bowser_bundled_js_path = "./node_modules/bowser/bundled.js",
    /** lax.js **/
    lax_js_path = "./node_modules/lax.js/lib/lax.js",
    lax_min_js_path = "./node_modules/lax.js/lib/lax.min.js",
    /** FunDebug **/
    fundebug_js_path = "./node_modules/fundebug-javascript/release/fundebug." + "*.*.*" + ".min.js",
    /** dayjs.js **/
    concat_after_file_name = "day_js_with_locale.min.js",
    dayjs_min_js_path = "./node_modules/dayjs/dayjs.min.js",
    dayjs_locale_zh_cn_js_path = "./node_modules/dayjs/locale/zh-cn.js",
    /** animate.css **/
    animate_css_path = "./node_modules/animate.css/animate.css",
    animate_min_css_path = "./node_modules/animate.css/animate.min.css",
    /** hover.css **/
    hover_min_css_path = "./node_modules/hover.css/css/hover-min.css",
    /** hamburgers.css **/
    hamburgers_css_path = "./node_modules/hamburgers/dist/hamburgers.css",
    hamburgers_min_css_path = "./node_modules/hamburgers/dist/hamburgers.min.css",
    /** node-qrcode **/
    qrcode_build_path = "./node_modules/qrcode/build/*",
    /** clipboard.js **/
    clipboard_min_js_path = "./node_modules/clipboard/dist/clipboard.min.js",
    //页面静态文件路径
    /** 路径定义 **/
    tools_static_src_path = "./tools_static_src/",
    tools_static_src_js = tools_static_src_path + "js/",
    tools_static_src_css = tools_static_src_path + "css/",
    /** tools **/
    tools_js_path = tools_static_src_js + "tools.js",
    tools_css_path = tools_static_src_css + "tools.css",
    /** index **/
    index_js_path = tools_static_src_js + "index.js",
    index_css_path = tools_static_src_css + "index.css",
    /** phone_number **/
    phone_number_js_path = tools_static_src_js + "phone_number.js",
    phone_number_css_path = tools_static_src_css + "phone_number.css",
    /** photo_info **/
    photo_info_js_path = tools_static_src_js + "photo_info.js",
    photo_info_css_path = tools_static_src_css + "photo_info.css";

//Task
task(terser_tools_js);
task(terser_index_js);
task(terser_phone_number_js);
task(terser_photo_info_js);

task(cleanCSS_tools_css);
task(cleanCSS_index_css);
task(cleanCSS_phone_number_css);
task(cleanCSS_photo_info_css);

task(copy_fontawesome_free);
task(copy_js_cookie);
task(copy_jquery);
task(copy_popper);
task(copy_bootstrap);
task(copy_animate_css);
task(copy_hover_css);
task(copy_hamburgers_css);
task(copy_bootstrap_modal_js);
task(copy_bs_custom_file_input);
task(copy_dayjs);
task(copy_clipboard);
task(copy_qrcode);

// Standby tasks
task(copy_lazyload);
task(copy_bootstrap_toasts_js);
task(copy_vue);
task(copy_video);
task(copy_viewerjs);
task(copy_canvas_nest);
task(copy_bowser);
task(copy_lax);

/** task("add_header"); **/
task(add_footer_funDebug_api);
task(watch_static);

//Combined tasks
task("copy",
    parallel(
        copy_fontawesome_free,
        copy_js_cookie,
        copy_jquery,
        copy_popper,
        copy_bootstrap,
        copy_animate_css,
        copy_hover_css,
        copy_hamburgers_css,
        copy_bootstrap_modal_js,
        copy_bs_custom_file_input,
        copy_dayjs,
        copy_clipboard,
        copy_qrcode,
    )
);
task("terser",
    parallel(
        terser_tools_js,
        terser_index_js,
        terser_phone_number_js,
        terser_photo_info_js,
    )
);
task("cleanCSS",
    parallel(
        cleanCSS_tools_css,
        cleanCSS_index_css,
        cleanCSS_phone_number_css,
        cleanCSS_photo_info_css,
    )
);
task("add_footer",
    parallel(
        add_footer_funDebug_api,
    )
);
task("minimize_local_static",
    parallel(
        "terser",
        "cleanCSS",
    )
);
task("build_static",
    parallel(
        "add_footer",
        "copy",
        "minimize_local_static",
    )
);

//Tasks function
function terser_tools_js(done) {
    src([tools_js_path], {since: lastRun(terser_tools_js)})
        .pipe(dest(static_js));
    src([tools_js_path], {since: lastRun(terser_tools_js)})
        .pipe(terser())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_js));
    done();
}

function terser_index_js(done) {
    src([index_js_path], {since: lastRun(terser_index_js)})
        .pipe(dest(static_js));
    src([index_js_path], {since: lastRun(terser_index_js)})
        .pipe(terser())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_js));
    done();
}

function terser_phone_number_js(done) {
    src([phone_number_js_path], {since: lastRun(terser_phone_number_js)})
        .pipe(dest(static_js));
    src([phone_number_js_path], {since: lastRun(terser_phone_number_js)})
        .pipe(terser())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_js));
    done();
}

function terser_photo_info_js(done) {
    src([photo_info_js_path], {since: lastRun(terser_photo_info_js)})
        .pipe(dest(static_js));
    src([photo_info_js_path], {since: lastRun(terser_photo_info_js)})
        .pipe(terser())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_js));
    done();
}

function cleanCSS_tools_css(done) {
    src([tools_css_path], {since: lastRun(cleanCSS_tools_css)})
        .pipe(dest(static_css));
    src([tools_css_path], {since: lastRun(cleanCSS_tools_css)})
        .pipe(postcss([autoPreFixer()]))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_css));
    done();
}

function cleanCSS_index_css(done) {
    src([index_css_path], {since: lastRun(cleanCSS_index_css)})
        .pipe(dest(static_css));
    src([index_css_path], {since: lastRun(cleanCSS_index_css)})
        .pipe(postcss([autoPreFixer()]))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_css));
    done();
}

function cleanCSS_phone_number_css(done) {
    src([phone_number_css_path], {since: lastRun(cleanCSS_phone_number_css)})
        .pipe(dest(static_css));
    src([phone_number_css_path], {since: lastRun(cleanCSS_phone_number_css)})
        .pipe(postcss([autoPreFixer()]))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_css));
    done();
}

function cleanCSS_photo_info_css(done) {
    src([photo_info_css_path], {since: lastRun(cleanCSS_photo_info_css)})
        .pipe(dest(static_css));
    src([photo_info_css_path], {since: lastRun(cleanCSS_photo_info_css)})
        .pipe(postcss([autoPreFixer()]))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_css));
    done();
}

function copy_fontawesome_free(done) {
    src([all_fontawesome_free_path], {since: lastRun(copy_fontawesome_free)})
        .pipe(dest(static_path + "/font/"));
    done();
}

function copy_bootstrap_modal_js(done) {
    src([bootstrap_modal_js_js_path, bootstrap_modal_js_min_js_path], {since: lastRun(copy_bootstrap_modal_js)})
        .pipe(dest(static_js));
    done();
}

function copy_bs_custom_file_input(done) {
    src([bs_custom_file_input_dist_path], {since: lastRun(copy_bs_custom_file_input)})
        .pipe(dest(static_js));
    done();
}

function copy_dayjs(done) {
    src([dayjs_min_js_path, dayjs_locale_zh_cn_js_path], {since: lastRun(copy_dayjs)})
        .pipe(concat(concat_after_file_name))
        .pipe(dest(static_js));
    done();
}

function copy_clipboard(done) {
    src([clipboard_min_js_path], {since: lastRun(copy_clipboard)})
        .pipe(dest(static_js));
    done();
}

function copy_qrcode(done) {
    src([qrcode_build_path], {since: lastRun(copy_qrcode)})
        .pipe(dest(static_js));
    done();
}

function copy_bootstrap(done) {
    src([bootstrap_js_path, bootstrap_min_js_path, bootstrap_js_map_path, bootstrap_min_js_map_path], {since: lastRun(copy_bootstrap)})
        .pipe(dest(static_js));
    src([bootstrap_css_path, bootstrap_min_css_path, bootstrap_css_map_path, bootstrap_min_css_map], {since: lastRun(copy_bootstrap)})
        .pipe(dest(static_css));
    done();
}

function copy_animate_css(done) {
    src([animate_css_path, animate_min_css_path], {since: lastRun(copy_animate_css)})
        .pipe(dest(static_css));
    done();
}

function copy_hover_css(done) {
    src([hover_min_css_path], {since: lastRun(copy_hover_css)})
        .pipe(rename("hover.min.css"))
        .pipe(dest(static_css));
    done();
}

function copy_hamburgers_css(done) {
    src([hamburgers_css_path, hamburgers_min_css_path], {since: lastRun(copy_hamburgers_css)})
        .pipe(dest(static_css));
    done();
}

function copy_popper(done) {
    src([popper_js_path, popper_min_js_path, popper_js_map_path, popper_min_js_map_path], {since: lastRun(copy_popper)})
        .pipe(dest(static_js));
    done();
}

function copy_jquery(done) {
    src([jquery_js_path, jquery_min_js_path], {since: lastRun(copy_jquery)})
        .pipe(dest(static_js));
    done();
}

function copy_js_cookie(done) {
    src([js_cookie_min_js_path, js_cookie_min_mjs_path], {since: lastRun(copy_js_cookie)})
        .pipe(dest(static_js));
    done();
}

function copy_vue(done) {
    src([vue_js_path, vue_min_js_path], {since: lastRun(copy_vue)})
        .pipe(dest(static_js));
    done();
}

function copy_video(done) {
    src([video_js_path, video_min_js_path], {since: lastRun(copy_video)})
        .pipe(dest(static_js));
    src([video_lang_js_path], {since: lastRun(copy_video)})
        .pipe(rename({
            prefix: "video."
        }))
        .pipe(dest(static_js));
    src([video_css_path, video_min_css_path], {since: lastRun(copy_video)})
        .pipe(dest(static_css));
    done();
}

function copy_viewerjs(done) {
    src([viewerjs_min_js_path], {since: lastRun(copy_viewerjs)})
        .pipe(dest(static_js));
    src([viewerjs_min_css_path], {since: lastRun(copy_viewerjs)})
        .pipe(dest(static_css));
    done();
}

function copy_bootstrap_toasts_js(done) {
    src([bootstrap_toasts_js_path, bootstrap_toasts_min_js_path], {since: lastRun(copy_bootstrap_toasts_js)})
        .pipe(dest(static_js));
    done();
}

function copy_canvas_nest(done) {
    src([canvas_nest_umd_js_path], {since: lastRun(copy_canvas_nest)})
        .pipe(dest(static_js));
    done();
}

function copy_bowser(done) {
    src([bowser_es5_js_path, bowser_bundled_js_path], {since: lastRun(copy_bowser)})
        .pipe(dest(static_path + "/js/bowser/"));
    src([bowser_src_path])
        .pipe(dest(static_path + "/js/bowser/src"));
    done();
}

function copy_lazyload(done) {
    src([lazyload_js_path, lazyload_min_js_path, lazyload_min_js_map_path], {since: lastRun(copy_lazyload)})
        .pipe(dest(static_js));
    done();
}

function copy_lax(done) {
    src([lax_js_path, lax_min_js_path], {since: lastRun(copy_lax)})
        .pipe(dest(static_js));
    done();
}

function add_footer_funDebug_api(done) {
    const add_text = '\nfundebug.init({apikey:"3d4b48db363609255fd0abb3cfa559ca84a7a4ca4ca8922fbd42d8d38e2c36a4"});\n';
    src([fundebug_js_path], {since: lastRun(add_footer_funDebug_api)})
        .pipe(footer(add_text))
        .pipe(rename('fundebug.min.js'))
        .pipe(dest(static_js));
    done();
}

function watch_static(done) {
    watch([tools_static_src_path + "**/*"], task("minimize_local_static"));
    done();
}

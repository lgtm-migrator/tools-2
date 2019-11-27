/** bsCustomFileInput **/
$().ready(function () {
    bsCustomFileInput.init()
});


/** 提交图片 **/
let photo_input = document.body.querySelector("#photo_input");
let photo_submit = document.body.querySelector("#photo_submit");
let photo_form = document.body.querySelector("form");
let max_file_size_value = parseInt(document.body.querySelector("input[name=MAX_FILE_SIZE]").value);
let photo_url = "/photo_info/photo_info.php";
let files_upload_rule_btn = document.body.querySelector("#files_upload_rule_btn");

let files_upload_rule_text = "<div style='font-size: 80%;'>" +
    "<span class='text-danger'><b>如若您不同意以下规则任意一条，请不要上传照片即可。</b></span><br>" +
    "<span class='text-danger'><b>本站不存储您上传的照片，请您保存好您自己的照片。</b></span><br>" +
    "<span class='text-danger'><b><del>不接受重复监测同一张照片的信息。</del></b></span><br>" +
    `<span class='text-dark'><b>3个/次/${get_file_size(max_file_size_value)}/日/IP</b></span><br>` +
    "文件数量上限：<span class='text-success'><b>3</b></span><br>" +
    `文件尺寸上限：<span class='text-success'><b>${get_file_size(max_file_size_value)}</b></span><br>` +
    "每日上传次数上限：<span class='text-success'><b>1次/日/IP</b></span><br>" +
    "</div>";


if (files_upload_rule_btn) {
    files_upload_rule_btn.addEventListener("click", function () {
        bootstrapModalJs("", files_upload_rule_text, "", "", true);
    });
}

// photo_submit.addEventListener("click", ajax_images);
photo_submit.addEventListener("click", function () {
    upload_files_check(photo_input);
});

function ajax_images() {
    set_recaptcha_action("photo_info");

    let form_data = new FormData(photo_form);

    $.ajax({
        url: photo_url,
        method: "post",
        cache: false,
        processData: false,
        contentType: false,
        timeout: 20000,
        // dataType: "json",
        data: form_data,
        beforeSend: function () {
            add_spinner_icon(photo_submit);
        },
        success: function (data) {
            remove_spinner_icon(photo_submit);
            ajax_result_success(data);
        },
        error: function (error) {
            ajax_result_failed(error);
            if (error.length) bootstrapModalJs('', error, '', '', true);
            console.log("失败");
            console.log(error);
        }
    });
}

function upload_files_check(input) {
    let upload_check_result = "";
    let files = input.files;
    // let allowed_extension_name = ["jfif", "pjpeg", "jpeg", "pjp", "jpg", "tiff", "tif"];
    let allowed_extension_name = ["jpeg", "jpg", "tiff", "tif"];
    let files_length = input.files.length;

    let files_size_tips = [];
    let disallow_files = [];

    let no_upload_files__text = "<div style='font-size: 90%;'>" +
        "请先选择您要查看信息的照片，<br>然后后点击提交按钮上传图片。<br>" +
        "</div>";

    let files_length_text = "<div style='font-size: 90%;'>" +
        "上传文件数量请不要超过3个。<br>" +
        "</div>";

    if (files_length === 0) upload_check_result += no_upload_files__text;

    for (let i = 0; i < files_length; i++) {
        if (!allowed_extension_name.includes(get_file_ext_name(files[i]["name"]))) {
            disallow_files.push(files[i]["name"]);
            // files.splice(i, 1);
        }
    }

    if (files_length > 3) {
        upload_check_result += files_length_text;
    } else {
        for (let i = 0; i < files_length; i++) {
            if (files[i]["size"] > max_file_size_value) {
                files_size_tips.push(files[i]["name"]);
            }
        }
    }

    if (disallow_files.length > 0) {
        upload_check_result += "<div style='font-size: 90%;'>" +
            "以下文件格式不符&nbsp;" +
            `<span class='text-dark'>` +
            `${allowed_extension_name.join(" ")}` +
            `</span> ：<br>` +
            `<span class='text-danger'>` +
            `${disallow_files.join("<br>")}` +
            `</span>` +
            "</div>";
    }
    if (files_size_tips.length > 0) {
        upload_check_result += "<div style='font-size: 90%;'>" +
            "以下文件尺寸超过&nbsp;" +
            `<span class='text-dark'>` +
            `${get_file_size(max_file_size_value)}` +
            `</span> ：<br>` +
            `<span class='text-danger'>` +
            `${files_size_tips.join("<br>")}` +
            `</span>` +
            `</div>`;
    }

    if (upload_check_result) {
        bootstrapModalJs("", upload_check_result, "", "", true);
    } else {
        ajax_images();
    }

}

function ajax_result_failed(data) {
}

function ajax_result_error(data) {
}

function ajax_result_success(data) {
    let result = JSON.parse(data);
    console.log(JSON.parse(data));
    let result_text = "";
    let result_error = "";
    let result_upload_message_success = "";
    let result_upload_message_failure = "";
    let result_upload_message_repeat = "";

    let result_error_length = result["error"] ? result["error"].length : "";
    let result_upload_success_length = result["message"]["upload"]["success"] ? result["message"]["upload"]["success"].length : "";
    let result_upload_failure_length = result["message"]["upload"]["failure"] ? result["message"]["upload"]["failure"].length : "";
    let result_upload_repeat_length = result["message"]["upload"]["repeat"] ? result["message"]["upload"]["repeat"].length : "";

    if (result_error_length > 0) {
        for (let x = result_error_length, i = 0; i < x; i++) {
            result_error += result["error"][i] + "<br>";
        }
    }

    if (result_upload_success_length > 0) {
        for (let x = result_upload_success_length, i = 0; i < x; i++) {
            result_upload_message_success += result["message"]["upload"]["success"][i] + "<br>";
        }
    }

    if (result_upload_failure_length > 0) {
        for (let x = result_upload_failure_length, i = 0; i < x; i++) {
            result_upload_message_failure += result["message"]["upload"]["failure"][i] + "<br>";
        }
    }
    if (result_upload_repeat_length > 0) {
        for (let x = result_upload_repeat_length, i = 0; i < x; i++) {
            result_upload_message_repeat += result["message"]["upload"]["repeat"][i] + "<br>";
        }
    }

    result_text = result_error + result_upload_message_success + result_upload_message_failure + result_upload_message_repeat;

    if (result_error_length + result_upload_success_length + result_upload_failure_length + result_upload_repeat_length > 0) {
        bootstrapModalJs("", result_text, "", "", true);
    }
}


function is_Array(any) {
    if (Array.isArray(any)) {
        for (let x = any.length, i = 0; i < x; i++) {

        }
    }
}

function get_file_ext_name(file_name, index_of = ".") {
    return file_name.substring(file_name.lastIndexOf(index_of) + 1).toLowerCase();
}

function get_file_size(file_size) {
    file_size = typeof file_size === "number" ? file_size : parseInt(file_size);
    if (file_size >= 1073741824) {
        file_size = ((file_size / 1073741824 * 100) / 100).toFixed(2) + " GB";
    } else if (file_size >= 1048576) {
        file_size = ((file_size / 1048576 * 100) / 100).toFixed(2) + " MB";
    } else if (file_size >= 1024) {
        file_size = ((file_size / 1024 * 100) / 100).toFixed(2) + " KB";
    } else {
        file_size = file_size + " bytes";
    }
    return file_size;
}


/** 进度条 **/
let upload_file_progress = document.body.querySelector("#upload_file_progress");

$().ready(function () {
    bsCustomFileInput.init()
});


/** 提交图片 **/

let photo_input = document.body.querySelector("#photo_input");
let photo_submit = document.body.querySelector("#photo_submit");
let photo_form = document.body.querySelector("form");
let photo_url = "/photo_info/photo_info.php";

// photo_form.addEventListener("submit", function (e) {
//     e.preventDefault();
// });

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
        // contentType: "multipart/form-data",
        timeout: 100000000,
        // dataType: "json",
        data: form_data,
        beforeSend: function () {
            add_spinner_icon(photo_submit);
        },
        success: function (data) {
            remove_spinner_icon(photo_submit);
            // console.log(JSON.parse(data));
            ajax_result_success(data);
        },
        error: function (error) {
            if (error.length) bootstrapModalJs('', error, '', '', true);
            console.log("失败");
            console.log(error);
        }
    });
}

function upload_files_check(input) {
    let files = input.files;
    let files_length = photo_input.files.length;
    let max_file_size_value = document.body.querySelector("input[name=MAX_FILE_SIZE]").value;
    let tip = "";

    let files_length_text = "请上传您要查看信息的照片。<br>" +
        "<span class='text-danger'><b>本站不存储您上传的照片，请您保存好您自己的照片。</b></span><br>" +
        "上传文件数量上限：<span class='text-success'><b>4</b></span><br>" +
        "文件尺寸上限：<span class='text-success'><b>10MB</b></span><br>" +
        "每个人每天上传上限：<span class='text-success'><b>1</b> </span>次<br>";

    if (files_length === 0) bootstrapModalJs("", files_length_text, "", "", true);
    if (files_length > 4) bootstrapModalJs("", "上传文件数量请不要超过4个", "", "", true);
    console.log(files);

    for (let i = 0; i < files_length; i++) {
        if (files[i]["size"] > max_file_size_value) {
            tip += files[i]["name"] + "<br>";
        }
    }

    if (tip.length > 0) {
        bootstrapModalJs("", "以下文件尺寸超过10MB：<br>" + tip, "", "", true);
    } else if (tip.length === 0 && files_length > 0) {
        ajax_images();
    }

}

function ajax_result_success(data) {
    let result = JSON.parse(data);
    console.log(JSON.parse(data));
    let result_ = "";
    let result_error = "";
    let result_message_success = "";
    let result_message_failed = "";

    let result_error_length = result["error"].length;
    let result_success_length = result["message"]["success"].length;
    let result_failed_length = result["message"]["failed"].length;

    if (result_error_length > 0) {
        for (let x = result_error_length, i = 0; i < x; i++) {
            result_error += result["error"][i] + "<br>";
        }
    }

    if (result_success_length > 0) {
        for (let x = result_success_length, i = 0; i < x; i++) {
            result_message_success += result["message"]["success"][i] + "<br>";
        }
    }

    if (result_failed_length > 0) {
        for (let x = result_failed_length, i = 0; i < x; i++) {
            result_message_failed += result["message"]["failed"][i] + "<br>";
        }
    }

    // for_i_result(result_error_length, result["error"], result_error);
    // for_i_result(result_success_length, result["message"]["success"], result_message_success);
    // for_i_result(result_failed_length, result["message"]["failed"], result_message_failed);

    result_ = result_error + result_message_failed + result_message_success;

    if (result_error_length + result_success_length + result_failed_length > 0) {
        bootstrapModalJs("", result_, "", "", true);
    }
}

function for_i_result(length, array, result) {
    if (length > 0) {
        for (let x = length, i = 0; i < x; i++) {
            result += array + [i] + "<br>";
        }
    }
}
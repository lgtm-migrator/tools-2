$().ready(function () {
    bsCustomFileInput.init()
});


/** 提交图片 **/

let photo_input = document.querySelector("#photo_input");
let photo_submit = document.querySelector("#photo_submit");
let photo_form = document.querySelector("form");
let photo_url = "/photo_info/photo_info.php";

// photo_form.addEventListener("submit", function (e) {
//     e.preventDefault();
// });

photo_submit.addEventListener("click", ajax_images);
// photo_submit.addEventListener("click", function () {
//     photo_form.submit();
// });


function ajax_images() {
    // set_recaptcha_action("info_test");
    let form_data = new FormData(photo_form);
    console.log(photo_input.files);

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
            if (data.length) bootstrapModalJs('', data, '', '', true);
            console.log(data);
        },
        error: function (error) {
            if (error.length) bootstrapModalJs('', error, '', '', true);
            console.log("失败");
            console.log(error);
        }
    });
}



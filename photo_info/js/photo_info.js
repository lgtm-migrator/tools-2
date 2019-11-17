$().ready(function () {
    bsCustomFileInput.init()
});


/** 提交图片 **/
let photo_submit = document.querySelector("#photo_submit");
let photo_input = document.querySelector("#photo_input");
let photo_url = "/tools/photo_info/photoinfo.php";

photo_submit.addEventListener("click", submit_images);
photo_submit.addEventListener("click", function () {
    set_recaptcha_action("photo_info");
});

function get_images() {
    const images = photo_input.files;
    console.table(images);
}

function submit_images() {
    $.ajax({
        url: photo_url,
        method: "post",
        cache: false,
        timeout: 10000,
        contentType: "multipart/form-data",
        data: get_images(),
        beforeSend: function () {
            add_spinner_icon(photo_submit);
        },
        success: function (data) {
            setInterval(function () {
                remove_spinner_icon(photo_submit);
            }, 3000);
            console.log("成功");
            console.log(data.result);
        },
        error: function (error) {
            console.log("失败");
            console.log(error);
        }
    })
}
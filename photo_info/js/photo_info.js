$().ready(function () {
    bsCustomFileInput.init()
});


/** 提交图片 **/
let photo_submit = document.querySelector("#photo_submit");
let photo_input = document.querySelector("#photo_input");
let photo_url = "/tools/photo_info/photoinfo.php";

photo_submit.addEventListener("click", get_images);

function get_images() {
    const images = photo_input.value;
    console.log(images);
}

function submit_images() {
    $.ajax({
        url: photo_url,
        method: "post",
        cache: false,
        contentType: "multipart/form-data",
        data:"",
        beforeSend: function () {

        },
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(error);
        }
    })
}
/** 问卷调查 **/
$().ready(function () {
    let survey = "<div class='text-center' style='font-size: 85%;'><b>" +
        "<a href='https://www.wenjuan.com/s/jMjUfeE/' target='_blank' class='text-decoration-none text-success'>网站功能反馈</a>" +
        "</b></div>";
    let alert_arr = {
        alert_heading: "用户调查表",
        innerHTML: survey,
        innerText: "",
        color: "primary",
        Event_Type: "hidden",
        Callback_Function: set_cookie_survey,
    };
    if (get_cookie('survey') !== "1") bootstrapModalJs_alert(alert_arr);

    function set_cookie_survey() {
        let attributes = {
            expires: 1
        };
        set_cookie("survey", "1", attributes);
    }
});


/** Cards 阴影 **/
let jt_list = document.querySelector("#jt_list");

cards_add_shadow();
cards_remove_shadow();
cards_location_href_link();

function cards_add_shadow() {
    jt_list.addEventListener("mouseenter", function (e) {
        let target = e.target;
        if (target.classList.contains("card")) {
            add_shadow(e);
            cursor_pointer(e);
        }
    }, true);
}

function cards_remove_shadow() {
    jt_list.addEventListener("mouseleave", function (e) {
        let target = e.target;
        if (target.classList.contains("card")) {
            remove_shadow(e);
        }
    }, true);
}

function cards_location_href_link() {
    jt_list.addEventListener("click", function (e) {
        let target = e.target;
        if (target.classList.contains("card")) {
            console.log(target);
            let x = target.querySelector(".category_link");
            console.log(x);
            console.log(x.href);
            location.href = `${get_href_url(e)}`;
        }
    }, false);
}

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
            expires: 1,
        };
        set_cookie("survey", "1", attributes);
    }
});


/** Cards 阴影 链接 **/
let jt_list = document.querySelector("#jt_list");

cards_add_shadow();
cards_remove_shadow();

function cards_add_shadow() {
    jt_list.addEventListener("mouseenter", function (e) {
        let target = e.target;
        if (target.classList.contains("card")) {
            add_shadow(e);
            cursor_pointer(e);
            target.addEventListener("click", function () {
                location.href = `${get_href_url(target, "category_link")}`;
            }, {once: true});
        }
    }, true);
}

function cards_remove_shadow() {
    jt_list.addEventListener("mouseleave", function (e) {
        let target = e.target;
        if (target.classList.contains("card")) remove_shadow(e);
    }, true);
}


/** 分类列表导航 **/
let jt_category = document.querySelector("#jt_category");
let jt_category_btn = jt_category.querySelectorAll("button");

jt_category.addEventListener("click", function (e) {
    jt_category_(e);
});

function jt_category_(e) {
    let id = e.target.id;
    for (let x = jt_category_btn.length, i = 0; i < x; i++) {
        if (jt_category_btn[i].id !== id) {
            jt_category_btn[i].classList.remove("active");
        } else {
            jt_category_btn[i].classList.add("active");
        }
    }
    if (id !== "all") {
        let all_tab_pane = document.querySelectorAll("#jt_list>[class*='tab_pane-']");
        for (let index in all_tab_pane) {
            if (all_tab_pane.hasOwnProperty(index)) if (all_tab_pane[index].classList.contains("active")) all_tab_pane[index].classList.remove("active", "show");
        }
        $("#jt_list>.tab_pane-" + id).tab("show");
    } else {
        $("#jt_list>[class*=tab_pane-]").tab("show");
    }
}

// $("#jt_category button").on('shown.bs.tab', function (e) {
//     console.log(e.target);
//     console.log(e.relatedTarget);
// });

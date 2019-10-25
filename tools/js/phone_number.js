/** 增加号码 **/
let phone_number_submit = document.querySelector("#phone_number_submit");

let phone_name = document.querySelector("#phone_name");
let tel_number = document.querySelector("#tel_number");
let mobile_number = document.querySelector("#mobile_number");

let add_phone_number_form = document.querySelector("#add_phone_number_form");

let add_phone_number_url = "./phoneNumber.php";

let RegExp_rules = {
    "chinese_name": new RegExp(/^([\u4e00-\u9fa5·]{2,16})$/),
    "tel_number": new RegExp(/\d{3}-\d{8}|\d{4}-\d{7}/),
    "mobile_number": new RegExp(/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/),
    "ip_v4": new RegExp(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/),
    "ip_v6": new RegExp(/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i),
};


phone_number_submit.addEventListener("click", add_phone_number);


function phone_number_data() {
    let phone_name_all = document.querySelectorAll(".phone_name");
    let tel_number_all = document.querySelectorAll(".tel_number");
    let mobile_number_all = document.querySelectorAll(".mobile_number");

    let result = [];

    for (let x = phone_name_all.length, i = 0; i < x; i++) {
        result.push({
            "phone_name": phone_name_all[i].value,
            "tel_number": tel_number_all[i].value,
            "mobile_number": mobile_number_all[i].value,
        });
    }
    return JSON.stringify(result);
}

create_phone_form_init();

function create_phone_form_init() {
    create_form_add();
    create_btn_add();
}

function create_phone_form() {
    create_form_add();
    create_btn_del();
}

function create_form_add() {
    create_form_div();
    create_phone_name();
    create_tel_number();
    create_mobile_number();
}

function create_form_div() {
    let div = document.createElement("div");
    div.className = "mb-5 mb-sm-4 mb-md-3 form-row add_phone_number_form";
    add_phone_number_form.insertBefore(div, phone_number_submit.parentElement);
}

function create_phone_name() {
    let div = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");
    let i = document.createElement("i");
    let id_timestamp = new Date().getTime();

    div.className = "form-group col-12 col-sm-12 col-md-3";

    label.className = "sr-only";
    label.setAttribute("for", "phone_name_" + id_timestamp);
    label.innerHTML = "单位名称&nbsp;";

    i.className = "fa fa-home";

    input.className = "form-control fa text-success text-center phone_name";
    input.id = "phone_name_" + id_timestamp;
    input.type = "text";
    input.setAttribute("minlength", "4");
    input.setAttribute("maxlength", "9");
    input.placeholder = "单位名称 ";
    input.addEventListener("blur", function (e) {
        phone_input_check(RegExp_rules.chinese_name, "请输入单位的中文名称 例如：\n掘进一队", e)
    });
    input.addEventListener("focusin", function (e) {
        remove_error(e);
    });

    label.appendChild(i);
    div.appendChild(label);
    div.appendChild(input);

    add_phone_number_form.children[add_phone_number_form.childElementCount - 2].appendChild(div);
}

function create_tel_number() {
    let div = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");
    let i = document.createElement("i");
    let id_timestamp = new Date().getTime();

    div.className = "form-group col-12 col-sm-6 col-md-4";

    label.className = "sr-only";
    label.setAttribute("for", "tel_number_" + id_timestamp);
    label.innerHTML = "座机电话号码&nbsp;";

    i.className = "fa fa-phone";

    input.className = "form-control fa text-success text-center tel_number";
    input.id = "tel_number_" + id_timestamp;
    input.type = "tel";
    input.setAttribute("minlength", "12");
    input.setAttribute("maxlength", "12");
    input.placeholder = "座机电话号码 ";
    input.addEventListener("blur", function (e) {
        phone_input_check(RegExp_rules.tel_number, "请输入正确格式的座机号码 例如：\n0319-1234567", e);
    });
    input.addEventListener("focusin", function (e) {
        remove_error(e);
    });

    label.appendChild(i);
    div.appendChild(label);
    div.appendChild(input);
    add_phone_number_form.children[add_phone_number_form.childElementCount - 2].appendChild(div);
}

function create_mobile_number() {
    let div = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");
    let i = document.createElement("i");
    let id_timestamp = new Date().getTime();

    div.className = "form-group col-12 col-sm-6 col-md-5";

    label.className = "sr-only";
    label.setAttribute("for", "mobile_number_" + id_timestamp);
    label.innerHTML = "手机电话号码&nbsp;";

    i.className = "fa fa-mobile-alt";

    input.className = "form-control fa text-success text-center mobile_number";
    input.id = "mobile_number_" + id_timestamp;
    input.type = "tel";
    input.setAttribute("minlength", "11");
    input.setAttribute("maxlength", "15");
    input.placeholder = "手机电话号码 ";
    input.addEventListener("blur", function (e) {
        phone_input_check(RegExp_rules.mobile_number, "请输入正确格式的手机号 例如：\n13812345678\n+8613812345678\n008613812345678", e);
    });
    input.addEventListener("focusin", function (e) {
        remove_error(e);
    });

    label.appendChild(i);
    div.appendChild(label);
    div.appendChild(input);
    add_phone_number_form.children[add_phone_number_form.childElementCount - 2].appendChild(div);
}

function create_btn_add() {
    let a = document.createElement("a");
    let i = document.createElement("i");

    a.className = "position-relative text-success";
    a.href = "javascript:";
    a.title = "添加新的一行";
    a.id = "phone_number_add";

    i.className = "position-absolute fa fa-plus-circle phone_number_del";
    i.style.top = "11px";
    a.appendChild(i);
    add_phone_number_form.children[add_phone_number_form.childElementCount - 2].appendChild(a);
    a.addEventListener("click", create_phone_form);

}

function create_btn_del() {
    let a = document.createElement("a");
    let i = document.createElement("i");

    a.className = "position-relative text-danger";
    a.href = "javascript:";
    a.title = "删除当前行";

    i.className = "position-absolute fa fa-minus-circle phone_number_del";
    i.style.top = "11px";
    a.appendChild(i);
    add_phone_number_form.children[add_phone_number_form.childElementCount - 2].appendChild(a);
    a.addEventListener("click", function (e) {
        e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
    })
}

function phone_input_check(RegExp_rules_name, error_text, e) {
    let RegExp_result = RegExp_rules_name.test(e.target.value);
    if (!RegExp_result) {
        error_input(e);
        error_span(e, error_text);
    } else {
        remove_error_input(e);
        input_success(e);
    }
}

function remove_error(e) {
    remove_error_span(e);
    remove_error_input(e);
}

function error_span(e, text) {
    let e_target = e.target;
    let e_target_span = document.createElement("span");
    e_target_span.className = "mt-1 d-block text-danger";
    e_target_span.innerText = text;
    e_target.parentNode.appendChild(e_target_span);
}

function remove_error_span(e) {
    let e_target = e.target;
    if (e_target.nextElementSibling) {
        e_target.nextElementSibling.remove();
    }
}

function error_input(e) {
    let e_target = e.target;
    e_target.classList.add("border", "border-danger");
}

function input_success(e) {
    let e_target = e.target;
    e_target.classList.add("border", "border-success");
}

function remove_error_input(e) {
    let e_target = e.target;
    e_target.classList.remove("border", "border-danger");
}

function add_spinner_icon(e, spinner_type = "border") {
    let load_icon = document.createElement("span");
    switch (spinner_type) {
        case "grow":
            load_icon.className = "ml-1 spinner-grow spinner-grow-sm";
            break;
        case "border":
        default:
            load_icon.className = "ml-1 spinner-border spinner-border-sm";
    }
    e.setAttribute("disabled", "disabled");
    e.appendChild(load_icon);
}

function remove_spinner_icon(e) {
    e.removeAttribute("disabled");
    e.removeChild(e.lastChild);
}

function add_phone_number() {
    let data = phone_number_data();

    $.ajax({
        type: "post",
        url: add_phone_number_url,
        dataType: "json",
        beforeSend: add_spinner_icon(phone_number_submit),
        always: remove_spinner_icon(phone_number_submit),
        data: {
            data: data,
        },
        success: function (data) {
            let result = data.result;
            bootstrapModalJs('提示', result, '', '', true);
            console.log(data);
        },
        error: function (data) {
            console.log("失败");
            bootstrapModalJs('提示', '失败', '', '', true);
            console.log(data);
        }
    });
}

/** 搜索 **/

let phone_number_input = document.querySelector("#phone_number_input");
let phone_name_search_btn = document.querySelector("#phone_name_search_btn");
let phone_number_search_btn = document.querySelector("#phone_number_search_btn");
let search_url = "./phone_number_search.php";

phone_name_search_btn.addEventListener('click', function () {
    show_value();
    search_name();
});
phone_number_search_btn.addEventListener('click', function () {
    show_value();
    search_number();
});

function show_value() {
    console.log(phone_number_input.value);
}

function search_name() {
    let search_value = phone_number_input.value;
    let data = {
        phone_number_search: {
            "search_type": "name",
            "search_value": search_value,
        },
    };
    ajax_query(data);
}

function search_number() {
    let search_value = phone_number_input.value;
    let data = {
        phone_number_search: {
            "search_type": "number",
            "search_value": search_value,
        },
    };
    ajax_query(data);
}

function ajax_query(data) {
    $.ajax({
        type: "post",
        url: search_url,
        data: data,
        dataType: "json",
        success: function (data) {
            console.log('成功');
            bootstrapModalJs('提示', '成功', '', '', true);
            console.log(data);
        },
        error: function (data) {
            console.log("失败");
            bootstrapModalJs('提示', '失败', '', '', true);
            console.log(data);
        }
    });
}


/** 增加阴影 **/

let btn_all = document.querySelectorAll("[class*='btn']");
let input_all = document.querySelectorAll("input[class*='form-control']");

for (let i = 0; i < btn_all.length; i++) {
    btn_all[i].addEventListener('mouseover', shadow);
    btn_all[i].addEventListener('mouseout', shadow);
}

for (let i = 0; i < input_all.length; i++) {
    input_all[i].addEventListener("focusin", shadow_sm);
    input_all[i].addEventListener("focusout", shadow_sm);
}

function shadow(e) {
    e.target.classList.toggle("shadow");
}

function shadow_sm(e) {
    e.target.classList.toggle("shadow-sm");
}

function shadow_lg(e) {
    e.target.classList.toggle("shadow-lg");
}

/** 返回顶部 **/

(function () {
    let floatToolBackTop = document.querySelector("#to_top");
    floatToolBackTop ? floatToolBackTop.addEventListener('click', topControl) : "";
})();


function topControl(e) {
    e.preventDefault();
    $("html,body").animate({scrollTop: "0px"}, 1000);
}

get_number_stored();

function get_number_stored() {
    let number_stored = document.querySelector("#number_stored");
    $.ajax({
        type: "post",
        url: "./number_stored.php",
        dataType: "json",
        timeout:5000,
        data: {
            number_stored: "11",
        },
        beforeSend: function (data) {
            number_stored.innerHTML = "正在获取数据";
        },
        success: function (data) {
            console.log(data);
            number_stored.innerHTML = "当前号码存储数量" + data + "条";
        },
        error: function (data) {
            console.log(data);
            number_stored.innerHTML = "当前号码存储数量" + "100" + "条";
        }
    });

}
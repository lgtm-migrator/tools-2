/** 增加号码 **/
let phone_number_submit = document.querySelector("#phone_number_submit");

let phone_name = document.querySelector("#phone_name");
let tel_number = document.querySelector("#tel_number");
let mobile_number = document.querySelector("#mobile_number");

let phone_name_all = document.querySelectorAll(".phone_name");
let tel_number_all = document.querySelectorAll(".tel_number");
let mobile_number_all = document.querySelectorAll(".mobile_number");

let phone_number_add = document.querySelector("#phone_number_add");

let add_phone_number_url = "./phoneNumber.php";

let RegExp_rules = {
    "chinese_name": new RegExp(/^([\u4e00-\u9fa5·]{2,16})$/),
    "tel_number": new RegExp(/\d{3}-\d{8}|\d{4}-\d{7}/),
    "mobile_number": new RegExp(/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/),
};

phone_number_add.addEventListener("click", phone_number_form_clone);

phone_number_submit.addEventListener("click", add_phone_number);

check_phone_input();
function check_phone_input() {
    for (let x = phone_name_all.length, i = 0; i < x; i++) {
        phone_name_all[i].addEventListener("blur", function (e) {
            phone_input_check(RegExp_rules.chinese_name, "请输入单位的中文名称 例如：\n掘进一队", e)
        });
        phone_name_all[i].addEventListener("focusin", remove_error_span);
    }
    for (let x = tel_number_all.length, i = 0; i < x; i++) {
        tel_number_all[i].addEventListener("blur", function (e) {
            phone_input_check(RegExp_rules.tel_number, "请输入正确格式的座机号码 例如：\n0319-1234567", e)
        });
        tel_number_all[i].addEventListener("focusin", remove_error_span);
    }
    for (let x = mobile_number_all.length, i = 0; i < x; i++) {
        mobile_number_all[i].addEventListener("blur", function (e) {
            phone_input_check(RegExp_rules.mobile_number, "请输入正确格式的手机号 例如：\n13812345678\n+8613812345678\n008613812345678", e)
        });
        mobile_number_all[i].addEventListener("focusin", remove_error_span);
    }
}

function phone_input_check(RegExp_rules_name, error_text, e) {
    let RegExp_result = RegExp_rules_name.test(e.target.value);
    if (!RegExp_result) {
        input_error(e);
        error_span(e, error_text);
    } else {
        remove_input_error(e);
        input_success(e);
    }
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

function input_error(e) {
    let e_target = e.target;
    e_target.classList.add("border", "border-danger");
}

function input_success(e) {
    let e_target = e.target;
    e_target.classList.add("border", "border-success");
}

function remove_input_error(e) {
    let e_target = e.target;
    e_target.classList.remove("border", "border-danger");
}

function add_spinner_icon(e, spinner_type = "border", icon_size = "sm") {
    let load_icon = document.createElement("span");
    switch (spinner_type) {
        case "grow":
            load_icon.className = "ml-1 spinner-grow spinner-grow-sm";
            break;
        case "border":
        default:
            load_icon.className = "ml-1 spinner-border spinner-border-sm";
    }
    e.appendChild(load_icon);
}

function remove_spinner_icon(e) {
    e.removeChild(e.lastChild);
}

function phone_number_form_clone() {
    let add_phone_number_form = document.querySelector(".add_phone_number_form");
    let clone__add_phone_number_form = add_phone_number_form.cloneNode(true);
    insertAfter(clone__add_phone_number_form, add_phone_number_form);
}

function insertAfter(newNode, curNode) {
    curNode.parentNode.insertBefore(newNode, curNode.nextElementSibling);
}

function add_phone_number() {
    let phone_name_value = phone_name.value;
    let tel_number_value = tel_number.value;
    let mobile_number_value = mobile_number.value;

    let data = {
        "phone_name": phone_name_value,
        "tel_number": tel_number_value,
        "mobile_number": mobile_number_value,
    };
    $.ajax({
        type: "post",
        url: add_phone_number_url,
        data: data,
        dataType: "json",
        beforeSend: add_spinner_icon(phone_number_submit),
        success: function (data) {
            remove_spinner_icon(phone_number_submit);
            let result = data.result;
            bootstrapModalJs('提示', result, '', '', true);
            console.log(data);
        },
        error: function (data) {
            console.log("失败111");
            console.log(data);
        }
    });
}

/** 搜索 **/

let phone_number_input = document.querySelector("#phone_number_input");
let phone_name_search = document.querySelector("#phone_name_search");
let phone_number_search = document.querySelector("#phone_number_search");
let search_url = "./phone_number_search.php";

phone_number_input.addEventListener('keyup', function () {
    show_value();
});
phone_name_search.addEventListener('click', function () {
    show_value();
    search_name();
});
phone_number_search.addEventListener('click', function () {
    show_value();
    // search_number();
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
            console.log(data);
        }
    });
}

function search_number() {

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

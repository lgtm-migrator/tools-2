/** 增加号码 **/
let add_new_number = document.querySelector("#add_new_number");
let phone_number_submit = document.querySelector("#phone_number_submit");

let add_phone_number_form = document.querySelector("#add_phone_number_form");

let add_phone_number_url = "/tools/phone_number/phonenumber.php";

let RegExp_rules = {
    "chinese_name": new RegExp(/^([\u4e00-\u9fa5·]{2,16})$/),
    "tel_number": new RegExp(/\d{3}-\d{8}|\d{4}-\d{7}/),
    "mobile_number": new RegExp(/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/),
    "ip_v4": new RegExp(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/),
    "ip_v6": new RegExp(/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i),
    "zh_cn_number": new RegExp(/^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/),
};

if (add_new_number) add_new_number.addEventListener("click", function (e) {
    create_form_add_init();
    e.target.parentNode.removeChild(e.target);
    add_phone_number_form.classList.remove("d-none");
    add_phone_number_form.classList.toggle("show");
});
if (phone_number_submit) phone_number_submit.addEventListener("click", add_phone_number);

function phone_number_data() {
    let phone_name_all = document.querySelectorAll(".phone_name");
    let tel_number_all = document.querySelectorAll(".tel_number");
    let mobile_number_all = document.querySelectorAll(".mobile_number");

    let result = [];

    for (let x = phone_name_all.length, i = 0; i < x; i++) {
        result[i] = {
            phone_name: phone_name_all[i].value,
            tel_number: tel_number_all[i].value,
            mobile_number: mobile_number_all[i].value,
        };
    }
    return JSON.stringify(result);
}

function create_form_add_init() {
    create_form_div();
    create_btn_add();
    create_phone_name();
    create_tel_number();
    create_mobile_number();
}

function create_form_add() {
    create_form_div();
    create_btn_del();
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
    input.setAttribute("maxlength", "15");
    input.placeholder = "单位名称 ";
    input.addEventListener("input", function (e) {
        phone_input_check(RegExp_rules.chinese_name, "请输入单位的中文名称 例如：\n掘进一队", e)
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
    input.addEventListener("input", function (e) {
        phone_input_check(RegExp_rules.tel_number, "请输入正确格式的座机号码 例如：\n0319-1234567", e);
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
    input.addEventListener("input", function (e) {
        phone_input_check(RegExp_rules.mobile_number, "请输入正确格式的手机号 例如：\n13812345678\n+8613812345678\n008613812345678", e);
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
    i.style.right = "0px";
    a.appendChild(i);
    add_phone_number_form.children[add_phone_number_form.childElementCount - 2].appendChild(a);
    a.addEventListener("click", create_form_add);

}

function create_btn_del() {
    let a = document.createElement("a");
    let i = document.createElement("i");

    a.className = "position-relative text-danger";
    a.href = "javascript:";
    a.title = "删除当前行";

    i.className = "position-absolute fa fa-minus-circle phone_number_del";
    i.style.top = "11px";
    i.style.right = "0px";
    a.appendChild(i);
    add_phone_number_form.children[add_phone_number_form.childElementCount - 2].appendChild(a);
    a.addEventListener("click", function (e) {
        e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
    })
}

function phone_input_check(RegExp_rules_name, error_text, e) {
    let RegExp_result = RegExp_rules_name.test(e.target.value);
    if (!RegExp_result) {
        validation_invalid_div(e, error_text);
        input_error(e);
    } else {
        input_success(e);
        remove_validation_div(e);
    }
}

function validation_invalid_div(e, text, type = "tooltip") {
    let e_target = e.target;
    if (!e_target.nextElementSibling) {
        let div = document.createElement("div");
        if (type === "tooltip") {
            div.className = "invalid-tooltip";
            div.style.position = "unset";
        } else {
            div.className = "invalid-feedback";
        }
        div.innerText = text;
        e_target.parentNode.appendChild(div);
    }
}

function validation_valid_div(e, text, type = "tooltip") {
    let e_target = e.target;
    if (!e_target.nextElementSibling) {
        let div = document.createElement("div");
        if (type === "tooltip") {
            div.className = "valid-tooltip";
            div.style.position = "unset";
        } else {
            div.className = "valid-feedback";
        }
        div.innerText = text;
        e_target.parentNode.appendChild(div);
    }
}

function remove_validation_div(e) {
    let e_target = e.target;
    while (e_target.nextElementSibling) {
        e_target.nextElementSibling.remove();
    }
}

function input_error(e) {
    let e_target = e.target;
    e_target.classList.remove("is-valid");
    e_target.classList.add("is-invalid");
}

function input_success(e) {
    let e_target = e.target;
    e_target.classList.remove("is-invalid");
    e_target.classList.add("is-valid");
}

function add_spinner_icon(e, spinner_type = "border") {
    let load_icon = document.createElement("span");
    switch (spinner_type) {
        case "grow":
            load_icon.className = "ml-1 spinner-grow spinner-grow-sm align-self-center";
            break;
        case "border":
        default:
            load_icon.className = "ml-1 spinner-border spinner-border-sm align-self-center";
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
        timeout: 5000,
        beforeSend: add_spinner_icon(phone_number_submit),
        data: {
            data: data,
        },
        success: function (data) {
            let result = data.result;
            remove_spinner_icon(phone_number_submit);
            result ? bootstrapModalJs('', result, '', '', true) : "";
            console.log(data);
            if (data["data"]) {
                bootstrapModalJs('', JSON.stringify(data["data"]), '', '', true)
            }
        },
        error: function (data) {
            if (data.statusText === "timeout") {
                bootstrapModalJs('', '连接服务器超时，请尝试重新提交。', '', '', true);
            } else if (data.statusText === "OK" && data.responseText !== "") {
                bootstrapModalJs('', data.responseText, '', '', true);
                console.log(data);
            } else {
                bootstrapModalJs('', '失败', '', '', true);
                console.log(data);
            }
        }
    });
}

/** ReCAPTCHA **/
if (phone_number_submit) phone_number_submit.addEventListener("click", function () {
    set_recaptcha_action("test11");
});


function set_recaptcha_action(Action = "unset") {
    let v3_site_key = "6LcvIcEUAAAAAEUgtbN0VFiH_n2VHw-luW3rdZFv";
    let url = "https://www.recaptcha.net/recaptcha/api.js?render=";

    Action = Action ? Action : "unset";

    $.getScript(url + v3_site_key, function () {
        set_recaptcha_token(v3_site_key, Action);
    });
}

function set_recaptcha_token(site_key, action) {
    grecaptcha.ready(function () {
        grecaptcha.execute(site_key, {action: action})
            .then(function (token) {
                // console.log(token);
                get_recaptcha_verify(token, action);
            });
    });
}

function get_recaptcha_verify(token_key, pageAction) {
    let url = "/tools/recaptcha/recaptcha_verify_v3.php";
    let data = {
        token: token_key,
        action: pageAction,
    };

    $.ajax({
        type: "post",
        url: url,
        data: data,
        timeout: 5000,
        dataType: "json",
        success: function (data) {
            console.log("提交验证成功");
            console.log(data);
        },
        error: function (data) {
            console.log("提交验证失败");
            console.log(data);
        }
    })
}

/** 搜索 **/

let phone_number_input = document.querySelector("#phone_number_input");
let phone_name_search_btn = document.querySelector("#phone_name_search_btn");
let phone_number_search_btn = document.querySelector("#phone_number_search_btn");
let number_list = document.querySelector("#number_list");
let search_url = "/tools/phone_number/phone_number_search.php";

if (phone_name_search_btn) {
    phone_name_search_btn.addEventListener('click', function () {
        check_search_value();
        search_query("name");
    });
}
if (phone_number_search_btn) {
    phone_number_search_btn.addEventListener('click', function () {
        check_search_value();
        search_query("number");
    });
}

function check_search_value() {
    let search_value = phone_number_input.value;
    let search_value_rule = RegExp_rules.zh_cn_number.test(search_value);
    if (search_value.length === 0) {
        bootstrapModalJs('', '请输入您要查询的单位名称或号码', '', '', true);
    } else if (!search_value_rule) {
        bootstrapModalJs('', '请输入单独的单位名称或者号码', '', '', true);
    }
    console.log(phone_number_input.value);
}

function search_query(search_type = "name") {
    let search_value = phone_number_input.value;
    let search_data = {
        search_type: search_type,
        search_value: search_value,
    };
    ajax_search(search_data);
}

function ajax_search(search_data) {
    $.ajax({
        type: "post",
        url: search_url,
        data: search_data,
        dataType: "json",
        success: function (data) {
            console.log('成功');
            get_search_result(data);
            console.log(data);
        },
        error: function (data) {
            let responseText = data.responseText;
            console.log("失败");
            console.log(data);
            console.log(responseText);
        }
    });
}

function get_search_result(data) {
    let data_length = data.length;
    if (data_length) {
        processing_search_result(data);
    } else {
        bootstrapModalJs('', "暂时没有找到您要查找的号码", '', '', true)
    }
}

function processing_search_result(data) {
    let i;
    number_list.innerHTML = "";
    for (i in data) {
        create_number_list(data[i]);
    }
    number_list_child();

}

function create_number_list(data) {
    let div = document.createElement("div");

    let name = data["phone_name"];
    let tel_number = data["tel_number"];
    let mobile_number = data["mobile_number"];

    div.className = "mb-3 py-1 py-md-2 row  border rounded align-items-center number_list";

    div.appendChild(create_number_list_name(name));
    div.appendChild(create_number_list_number(tel_number, "tel"));
    div.appendChild(create_number_list_number(mobile_number, "mobile"));

    number_list.appendChild(div);
}

function create_number_list_name(name) {
    let span = document.createElement("span");
    let ul = document.createElement("ul");

    let li = document.createElement("li");
    let i = document.createElement("i");

    span.className = "col-12 col-lg-4";
    ul.className = "mb-0 list-unstyled";

    li.className = "mb-2";
    li.innerHTML = name;

    i.className = "mr-2 fa fa-home text-info";
    i.style.cursor = "pointer";

    span.appendChild(ul);
    ul.appendChild(li);
    li.insertBefore(i, li.firstChild);

    return span;
}

function create_number_list_number(number, number_type) {
    let span = document.createElement("span");
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let i = document.createElement("i");

    span.className = "col-12 col-sm-5 col-md-4 col-lg-3";
    ul.className = "mb-0 list-unstyled";

    // li.className = "mb-2";
    number_type === "tel" ? li.className = "mb-2" : li.className = "mb-2 text-none text-sm-right";
    li.innerHTML = number;

    number_type === "tel" ? i.className = "ml-2 fa fa-phone-alt text-success" : i.className = "ml-2 fa fa-mobile-alt text-success";
    i.style.cursor = "pointer";
    i.addEventListener("click", function (e) {
        window.location.href = "tel://" + number;
    });

    span.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(i);

    return span;
}

function number_list_child() {
    let number_list_child_odd = document.querySelectorAll("#number_list div:nth-child(odd)");
    let number_list_child_even = document.querySelectorAll("#number_list div:nth-child(even)");
    for (let x = number_list_child_odd.length, i = 0; i < x; i++) {
        number_list_child_odd[i].style.background = "whitesmoke";
    }
    for (let x = number_list_child_even.length, i = 0; i < x; i++) {
        number_list_child_even[i].style.background = "aliceblue";
    }
}

/** 增加阴影 **/

let btn_all = document.querySelectorAll("[class*='btn']");
let input_all = document.querySelectorAll("input[class*='form-control']");

for (let btn_all_length = btn_all.length, i = 0; i < btn_all_length; i++) {
    btn_all[i].addEventListener('mouseover', shadow);
    btn_all[i].addEventListener('mouseout', shadow);
}

for (let input_all_length = input_all.length, i = 0; i < input_all_length; i++) {
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

/** 获取存储数量 **/
let number_stored = document.querySelector("#number_stored");
// if (number_stored) get_number_stored();
if (number_stored) number_stored.addEventListener("click", get_number_stored);
if (phone_number_submit) phone_number_submit.addEventListener("click", get_number_stored);

function get_number_stored() {
    $.ajax({
        type: "post",
        url: "/tools/phone_number/number_stored.php",
        dataType: "json",
        timeout: 3000,
        data: {
            number_stored: "1",
        },
        beforeSend: function () {
            number_stored.innerHTML = "正在获取数据";
        },
        success: function (data) {
            number_stored.innerHTML = "当前号码存储数量" + data + "条";
        },
        error: function (data) {
            number_stored.innerHTML = data.responseText;
        }
    });
}

// div#number_list div:nth-child(odd)
// {
//     background: beige;
// }

// div#number_list div:nth-child(even) {
//     background: whitesmoke;
// }
/** CSS **/


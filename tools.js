/** 公用 **/

let RegExp_rules = {
    "chinese_name": new RegExp(/^([\u4e00-\u9fa5·]{2,16})$/),
    "tel_number": new RegExp(/\d{3}-\d{8}|\d{4}-\d{7}/),
    "mobile_number": new RegExp(/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/),
    "ip_v4": new RegExp(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/),
    "ip_v6": new RegExp(/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i),
    "zh_cn_number": new RegExp(/^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/),
};


function custom_input_check(RegExp_rules_name, error_text, element) {
    let RegExp_result = RegExp_rules_name.test(element.value);
    if (!RegExp_result) {
        validation_invalid_div(element, error_text);
        input_error(element);
    } else {
        input_success(element);
        remove_validation_div(element);
    }
}

function validation_invalid_div(element, text, type = "tooltip") {
    if (!element.nextElementSibling) {
        let div = document.createElement("div");
        if (type === "tooltip") {
            div.className = "invalid-tooltip";
            div.style.position = "unset";
        } else {
            div.className = "invalid-feedback";
        }
        div.innerText = text;
        element.parentNode.appendChild(div);
    }
}

function validation_valid_div(element, text, type = "tooltip") {
    if (element.nextElementSibling) {
        let div = document.createElement("div");
        if (type === "tooltip") {
            div.className = "valid-tooltip";
            // div.style.position = "unset";
        } else {
            div.className = "valid-feedback";
        }
        div.innerText = text;
        element.parentNode.appendChild(div);
    }
}

function remove_validation_div(element) {
    while (element.nextElementSibling) {
        element.nextElementSibling.remove();
    }
}

function input_error(element) {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
}

function input_success(element) {
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");
}

function add_spinner_icon(e, spinner_type = null, color = null, position = null) {
    let load_icon = document.createElement("span");
    switch (spinner_type) {
        case "grow":
            load_icon.className = "ml-1 spinner-grow spinner-grow-sm align-self-center";
            break;
        case "border":
        default:
            load_icon.className = "ml-1 spinner-border spinner-border-sm align-self-center";
    }

    switch (color) {
        case 'primary':
            load_icon.classList.add("text-primary");
            break;
        case "secondary":
            load_icon.classList.add("text-secondary");
            break;
        case "success":
            load_icon.classList.add("text-success");
            break;
        case "danger":
            load_icon.classList.add("text-danger");
            break;
        case "warning":
            load_icon.classList.add("text-warning");
            break;
        case "info":
            load_icon.classList.add("text-info");
            break;
        case "light":
            load_icon.classList.add("text-light");
            break;
        case "dark":
            load_icon.classList.add("text-dark");
            break;
        default:
            break;
    }

    e.setAttribute("disabled", "disabled");

    switch (position) {
        case "before":
        case "left":
            e.insertBefore(load_icon, e.firstChild);
            break;
        case "after":
        case "right":
        default:
            e.appendChild(load_icon);
    }
}

function remove_spinner_icon(e) {
    e.removeAttribute("disabled");
    // e.firstElementChild ? e.removeChild(e.firstElementChild) : "";
    e.lastElementChild ? e.removeChild(e.lastElementChild) : "";
}


/** ReCAPTCHA **/
function set_recaptcha_action(Action = null) {
    const v3_site_key = "6LcvIcEUAAAAAEUgtbN0VFiH_n2VHw-luW3rdZFv";
    const url = "https://www.recaptcha.net/recaptcha/api.js?render=";

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
    let url = "/recaptcha/recaptcha_verify_v3.php";
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


/** 公用 **/

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

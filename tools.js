/** 公用 **/
let a_body = document.body.querySelector("#body");
if (a_body) a_body.removeAttribute("hidden");

let RegExp_rules = {
    "chinese_name": new RegExp(/^([\u4e00-\u9fa5·]{2,16})$/),
    "tel_number": new RegExp(/\d{3}-\d{8}|\d{4}-\d{7}/),
    "mysqli_1045": new RegExp(/(1045)/),
    "mobile_number": new RegExp(/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/),
    "ip_v4": new RegExp(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/),
    "ip_v6": new RegExp(/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i),
    "zh_cn_number": new RegExp(/^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/),
};


/** js.cookie **/
let js_cookies = window.Cookies.noConflict();

function set_cookie(key, value = 1, attributes, secure = true) {
    if (secure === true) {
        let js_cookies_attributes = {
            // secure: true,
            expires: 30,
            // FIXME:以上生产模式开启
            // httpOnly: true,
            // domain: "",
            // path: "",
            sameSite: "lax",
            //fixme:sameSite值后期待调整
        };
        let secure_js_cookies = js_cookies.withAttributes(js_cookies_attributes);
        secure_js_cookies.set(key, value, attributes);
    } else {
        js_cookies.set(key, value, attributes);
    }
}

function get_cookie(key) {
    return js_cookies.get(key);
}

function remove_cookie(key) {
    js_cookies.remove(key);
}


/** 表单验证 **/
function validation_invalid_div(element, text, type = "tooltip") {
    if (!element.nextElementSibling) {
        let div = document.createElement("div");
        if (type === "tooltip") {
            div.className = "invalid-tooltip";
            div.style.position = "static";
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

function add_spinner_icon(element, spinner_type = null, color = null, position = null) {
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
        case "primary":
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

    element.setAttribute("disabled", "disabled");

    switch (position) {
        case "before":
        case "left":
            element.insertBefore(load_icon, element.firstChild);
            break;
        case "after":
        case "right":
        default:
            element.appendChild(load_icon);
    }
}

function remove_spinner_icon(element) {
    element.removeAttribute("disabled");
    // element.firstElementChild ? element.removeChild(element.firstElementChild) : "";
    element.lastElementChild ? element.removeChild(element.lastElementChild) : "";
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


/** 页脚文案 **/
$().ready(function () {
    footer_recaptcha_text_badge();
    footer_current_time();
});

function footer_current_time() {
    let footer_x = document.querySelector("#footer_x");
    let span = document.createElement("span");
    span.className = "my-2 d-block text-nowrap text-center";
    span.id = "current_time";
    span.innerHTML = "&nbsp;";
    footer_x.appendChild(span);
}

function footer_recaptcha_text_badge() {
    let footer_x = document.querySelector("#footer_x");
    let div = document.createElement("div");
    let span_1 = document.createElement("span");
    let span_2 = document.createElement("span");
    let a_1 = document.createElement("a");
    let a_2 = document.createElement("a");

    div.className = "my-2 d-block text-nowrap text-center";
    div.id = "recaptcha_text_badge";

    span_1.innerHTML = "由&nbsp;reCAPTCHA&nbsp;提供保护，并适用Google";
    span_2.innerHTML = "和";

    a_1.className = "text-reset text-decoration-none";
    a_1.href = "https://www.google.cn/intl/zh-CN/policies/privacy/";
    a_1.title = "Google&nbsp;隐私权";
    a_1.target = "_blank";
    a_1.innerHTML = "&nbsp;隐私权&nbsp;";

    a_2.className = "text-reset text-decoration-none";
    a_2.href = "https://www.google.cn/intl/zh-CN/policies/terms/";
    a_2.title = "Google 服务条款";
    a_2.target = "_blank";
    a_2.innerHTML = "&nbsp;服务条款&nbsp;";

    div.appendChild(span_1);
    div.appendChild(a_1);
    div.appendChild(span_2);
    div.appendChild(a_2);
    footer_x.appendChild(div);
}


/** 页脚二维码 **/
$().ready(function () {
    page_qr_code();
});

//fixme:待完善
function page_qr_code() {
    let footer_x = document.querySelector("#footer_x");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let i = document.createElement("i");
    let canvas = document.createElement("canvas");

    div.className = "my-2 text-center";
    div.id = "current_page_QR_code";

    span.className = "text-light";
    span.title = "点击查看当前页面二维码";
    span.style.cursor = "pointer";

    i.className = "fa-2x fas fa-qrcode";
    i.addEventListener("click", function () {
        let url = document.location.href;
        let url_param = {"from": "clipboard"};
        let div = document.createElement("div");
        let span = document.createElement("span");
        let button = document.createElement("button");
        let i = document.createElement("i");

        let qrcode_option = {
            errorCorrectionLevel: "H",
            margin: 2,
            width: 200,
            color: {
                dark: "#1E90FF",
                light: "#ffffff",
            },
        };

        div.className = "text-center small text-success";

        span.className = "d-block";
        span.innerHTML = "通过二维码,在移动端打开当前页面";

        button.className = "btn fas fa-copy";
        button.innerHTML = "&nbsp;&nbsp;复制当前网址";
        button.addEventListener("click", function (e) {
            copy_url(e.target, addUrlParam(url, url_param));
        });

        i.className = "d-block mt-2 fas fa-question-circle";
        i.innerHTML = "使用方法";
        i.title = "截屏或者保存二维码图片，通过扫一扫功能，快速打开当前页面";

        $(i).tooltip({
            placement: "bottom",
        });

        span.appendChild(i);
        div.appendChild(canvas);
        div.appendChild(button);
        div.appendChild(span);

        QRCode.toCanvas(canvas, url, qrcode_option);
        bootstrapModalJs("", div, "", "sm", true);
    });

    span.appendChild(i);
    div.appendChild(span);
    footer_x.appendChild(div);
}

function copy_url(event, url) {
    let clipboard = new ClipboardJS(event, {
        text: function () {
            return url;
        }
    });
    clipboard.on('success', function () {
        bootstrapModalJs("", "复制成功", "", "sm", true);
        clipboard.destroy();
    });
    clipboard.on('error', function () {
        bootstrapModalJs("", "复制失败", "", "sm", true);
        clipboard.destroy();
    });
}

function addUrlParam(url, name, value = null) {
    url += (url.indexOf("?") === -1) ? "?" : "&";
    if (typeof name === "string") {
        url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    } else if (typeof name === "object") {
        for (let index in name) {
            if (name.hasOwnProperty(index)) {
                url += encodeURIComponent(index) + "=" + encodeURIComponent(name[index]) + "&";
                //fixme:&
            }
        }
    }

    return url;
}

/** 增加阴影 **/
let btn_all = document.querySelectorAll("[class*='btn']");
let input_all = document.querySelectorAll("input[class*='form-control']");

for (let x = btn_all.length, i = 0; i < x; i++) {
    btn_all[i].addEventListener("mouseover", function (e) {
        add_shadow(e);
    });
    btn_all[i].addEventListener("mouseout", function (e) {
        remove_shadow(e);
    });
}

for (let x = input_all.length, i = 0; i < x; i++) {
    input_all[i].addEventListener("focus", function (e) {
        add_shadow(e);
    });
    input_all[i].addEventListener("blur", function (e) {
        remove_shadow(e);
    });
}

function add_shadow(e, size = "") {
    if (size === "") {
        e.target.classList.add("shadow");
    } else if (size === "sm") {
        e.target.classList.add("shadow-sm");
    } else if (size === "lg") {
        e.target.classList.add("shadow-lg");
    }
}

function remove_shadow(e, size = "") {
    if (size === "") {
        e.target.classList.remove("shadow");
    } else if (size === "sm") {
        e.target.classList.remove("shadow-sm");
    } else if (size === "lg") {
        e.target.classList.remove("shadow-lg");
    }
}

function cursor_pointer(e) {
    e.target.style.cursor = "pointer";
}

function get_href_url(target, class_name) {
    let a = target.querySelector("." + class_name);
    if (a.href !== undefined) {
        return a.href;
    }
}


/** 返回顶部 **/
(function () {
    let floatToolBackTop = document.querySelector("#to_top");
    floatToolBackTop ? floatToolBackTop.addEventListener("click", topControl) : "";
})();

function topControl(e) {
    e.preventDefault();
    $("html,body").animate({scrollTop: "0px"}, 1000);
}


/** 页脚时间 **/
$().ready(function () {
    let current_time = document.body.querySelector("#current_time");
    dayjs.locale("zh-cn");
    setInterval(function () {
        current_time.innerHTML = dayjs().format("YYYY年M月D日 dddA H点mm分s秒");
    }, 1000);
});


/** localStorage **/
if (localStorage && (
    localStorage.setItem("status", "yes") ||
    localStorage.getItem("status") === "yes" ||
    localStorage.length >= 1)) {
    if (!localStorage.getItem("init_date_time")) {
        localStorage.setItem("init_date_time", dayjs().locale("zh-cn").format());
        localStorage.setItem("init_date_timestamp", dayjs().locale("zh-cn").unix());
    }
} else {
    throw new Error("不支持LocalStorage。");
}


/** bootstrapModalJs-alert **/
function bootstrapModalJs_alert(alert_array = {}) {
    let bootstrapModalJs_options = {"backdrop": "static", "keyboard": false};
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let body_div = document.createElement("div");
    let button = document.createElement("button");
    let span = document.createElement("span");
    let a_sr_only = document.createElement("a");

    let Event_Type = alert_array["Event_Type"];
    let Callback_Function = alert_array["Callback_Function"];

    div.className = "alert mb-0 alert-" + alert_array["color"] + " alert-dismissible fade show";
    div.setAttribute("rule", "增强提醒");

    h4.className = "alert-heading small";
    h4.innerHTML = alert_array["alert_heading"];

    body_div.innerText = alert_array["innerText"];
    body_div.innerHTML = alert_array["innerHTML"];

    button.className = "close";
    button.type = "button";
    button.setAttribute("data-dismiss", "modal");
    button.setAttribute("aria-label", "关闭强提醒");

    a_sr_only.href = "javascript:";
    a_sr_only.className = "sr-only d-block btn btn-sm btn-outline-success";
    a_sr_only.innerHTML = "关闭强提醒&nbsp;&times;";
    a_sr_only.setAttribute("data-dismiss", "modal");
    a_sr_only.setAttribute("aria-label", "关闭强提醒");

    span.setAttribute("aria-hidden", "true");
    span.title = "关闭";
    span.innerHTML = "&times;";

    button.append(span);
    div.append(h4);
    div.append(body_div);
    div.append(button);
    div.append(a_sr_only);

    let id = bootstrapModalJs("", div, "", "sm", true, false, Event_Type, Callback_Function, bootstrapModalJs_options);
    let modalBody = document.body.querySelector("#modalBody_" + id);
    modalBody.classList.add("p-0");
}


/** 防镜像 **/
$().ready(function () {
    setTimeout(function () {
        if (document.location.host !== "tools.jzeg.org" &&
            document.location.host !== "118.190.26.200" &&
            document.location.host !== "tools.jzeg.net") {
            if (fundebug) fundebug.test("镜像", document.location.href);
            setTimeout(function () {
                location.href = location.href.replace(document.location.host, 'tools.jzeg.org');
            }, 3000);
        }
    }, 1000);
});


$().ready(function () {
    $("span[title]").tooltip({
        placement: "right",
    });
});


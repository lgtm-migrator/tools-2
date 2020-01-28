/** 增加号码 **/
let add_new_number = document.querySelector('#add_new_number');
let phone_number_submit = document.querySelector('#phone_number_submit');
let add_phone_number_form = document.querySelector('#add_phone_number_form');
let add_phone_number_url = '/phone_number/index.php';

if (add_new_number) {
    add_new_number.addEventListener('click', function (e) {
        let e_target = e.target;
        e_target.parentNode.parentNode.removeChild(e_target.parentNode);
        create_form_add_init();
        create_regional();
        add_phone_number_form.classList.remove('d-none');
        add_phone_number_form.classList.toggle('show');
    });
}
if (phone_number_submit) phone_number_submit.addEventListener('click', add_phone_number);

function verify_phone_number_data() {
    let phone_name_all = document.querySelectorAll('.phone_name');
    let tel_number_all = document.querySelectorAll('.tel_number');
    let mobile_number_all = document.querySelectorAll('.mobile_number');
    let all_verify_events = [].concat(phone_name_all, tel_number_all, mobile_number_all);
    let verify_result = [];

    for (let x = phone_name_all.length, i = 0; i < x; i++) {
        if (phone_name_all[i].value.length === 0) {
            phone_name_all[i].value = '必填';
        }
        if (phone_name_all[i].value.length > 0 && (tel_number_all[i].value.length === 0 && mobile_number_all[i].value.length === 0)) {
            tel_number_all[i].value = '选填其一';
            mobile_number_all[i].value = '选填其一';
        }
    }
    for (let x = all_verify_events.length, i = 0; i < x; i++) {
        for (let y = all_verify_events[i].length, j = 0; j < y; j++) {
            if (all_verify_events[i][j].classList.contains('is-valid')) {
                verify_result.push(true);
            } else if (all_verify_events[i][j].classList.contains('is-invalid')) {
                verify_result.push(false);
            } else if (!all_verify_events[i][j].classList.contains('is-invalid') && !all_verify_events[i][j].classList.contains('is-valid')) {
                verify_result.push(false);
            }
        }
    }
    return !verify_result.includes(false);
}

function phone_number_data() {
    let phone_name_all = document.querySelectorAll('.phone_name');
    let tel_number_all = document.querySelectorAll('.tel_number');
    let mobile_number_all = document.querySelectorAll('.mobile_number');
    let regional = document.querySelectorAll('input[name=regional]');

    let result = {};

    for (let x = regional.length, i = 0; i < x; i++) {
        if (true === regional[i].checked) {
            result['info'] = {regional: regional[i].value};
        }
    }

    for (let x = phone_name_all.length, i = 0; i < x; i++) {
        result[i] = {
            phone_name: phone_name_all[i].value,
            tel_number: tel_number_all[i].value,
            mobile_number: mobile_number_all[i].value,
        };
    }
    return JSON.stringify(result);
}

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

function create_form_add_init() {
    create_form_div();
    create_btn_add();
    create_phone_name();
    create_tel_number();
    create_mobile_number();
    input_shadow();
}

function create_form_add() {
    create_form_div();
    create_btn_del();
    create_phone_name();
    create_tel_number();
    create_mobile_number();
    input_shadow();
}

function create_form_div() {
    let div = document.createElement('div');
    div.className = 'mb-5 mb-sm-4 mb-md-3 form-row add_phone_number_form';
    add_phone_number_form.insertBefore(div, phone_number_submit.parentElement);
}

function create_btn_add() {
    let a = document.createElement('a');
    let i = document.createElement('i');

    a.className = 'position-relative text-success hvr-icon-grow';
    a.href = 'javascript:';
    a.id = 'phone_number_add';

    i.className = 'position-absolute fa-fw fas fa-plus-circle hvr-icon phone_number_add';
    i.title = '添加新的一行';
    i.style.top = '8px';
    i.style.right = '-3px';
    $(i).tooltip();
    a.appendChild(i);
    add_phone_number_form.children[add_phone_number_form.childElementCount - 2].appendChild(a);
    a.addEventListener('click', create_form_add);
}

function create_btn_del() {
    let a = document.createElement('a');
    let i = document.createElement('i');

    a.className = 'position-relative text-danger hvr-icon-grow';
    a.href = 'javascript:';

    i.className = 'position-absolute fa-fw fas fa-minus-circle hvr-icon phone_number_del';
    i.title = '删除当前行';
    i.style.top = '8px';
    i.style.right = '-3px';
    $(i).tooltip();
    a.appendChild(i);
    add_phone_number_form.children[add_phone_number_form.childElementCount - 2].appendChild(a);
    a.addEventListener('click', function (e) {
        e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
    });
}

function create_phone_name() {
    let div = document.createElement('div');
    let label = document.createElement('label');
    let input = document.createElement('input');
    let i = document.createElement('i');
    let id_timestamp = new Date().getTime();

    div.className = 'form-group col-12 col-sm-12 col-md-3';

    label.className = 'sr-only';
    label.setAttribute('for', 'phone_name_' + id_timestamp);
    label.innerHTML = '单位名称&nbsp;';

    i.className = 'fa-fw fas fa-home';

    input.className = 'form-control form-control-sm fas text-success text-center phone_name';
    input.id = 'phone_name_' + id_timestamp;
    input.type = 'text';
    input.setAttribute('minlength', '4');
    input.setAttribute('maxlength', '15');
    input.placeholder = '单位名称 ';
    input.addEventListener('input', function () {
        custom_input_check(RegExp_rules.phone_name, '请输入单位的中文名称 例如：\n掘进一队', this);
    });

    label.appendChild(i);
    div.appendChild(label);
    div.appendChild(input);

    add_phone_number_form.children[add_phone_number_form.childElementCount - 2].appendChild(div);
}

function create_tel_number() {
    let div = document.createElement('div');
    let label = document.createElement('label');
    let input = document.createElement('input');
    let i = document.createElement('i');
    let id_timestamp = new Date().getTime();

    div.className = 'form-group col-12 col-sm-6 col-md-4';

    label.className = 'sr-only';
    label.setAttribute('for', 'tel_number_' + id_timestamp);
    label.innerHTML = '座机电话号码&nbsp;';

    i.className = 'fas fa-phone';

    input.className = 'form-control form-control-sm fas text-success text-center tel_number';
    input.id = 'tel_number_' + id_timestamp;
    input.type = 'tel';
    input.setAttribute('minlength', '12');
    input.setAttribute('maxlength', '12');
    input.placeholder = '座机电话号码 ';
    input.addEventListener('input', function () {
        custom_input_check(RegExp_rules.tel_number, '请输入当地正确格式的座机号码 例如：\n0319-2061234\n0319-2089123\n······ 等更多正确格式', this);
    });

    label.appendChild(i);
    div.appendChild(label);
    div.appendChild(input);
    add_phone_number_form.children[add_phone_number_form.childElementCount - 2].appendChild(div);
}

function create_mobile_number() {
    let div = document.createElement('div');
    let label = document.createElement('label');
    let input = document.createElement('input');
    let i = document.createElement('i');
    let id_timestamp = new Date().getTime();

    div.className = 'form-group col-12 col-sm-6 col-md-5';

    label.className = 'sr-only';
    label.setAttribute('for', 'mobile_number_' + id_timestamp);
    label.innerHTML = '手机电话号码&nbsp;';

    i.className = 'fas fa-mobile-alt';

    input.className = 'form-control form-control-sm fas text-success text-center mobile_number';
    input.id = 'mobile_number_' + id_timestamp;
    input.type = 'tel';
    input.setAttribute('minlength', '11');
    input.setAttribute('maxlength', '15');
    input.placeholder = '手机电话号码 ';
    input.addEventListener('input', function () {
        custom_input_check(RegExp_rules.mobile_number, '请输入正确格式的手机号 例如：\n13812345678\n+8613812345678\n008613812345678', this);
    });

    label.appendChild(i);
    div.appendChild(label);
    div.appendChild(input);
    add_phone_number_form.children[add_phone_number_form.childElementCount - 2].appendChild(div);
}

function create_regional() {
    let div = document.createElement('div');
    let regionOptions = {
        'dp': '东庞',
        'gq': '葛泉',
        'xdw': '显德汪',
        'xm': '邢煤',
        'xd': '邢东',
        'zc': '章村',
    };

    div.className = 'row container no-gutters justify-content-center mb-3 mb-sm-4 mb-md-4 row-cols-2 row-cols-sm-3 row-cols-md-6';
    div.id = 'regional';

    for (let index in regionOptions) {
        if (regionOptions.hasOwnProperty(index)) {
            if (index !== 'xm') {
                div.appendChild(create_regional_radio(index, regionOptions[index]));
            } else {
                div.appendChild(create_regional_radio(index, regionOptions[index], true));
            }
        }
    }

    add_phone_number_form.insertBefore(div, add_phone_number_form.firstChild);
}

function create_regional_radio(input_value, label_text, check_status = false) {
    let div = document.createElement('div');
    let input = document.createElement('input');
    let label = document.createElement('label');

    div.className = 'mb-2 mb-sm-0 custom-control custom-radio';

    input.className = 'custom-control-input';
    input.type = 'radio';
    input.id = 'regional_' + input_value;
    input.name = 'regional';
    input.value = input_value;
    if (check_status === true) input.checked = true;

    label.className = 'custom-control-label';
    label.setAttribute('for', input.id);
    label.innerHTML = label_text;

    div.appendChild(input);
    div.appendChild(label);

    return div;
}

function add_phone_number() {
    add_spinner_icon(phone_number_submit);
    let verify = verify_phone_number_data();
    if (verify === true) {
        let data = phone_number_data();

        const v3_site_key = '6LcvIcEUAAAAAEUgtbN0VFiH_n2VHw-luW3rdZFv';
        const url = 'https://www.recaptcha.net/recaptcha/api.js?render=';

        const action = 'add_phone_number';

        $.getScript(url + v3_site_key, function () {
            grecaptcha.ready(function () {
                grecaptcha.execute(v3_site_key, {action: action})
                    .then(function (token) {
                        console.log(token);
                        ajax_phone_number(data, token, action);
                    });
            });
        });
    } else {
        bootstrapModalJs('', create_small_center_text('您输入的号码有点不符合格式<br>请修改后再提交', 'danger'), '', 'sm', true);
        remove_spinner_icon(phone_number_submit);
    }
}

function ajax_phone_number(data, g_recaptcha_token, g_recaptcha_action) {
    $.ajax({
        method: 'post',
        url: add_phone_number_url,
        dataType: 'json',
        timeout: 5000,
        data: {
            data: data,
            g_recaptcha: {
                token: g_recaptcha_token,
                action: g_recaptcha_action,
            },
        },
        success: function (data) {
            remove_spinner_icon(phone_number_submit);
            get_ajax_result(data);
            get_number_stored();
        },
        error: function (data) {
            remove_spinner_icon(phone_number_submit);
            ajax_error(data);
            ajax_error_fun_debug(data, 'phone_number_error');
        },
    });

}

function get_ajax_result(result) {
    console.log(result);

    ajax_success(result, 'add_number');
    if (result['error'].length !== 0) {
        ajax_success_fun_debug(result, 'phone_number_success_error');
    }
}

function ajax_success(success_result, message_name) {
    if (success_result['message']['g_recaptcha']['verify'] === true) {
        if (success_result['message'].hasOwnProperty(message_name)) {
            if (success_result['message'][message_name].hasOwnProperty('failure')) {
                let message = '<span>' +
                    '提交失败' +
                    '<br>' +
                    '错误代码：' +
                    success_result['error']['errno'] +
                    '</span>';
                bootstrapModalJs('', create_small_center_text(message, 'danger'), '', 'sm', true);
            }

            if (success_result['message'][message_name].hasOwnProperty('repeat')) {

            }

            if (success_result['message'][message_name].hasOwnProperty('success')) {
                let message = '<span>' +
                    '您提交的' + success_result['message'][message_name]['success'] + '个号码已经成功被收录' +
                    '</span>';
                bootstrapModalJs('', create_small_center_text(message, 'danger'), '', 'sm', true);
            }
        }
    } else {
        let message = '<span>' +
            '服务器判断您的评分太低,<br>没有收录您刚刚提交的号码。' +
            '</span>';
        bootstrapModalJs('', create_small_center_text(message, 'danger'), '', '', true);
    }

}

function ajax_success_fun_debug(success_result, error_name) {
    if (fundebug) {
        let success_error = success_result['error'].hasOwnProperty('error') ? JSON.stringify(success_result['error']['error']) : '';
        let success_errno = success_result['error'].hasOwnProperty('errno') ? JSON.stringify(success_result['error']['errno']) : '';
        let success_data = success_result['error'].hasOwnProperty('data') ? JSON.stringify(success_result['error']['data']) : '';
        fundebug.test(error_name, success_error);
        fundebug.test(error_name, success_errno);
        fundebug.test(error_name, success_data);
    }
}

function ajax_error(error_result) {
    let status = error_result.status;
    let statusText = error_result.statusText;
    let readyState = error_result.readyState;
    let responseText = error_result.responseText;
    console.log(error_result);

    if (readyState === 4) {
        if (status === 500 && responseText === '' && statusText === 'Internal Server Error') {
            bootstrapModalJs('', create_small_center_text('服务器出错', 'danger'), '', 'sm', true);
        } else if (statusText === 'timeout') {
            bootstrapModalJs('', create_small_center_text('服务器连接超时', 'danger'), '', 'sm', true);
        } else if (status === 200 && RegExp_rules.mysqli_1045.test(responseText)) {
            bootstrapModalJs('', create_small_center_text('数据库连接出错', 'danger'), '', 'sm', true);
        } else if (status === 200 && responseText !== '') {
            bootstrapModalJs('', create_small_center_text(responseText, 'danger'), '', '', true, true);
        } else {
            bootstrapModalJs('', create_small_center_text('失败', 'danger'), '', 'sm', true);
        }
    }

    if (readyState === 0 || status === 0) {
        if (statusText === 'error') {
            bootstrapModalJs('', '服务器刚刚关闭', '', 'sm', true, true);
        }
    }
}

function ajax_error_fun_debug(error_result, error_name) {
    if (fundebug) {
        fundebug.test(error_name, JSON.stringify(error_result));
    }
}

function input_shadow() {
    add_phone_number_form.removeEventListener('mouseover', input_form_control_add_shadow);
    add_phone_number_form.removeEventListener('mouseout', input_form_control_remove_shadow);
    add_phone_number_form.removeEventListener('focus', input_form_control_add_shadow);
    add_phone_number_form.removeEventListener('blur', input_form_control_remove_shadow);

    add_phone_number_form.addEventListener('mouseover', input_form_control_add_shadow);
    add_phone_number_form.addEventListener('mouseout', input_form_control_remove_shadow);
    add_phone_number_form.addEventListener('focus', input_form_control_add_shadow);
    add_phone_number_form.addEventListener('blur', input_form_control_remove_shadow);
}

function input_form_control_add_shadow(e) {
    let target = e.target;
    if (target.classList.contains('form-control')) {
        add_shadow(target);
    }
}

function input_form_control_remove_shadow(e) {
    let target = e.target;
    if (target.classList.contains('form-control')) {
        remove_shadow(target);
    }
}


/** 获取存储数量 **/
let number_stored = document.querySelector('#number_stored');
// if (number_stored) get_number_stored();
if (number_stored) number_stored.addEventListener('click', get_number_stored);

function get_number_stored() {
    $.ajax({
        type: 'post',
        url: '/phone_number/number_stored.php',
        dataType: 'json',
        timeout: 3000,
        data: {
            number_stored: '1',
        },
        beforeSend: add_spinner_icon(number_stored, 'border', 'primary', 'left'),
        success: function (data) {
            remove_spinner_icon(number_stored);
            number_stored.innerHTML = '当前号码存储数量' + data + '条';
        },
        error: function (data) {
            number_stored.innerHTML = data.responseText;
        },
    });
}


/** ReCAPTCHA **/
// if (phone_number_submit) phone_number_submit.addEventListener("click", function () {
//     set_recaptcha_action("test11");
// });


/** 搜索 **/
let search_regional = document.querySelector('#search_regional');
let search_regional_list = document.querySelector('#search_regional_list');
let phone_number_input = document.querySelector('#phone_number_input');
let search_btn = document.querySelector('#search_btn');
let phone_search_result = document.querySelector('#phone_search_result');
let number_list = document.querySelector('#number_list');
let search_url = '/phone_number/phone_number_search.php';

if (search_btn) {
    search_btn.addEventListener('click', function (e) {
        let target = e.target;
        if (target.tagName === 'A') {
            add_spinner_icon(target);
            if (target.classList.contains('name')) {
                check_search_value('name', target);
            } else if (target.classList.contains('number')) {
                check_search_value('number', target);
            }
        }
    });
}

if (search_regional) {
    search_regional.addEventListener('click', function () {
        $("#search_regional").dropdown("toggle");
    });
}

if (search_regional_list) {
    search_regional_list.addEventListener('click', function (e) {
        let target = e.target;
        if (target.tagName === 'LABEL') {
            search_regional.innerText = target.innerText;
            if (target.firstElementChild.tagName === 'INPUT') {
                target.firstElementChild.checked = true;
            }
        }
    });
}

function check_search_value(check_type, element) {
    let search_value = phone_number_input.value;
    let search_value_length = search_value.length;
    let minlength = phone_number_input.getAttribute('minlength');
    let maxlength = phone_number_input.getAttribute('maxlength');

    if (search_value_length >= minlength && search_value_length <= maxlength) {
        search_query(check_type, element);
    } else {
        remove_spinner_icon(element);
        if (search_value_length === 0) {
            bootstrapModalJs('', create_small_center_text('请输入您要查询的单位名称或号码', 'danger'), '', 'sm', true);
        } else if (search_value_length < minlength) {
            bootstrapModalJs('', create_small_center_text('输入的内容过短<br>最少输入3个汉字或者数字', 'danger'), '', 'sm', true);
        } else if (search_value_length > maxlength) {
            bootstrapModalJs('', create_small_center_text('输入的内容过长<br>最多输入10个汉字或者数字', 'danger'), '', 'sm', true);
        }
        return false;
    }
}

function check_search_regional() {
    let search_regional_input = document.querySelectorAll('input[name=search_regional]');

    for (let x = search_regional_input.length, i = 0; i < x; i++) {
        if (true === search_regional_input[i].checked) {
            console.log(search_regional_input[i].value);
            return search_regional_input[i].value;
        }
    }
}

function search_query(search_type, element) {
    let search_value = phone_number_input.value;
    let search_regional_value = check_search_regional();
    let search_data = {
        search_type: search_type,
        search_value: search_value,
        search_regional: search_regional_value,
    };
    ajax_search(search_data, element);
}

function ajax_search(search_data, element) {
    $.ajax({
        type: 'post',
        url: search_url,
        data: search_data,
        dataType: 'json',
        success: function (data) {
            remove_spinner_icon(element);
            get_search_result(data);
        },
        error: function (data) {
            remove_spinner_icon(element);
            ajax_error(data);
            ajax_error_fun_debug(data, 'search_number');
        },
    });
}

function get_search_result(data) {
    let data_length = data.length;
    if (data_length) {
        processing_search_result(data);
    } else {
        bootstrapModalJs('', create_small_center_text('暂时没有找到您要查找的号码', 'danger'), '', 'sm', true);
    }
}

function processing_search_result(data) {
    phone_search_result.classList.remove('d-none');
    add_new_number.parentNode.classList.remove('d-none');
    number_list.innerHTML = '';
    for (let index in data) {
        if (data.hasOwnProperty(index)) create_number_list(data[index]);
    }
    number_list_child();
    $('.number i').tooltip();
    dial_number();
    clipboard_copy_number();
}

function create_number_list(data) {
    let div = document.createElement('div');
    let div1 = document.createElement('div');

    let name = data['phone_name'];
    let tel_number = data['tel_number'];
    let mobile_number = data['mobile_number'];

    // div.className = 'pulse animated hvr-icon-pop mb-3 py-1 py-md-2 row  border rounded align-items-center number_list';
    div.className = 'container pulse animated mb-3 py-1 py-md-2 border rounded number_list';
    div1.className = 'hvr-icon-pop row align-items-center';

    div1.appendChild(create_number_list_name(name));
    div1.appendChild(create_number_list_number(tel_number, 'tel'));
    div1.appendChild(create_number_list_number(mobile_number, 'mobile'));

    div.appendChild(div1);
    number_list.appendChild(div);
}

function create_number_list_name(name) {
    let span = document.createElement('span');
    let span_name = document.createElement('span');
    let ul = document.createElement('ul');

    let li = document.createElement('li');
    let i = document.createElement('i');

    span.className = 'col-12 col-lg-4';
    ul.className = 'mb-0 list-unstyled';

    li.className = 'number_name mb-2';

    span_name.innerHTML = name;

    i.className = 'mr-2 fas fa-home text-info hvr-icon';
    i.style.cursor = 'pointer';

    span.appendChild(ul);
    ul.appendChild(li);
    li.append(span_name);
    li.insertBefore(i, li.firstChild);

    return span;
}

function create_number_list_number(number, number_type) {
    let span = document.createElement('span');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let span_number = document.createElement('span');
    let i_number_icon = document.createElement('i');
    let i_clipboard_copy_icon = document.createElement('i');

    span.className = 'col-12 col-sm-5 col-md-4 col-lg-3';
    ul.className = 'mb-0 list-unstyled';

    span_number.innerHTML = number;

    number_type === 'tel' ? li.className = 'hvr-icon-grow-rotate number mb-2' : li.className = 'hvr-icon-grow-rotate number mb-2 text-none text-sm-right';

    i_number_icon.className = 'ml-2 fa-fw fas fa-phone-volume text-success hvr-icon dial_number';
    i_number_icon.title = '拨打号码';
    i_number_icon.style.cursor = 'pointer';

    i_clipboard_copy_icon.className = 'ml-3 fa-fw far fa-copy text-success hvr-icon clipboard_copy';
    i_clipboard_copy_icon.title = '复制号码';
    i_clipboard_copy_icon.style.cursor = 'pointer';

    span.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(span_number);
    li.appendChild(i_clipboard_copy_icon);
    li.appendChild(i_number_icon);

    return span;
}

function number_list_child() {
    let number_list_child_odd = document.querySelectorAll('#number_list div:nth-child(odd)');
    let number_list_child_even = document.querySelectorAll('#number_list div:nth-child(even)');
    for (let x = number_list_child_odd.length, i = 0; i < x; i++) {
        number_list_child_odd[i].style.background = 'whitesmoke';
    }
    for (let x = number_list_child_even.length, i = 0; i < x; i++) {
        number_list_child_even[i].style.background = 'aliceblue';
    }
}

function dial_number() {
    number_list.addEventListener('click', function (e) {
        let target = e.target;

        if (target.classList.contains('dial_number') || target.className.indexOf('dial_number') !== -1) {
            let number = target.previousElementSibling.previousElementSibling.innerHTML;
            window.location.href = 'tel://' + number;
        }
    });
}

function clipboard_copy_number() {

    number_list.addEventListener('click', function (e) {
        let target = e.target;

        if (target.classList.contains('clipboard_copy') || target.className.indexOf('clipboard_copy') !== -1) {
            let clipboard = new ClipboardJS('.clipboard_copy', {
                text: function (trigger) {
                    return trigger.previousElementSibling.innerHTML;
                },
            });
            clipboard.on('success', function (e) {
                bootstrapModalJs('', clipboard_success_text(e), '', 'sm', true);
                clipboard.destroy();
            });

            clipboard.on('error', function (e) {
                bootstrapModalJs('', clipboard_error_text(e), '', 'sm', true);
                clipboard.destroy();
            });
        }

    });

    function clipboard_success_text(e) {
        return '<div class="text-center text-success">已经成功复制&nbsp;' + '<span>' +
            `${e.text}` +
            '</span></div>';
    }

    function clipboard_error_text(e) {
        return '<div class="text-center text-danger">复制失败,请尝试手动复制' + '<span>' +
            `${e}` +
            '</span></div>';
    }

}


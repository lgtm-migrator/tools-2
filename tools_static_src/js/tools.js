// 公用
let a_body = document.body.querySelector('#body');
if (a_body) a_body.removeAttribute('hidden');

let RegExp_rules = {
  'phone_name': new RegExp(/^([\u4e00-\u9fa5]{2,16})$/),
  'tel_number': new RegExp(/^0319-2(06|08|11)(\d{4})$/),
  'mysqli_1045': new RegExp(/(1045)/),
  'imei': new RegExp(/^\d{15,17}$/),
  'mobile_number': new RegExp(/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8-9]))\d{8}$/),
  'ip_v4': new RegExp(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/),
  'ip_v6': new RegExp(/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i),
  'zh_cn_number': new RegExp(/^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/),
};

// 公共元素变量名
let jt_header = document.querySelector('#jt_header');
let jt_content = document.querySelector('#jt_content');
let jt_container = document.querySelector('#jt_container');
let jt_footer = document.querySelector('#jt_footer');

// 封装方法
function add_class(element, class_name) {
  element.classList.add(class_name);
}

function remove_class(element, class_name) {
  element.classList.remove(class_name);
}

function replace_class(element, old_class_name, new_class_name) {
  if (element.classList.contains(old_class_name)) {
    element.classList.remove(old_class_name);
    element.classList.add(new_class_name);
  } else if (element.classList.contains(new_class_name)) {
    element.classList.remove(new_class_name);
    element.classList.add(old_class_name);
  } else {
    return false;
  }
  return true;
}

function replace_title(element, old_title, new_title) {
  let e_title = element.title;
  if (undefined === e_title) return false;
  if (old_title === e_title) {
    element.setAttribute('title', new_title);
  } else if (new_title === e_title) {
    element.setAttribute('title', old_title);
  } else {
    return false;
  }
  return true;
}

function get_element_attribute(element, attribute_name) {
  return element.getAttribute(attribute_name);
}

function set_element_attribute(element, attribute_name, attribute_value) {
  element.setAttribute(attribute_name, attribute_value);
}

function remove_element_attribute(element, attribute_name) {
  element.removeAttribute(attribute_name);
}

function create_small_center_text(text, color = '') {
  let div = document.createElement('div');

  div.className = color ? 'small text-center text-' + color : 'small text-center';
  div.innerHTML = text;

  return div;
}

function create_close_btn(fun_name, class_name) {
  let close_button = document.createElement('button');
  let close_span = document.createElement('span');

  close_button.type = 'button';
  close_button.className = class_name ? 'close ' + class_name : 'close';
  close_button.setAttribute('aria-label', 'Close');

  close_span.setAttribute('aria-hidden', 'true');
  close_span.title = '关闭';
  close_span.innerHTML = '&times;';
  close_span.addEventListener('click', fun_name);
  close_span.addEventListener('mouseover', function (e) {
    let e_target = e.target;
    e_target.classList.toggle('text-danger');
  });
  close_span.addEventListener('mouseleave', function (e) {
    let e_target = e.target;
    e_target.classList.toggle('text-danger');
  });

  close_button.appendChild(close_span);
  return close_button;
}

function create_dropdown_divider(border) {
  let div = document.createElement('div');
  div.className = border ? 'dropdown-divider ' + border : 'dropdown-divider';

  return div;
}

function get_file_ext_name(file_name, index_of = '.') {
  return file_name.substring(file_name.lastIndexOf(index_of) + 1).toLowerCase();
}

function get_file_size(file_size) {
  file_size = typeof file_size === 'number' ? file_size : parseInt(file_size);
  if (file_size >= 1073741824) {
    file_size = ((file_size / 1073741824 * 100) / 100).toFixed(2) + ' GB';
  } else if (file_size >= 1048576) {
    file_size = ((file_size / 1048576 * 100) / 100).toFixed(2) + ' MB';
  } else if (file_size >= 1024) {
    file_size = ((file_size / 1024 * 100) / 100).toFixed(2) + ' KB';
  } else {
    file_size = file_size + ' bytes';
  }
  return file_size;
}

function popover_content_inner(innerHTML) {
  let span = document.createElement("span");

  span.className = 'small';
  span.innerHTML = innerHTML;
  return span;
}

// tooltip
$().ready(function () {
  $('span[title]').tooltip({
    placement: 'right',
  });
});

// js.cookie
let js_cookies = window.Cookies.noConflict();

function set_cookie(key, value = 1, attributes, secure = true) {
  let js_cookies_attributes;
  if (window.location.protocol === 'https') {
    js_cookies_attributes = {
      secure: true,
      expires: 30,
      // httpOnly: true,
      // domain: "",
      // path: "",
      sameSite: 'Strict',//fixme:sameSite值后期待调整
    };
  } else {
    js_cookies_attributes = {
      expires: 30,
      // httpOnly: true,
      // domain: "",
      // path: "",
      sameSite: 'Strict',
    };
  }

  if (secure === true) {
    let secure_js_cookies = js_cookies.withAttributes(js_cookies_attributes);
    secure_js_cookies.set(key, value, attributes);
  } else {
    js_cookies.set(key, value, attributes);
  }

  return js_cookies.get(key) !== undefined;

}

function get_cookie(key) {
  if (js_cookies.get(key) === undefined) {
    return false;
  }
  return js_cookies.get(key);
}

function remove_cookie(key) {
  if (js_cookies.get(key) === undefined) {
    return true;
  }
  js_cookies.remove(key);
  return true;
}

// 表单验证
function validation_invalid_div(element, text, type = 'tooltip') {
  if (remove_validation_div(element)) {
    let div = document.createElement('div');
    if (type === 'tooltip') {
      div.className = 'invalid-tooltip';
      div.style.position = 'static';
    } else {
      div.className = 'invalid-feedback';
    }
    div.innerHTML = text;
    element.parentNode.appendChild(div);
  }
}

function validation_valid_div(element, text, type = 'tooltip') {
  if (remove_validation_div(element)) {
    let div = document.createElement('div');
    if (type === 'tooltip') {
      div.className = 'valid-tooltip';
      div.style.position = 'static';
    } else {
      div.className = 'valid-feedback';
    }
    div.innerHTML = text;
    element.parentNode.appendChild(div);
  }
}

function remove_validation_div(element) {
  if (element.nextElementSibling) {
    if (element.nextElementSibling.classList.contains('valid-tooltip') ||
      element.nextElementSibling.classList.contains('invalid-tooltip') ||
      element.nextElementSibling.classList.contains('valid-feedback') ||
      element.nextElementSibling.classList.contains('invalid-feedback')) {
      element.nextElementSibling.remove();
      return true;
    } else {
      remove_validation_div(element.nextElementSibling);
    }
  } else {
    return true;
  }
}

function input_error(element) {
  element.classList.remove('is-valid');
  element.classList.add('is-invalid');
}

function input_success(element) {
  element.classList.remove('is-invalid');
  element.classList.add('is-valid');
}

function add_spinner_icon(element, spinner_type = null, color = null, position = null) {
  let load_icon = document.createElement('span');
  switch (spinner_type) {
    case 'grow':
      load_icon.className = 'ml-1 spinner-grow spinner-grow-sm align-self-center';
      break;
    case 'border':
    default:
      load_icon.className = 'ml-1 spinner-border spinner-border-sm align-self-center';
  }

  if (color) load_icon.classList.add('text-' + color);

  toggle_disabled_element(element);

  switch (position) {
    case 'before':
    case 'left':
      element.insertBefore(load_icon, element.firstChild);
      break;
    case 'after':
    case 'right':
    default:
      element.appendChild(load_icon);
  }
}

function remove_spinner_icon(element) {
  toggle_disabled_element(element);
  // element.firstElementChild ? element.removeChild(element.firstElementChild) : "";
  element.lastElementChild ? element.removeChild(element.lastElementChild) : '';
}

function toggle_disabled_element(element) {
  let disabled_element_type = ['BUTTON'];
  if (disabled_element_type.includes(element.tagName)) {
    if (!element.hasAttribute('disabled')) {
      element.setAttribute('disabled', 'disabled');
    } else {
      element.removeAttribute('disabled');
    }
  } else {
    if (!element.classList.contains('disabled')) {
      element.classList.add('disabled');
    } else {
      element.classList.remove('disabled');
    }
  }
}

function _was_needs_validations(needs_validation_input) {
  let add_was_validated = needs_validation_input.parentElement;
  needs_validation_input.addEventListener('input', function (e) {
    if (0 < e.target.value.length) {
      add_was_validated.classList.add('was-validated');
    } else {
      add_was_validated.classList.remove('was-validated');
    }
  });
}

// ReCAPTCHA
function set_recaptcha_action(Action = null) {
  const v3_site_key = '6LcvIcEUAAAAAEUgtbN0VFiH_n2VHw-luW3rdZFv';
  const url = 'https://www.recaptcha.net/recaptcha/api.js?render=';

  Action = Action ? Action : 'unset';

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
  let url = '/recaptcha/recaptcha_verify_v3.php';
  let data = {
    token: token_key,
    action: pageAction,
  };

  $.ajax({
    type: 'post',
    url: url,
    data: data,
    timeout: 5000,
    dataType: 'json',
    success: function (data) {
      console.log('提交验证成功');
      console.log(data);
    },
    error: function (data) {
      console.log('提交验证失败');
      console.log(data);
    },
  });
}

//主导航菜单 下拉菜单
$().ready(function () {
  let account_sign_out = document.querySelector('#account_sign_out');
  if (account_sign_out) {
    let notices_nav_tabs = account_sign_out.querySelector('#notices_nav_tabs');
    notices_nav_tabs.addEventListener('click', function (e) {
      e.preventDefault();
    });
    notices_nav_tabs.addEventListener('mouseover', function (e) {
      let e_target = e.target;
      let a_tab;
      if ('A' === e_target.tagName) {
        a_tab = e_target;
      } else if ('I' === e_target.tagName || 'SPAN' === e_target.tagName) {
        a_tab = e_target.parentElement;
      } else {
        return;
      }
      $(a_tab).tab('show');
      a_tab.classList.remove('active');
    });
  }
});

// 回弹主导航菜单collapse内容
$().ready(function () {
  let navBar = document.querySelector('#navBar');
  if (navBar) {
    jt_header.addEventListener('mouseleave', function () {
      $(navBar).collapse('hide');
    });
  }
});

// 页脚文案
$().ready(function () {
  footer_add_x();
});

function footer_add_x() {
  let footer_x = document.querySelector('#footer_x');

  footer_x.appendChild(footer_record());
  footer_x.appendChild(footer_current_time());
  // footer_x.appendChild(disclaimer());
  footer_x.appendChild(footer_qr_code());
}

// 页脚时间
function footer_current_time() {
  let span = document.createElement('span');
  span.className = 'd-block text-secondary text-nowrap small';
  span.id = 'current_time';
  span.innerHTML = '&nbsp;';

  dayjs.locale('zh-cn');
  setInterval(function () {
    span.innerHTML = dayjs().format('YYYY年M月D日 dddA H点mm分s秒');
  }, 1000);

  return span;
}

// ICP备案和公网安备
function footer_record() {
  let div = document.createElement('div');
  let span = document.createElement('span');

  div.className = 'small';
  div.id = 'footer_record';

  span.innerHTML = '&nbsp;&nbsp;';

  div.appendChild(footer_record_icp_no('冀ICP备12018851号-7'));
  div.appendChild(span);
  div.appendChild(footer_record_code('13050002001901', '冀'));
  return div;
}

function footer_record_icp_no(icp_no = '') {
  let a = document.createElement('a');

  a.className = 'small text-secondary text-decoration-none';
  a.href = 'http://www.beian.miit.gov.cn/';
  a.target = '_blank';
  a.rel = 'noreferrer nofollow';
  a.title = 'ICP备案';
  a.innerHTML = icp_no;

  return a;
}

function footer_record_code(code_number = '', code_area = '') {
  let a = document.createElement('a');

  a.className = 'small text-secondary text-decoration-none';
  a.href = 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=' + code_number;
  a.target = '_blank';
  a.rel = 'noreferrer nofollow';
  a.title = '公网安备号';
  a.innerHTML = code_area + '公网安备&nbsp;' + code_number + '号';

  return a;
}

// 页脚二维码
//fixme:待完善
function footer_qr_code() {
  let div = document.createElement('div');
  let span = document.createElement('span');
  let i = document.createElement('i');

  div.className = 'my-2';
  div.id = 'current_page_QR_code';

  span.className = 'text-secondary hvr-icon-spin';
  span.title = '当前页面二维码';
  span.style.cursor = 'pointer';

  i.className = 'fa-2x fa-fw fas fa-qrcode hvr-icon';
  i.addEventListener('click', footer_modal_qr_code);

  span.appendChild(i);
  div.appendChild(span);

  return div;
}

function footer_modal_qr_code() {
  let url = document.location.href;
  let div = document.createElement('div');
  let img = document.createElement('img');
  let qrcode_option = {
    errorCorrectionLevel: 'H',
    type: 'image/jpeg',
    margin: 2,
    width: 300,
    quality: 0.3,
    color: {
      dark: '#222222',
      light: '#ffffff',
    },
  };

  div.className = 'text-center';

  ClipboardJS_location_href(img);

  div.appendChild(img);
  div.appendChild(footer_qr_code_modal_tip());

  QRCode.toDataURL(url, qrcode_option, function (err, img_base64) {
    if (err) throw err;
    img.src = img_base64;
    img.alt = document.title + '页面地址二维码';
  });
  bootstrapModalJs('', div, '', '', true);
}

function footer_qr_code_modal_tip() {
  let div = document.createElement('div');
  let i = document.createElement('i');

  div.className = 'mt-2';

  i.className = 'text-secondary fas fa-lg fa-question-circle';
  i.innerHTML = '&nbsp;说明';
  i.style.cursor = 'pointer';

  $(i).popover({
    trigger: 'hover',
    boundary: 'viewport',
    placement: 'top',
    html: true,
    content: popover_content_inner('1.截屏或者保存二维码图片，通过扫一扫功能，快速打开当前页面。<br>2.点击二维码图片，复制本页地址。复制当前页面的网址，需要操作2次网址才能复制成功'),
  });

  div.appendChild(i);
  return div;
}

function ClipboardJS_location_href(event) {
  let url = document.location.href;
  console.log(url);
  let clipboard = new ClipboardJS(event, {
    text: url,
  });
  clipboard.on('success', function (e) {
    bootstrapModalJs('', create_small_center_text('网址复制成功', 'asfasdf'), '', 'sm', true);
    console.log(e);
  });
  clipboard.on('error', function () {
    bootstrapModalJs('', '<span class="d-block text-center text-danger small">网址复制失败</span>', '', 'sm', true);
    clipboard.destroy();
  });
}

function addUrlParam(url, name, value = null) {
  url += (url.indexOf('?') === -1) ? '?' : '&';
  if (typeof name === 'string') {
    url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
  } else if (typeof name === 'object') {
    for (let index in name) {
      if (name.hasOwnProperty(index)) {
        url += encodeURIComponent(index) + '=' + encodeURIComponent(name[index]) + '&';
        //fixme:&
      }
    }
  }

  return url;
}

// 免责声明
function disclaimer() {
  let div = document.createElement('div');
  let i = document.createElement('i');
  let span = document.createElement('span');

  div.className = 'small';

  i.className = '';

  span.className = 'small';
  span.innerHTML = '免责声明：xxx';

  div.appendChild(i);
  div.appendChild(span);

  return div;
}

// 增加阴影
$().ready(function () {
  let btn_all = document.querySelectorAll('[class*="btn"]');
  let input_all = document.querySelectorAll('input[class*="form-control"]');

  for (let x = btn_all.length, i = 0; i < x; i++) {
    btn_all[i].addEventListener('mouseover', function (e) {
      let e_target = e.target;
      let tagNames = ['BUTTON', 'A'];
      if (tagNames.includes(e_target.tagName)) {
        add_shadow(e_target);
      }
    });
    btn_all[i].addEventListener('mouseleave', function (e) {
      remove_shadow(e.target);
    });
  }

  for (let x = input_all.length, i = 0; i < x; i++) {
    input_all[i].addEventListener('focus', function (e) {
      add_shadow(e.target);
    });
    input_all[i].addEventListener('blur', function (e) {
      remove_shadow(e.target);
    });
  }

});

function add_shadow(e, size = '') {
  if (size === '') {
    e.classList.add('shadow');
  } else if (size === 'sm') {
    e.classList.add('shadow-sm');
  } else if (size === 'lg') {
    e.classList.add('shadow-lg');
  }
}

function remove_shadow(e, size = '') {
  if (size === '') {
    e.classList.remove('shadow');
  } else if (size === 'sm') {
    e.classList.remove('shadow-sm');
  } else if (size === 'lg') {
    e.classList.remove('shadow-lg');
  }
}

function cursor_pointer(e) {
  e.style.cursor = 'pointer';
}

function get_href_url(target, class_name) {
  let a = target.querySelector('.' + class_name);
  if (a.href !== undefined) {
    return a.href;
  }
}

function create_img(options, alt, className) {
  let img = document.createElement('img');

  img.className = options.className ? options.className : className;
  img.src = options.src ? options.src : options;
  img.alt = options.alt ? options.alt : alt;

  return img;
}

// bootstrapModalJs-alert
function bootstrapModalJs_alert(alert_array = {}) {
  let bootstrapModalJs_options = {'backdrop': 'static', 'keyboard': false};
  let div = document.createElement('div');
  let h4 = document.createElement('h4');
  let body_div = document.createElement('div');
  let button = document.createElement('button');
  let span = document.createElement('span');
  let a_sr_only = document.createElement('a');

  let Event_Type = alert_array['Event_Type'];
  let Callback_Function = alert_array['Callback_Function'];

  div.className = 'alert mb-0 alert-' + alert_array['color'] + ' alert-dismissible fade show';
  div.setAttribute('rule', '增强提醒');

  h4.className = 'alert-heading small';
  h4.innerHTML = alert_array['alert_heading'];

  body_div.innerText = alert_array['innerText'];
  body_div.innerHTML = alert_array['innerHTML'];

  button.className = 'close';
  button.type = 'button';
  button.setAttribute('data-dismiss', 'modal');
  button.setAttribute('aria-label', '关闭强提醒');

  a_sr_only.href = 'javascript:';
  a_sr_only.className = 'sr-only d-block btn btn-sm btn-outline-success';
  a_sr_only.innerHTML = '关闭强提醒&nbsp;&times;';
  a_sr_only.setAttribute('data-dismiss', 'modal');
  a_sr_only.setAttribute('aria-label', '关闭强提醒');

  span.setAttribute('aria-hidden', 'true');
  span.title = '关闭';
  span.innerHTML = '&times;';

  button.append(span);
  div.append(h4);
  div.append(body_div);
  div.append(button);
  div.append(a_sr_only);

  let id = bootstrapModalJs('', div, '', 'sm', true, false, Event_Type, Callback_Function, bootstrapModalJs_options);
  let modalBody = document.body.querySelector('#modalBody_' + id);
  modalBody.classList.add('p-0');
}

// 防镜像
$().ready(function () {
  anti_mirror();
});

function anti_mirror() {
  setTimeout(function () {
    if (domain_check()) {
      if (fundebug) {
        fundebug.notify('发现镜像', document.location.href, {
          metaData: {
            location: document.location,
          },
        });
      }
      setTimeout(function () {
        location.href = location.href.replace(document.location.host, 'tools.jzeg.net');
      }, 3000);
    }
  }, 1000);
}

function domain_check() {
  let result = true;
  let current_host = document.location.host;
  let hosts = [
    'tools.jzeg.org',
    'test.jzeg.net',
    'tools.jzeg.net',
  ];

  if (hosts.includes(current_host)) result = false;

  return result;
}

// 右下侧固定栏
$().ready(function () {
  fixed_tools();
});

function fixed_tools() {
  let jt_footer = document.querySelector('#jt_footer');
  let div = document.createElement('div');

  div.className = 'position-fixed d-none';
  div.id = 'fixed_tools';
  div.style.right = '1rem';
  div.style.bottom = '1rem';
  div.style.zIndex = '999';

  div.appendChild(fixed_tools_to_top());
  jt_footer.appendChild(div);
}

// 返回顶部
function fixed_tools_to_top() {
  let a = document.createElement('a');
  let i = document.createElement('i');

  a.className = 'bg-img-blue d-block border border-primary rounded-circle p-1';
  a.href = 'javascript:';
  a.id = 'to_top';
  a.addEventListener('click', topControl);

  i.className = 'fa-2x fa-fw fas fa-arrow-up';

  a.appendChild(i);

  return a;
}

function topControl(e) {
  e.preventDefault();
  $('html,body').animate({scrollTop: '0px'}, 1000);
}

// 滚动监听
$().ready(function () {
  let jt_header = document.querySelector('#jt_header');
  let fixed_tools = document.querySelector('#fixed_tools');
  let to_top = document.querySelector('#to_top');
  let new_scroll_position = 0;
  let last_scroll_position;
  setTimeout(scrollListener, 500);

  function scrollListener() {
    document.addEventListener('scroll', scrollSlide);
  }

  function scrollSlide() {
    last_scroll_position = scrollY;
    /** 导航栏 **/
    if (new_scroll_position < last_scroll_position && last_scroll_position > 36) {
      jt_header.classList.remove('slideDown');
      jt_header.classList.add('slideUp', 'fixed-top');
    } else if (new_scroll_position > last_scroll_position) {
      jt_header.classList.remove('slideUp');
      jt_header.classList.add('slideDown', 'fixed-top');
      if (last_scroll_position < 36) {
        jt_header.classList.remove('slideDown', 'fixed-top');
      }
    }
    /** 右下角浮动工具栏 **/
    if (new_scroll_position > last_scroll_position) {
      if (last_scroll_position > 400) {
        fixed_tools.classList.remove('d-none');
        to_top.classList.add('animated', 'faster');
        if (to_top.classList.contains('zoomOut')) to_top.classList.remove('zoomOut');
        to_top.classList.add('zoomIn');
      } else if (last_scroll_position < 400) {
        to_top.classList.remove('zoomIn');
        to_top.classList.add('zoomOut');
        if (last_scroll_position < 300) {
          fixed_tools.classList.add('d-none');
          to_top.classList.remove('zoomOut');
          to_top.classList.remove('animated', 'faster');
        }
      }
    } else if (new_scroll_position < last_scroll_position) {
      setTimeout(function () {
        fixed_tools.classList.add('d-none');
      }, 200);
      if (to_top.classList.contains('zoomIn')) to_top.classList.remove('zoomIn');
      if (last_scroll_position > 400) {
        to_top.classList.add('zoomOut');
      }
    }
    new_scroll_position = last_scroll_position;
  }
});


/**
 * 隐藏显示全部选项时出现的滚动条
 * 本功能只在PC端有效果
 * 相关联的是CSS样式 overflow = 'overlay'
 * overlay行为与auto相同，但滚动条绘制在内容之上而不是占用空间。 仅在基于WebKit（例如，Safari）和基于Blink的（例如，Chrome或Opera）浏览器中受支持。
 * https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow
 * 忽略select可能存在的其他类型无效子元素可能造成的影响
 * 添加时的chrome版本 80.0.3987.132
 * 最后一次验证时的chrome版本 81.0.4044.113（正式版本） （64 位）
 **/
$().ready(function () {
  let all_select_elements = document.querySelectorAll('select');
  for (let x = all_select_elements.length, i = 0; i < x; i++) {
    let elements_size_value = all_select_elements[i].size;
    let children_length = all_select_elements[i].children.length;
    if (elements_size_value === children_length) {
      all_select_elements[i].style.overflow = 'overlay';
    }
  }
});

/**
 * 动态同步数字类型的文本输入框元素的值和滑动条输入框元素的值
 **/
function dynamic_synchronization_element(source_element, target_element, event_type) {
  source_element.addEventListener(event_type, function () {
    target_element.value = source_element.value;
  });
}

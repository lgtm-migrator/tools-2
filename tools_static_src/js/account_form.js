// 第三方登录提示
$().ready(function () {
  let oauth_sign_in = document.querySelector('#oauth_sign_in');
  if (oauth_sign_in) {
    oauth_sign_in.addEventListener('click', function (e) {
      let e_target = e.target;
      if ('BUTTON' === e_target.tagName && undefined !== e_target.dataset['title']) {
        let e_title = e_target.dataset['title'];
        let tip = `<div class="text-center text-info">${e_title}功能正在开发中</div>`;
        bootstrapModalJs('', tip, '', 'sm', true);
      }
    });
  }
});

// 账号模态框切换选项卡tab
$().ready(function () {
  let account_sign = document.querySelector('#account_sign');
  if (account_sign) {
    let modal_tabs = account_sign.querySelectorAll('button[class*="modal_tab"]');
    for (let x = modal_tabs.length, i = 0; i < x; i++) {
      modal_tabs[i].addEventListener('click', function (e) {
        let e_target = e.target;
        let modal_tab;

        if ('I' === e_target.tagName || 'SPAN' === e_target.tagName) {
          modal_tab = e_target.parentElement;
        } else if ('BUTTON' === e_target.tagName) {
          modal_tab = e_target;
        } else {
          return;
        }

        let modal_tab_modal = modal_tab.getAttribute('data-modal_target');
        let modal_tab_tab = modal_tab.getAttribute('data-tab_target');

        if (modal_tab_tab && modal_tab_modal) {
          $(modal_tab_modal).on('shown.bs.modal', function () {
            $(modal_tab_tab).tab('show');
          });
          $(modal_tab_modal).on('hidden.bs.modal', function () {
            document.querySelector(modal_tab_tab).classList.remove('active', 'show');
          });
          $(modal_tab_modal).modal('show');
        }
      });
    }
  }
});

// 账号表单类型切换
$().ready(function () {
  let sign_tabs = document.querySelectorAll('.sign_tab');
  if (sign_tabs) {
    for (let x = sign_tabs.length, i = 0; i < x; i++) {
      sign_tabs[i].addEventListener('click', function (e) {
        let e_target = e.target;
        let current_sign_tab;

        if ('I' === e_target.tagName || 'SPAN' === e_target.tagName) {
          current_sign_tab = e_target.parentElement;
        } else if ('A' === e_target.tagName) {
          e.preventDefault();
          current_sign_tab = e_target;
        } else if ('BUTTON' === e_target.tagName) {
          current_sign_tab = e_target;
        } else {
          return;
        }

        $(current_sign_tab).tab('show');
        current_sign_tab.classList.toggle('active');
      });
    }
  }
});

// 密码明文显示
$().ready(function () {
  let password_switch = document.querySelectorAll('.password_switch');
  for (let x = password_switch.length, i = 0; i < x; i++) {
    password_switch[i].addEventListener('click', function (e) {
      let e_target = e.target;
      let password_input;
      if ('INPUT' === e_target.parentElement.parentElement.previousElementSibling.tagName) {
        password_input = e_target.parentElement.parentElement.previousElementSibling;
      } else if ('INPUT' === e_target.parentElement.previousElementSibling.tagName) {
        password_input = e_target.parentElement.previousElementSibling;
      } else {
        return;
      }
      let type = password_input.type;
      switch (type) {
        case 'text':
          password_input.setAttribute('type', 'password');
          break;
        case 'password':
        default:
          password_input.setAttribute('type', 'text');
      }
      replace_class(e_target, 'fa-eye-slash', 'fa-eye');
      replace_title(e_target, '显示密码', '隐藏密码');
    });
  }
});

// reCaptcha状态检测
$().ready(function () {
  let recaptcha_tools = document.querySelector('#recaptcha_tools');
  if (recaptcha_tools) {
    // let recaptcha_check = document.querySelector('#recaptcha_check');
    // let recaptcha_check_text = document.querySelector('#recaptcha_check_text');
    // let recaptcha_recheck = document.querySelector('#recaptcha_check_retry');
    let recaptcha_progress = document.querySelector('#recaptcha_progress');
    let recaptcha_progress_bar = recaptcha_progress.querySelector('#recaptcha_progress_bar');
    // let recaptcha_result = document.querySelector('#recaptcha_result');
    // let recaptcha_result_success = document.querySelector('#recaptcha_result_success');
    // let recaptcha_result_failure = document.querySelector('#recaptcha_result_failure');

    show_element(recaptcha_tools);
    progress_bar_revise(recaptcha_progress_bar);

    function show_element(element) {
      if (element.classList.contains('d-none')) {
        element.classList.remove('d-none');
      } else {
        element.style.display = '';
      }
    }

    function progress_bar_revise(bar_element) {
      let element_current_width = get_element_style_number(bar_element, 'width');
      let max_time = 6;
      let max_width = 100;
      console.log(max_time + max_width + element_current_width);//fixme:未完成
    }

    function get_element_style_number(element, style_name) {
      let style_attribute_value = window.getComputedStyle(element, null).getPropertyValue(style_name);
      if ('' === style_attribute_value) return false;
      if (style_attribute_value.includes('%')) {
        return style_attribute_value.replace('%', '');
      } else if (style_attribute_value.includes('px')) {
        return style_attribute_value.replace('px', '');
      }
    }

  }
});

// 刷新验证码方法之一
$().ready(function () {
  $('#sign').on('shown.bs.modal', function () {
    listener_all_reVerify_click();
  });
});

function listener_all_reVerify_click() {
  let reVerify = document.querySelectorAll('.reVerify');
  let reVerify_length = reVerify.length;
  if (0 < reVerify_length) {
    for (let i = 0; i < reVerify_length; i++) {
      if (!reVerify[i].getAttribute('src')) {
        ajax_get_captcha(reVerify[i]);
      }
      reVerify[i].addEventListener('click', function (e) {
        ajax_get_captcha(e.target);
      });
    }
  }
}

function ajax_get_captcha(captcha_element) {
  let url = '/captcha/index.php';
  let data = {'reVerify': '1'};
  $.ajax({
    type: 'post',
    url: url,
    cache: false,
    timeout: 4000,
    data: data,
    dataType: 'json',
    success: function (data) {
      if ('IMG' === captcha_element.tagName) get_captcha_result(data, captcha_element);
    },
    error: function (error) {
      if (fundebug) fundebug.notify('验证码出错', error);
    },
  });
}

function get_captcha_result(verify_result, captcha_img_element) {
  let img_src = verify_result['captcha']['img_base64'];
  let hash = verify_result['captcha']['hash'];
  let size = verify_result['captcha']['size'];
  set_cookie('captcha_hash', hash);
  set_cookie('captcha_size', size);
  refresh_captcha_img(captcha_img_element, img_src);
}

function refresh_captcha_img(img_element, img_src) {
  img_element.src = img_src;
}

// 检查验证码hash有效性
$().ready(function () {
  let captcha_input = document.querySelectorAll('.captcha_input');
  let captcha_input_length = captcha_input.length;
  if (0 < captcha_input_length) {
    for (let i = 0; i < captcha_input_length; i++) {
      validation_captcha_hash(captcha_input[i]);
    }
  }

  function validation_captcha_hash(captcha_input) {
    let captcha_value;
    let captcha_hash;
    let captcha_size;

    captcha_input.addEventListener('input', function (e) {
      let pattern = captcha_input.pattern;
      let e_target = e.target;
      let e_target_value = e_target.value;
      captcha_size = get_cookie('captcha_size');

      if (Number(captcha_size) === e_target_value.length) {
        captcha_hash = get_cookie('captcha_hash');
        captcha_value = e_target.value;
        for (let j = 0; j <= 1000; j++) {
          captcha_value = md5(captcha_value);
        }
        captcha_input.pattern = '{' + captcha_hash + '}';
        e_target.parentElement.classList.add('was-validated');
      } else {
        captcha_input.pattern = pattern;
        e_target.parentElement.classList.remove('was-validated');
      }
    });
  }

});

// 表单校验
$().ready(function () {
  let needs_validations = document.querySelectorAll('.needs-validation');
  let needs_validations_length = needs_validations.length;
  if (0 < needs_validations_length) {
    for (let i = 0; i < needs_validations_length; i++) {
      _was_validated(needs_validations[i]);
    }
  }

  function _was_validated(needs_validation_input) {
    let add_was_validated = needs_validation_input.parentElement;
    needs_validation_input.addEventListener('input', function () {
      add_was_validated.classList.add('was-validated');
    });
  }
});

// ReCAPTCHA
$().ready(function () {
  let recaptcha_tools = document.querySelector('#recaptcha_tools');
  if (recaptcha_tools) {
    $('#recaptcha_tip').popover({
      trigger: 'hover click',
      boundary: 'viewport',
      placement: 'auto',
      html: true,
      content: popover_content_recaptcha,
      template: '<div class="popover shadow rounded-pill overflow-hidden" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body bg_square_x bg-dark-50 text-white-50"></div></div>',
    });
  }
});

// 悬浮弹出框 ReCAPTCHA内容
function popover_content_recaptcha() {
  let div = document.createElement('div');
  let span_text = document.createElement('span');
  let span_and = document.createElement('span');
  let span_privacy = document.createElement('span');
  let span_terms = document.createElement('span');

  div.className = 'text-center';
  div.id = 'recaptcha_text_badge';

  span_text.innerHTML = '由&nbsp;reCAPTCHA&nbsp;提供保护，并适用Google';
  span_and.innerHTML = '和';

  span_privacy.className = 'text-reset text-decoration-none';
  span_privacy.title = '谷歌隐私权';
  span_privacy.innerHTML = '&nbsp;隐私权&nbsp;';
  span_privacy.addEventListener('click', function () {
    window.open('https://www.google.cn/intl/zh-CN/policies/privacy/', '_blank');
  });

  span_terms.className = 'text-reset text-decoration-none';
  span_terms.title = '谷歌服务条款';
  span_terms.innerHTML = '&nbsp;服务条款&nbsp;';
  span_terms.addEventListener('click', function () {
    window.open('https://www.google.cn/intl/zh-CN/policies/terms/', '_blank');
  });

  div.appendChild(span_text);
  div.appendChild(span_privacy);
  div.appendChild(span_and);
  div.appendChild(span_terms);

  return div;
}

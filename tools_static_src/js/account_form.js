// 第三方登录提示
(function() {
  let oauth_sign_in = document.querySelector('#oauth_sign_in');
  if (oauth_sign_in) {
    oauth_sign_in.addEventListener('click', function(e) {
      let e_target = e.target;
      if (e_target.dataset['title']) {
        let e_title = e_target.dataset['title'];
        let tip = `<div class="text-center text-info">${e_title}功能正在开发中</div>`;
        bootstrapModalJs('', tip, '', 'sm', true);
      }
    });
  }
})();

// 账号模态框切换选项卡tab
$().ready(function() {
  let account_sign = document.querySelector('#account_sign');
  if (account_sign) {
    let modal_tabs = account_sign.querySelectorAll('button[class*="modal_tab"]');
    for (let x = modal_tabs.length, i = 0; i < x; i++) {
      modal_tabs[i].addEventListener('click', function(e) {
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
          $(modal_tab_modal).on('shown.bs.modal', function() {
            $(modal_tab_tab).tab('show');
          });
          $(modal_tab_modal).on('hidden.bs.modal', function() {
            document.querySelector(modal_tab_tab).classList.remove('active', 'show');
          });
          $(modal_tab_modal).modal('show');
        }
      });
    }
  }
});

// 账号表单类型切换
$().ready(function() {
  let sign_tabs = document.querySelectorAll('.sign_tab');
  if (sign_tabs) {
    for (let x = sign_tabs.length, i = 0; i < x; i++) {
      sign_tabs[i].addEventListener('click', function(e) {
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
$().ready(function() {
  let password_switch = document.querySelectorAll('.password_switch');
  for (let x = password_switch.length, i = 0; i < x; i++) {
    password_switch[i].addEventListener('click', function(e) {
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
$().ready(function() {
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

//主导航菜单 下拉菜单
$().ready(function() {
  let account_sign_out = document.querySelector('#account_sign_out');
  if (account_sign_out) {
    let notices_nav_tabs = account_sign_out.querySelector('#notices_nav_tabs');
    notices_nav_tabs.addEventListener('click', function(e) {
      e.preventDefault();
    });
    notices_nav_tabs.addEventListener('mouseover', function(e) {
      let e_target = e.target;
      if ('A' === e_target.tagName && e_target.classList.contains('nav-link')) {
        $(e_target).tab('show');
        e_target.classList.toggle('text-dark');
      }
    });
  }
});

// 刷新验证码方法之一
$().ready(function() {
  let captcha = document.querySelector('#captcha');
  if (captcha) {
    let reVerify = captcha.querySelector('#reVerify');
    reVerify.addEventListener('click', function(e) {
      let url = '/captcha/index.php';
      let data = '';
      $.ajax({
        type: 'post',
        url: url,
        data: data,
        // dataType: 'json',
        success: function(data) {
          console.log(data);
          let e_target = e.target;
          if ('IMG' === e_target.tagName) {
            let timestamp = new Date().getTime();
            let img_src = '/captcha/captcha.jpg' + '?timestamp=' + timestamp;
            refresh_captcha_img(e_target, img_src);
          }
        },
        error: function(data) {
        },
      });

    });

  }
});

function refresh_captcha_img(img_element, img_src) {
  img_element.src = img_src;
}

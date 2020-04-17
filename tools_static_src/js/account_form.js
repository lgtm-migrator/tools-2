// 第三方登录提示
(function () {
  let oauth_sign_in = document.querySelector("#oauth_sign_in");
  if (oauth_sign_in) {
    oauth_sign_in.addEventListener('click', function (e) {
      let e_target = e.target;
      if (e_target.dataset['title']) {
        let e_title = e_target.dataset["title"];
        let tip = `<div class="text-center text-info">${e_title}功能正在开发中</div>`;
        bootstrapModalJs('', tip, '', 'sm', true);
      }
    })
  }
})();

// 账号表单切换
$().ready(function () {
  let sign_tabs = document.querySelectorAll('.sign_tab');
  if (sign_tabs) {
    for (let x = sign_tabs.length, i = 0; i < x; i++) {
      sign_tabs[i].addEventListener('click', function (e) {
        e.preventDefault();
        let e_target = e.target;
        $(e_target).tab('show');
        if (e_target.classList.contains('active')) {
          e_target.classList.remove('active');
        }
      });
    }
  }
});

// 密码明文显示
$().ready(function () {
  let password_switch = document.querySelector('#password_switch');
  if (password_switch) {
    password_switch.addEventListener('click', function (e) {
      let e_target = e.target;
      console.log(e_target);
      if ('INPUT' === e_target.parentElement.parentElement.previousElementSibling.tagName) {
        let password_input = e_target.parentElement.parentElement.previousElementSibling;
        let type = password_input.type;
        switch (type) {
          case 'text':
            password_input.setAttribute('type', 'password');
            break;
          case 'password':
          default:
            password_input.setAttribute('type', 'text');
        }
      }
      replace_class(e_target, 'fa-eye-slash', 'fa-eye');

    })
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
      let max_time = 6,
        max_width = 100,
        gap_width = max_width - element_current_width;

      console.log(max_time + gap_width);
    }

    function get_element_style_number(element, style_name) {
      let style_attribute_value = window.getComputedStyle(element, null).getPropertyValue(style_name);
      console.log(style_attribute_value);
      if ('' === style_attribute_value) return false;
      if (style_attribute_value.includes('%')) {
        return style_attribute_value.replace('%', '');
      } else if (style_attribute_value.includes('px')) {
        return style_attribute_value.replace('px', '');
      }
    }

  }
});

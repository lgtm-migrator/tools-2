// 第三方登录提示
(function () {
  let oauth_sign_in = document.querySelector("#oauth_sign_in");
  if (oauth_sign_in) {
    oauth_sign_in.addEventListener('click', function (e) {
      let e_target = e.target;
      if (e_target.dataset['title']) {
        let e_title = e_target.dataset["title"];
        let tip = `<div class="text-center text-warning">${e_title}功能正在开发中</div>`;
        bootstrapModalJs('', tip, '', 'sm', true);
      }
    })
  }
})();

// 更多登录方式
(function () {
  let collapse_oauth_login = document.querySelector("#collapse_oauth_login");
  let oauth_login_list = document.querySelector("#oauth_login_list");
  if (collapse_oauth_login) {
    collapse_oauth_login.addEventListener("click", collapse_oauth_login_toggle);
    collapse_oauth_login.addEventListener("click", collapse_oauth_login_toggle_icon);
  }

  function collapse_oauth_login_toggle() {
    if (oauth_login_list) {
      $("#oauth_login_list").collapse("toggle");
    }
  }

  function collapse_oauth_login_toggle_icon() {
    let i = collapse_oauth_login.querySelector("i");
    let $oauth_login_list = $("#oauth_login_list");
    $oauth_login_list.on('hidden.bs.collapse', function () {
      i.classList.remove("fa-chevron-down");
      i.classList.add("fa-chevron-up");
    });
    $oauth_login_list.on('shown.bs.collapse', function () {
      i.classList.remove("fa-chevron-up");
      i.classList.add("fa-chevron-down");
    });
  }
})();

// 登录切换
(function () {
  let sign_tab = document.querySelector('#sign_tab');
  if (sign_tab) {
    sign_tab.addEventListener('click', function (e) {
      let e_target = e.target;
      if ('BUTTON' === e_target.tagName) {
        $(e_target).tab('show');
      }
    });

    let $sign_tab_btn = $('#sign_tab button');
    $sign_tab_btn.on('show.bs.tab', function (e) {
      let e_target = e.target;
      let e_relatedTarget = e.relatedTarget;
      console.log($(e_target));
      console.log(e_target);
      console.log($(e_relatedTarget));
      console.log(e_relatedTarget);
    });

    $sign_tab_btn.on('shown.bs.tab', function (e) {
      let e_target = e.target;
      let e_relatedTarget = e.relatedTarget;
      console.log($(e_target));
      console.log(e_target);
      console.log($(e_relatedTarget));
      console.log(e_relatedTarget);
    });

  }
})();

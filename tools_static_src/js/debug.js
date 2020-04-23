/***
 * 上线前的临时调试文件
 */

// 用户登录与否的按钮显示
$().ready(function () {
  let navBar_account = document.querySelector('#navBar-account');
  if (navBar_account) {
    let signIn_submit = document.querySelector('#signIn_submit');
    let account_sign_exit = document.querySelector('#account_sign_exit');
    let account_sign = document.querySelector('#account_sign');
    let account_sign_out = document.querySelector('#account_sign_out');

    account_sign_out.classList.remove('d-flex');
    account_sign_out.style.display = 'none';
    signIn_submit.addEventListener('click', function () {
      $('#sign').modal('hide');
      account_sign.classList.remove('d-flex');
      account_sign.style.display = 'none';
      account_sign_out.classList.add('d-flex');
      account_sign_out.style.display = '';
    });
    account_sign_exit.addEventListener('click', function () {
      account_sign.classList.add('d-flex');
      account_sign.style.display = '';
      account_sign_out.classList.remove('d-flex');
      account_sign_out.style.display = 'none';
    });
  }
});

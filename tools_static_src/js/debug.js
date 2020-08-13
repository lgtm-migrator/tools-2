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
    if (signIn_submit) {
      signIn_submit.addEventListener('click', function () {
        let sign = document.querySelector('#sign');

        bootstrap.Modal.getInstance(sign).hide();
        account_sign.classList.remove('d-flex');
        account_sign.style.display = 'none';
        account_sign_out.classList.add('d-flex');
        account_sign_out.style.display = '';
      });
    }

    if (account_sign_exit) {
      account_sign_exit.addEventListener('click', function () {
        account_sign.classList.add('d-flex');
        account_sign.style.display = '';
        account_sign_out.classList.remove('d-flex');
        account_sign_out.style.display = 'none';
      });
    }
  }
});

$().ready(function () {
  let qrcode_test = document.querySelector('#qrcode_test');
  if (qrcode_test) {
    let dingtalk_img = document.createElement("img");
    let qq_img = document.createElement("img");
    let wechat_img = document.createElement("img");

    let dingtalk_url_parameters = {
      'corpId': 'ding893bad2d4e569096fac3b26d3f309cdb',
      'cbdbhh': 'qwertyuiop',
      'origin': '0',
    };
    let qq_url_parameters = {
      'k': 'Ud6pogcHJ1ioQR_8qtPTHkXr48QRmtd4',
      'authKey': 'dSaugxZBNfcmo4T9bg+ltEY5VeRbqvtCoo99VxHHxLv4/wWLDuejiKc+nbTJCY0d',
      'noverify': '0',
    };
    let wechat_url_parameters = {};
    let dingtalk_url = create_url('https://h5.dingtalk.com/', 'circle/healthCheckin.html', dingtalk_url_parameters);
    let qq_url = create_url('https://qm.qq.com/', 'cgi-bin/qm/qr', qq_url_parameters);
    let wechat_url = create_url('https://weixin.qq.com/', 'g/AQYAADnWmR9tHL01ktpbeg2T69yCdP6wRAh2sRBbpFYoMk6oY3igS9hAnhKIfBXa', wechat_url_parameters);

    let qrcode_option = {
      errorCorrectionLevel: 'H',
      type: 'image/jpeg',
      margin: 0.5,
      width: 150,
      quality: 0.2,
      color: {
        dark: '#222222',
        light: '#ffffff',
      },
    };

    QRCode.toDataURL(dingtalk_url, qrcode_option, function (err, img_base64) {
      if (err) throw err;
      dingtalk_img.src = img_base64;
      dingtalk_img.alt = '钉钉群二维码';
      dingtalk_img.title = '钉钉群二维码';
      qrcode_test.appendChild(dingtalk_img);
    });
    QRCode.toDataURL(qq_url, qrcode_option, function (err, img_base64) {
      if (err) throw err;
      qq_img.src = img_base64;
      qq_img.alt = 'QQ群二维码';
      qq_img.title = 'QQ群二维码';
      qrcode_test.appendChild(qq_img);
    });
    QRCode.toDataURL(wechat_url, qrcode_option, function (err, img_base64) {
      if (err) throw err;
      wechat_img.src = img_base64;
      wechat_img.alt = '微信群二维码';
      wechat_img.title = '微信群二维码';
      qrcode_test.appendChild(wechat_img);
    });

  }
})

function create_url(baseDomain = '', pathname = '', parameters = []) {
  let url = baseDomain + pathname;


  return url;
}

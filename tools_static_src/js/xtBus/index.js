$().ready(function () {
  let xtBus_btn = document.querySelector('#xtBus_btn');
  if (xtBus_btn) {
    let btnList = xtBus_btn.querySelectorAll('button');

    [].slice.call(btnList).forEach(function (TriggerBtn) {
      if ('init' === TriggerBtn.dataset['type']) console.log(TriggerBtn);
      TriggerBtn.addEventListener('click', function () {
        if ('line' === TriggerBtn.dataset['type']) {
          console.log(TriggerBtn);
        }
      });
    });
  }
});

function common_ajax(data = {}) {
  $.ajax({
    url: 'q.php',
    type: 'post',
    cache: false,
    data: data,
    timeout: 4000,
    dataType: 'json',
    success: function (data) {
      console.log(data);
    },
    error: function (errorData) {
      console.log(errorData);
    },
  });
}

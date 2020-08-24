$().ready(function () {
  let xtBus_btn = document.querySelector('#xtBus_btn');
  if (xtBus_btn) {
    let btnList = xtBus_btn.querySelectorAll('button');

    [].slice.call(btnList).forEach(function (TriggerBtn) {
      TriggerBtn.addEventListener('click', function () {
        if ('init' === TriggerBtn.dataset['type']) {
          getInit(busPageInit);
        } else if ('line' === TriggerBtn.dataset['type']) {
          getLine();
        } else if ('query' === TriggerBtn.dataset['type']) {
          getQuery();
        } else if ('station' === TriggerBtn.dataset['type']) {
          getStation();
        }
      });
    });
  }
});

$().ready(function () {
  let bus = document.querySelector('#bus');
  if (bus) {
    getInit(busPageInit);
  }
});

function common_ajax(data = {}, fn) {
  $.ajax({
    url: 'q.php',
    type: 'post',
    cache: false,
    data: data,
    timeout: 4000,
    dataType: 'json',
    success: function (data) {
      if (undefined !== fn) {
        fn(data);
      } else {
        console.log(11);
        console.log(data);
        console.log(22);
      }
    },
    error: function (errorData) {
      console.log(errorData);
    },
  });
}

function busPageInit(data = {}) {
  console.log(data);
  let bus = document.querySelector('#bus');
  let busArea = document.querySelector('#busArea');
  if (1 === data['status'] && 'success' === data['msg']) {
    busArea.innerHTML = data['city']['showName'];
  } else {
    busArea.innerHTML = '故障，不可用';
  }
}

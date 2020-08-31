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

    // 分类查询线路和站牌
    let busQuery = document.querySelector('#busQuery');
    let busQueryCategory = busQuery.querySelectorAll('button[data-target]');
    [].slice.call(busQueryCategory).forEach(function (buttonTriggerEL) {
      let buttonTab = new bootstrap.Tab(buttonTriggerEL);
      let buttonButtonToggle = new bootstrap.Button(buttonTriggerEL);
      buttonTriggerEL.addEventListener('click', function () {
        buttonTab.show();
      })
      buttonTriggerEL.addEventListener('show.bs.tab', function () {
        buttonButtonToggle.toggle();
      })
      buttonTriggerEL.addEventListener('hide.bs.tab', function () {
        buttonButtonToggle.toggle();
      })
    })

    // 监听输入
    let getRelatedLines = document.querySelector('#getRelatedLines');
    let getRelatedStations = document.querySelector('#getRelatedStations');
    getRelatedLines.addEventListener('input', function () {
      let searchValue = this.value;
      if (searchValue.length >= 1) {
        console.log(this.value);
        getQuery(searchValue);
      }
    })
    getRelatedStations.addEventListener('input', function () {
      let searchValue = this.value;
      if (searchValue.length >= 2) {
        console.log(this.value);
        getQuery(searchValue);
      }
    })
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
        console.log(data);
      }
    },
    error: function (errorData) {
      console.log(errorData);
    },
  });
}

function busPageInit(data = {}) {
  console.log(data);
  let busArea = document.querySelector('#busArea');
  if (1 === data['status'] && 'success' === data['msg']) {
    busArea.innerHTML = data['city']['showName'];
  } else {
    busArea.innerHTML = '故障，不可用';
  }
}

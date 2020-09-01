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
    getRelatedLines.addEventListener('blur', function () {
      let searchValue = this.value;
      if (searchValue.length >= 1) {
        queryLines(searchValue, setLineResult);
      }
    })
    getRelatedStations.addEventListener('blur', function () {
      let searchValue = this.value;
      if (searchValue.length >= 2) {
        queryStations(searchValue, setStationResult);
      }
    })

    // 结果


    // cleanInnerHTML(lineResult);
    // cleanInnerHTML(stationResult);
    // cleanInnerHTML(transferResult);

    // toggle_display_element(lineResult);
    // toggle_display_element(stationResult);
    // toggle_display_element(transferResult);
    //
    // toggle_display_element(searchResult);
  }
});

let searchResult = document.querySelector('#searchResult');
let lineResult = document.querySelector('#lineResult');
let stationResult = document.querySelector('#stationResult');
let transferResult = document.querySelector('#transferResult');

function setLineResult(data) {
  let msg = data['msg'];
  let status = data['status'];

  if (msg !== 'success' && status !== 1) {
    console.log('获取失败');
    return;
  }

  add_dNone(stationResult);
  add_dNone(transferResult);
  cleanInnerHTML(lineResult);
  lineResult.appendChild(create_listGroup());

  data['buslines'].forEach(function (currentValue) {
    if ('1' === currentValue['upperOrDown']) {
      let currentText = currentValue['lineName'] + ' 开往 ' + currentValue['to'];
      lineResult.firstChild.appendChild(create_listGroupItem(currentText));
    }
  });
  remove_dNone(lineResult);
  remove_dNone(searchResult);
}

function setStationResult(data) {
  let msg = data['msg'];
  let status = data['status'];

  if (msg !== 'success' && status !== 1) {
    console.log('获取失败');
    return;
  }

  add_dNone(lineResult);
  add_dNone(transferResult);
  cleanInnerHTML(stationResult);
  stationResult.appendChild(create_listGroup());

  data['busstations'].forEach(function (currentValue) {
    let currentText = currentValue['stationName'];
    stationResult.firstChild.appendChild(create_listGroupItem(currentText));
  });

  remove_dNone(stationResult);
  remove_dNone(searchResult);
}

function create_listGroup() {
  let div = document.createElement("div");
  div.className = "list-group list-group-flush";
  div.role = "list";
  return div;
}

function create_listGroupItem(data = '') {
  let a = document.createElement("a");

  a.className = "list-group-item list-group-item-action";
  a.href = "javascript:";
  // a.target = "_blank";
  a.role = "link";
  a.innerHTML = data;

  return a;
}

function remove_dNone(element) {
  element.classList.remove('d-none');
}

function add_dNone(element) {
  element.classList.add('d-none');
}

function cleanInnerHTML(element) {
  element.innerHTML = '';
}

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

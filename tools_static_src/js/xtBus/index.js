$().ready(function () {
  let xtBus_btn = document.querySelector('#xtBus_btn');
  if (xtBus_btn) {
    let btnList = xtBus_btn.querySelectorAll('button');

    [].slice.call(btnList).forEach(function (TriggerBtn) {
      TriggerBtn.addEventListener('click', function () {
        if ('init' === TriggerBtn.dataset['type']) {
          getInit(busPageInit);
        } else if ('line' === TriggerBtn.dataset['type']) {
          getLine({lineName: '6路', direction: '1'});
        } else if ('ReLine' === TriggerBtn.dataset['type']) {
          getReLine({lineName: '6路', direction: '1'});
        } else if ('query' === TriggerBtn.dataset['type']) {
          getQuery('3');
        } else if ('station' === TriggerBtn.dataset['type']) {
          getStation('人民医院');
        }
      });
    });
  }
});

$().ready(function () {
  let bus = document.querySelector('#bus');
  if (bus) {
    set_CityName();

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

    let CityKey = localStorage.getItem('CityKey');
    let CityName = localStorage.getItem('CityName');
    let BusLocalStorageArray = [];

    BusLocalStorageArray.push({
      CityName: CityName,
      CityKey: CityKey,
      LineHistory: [
        {
          roundName: '1路',
          direction: '1',
          to: '公交三公司',
        },
        {
          roundName: '2路西环',
          direction: '1',
          to: '火车站(站前街)',
        },
      ],
      StationHistory: ['114改装厂', '107路口', '天一城北站'],
    });
    BusLocalStorageArray.push([
      {CityName1111: CityName,}
    ]);
    // console.log(BusLocalStorageArray[0]);
    // BusLocalStorageArray.fill('CityName');
    // console.log(BusLocalStorageArray);
    console.log(JSON.stringify(BusLocalStorageArray));
    localStorage.setItem('Bus', JSON.stringify(BusLocalStorageArray));
    // localStorage.removeItem('Bus');

    getRelatedLines.addEventListener('focus', function () {
      if ('SPAN' === this.nextElementSibling.tagName) {
        let parent = this.parentElement;
        let thisWidth = window.getComputedStyle(this).getPropertyValue('width');
        let dropdownMenuStyle = {
          'width': thisWidth,
        };

        let getBusLocalStorageArray = JSON.parse(localStorage.getItem('Bus'));
        // console.log(getBusLocalStorageArray);

        let StationHistory = getBusLocalStorageArray[0]['StationHistory'];
        let LineHistory = getBusLocalStorageArray[0]['LineHistory'];
        LineHistory.push({
          roundName: '3路',
          direction: '1',
          to: '火车站(站前街)',
        });
        console.log(LineHistory);
        localStorage.setItem('Bus', JSON.stringify(getBusLocalStorageArray));

        let historyHead = create_div('px-3 d-flex justify-content-between align-items-center', 'LineHistoryHead');
        let dropdownMenu = create_dropdownMenu('dropdown-menu', 'getRelatedLinesDropdown', dropdownMenuStyle, historyHead);
        parent.insertBefore(dropdownMenu, this.nextElementSibling);
        this.setAttribute('data-toggle', 'dropdown');
        this.setAttribute('data-target', 'getRelatedLinesDropdown');


        let LineHistoryHead = document.querySelector('#LineHistoryHead');
        let text = document.createElement("div");
        let clearHistory = document.createElement("i");
        text.innerHTML = '历史记录';
        clearHistory.className = 'far fa-trash-alt';
        clearHistory.title = '清除历史记录';
        clearHistory.addEventListener('click', function () {
          bootstrapModalJs('', create_small_center_text('已经清空了历史记录', 'success'), '', 'sm', true);
        });

        LineHistoryHead.appendChild(text);
        LineHistoryHead.appendChild(clearHistory);

        for (let x = LineHistory.length, i = 0; i < x; i++) {
          let getRelatedLinesDropdown = document.querySelector('#getRelatedLinesDropdown');
          console.log(getRelatedLinesDropdown);
          let a = document.createElement("a");
          a.className = 'list-group-item list-group-item-action';
          a.href = "javascript:";
          // a.target = "_blank";
          a.role = "link";
          a.innerHTML = LineHistory[i]['roundName'] + ' 开往 ' + LineHistory[i]['to'];
          a.addEventListener('click', function () {
            console.log(LineHistory[i]);
          });
          getRelatedLinesDropdown.appendChild(a);
        }
        StationHistory.forEach(function (currentValue) {
          let a = document.createElement("a");
          a.className = 'list-group-item list-group-item-action';
          a.href = "javascript:";
          // a.target = "_blank";
          a.role = "link";
          a.innerHTML = currentValue;
          // console.log(a);
          a.addEventListener("click", function () {
            console.log(a);
          });
        });

      }
    });
    getRelatedStations.addEventListener('focus', function () {
      if ('SPAN' === this.nextElementSibling.tagName) {
      }
    });
    getRelatedLines.addEventListener('blur', function () {
      let searchValue = this.value;
      if (searchValue.length >= 1) {
        queryLines(searchValue, setLineResult);
      }
    });
    getRelatedStations.addEventListener('blur', function () {
      let searchValue = this.value;
      if (searchValue.length >= 2) {
        queryStations(searchValue, setStationResult);
      }
    });
  }
});

let searchResult = document.querySelector('#searchResult');
let lineResult = document.querySelector('#lineResult');
let stationResult = document.querySelector('#stationResult');
let transferResult = document.querySelector('#transferResult');

function setLineResult(data) {
  if (false === common_statusCode_check(data)) return;
  add_dNone(stationResult);
  add_dNone(transferResult);
  cleanInnerHTML(lineResult);
  lineResult.appendChild(create_listGroup());

  data['buslines'].forEach(function (currentValue) {
    let info = {
      text: currentValue['lineName'] + ' 开往 ' + currentValue['to'],
      type: 'line',
      lineName: currentValue['lineName'],
      upperOrDown: currentValue['upperOrDown'],
    };
    lineResult.firstChild.appendChild(create_listGroupItem(info));
  });
  remove_dNone(lineResult);
  remove_dNone(searchResult);
}

function setStationResult(data) {
  common_statusCode_check(data);
  add_dNone(lineResult);
  add_dNone(transferResult);
  cleanInnerHTML(stationResult);
  stationResult.appendChild(create_listGroup());

  data['busstations'].forEach(function (currentValue) {
    let info = {
      text: currentValue['stationName'],
      type: 'station',
      stationName: currentValue['stationName'],
    };
    stationResult.firstChild.appendChild(create_listGroupItem(info));
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

function create_listGroupItem(data = {}) {
  let a = document.createElement("a");
  let i = document.createElement("i");

  a.className = "list-group-item list-group-item-action";
  a.href = "javascript:";
  // a.target = "_blank";
  a.role = "link";
  a.innerHTML = data['text'];

  switch (data['type']) {
    case 'line':
      a.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('a.innerText ==== ' + a.innerText);
        console.log('lineName ==== ' + data['lineName']);
        console.log('upperOrDown ==== ' + data['upperOrDown']);
        getLine({lineName: data['lineName'], direction: data['upperOrDown']});
        console.log(data['upperOrDown']);
      });
      i.className = 'mr-2 text-primary fas fa-bus';
      break;
    case 'station':
      a.addEventListener('click', function (e) {
        e.preventDefault();
        getStation(data['stationName'], queryStationLines);
        console.log('stationName ==== ' + data['stationName']);
      });
      i.className = 'mr-2 text-info fas fa-sign';
      break;
    case 'place':
      i.className = 'mr-2 text-dark fas fa-map-marker-alt';
      break;
    default:
      break;
  }

  a.insertBefore(i, a.firstChild);
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
    success: function (successData) {
      if (undefined !== fn) {
        fn(successData);
        console.log(successData);
      } else {
        console.log(successData);
      }
    },
    error: function (errorData) {
      console.log(errorData);
    },
  });
}

function busPageInit(data = {}) {
  if (1 === data['status'] && 'success' === data['msg']) {
    localStorage.setItem('CityName', data['city']['cityname']);
    localStorage.setItem('CityKey', 'xt042701');
  } else {
    localStorage.setItem('CityName', 'error');
    localStorage.setItem('CityKey', 'error');
  }
  set_CityName();
}

function set_CityName() {
  let busArea = document.querySelector('#busArea');
  let localStorage_CityName = localStorage.getItem('CityName');

  if (null !== localStorage_CityName) {
    busArea.innerHTML = localStorage_CityName;
  } else {
    getInit(busPageInit);
  }
}

function common_statusCode_check(data) {
  let msg = data['msg'];
  let status = data['status'];

  if (msg === 'success' && status === 1) {
    return true;
  }
  if (fundebug) funDebugFeedback('公交查询异常')
  bootstrapModalJs('', create_small_center_text('信息异常，请删除页面缓存或者强制刷新页面后，重新尝试查询。', 'danger'), '', 'sm', true);
  return false;
}

function queryStationLines(data = {}) {
  // console.log(data);
}

function create_dropdownMenu(className = '', id = '', style = {}, newChild) {
  let dropdownMenu = create_div(className, id);

  if (undefined !== style) {
    Object.keys(style).forEach(function (currentValue) {
      dropdownMenu.style[currentValue] = style[currentValue];
    });
  }

  if (undefined !== newChild) dropdownMenu.appendChild(newChild);
  return dropdownMenu;
}

function create_div(className = '', id = '', newChild) {
  let div = document.createElement("div");

  className ? div.className = className : '';
  id ? div.id = id : '';
  newChild ? ('string' === typeof newChild ? div.innerHTML = newChild : div.appendChild(newChild)) : '';

  return div;
}

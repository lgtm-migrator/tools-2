$().ready(function () {
  get_route();
});

function getLine(getInfo = {}, fn) {
  let data = {
    type: 'line',
    cmd: '103',
    lineName: getInfo['lineName'],
    direction: getInfo['direction'],
  };
  common_ajax(data, fn);
}

function getReLine(getReInfo = {}, fn) {
  let data = {
    type: 'line',
    cmd: '104',
    lineName: getReInfo['lineName'],
    direction: getReInfo['direction'],
  };
  common_ajax(data, fn);
}

function get_route() {
  get_routeName();
  get_routeUpperOrDown();
}

function get_routeName() {
  let routeNameList = document.querySelectorAll('#routeNameList input');
  [].slice.call(routeNameList).forEach(function (routeNameTriggerEL) {
    routeNameTriggerEL.addEventListener('click', function () {
      console.log(routeNameTriggerEL.value);
    });
  });
}

function get_routeUpperOrDown() {
  let routeUpperOrDownList = document.querySelectorAll('#routeUpperOrDown input');
  [].slice.call(routeUpperOrDownList).forEach(function (UpperOrDownTriggerEL) {
    UpperOrDownTriggerEL.addEventListener('click', function () {
      console.log(UpperOrDownTriggerEL.value);
    });
  });
}

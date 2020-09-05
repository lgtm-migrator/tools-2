$().ready(function () {
  get_route();
});

function getLine(fn) {
  let data = {
    type: 'line',
    cmd: '103',
    lineName: '13路',
    direction: '1',
  };
  common_ajax(data, fn);
}

function getReLine(fn) {
  let data = {
    type: 'line',
    cmd: '104',
    lineName: '13路',
    direction: '1',
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

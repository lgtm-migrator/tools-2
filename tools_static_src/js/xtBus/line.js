$().ready(function () {
});

function getLine(fn) {
  let data = {
    type: 'line',
    cmd: '103',
    lineName: '3路',
    direction: '1',
  };
  common_ajax(data, fn);
}

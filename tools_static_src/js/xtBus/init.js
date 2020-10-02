$().ready(function () {
});

function getInit(fn) {
  let data = {
    type: 'init',
    cmd: '205',
  };
  common_ajax(data, fn);
}

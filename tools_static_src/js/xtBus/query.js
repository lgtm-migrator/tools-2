$().ready(function () {
});

function getQuery() {
  let data = {
    type: 'query',
    cmd: '102',
    keyword: '3',
  };
  common_ajax(data);
}

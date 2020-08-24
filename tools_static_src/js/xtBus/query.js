$().ready(function () {
  let data = {
    type: 'query',
    cmd: '102',
    keyword: '3',
  };
  common_ajax(data);
});

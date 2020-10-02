$().ready(function () {
});

function getQuery(keyword = '', fn) {
  let data = {
    type: 'query',
    keyword: keyword,
  };
  common_ajax(data, fn);
}

function queryLines(keyword = '', fn) {
  let data = {
    type: 'queryLines',
    keyword: keyword,
  };
  common_ajax(data, fn);
}

function queryStations(keyword = '', fn) {
  let data = {
    type: 'queryStations',
    keyword: keyword,
  };
  common_ajax(data, fn);
}

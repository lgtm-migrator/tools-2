// 测试结果：不允许跨域请求
$().ready(function () {
  // getXTBus_init();
  // getXTBus_query();
});

function getXTBus(data = {}) {
  let apiUrl = 'https://h5.mygolbs.com/ApiData.do';

  $.ajax({
    type: 'post',
    cache: false,
    dataType: 'json',
    url: apiUrl,
    data: data,
    success: function (data) {
      console.log(data);
    },
    error: function (errorData) {
      commonAjaxErrorFeedback(errorData);
    }
  });
}

function getXTBus_init() {
  let cityKey = 'xt042701';
  let cmd = '205';
  let dataInit = {
    "CMD": cmd,
    "CITYKEY": cityKey,
  };

  getXTBus(dataInit);
}

function getXTBus_query() {
  let cityName = '邢台市';
  let keyword = '3';
  let cmd = '102';
  let cityKey = 'xt042701';

  let dataQuery = {
    "CITYNAME": cityName,
    "KEYWORD": keyword,
    "CMD": cmd,
    "CITYKEY": cityKey,
  };
  getXTBus(dataQuery);
}

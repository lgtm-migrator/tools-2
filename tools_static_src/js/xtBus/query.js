$().ready(function () {
  let data = {
    type: 'query',
    cmd: '102',
    keyword: '3',
  };
  $.ajax({
    url: 'q.php',
    type: 'post',
    cache: false,
    data: data,
    timeout: 4000,
    dataType: 'json',
    success: function (data) {
      console.log(data);
    },
    error: function (errorData) {
      console.log(errorData);
    },
  });
});

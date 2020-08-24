$().ready(function () {
  let data = {
    type: 'init',
    cmd: '205',
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

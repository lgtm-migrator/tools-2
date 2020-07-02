$().ready(function () {
  let answer_text = document.querySelector('#answer_text');
  let get_query = document.querySelector('#get_query');


  get_query.addEventListener('click', function () {
    let data = {
      'q': answer_text.value,
      'category': get_radio_id('category'),
    };

    if (data['q'] === '') {
      bootstrapModalJs('', create_small_center_text('请输入查询值'), '', 'sm', true);
      return;
    } else if (data['q'].length < 4) {
      bootstrapModalJs('', create_small_center_text('关键词太短，将会导致返回的结果数量过多，不利于精准识别。'), '', '', true);
      return;
    } else if (data['category'] === undefined) {
      bootstrapModalJs('', create_small_center_text('请选择要搜索的题的类型'), '', 'sm', true);
      return;
    }
    add_spinner_icon(get_query);
    ajax_query(data, get_query);
  });
});

function ajax_query(query_data, trigger_element) {
  let url = '/exam_answer_query/index.php';
  $.ajax({
    method: 'post',
    url: url,
    cache: false,
    dataType: 'json',
    timeout: 5000,
    data: {
      action: 'query_answer',
      q: query_data['q'],
      category: query_data['category'],
    },
    success: function (data) {
      setTimeout(function () {
        remove_spinner_icon(trigger_element);
      }, 1000);

      console.log(data);
    },
    error: function (error) {
      remove_spinner_icon(trigger_element);
      console.log(error);
    },
  });
}

function get_radio_id(radio_name) {
  let radios = document.querySelectorAll('input[name=' + radio_name + ']');
  let radio_id;
  for (let x = radios.length, i = 0; i < x; i++) {
    if (radios[i].checked === true) {
      radio_id = radios[i].id;
      break;
    }
  }
  return radio_id;
}

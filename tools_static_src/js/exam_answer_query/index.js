$().ready(function () {
  let answer_text = document.querySelector('#answer_text');
  let answer_id_lock = document.querySelector('#answer_id_lock');
  let lock_btn = document.querySelector('#lock_id');
  let lock_open_btn = document.querySelector('#lock_open_id');
  let get_query = document.querySelector('#get_query');

  if (lock_btn) {
    let btn_font_ico = lock_btn.querySelector('i');

    if (get_cookie('lock_id')) {
      answer_id_lock.value = get_cookie('lock_id');
      lock_open_btn.innerHTML += '&nbsp;' + get_cookie('lock_id');
      add_class(btn_font_ico, 'fa-lock');
    } else {
      add_class(btn_font_ico, 'fa-lock-open');
    }
  }

  lock_btn.addEventListener('click', function () {
    lock_id(answer_id_lock, lock_btn, lock_open_btn);
  });

  lock_open_btn.addEventListener('click', function () {
    lock_open_id('lock_id', lock_btn, lock_open_btn);
  });

  get_query.addEventListener('click', function () {
    let data = {
      'answer_id': answer_id_lock.value,
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

function lock_id(id_element, lock_btn, lock_open_btn) {
  let id_value = id_element.value;
  let btn_font_ico = lock_btn.querySelector('i');
  if (id_value.length === 0) {
    bootstrapModalJs('', create_small_center_text('没有输入试卷编号'), '', 'sm', true);
  } else {
    set_cookie('lock_id', id_value);
    remove_class(btn_font_ico, 'fa-lock-open');
    add_class(btn_font_ico, 'fa-lock');
    lock_open_btn.innerHTML = '解除锁定&nbsp;' + get_cookie('lock_id');
    bootstrapModalJs('', create_small_center_text('已经锁定当前试卷编号'), '', 'sm', true);
  }
}

function lock_open_id(id_key, lock_btn, lock_open_btn) {
  if (get_cookie(id_key) === false) {
    bootstrapModalJs('', create_small_center_text('当前没有需要解除锁定的编号，无需解除锁定', 'text-success'), '', 'sm', true);
    return;
  }

  let id_key_value = remove_cookie(id_key);

  if (id_key_value === true) {
    let btn_font_ico = lock_btn.querySelector('i');
    remove_class(btn_font_ico, 'fa-lock');
    add_class(btn_font_ico, 'fa-lock-open');
    lock_open_btn.innerHTML = '解除锁定';

    bootstrapModalJs('', create_small_center_text('解除编号锁定成功', 'text-success'), '', 'sm', true);
  } else {
    bootstrapModalJs('', create_small_center_text('解除编号锁定失败，请重试或者清除本页面的浏览器cookie缓存', 'text-danger'), '', 'sm', true);
  }
}

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
      set_query_result(data);
      console.log(data);
    },
    error: function (errorData) {
      remove_spinner_icon(trigger_element);
      commonAjaxErrorFeedback(errorData);
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

function set_query_result(data) {
  let query_result = document.querySelector('#query_result');

  query_result.innerHTML = '';
  for (let x = data.length, i = 0; i < x; i++) {
    query_result.innerHTML += '<div class="my-2 text-dark">' + data[i]['text'] + '</div>';
    query_result.innerHTML += '<div class="my-2 text-success">' + data[i]['result_text'] + '</div>';
    query_result.innerHTML += '<br>';
  }

}

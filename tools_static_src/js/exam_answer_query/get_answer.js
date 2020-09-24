$().ready(function () {
  let get_answer = document.querySelector('#get_answer');

  get_answer.addEventListener('click', function () {
    let parameter = document.querySelector('#parameter');
    let data = [];
    [].slice.call(parameter.querySelectorAll("[id]")).forEach(function (currentInput) {
      data[currentInput.id] = currentInput.value;
      console.log(currentInput);
    });
    console.log(data);

    add_spinner_icon(get_answer);
    set_crawlStatus('text-warning');
    ajax_get('get_answer_result', get_answer);
  });
});
$().ready(function () {
  let recur = document.querySelector('#recur');

  recur.addEventListener('click', function () {
    let le_id = document.querySelector('#le_id');
    let token_le_id = document.querySelector('#token_le_id');

    if (le_id.value.length > 0 && token_le_id.value.length > 0) {
      let iframeSrcUrl = 'https://www.examcoo.com/editor/do/recur/id/' + le_id.value + '/tokenleid/' + token_le_id.value;
      let iframe = document.createElement("iframe");

      iframe.src = iframeSrcUrl;
      iframe.id = 'iframeViewResult';
      iframe.className = 'mx-n-3';
      iframe.style.border = 'none';
      iframe.onload = adjustIframe(iframe);

      bootstrapModalJs('查看成绩', iframe, '', 'modal-fullscreen');
    } else {
      bootstrapModalJs('', create_small_center_text('请输入答卷编号和答卷编号token', 'danger'), '', 'sm', true);
    }

  });
});
$().ready(function () {
  let get_no_logout = document.querySelector('#get_no_logout');
  let get_exam_info = document.querySelector('#get_exam_info');

  get_no_logout.addEventListener('click', function () {
    let t_id = document.querySelector('#t_id');
    let token_t_id = document.querySelector('#token_t_id');

    if (!t_id.value.length && !token_t_id.value.length) {
      bootstrapModalJs('', create_small_center_text('请输入答卷编号和对应token', 'danger'), '', 'sm', true);
      return;
    }
    let data = {
      'tid': t_id.value,
      'tokenTid': token_t_id.value,
    };
    let url = '/exam_answer_query/get_no_logout.php';
    $.ajax({
      method: 'post',
      url: url,
      cache: false,
      dataType: 'json',
      timeout: 4000,
      data: data,
      success: function (data) {
        console.log(data);
        let le_id = document.querySelector('#le_id');
        let token_le_id = document.querySelector('#token_le_id');

        le_id.value = data['leId'];
        token_le_id.value = data['tokenLeId'];
      },
      error: function (errorData) {
        console.log(errorData);
        commonAjaxErrorFeedback(errorData);
      },
    });
  });
  get_exam_info.addEventListener('click', function () {
    let le_id = document.querySelector('#le_id');
    let token_le_id = document.querySelector('#token_le_id');

    if (le_id.value.length > 0 && token_le_id.value.length > 0) {
      let url = '/exam_answer_query/get_exam_info.php';
      let data = {
        type: 'examInfo',
        leId: le_id.value,
        tokenLeId: token_le_id.value,
      };
      $.ajax({
        method: 'post',
        url: url,
        cache: false,
        dataType: 'json',
        timeout: 4000,
        data: data,
        success: function (data) {
          getExamInfoData(data);
        },
        error: function (errorData) {
          commonAjaxErrorFeedback(errorData);
        },
      });
    } else {
      bootstrapModalJs('', create_small_center_text('请输入答卷编号和答卷编号token', 'danger'), '', 'sm', true);
    }
  });
});
$().ready(function () {
  let temp_save_exam = document.querySelector('#temp_save_exam');
  let save_exam = document.querySelector('#save_exam');

  temp_save_exam.addEventListener('click', function () {
  });
  save_exam.addEventListener('click', function () {
  });
});

function getExamInfoData(data = '') {
  if (0 > data['result']) {
    switch (data['result']) {
      case -2:
        bootstrapModalJs('', create_small_center_text('试卷信息不存在，请尝试更换新的答卷编号', 'danger'), '', 'sm', true);
        break;
      case -3:
        bootstrapModalJs('', create_small_center_text('试卷已经被删除，请尝试更换新的答卷编号', 'danger'), '', 'sm', true);
        break;
      default:
        bootstrapModalJs('', create_small_center_text('试卷信息出错，请尝试更换新的答卷编号', 'danger'), '', 'sm', true);
        break;
    }
    return;
  }
  console.log(data['result']['a']);
  console.log(data['result']['b']);
  console.log(data['result']['b'][0]['o']);
  console.log(data['result']['c']);
}

function ajax_get(query_data, trigger_element) {
  let url = '/exam_answer_query/get_answer.php';
  $.ajax({
    method: 'post',
    url: url,
    cache: false,
    dataType: 'json',
    timeout: 4000,
    data: {
      data: query_data,
    },
    success: function (data) {
      setTimeout(function () {
        remove_spinner_icon(trigger_element);
        set_crawlStatus('text-success');
      }, 3000);
      console.log(data);
      // extract_answers(data);
    },
    error: function (errorData) {
      remove_spinner_icon(trigger_element);
      set_crawlStatus('text-danger');
      commonAjaxErrorFeedback(errorData);
    },
  });
}

function set_crawlStatus(status_code) {
  let crawlStatus = document.querySelector('#crawlStatus > i');
  crawlStatus.removeAttribute('class');
  crawlStatus.classList.add('mx-2', 'fa-lg', 'fas', 'fa-circle');
  crawlStatus.classList.add(status_code);
}

function extract_answers(answers) {
  let c = answers['b'];
  //整理原始
  let result = {};
  let count = 0;
  c.forEach(function (cTriggerEL) {
    if ('object' !== typeof cTriggerEL.c && "葛泉矿职教中心" !== cTriggerEL.c) {
      count += 1;
      result[count] = {
        'id': cTriggerEL.id,
        'result': cTriggerEL.c,
        'text': cTriggerEL.a,
        'score': cTriggerEL.d,
        'options': cTriggerEL.b,
        'e': cTriggerEL.e,
        'f': cTriggerEL.e,
        'h': cTriggerEL.h,
      };
    }
  });

  console.log('获取数据 ' + count + ' 条');
  console.log(result);

  //分离题型
  let answer_data = [];
  let determine_data = [];
  let single_data = [];
  let multiple_data = [];
  for (let i = 0; i <= count; i++) {
    for (let resultElementKey in result[i]) {
      if (resultElementKey === 'score') {
        let score;
        if (result[i].hasOwnProperty(resultElementKey)) score = result[i][resultElementKey];
        switch (score) {
          case '1':
            result[i]['number'] = i;
            determine_data.push(result[i]);
            break;
          case '1.5':
            result[i]['number'] = i;
            single_data.push(result[i]);
            break;
          case '2':
            result[i]['number'] = i;
            multiple_data.push(result[i]);
            break;
          default:
            break;
        }
      }
    }
  }

  answer_data['determine'] = determine_data;
  answer_data['single'] = single_data;
  answer_data['multiple'] = multiple_data;
  answers_elements(answer_data);
}

function answers_elements(result_data) {
  let examcoo = document.querySelector('#examcoo');
  let determine = document.createElement("div");
  let single_choice = document.createElement("div");
  let multiple_choice = document.createElement("div");

  examcoo.innerHTML = '';

  determine.className = 'table-responsive';
  determine.id = 'determine';

  single_choice.className = 'table-responsive';
  single_choice.id = 'single';

  multiple_choice.className = 'table-responsive';
  multiple_choice.id = 'multiple';

  console.log(result_data);

  let tbody_determine = table_tbody(result_data['determine']);
  let tbody_single = table_tbody(result_data['single']);
  let tbody_multiple = table_tbody(result_data['multiple']);

  determine.appendChild(creat_table(table_thead, tbody_determine, determine.id, 'table-bordered table-dark table-hover'));
  single_choice.appendChild(creat_table(table_thead, tbody_single, single_choice.id, 'table-bordered table-dark table-hover'));
  multiple_choice.appendChild(creat_table(table_thead, tbody_multiple, multiple_choice.id, 'table-bordered table-dark table-hover'));
  examcoo.appendChild(determine);
  examcoo.appendChild(single_choice);
  examcoo.appendChild(multiple_choice);
}

function creat_table(t_head, t_body, table_id, table_class) {
  let table = document.createElement("table");

  table.className = table_class ? 'table ' + table_class : 'table';
  table.id = 'table_' + table_id;

  table.appendChild(t_head());
  table.appendChild(t_body);
  return table;
}

function table_thead() {
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  let th_num = document.createElement("th");
  let th_id = document.createElement("th");
  let th_result = document.createElement("th");
  let th_text = document.createElement("th");
  let th_score = document.createElement("th");
  let th_options = document.createElement("th");
  let th_e = document.createElement("th");
  let th_f = document.createElement("th");
  let th_h = document.createElement("th");

  let th_sss = [th_num, th_id, th_result, th_text, th_score, th_options, th_e, th_f, th_h];
  let th_arr = [
    '序号',
    '编号',
    '答案',
    '问题',
    '分值',
    '选项',
    'E',
    'F',
    'H',
  ];

  for (let x = th_sss.length, i = 0; i < x; i++) {
    th_sss[i].scope = 'col';
    th_sss[i].innerHTML = th_arr[i];
  }

  tr.className = 'text-center';
  tr.appendChild(th_num);
  tr.appendChild(th_id);
  tr.appendChild(th_result);
  tr.appendChild(th_text);
  tr.appendChild(th_score);
  tr.appendChild(th_options);
  tr.appendChild(th_e);
  tr.appendChild(th_f);
  tr.appendChild(th_h);
  thead.appendChild(tr);

  return thead;
}

function table_tbody(tbody_data) {
  let tbody = document.createElement("tbody");
  let tr = table_tr(tbody_data);

  tbody.appendChild(tr);

  return tbody;
}

function table_tfoot() {
}

function table_caption() {
}

function table_tr(answers_data) {
  let tr = document.createElement("tr");
  let th_num = document.createElement("th");
  let td_id = document.createElement("td");
  let td_result = document.createElement("td");
  let td_text = document.createElement("td");
  let td_score = document.createElement("td");
  let td_options = document.createElement("td");
  let td_e = document.createElement("td");
  let td_f = document.createElement("td");
  let td_h = document.createElement("td");
  // let th_sss = [th_num, td_id, td_result, td_text, td_score, td_options, td_e, td_f, td_h];

  th_num.scope = 'row';
  console.log(answers_data);

  answers_data.forEach(function (answersTriggerEL) {
    for (let answersTriggerELElement in answersTriggerEL) {
      let x;
      if (answersTriggerEL.hasOwnProperty(answersTriggerELElement)) x = answersTriggerEL[answersTriggerELElement];
      console.log(answersTriggerELElement + ' ===== ' + x);
    }
  });

  tr.appendChild(th_num);
  tr.appendChild(td_id);
  tr.appendChild(td_result);
  tr.appendChild(td_text);
  tr.appendChild(td_score);
  tr.appendChild(td_options);
  tr.appendChild(td_e);
  tr.appendChild(td_f);
  tr.appendChild(td_h);
  return tr;
}

function adjustIframe(iframe) {
  iframe.height = document.documentElement.clientHeight;
  iframe.width = document.documentElement.clientWidth;
}

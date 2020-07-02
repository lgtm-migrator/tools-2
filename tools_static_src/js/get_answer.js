$().ready(function () {
  let ajax_get_examcoo = document.querySelector('#ajax_get_examcoo');

  ajax_get_examcoo.addEventListener('click', get_examcoo);

});

function get_examcoo() {
  let url = '/exam_answer_query/get_answer.php';
  $.ajax({
    method: 'post',
    url: url,
    cache: false,
    dataType: 'json',
    timeout: 5000,
    data: {
      data: 'get_examcoo_editor',
    },
    success: function (data) {
      console.log(data);
      // extract_answers(data);
    },
    error: function (error) {
      console.log(error);
    },
  });
}

set_crawlStatus();

function set_crawlStatus() {
  let crawlStatus = document.querySelector('#crawlStatus > i');
  // console.log(crawlStatus);
  // crawlStatus.classList.remove('text-black-50', 'text-danger', 'text-warning', 'text-success');
  // crawlStatus.classList.add('text-black-50');
  // crawlStatus.classList.add('text-danger');
  // crawlStatus.classList.add('text-warning');
  // crawlStatus.classList.add('text-success');
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
  let th_sss = [th_num, td_id, td_result, td_text, td_score, td_options, td_e, td_f, td_h];

  th_num.scope = 'row';
  console.log(answers_data);

  answers_data.forEach(function (answersTriggerEL) {
    for (let answersTriggerELElement in answersTriggerEL) {
      let x;
      if (answersTriggerEL.hasOwnProperty(answersTriggerELElement)) x = answersTriggerEL[answersTriggerELElement];
      // console.log(answersTriggerELElement+' ===== '+x);
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

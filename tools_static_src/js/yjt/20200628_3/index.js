let categoryList = document.querySelector('#categoryList');
if (categoryList) {
  $.getScript('/static/js/yjt/20200628_3/20200628_3.js');
  let categoryLabels = [].slice.call(categoryList.querySelectorAll('label'));
  categoryLabels.forEach(function (labelTriggerEL) {
  });

  categoryList.addEventListener('click', function (e) {
    let e_target = e.target;
    if (e_target.tagName === 'LABEL') {
      let question = e_target.dataset['question'];
      set_category_text(e_target);
      question_bank(question);
    }
  });
}

function check_questions(questions = []) {
  if (!Array.isArray(questions)) return;
  set_quantity(questions.length);
  questions.forEach(function (questionEL) {
    if (!Array.isArray(questionEL)) fundebug.notify('yjt-20200628_3 BUG', questionEL);
    if (questionEL.length !== 8) fundebug.notify('yjt-20200628_3 BUG Length', questionEL.length);
  });
}

function set_quantity(quantity) {
  document.querySelector('#quantity').innerText = quantity;
}

function set_category_text(category) {
  document.querySelector('#category').textContent = category.textContent;
}

function question_bank(question_bank) {
  check_questions(eval(question_bank));
  let question_bank_code = eval(question_bank).map(function (e, t) {
    return t % 2 === 0
      ? '<div class="px-2 py-3">' +
      '<p>' + e[0] + "</p>" +
      "<ul style='list-style-type: upper-latin;'>" +
      "<li" + (1 === e[5] ? ' class="my-1 text-success font-weight-bold"' : "") + ">" + e[1] + "</li>" +
      "<li" + (2 === e[5] ? ' class="my-1 text-success font-weight-bold"' : "") + ">" + e[2] + "</li>" +
      "<li" + (3 === e[5] ? ' class="my-1 text-success font-weight-bold"' : "") + "" + (e[3] === "" ? ' class="d-none"' : "") + ">" + e[3] + "</li>" +
      "<li" + (4 === e[5] ? ' class="my-1 text-success font-weight-bold"' : "") + "" + (e[4] === "" ? ' class="d-none"' : "") + ">" + e[4] + "</li>" +
      "</ul>"
      : "<p>" + e[0] + "</p>" +
      "<ol style='list-style-type: upper-latin;'>" +
      "<li" + (1 === e[5] ? ' class="my-1 text-success font-weight-bold"' : "") + ">" + e[1] + "</li>" +
      "<li" + (2 === e[5] ? ' class="my-1 text-success font-weight-bold"' : "") + ">" + e[2] + "</li>" +
      "<li" + (3 === e[5] ? ' class="my-1 text-success font-weight-bold"' : "") + "" + (e[3] === "" ? ' class="d-none"' : "") + ">" + e[3] + "</li>" +
      "<li" + (4 === e[5] ? ' class="my-1 text-success font-weight-bold"' : "") + "" + (e[4] === "" ? ' class="d-none"' : "") + ">" + e[4] + "</li>" +
      "</ol>" +
      "</div>";
  }).join("");
  question_bank.length % 2 === 1 && (question_bank_code += "</div>");
  $("#answer").html(question_bank_code)
}

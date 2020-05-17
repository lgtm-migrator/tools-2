// 悬浮弹出框
$().ready(function () {
  let jt_payroll_pension_icon = document.querySelector('#jt_payroll_pension_icon');
  let jt_payroll_actual_salary_icon = document.querySelector('#jt_payroll_actual_salary_icon');
  let jt_payroll_housing_fund_icon = document.querySelector('#jt_payroll_housing_fund_icon');
  let jt_payroll_pension_adjustment_difference_icon = document.querySelector('#jt_payroll_pension_adjustment_difference_icon');
  if (jt_payroll_pension_icon) {
    $('#jt_payroll_pension_icon').popover({
      trigger: 'hover',
      boundary: 'viewport',
      placement: 'auto',
      html: true,
      content: popover_content_jt_payroll_pension_icon,
    });
  }
  if (jt_payroll_actual_salary_icon) {
    $('#jt_payroll_actual_salary_icon').popover({
      trigger: 'hover',
      boundary: 'viewport',
      placement: 'auto',
      html: true,
      content: popover_content_jt_payroll_actual_salary_icon,
    });
  }
  if (jt_payroll_housing_fund_icon) {
    $('#jt_payroll_housing_fund_icon').popover({
      trigger: 'hover',
      boundary: 'viewport',
      placement: 'auto',
      html: true,
      content: popover_content_jt_payroll_housing_fund_icon,
    });
  }
  if (jt_payroll_pension_adjustment_difference_icon) {
    $('#jt_payroll_pension_adjustment_difference_icon').popover({
      trigger: 'hover',
      boundary: 'viewport',
      placement: 'auto',
      html: true,
      content: popover_content_jt_payroll_pension_adjustment_difference_icon,
    });
  }
});

function popover_content_jt_payroll_pension_icon() {
  let span = document.createElement("span");

  span.className = 'small';
  span.innerHTML = '1.个人缴费根据职工本人上一年度月平均工资(最低数为上年全市职工工资的60%;最高数为上年全市职工工资的300%)的8%缴纳。' + '<br>' +
    '2.单位缴费根据职工本人上一年度月平均工资的22%缴纳。2006年1月1日起，人社部将个人养老账户的规模统一由本人缴费工资的11%调整为8%。此前的政策是个人缴费全部和单位缴费的3%计入个人养老账户，单位缴纳的19%划转为社会统筹，而新政策将单位缴费的3%也划入社会统筹用来解决养老空账问题。';
  return span;
}

function popover_content_jt_payroll_actual_salary_icon() {
  let span = document.createElement("span");

  span.className = 'small';
  span.innerHTML = '输入完税前工资和各种保险和代扣费用后，点击下方计算按钮即可算出实际工资金额。';
  return span;
}

function popover_content_jt_payroll_housing_fund_icon() {
  let span = document.createElement("span");

  span.className = 'small';
  span.innerHTML = '公积金缴费比例：根据企业的实际情况，选择住房公积金缴费比例。但原则上最高缴费额不得超过北京市职工平均工资的10%。2009年下半年起，北京市统一规定所有用人单位按工资的12%办理缴纳住房公积金。单位和个人都是工资的12%。';
  return span;
}

function popover_content_jt_payroll_pension_adjustment_difference_icon() {
  let span = document.createElement("span");

  span.className = 'small';
  span.innerHTML = '一般出现在每年七月份或者八月份，用来调整上一年度缴纳养老保险的差额。';
  return span;
}

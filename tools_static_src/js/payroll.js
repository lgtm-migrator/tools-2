// 悬浮弹出框
$().ready(function () {
  let jt_payroll = document.querySelector('#jt_payroll');
  if (jt_payroll) {
    let payroll_icon = [
      {'jt_payroll_job_number_icon': '工号格式为字母和数字组合，由字母开头，代表用工类型；后面为数字编号。'},
      {'jt_payroll_personnel_number_icon': '格式为纯数字，示例：18888、16666、55555等。'},
      {'jt_payroll_actual_salary_icon': '输入完税前工资和各种保险和代扣费用后，点击下方计算按钮即可算出实际工资金额。'},
      {'jt_payroll_medical_insurance_icon': '医疗保险缴费比例：单位10%，个人2%+3元'},
      {'jt_payroll_unemployment_insurance_icon': '失业保险缴费比例：单位1.5%，个人0.5%'},
      {'jt_payroll_injury_insurance_icon': '工伤保险缴费比例：单位0.5%~2%，个人0'},
      {'jt_payroll_maternity_insurance_icon': '生育保险缴费比例：单位0.8%，个人0'},
      {'jt_payroll_pension_icon': '1.个人缴费根据职工本人上一年度月平均工资(最低数为上年全市职工工资的60%;最高数为上年全市职工工资的300%)的8%缴纳。' + '<br>' + '2.单位缴费根据职工本人上一年度月平均工资的22%缴纳。2006年1月1日起，人社部将个人养老账户的规模统一由本人缴费工资的11%调整为8%。此前的政策是个人缴费全部和单位缴费的3%计入个人养老账户，单位缴纳的19%划转为社会统筹，而新政策将单位缴费的3%也划入社会统筹用来解决养老空账问题。'},
      {'jt_payroll_housing_fund_icon': '公积金缴费比例：根据企业的实际情况，选择住房公积金缴费比例。但原则上最高缴费额不得超过北京市职工平均工资的10%。2009年下半年起，北京市统一规定所有用人单位按工资的12%办理缴纳住房公积金。单位和个人都是工资的12%。'},
      {'jt_payroll_pension_adjustment_difference_icon': '一般出现在每年七月份或者八月份，用来调整上一年度缴纳养老保险的差额。'},
    ];
    let payroll_icon_length = payroll_icon.length;

    for (let i = 0; i < payroll_icon_length; i++) {
      for (let index in payroll_icon[i]) {
        let x = document.querySelector('#' + index);

        if (x) {
          let text = payroll_icon[i].hasOwnProperty(index) ? payroll_icon[i][index] : '';

          $('#' + index).popover({
            trigger: 'hover',
            boundary: 'viewport',
            placement: 'bottom',
            html: true,
            content: popover_content_inner(text),
          });
        }
      }
    }
  }
});

function popover_content_inner(innerHTML) {
  let span = document.createElement("span");

  span.className = 'small';
  span.innerHTML = innerHTML;
  return span;
}

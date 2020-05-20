<?php
if (!defined('title')) define('title', '工资云备忘录');
require_once dirname(dirname(__DIR__)) . '/header.php';
if (!defined('JZEG_NET')) die();
?>
  <link rel="stylesheet" href="/static/css/payroll.min.css">
  <div class="py-2 container" id="jt_payroll">
    <div class="mb-2 font-weight-bolder">工资云备忘录</div>
    <div class="px-3 py-4 rounded border">
      <div class="form-row form-group">
        <div class="col-12 col-md-8 mb-2 mb-md-0">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="text-muted fas fa-question-circle" id="jt_payroll_month_icon"></i>
              </span>
            </div>
            <select class="custom-select" id="jt_payroll_year" required>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020" selected>2020</option>
              <option value="2022">2021</option>
              <option value="2022">2022</option>
            </select>
            <div class="input-group-append">
              <label class="input-group-text" for="jt_payroll_year">年</label>
            </div>
            <select class="custom-select" id="jt_payroll_month" required>
              <option value="0" selected>月份</option>
              <option value="1">一</option>
              <option value="2">二</option>
              <option value="3">三</option>
              <option value="4">四</option>
              <option value="5">五</option>
              <option value="6">六</option>
              <option value="7">七</option>
              <option value="8">八</option>
              <option value="9">九</option>
              <option value="10">十</option>
              <option value="11">十一</option>
              <option value="12">十二</option>
            </select>
            <div class="input-group-append">
              <label class="input-group-text" for="jt_payroll_month">月</label>
            </div>
          </div>
          <div class="small text-muted">
            <span class="small">哪一年的工资</span>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_date">到账日期</label>
            </div>
            <input type="date" class="form-control" id="jt_payroll_date">
          </div>
          <div class="small text-muted">
            <span class="small">工资到账时间</span>
          </div>
        </div>
      </div>
      <div class="form-row form-group">
        <div class="col-12 col-md-4 mb-2 mb-md-0">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_year">工资年份</label>
            </div>
            <select class="custom-select" id="jt_payroll_year" required>
              <option value="2010">2010年</option>
              <option value="2011">2011年</option>
              <option value="2012">2012年</option>
              <option value="2013">2013年</option>
              <option value="2014">2014年</option>
              <option value="2015">2015年</option>
              <option value="2016">2016年</option>
              <option value="2017">2017年</option>
              <option value="2018">2018年</option>
              <option value="2019">2019年</option>
              <option value="2020" selected>2020年</option>
              <option value="2022">2021年</option>
              <option value="2022">2022年</option>
            </select>
          </div>
          <div class="small text-muted">
            <span class="small">哪一年的工资</span>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-2 mb-md-0">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_month">工资月份</label>
            </div>
            <select class="custom-select" id="jt_payroll_month" required>
              <option value="0" selected>请选择月份</option>
              <option value="1">一</option>
              <option value="2">二</option>
              <option value="3">三</option>
              <option value="4">四</option>
              <option value="5">五</option>
              <option value="6">六</option>
              <option value="7">七</option>
              <option value="8">八</option>
              <option value="9">九</option>
              <option value="10">十</option>
              <option value="11">十一</option>
              <option value="12">十二</option>
            </select>
            <div class="input-group-append">
              <span class="input-group-text">月</span>
              <span class="input-group-text">
                <i class="text-muted fas fa-question-circle" id="jt_payroll_month_icon"></i>
              </span>
            </div>
          </div>
          <div class="small text-muted">
            <span class="small">几月份的工资</span>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_date">到账日期</label>
            </div>
            <input type="date" class="form-control" id="jt_payroll_date">
          </div>
          <div class="small text-muted">
            <span class="small">工资到账时间</span>
          </div>
        </div>
      </div>
      <div class="form-row form-group">
        <div class="col-12 col-md-4 mb-2 mb-md-0">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_name">姓名</label>
            </div>
            <input type="text" class="form-control needs-validation" id="jt_payroll_name" placeholder="姓名" minlength="2" maxlength="16" pattern="^(?:[\u4e00-\u9fa5·]{2,16})$">
          </div>
        </div>
        <div class="col-12 col-md-4 mb-2 mb-md-0">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_job_number">工号</label>
            </div>
            <input type="text" class="form-control" id="jt_payroll_job_number" placeholder="工号" minlength="3" maxlength="6" pattern="">
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="text-muted fas fa-question-circle" id="jt_payroll_job_number_icon"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_personnel_number">人员编号</label>
            </div>
            <input type="number" class="form-control" id="jt_payroll_personnel_number" placeholder="人员编号" minlength="3" maxlength="6" pattern="">
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="text-muted fas fa-question-circle" id="jt_payroll_personnel_number_icon"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row form-group">
        <div class="col-12 col-md-6 mb-2 mb-md-0">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_payable">应发工资</label>
            </div>
            <input type="number" class="form-control text-right" id="jt_payroll_payable" placeholder="应发工资">
            <div class="input-group-append">
              <span class="input-group-text">元</span>
              <span class="input-group-text">
                <i class="text-muted fas fa-question-circle" id="jt_payroll_payable_icon"></i>
              </span>
            </div>
          </div>
          <div class="small text-muted">
            <span class="small">未扣五险一金和各种代扣费用之前</span>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_actual_salary">实发工资</label>
            </div>
            <input type="text" class="form-control text-right" id="jt_payroll_actual_salary" placeholder="自动计算出结果" readonly>
            <div class="input-group-append">
              <span class="input-group-text">元</span>
              <span class="input-group-text">
                <i class="text-muted fas fa-question-circle" id="jt_payroll_actual_salary_icon"></i>
              </span>
            </div>
          </div>
          <div class="small text-muted">
            <span class="small">自动计算实发到卡金额</span>
          </div>
        </div>
      </div>
      <div class="form-row form-group">
        <div class="col-12 col-md-6 mb-2 mb-md-0">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_excess_wage_one_number">超额工资一</label>
            </div>
            <input type="number" class="form-control text-right" placeholder="超额工资一" id="jt_payroll_excess_wage_one_number">
            <div class="input-group-append">
              <span class="input-group-text">元</span>
              <span class="input-group-text">
                <i class="text-muted fas fa-question-circle" id="jt_payroll_excess_wage_one_icon"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_excess_wage_two_number">超额工资二</label>
            </div>
            <input type="number" class="form-control text-right" placeholder="超额工资二" id="jt_payroll_excess_wage_two_number">
            <div class="input-group-append">
              <span class="input-group-text">元</span>
              <span class="input-group-text">
                <i class="text-muted fas fa-question-circle" id="jt_payroll_excess_wage_two_icon"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row form-group">
        <div class="col-12 col-md-6 mb-2 mb-md-0">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_other_salary_one_number">其他工资一</label>
            </div>
            <input type="number" class="form-control text-right" placeholder="其他工资一" id="jt_payroll_other_salary_one_number">
            <div class="input-group-append">
              <span class="input-group-text">元</span>
              <span class="input-group-text">
                <i class="text-muted fas fa-question-circle" id="jt_payroll_other_salary_one_icon"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_other_salary_two_number">其他工资二</label>
            </div>
            <input type="number" class="form-control text-right" placeholder="其他工资二" id="jt_payroll_other_salary_two_number">
            <div class="input-group-append">
              <span class="input-group-text">元</span>
              <span class="input-group-text">
                <i class="text-muted fas fa-question-circle" id="jt_payroll_other_salary_two_icon"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row form-group">
        <div class="col-12">
          <div class="input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_personal_income_tax">个人所得税</label>
            </div>
            <input type="number" class="form-control text-right" placeholder="个人所得税" id="jt_payroll_personal_income_tax">
            <div class="input-group-append">
              <span class="input-group-text">元</span>
              <span class="input-group-text">
              <i class="text-muted fas fa-question-circle" id="jt_payroll_personal_income_tax_icon"></i>
            </span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row form-group">
        <div class="col-12 col-md-6 mb-2 mb-md-0">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_medical_insurance_number">医疗保险金额</label>
            </div>
            <input type="number" class="form-control text-right" placeholder="医疗保险金额" id="jt_payroll_medical_insurance_number">
            <div class="input-group-append">
              <span class="input-group-text">元</span>
              <span class="input-group-text">
                <i class="text-muted fas fa-question-circle" id="jt_payroll_medical_insurance_icon"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_unemployment_insurance_number">失业保险金额</label>
            </div>
            <input type="number" class="form-control text-right" placeholder="失业保险金额" id="jt_payroll_unemployment_insurance_number">
            <div class="input-group-append">
              <span class="input-group-text">元</span>
              <span class="input-group-text">
                <i class="text-muted fas fa-question-circle" id="jt_payroll_unemployment_insurance_icon"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row form-group">
        <div class="col-12 col-md-6 mb-2 mb-md-0">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_injury_insurance_number">工伤保险金额</label>
            </div>
            <input type="number" class="form-control text-right" placeholder="工伤保险金额" id="jt_payroll_injury_insurance_number">
            <div class="input-group-append">
              <span class="input-group-text">元</span>
              <span class="input-group-text">
                <i class="text-muted fas fa-question-circle" id="jt_payroll_injury_insurance_icon"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_maternity_insurance_number">生育保险金额</label>
            </div>
            <input type="number" class="form-control text-right" placeholder="生育保险金额" id="jt_payroll_maternity_insurance_number">
            <div class="input-group-append">
              <span class="input-group-text">元</span>
              <span class="input-group-text">
                <i class="text-muted fas fa-question-circle" id="jt_payroll_maternity_insurance_icon"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row form-group">
        <div class="col-12 col-md-6 mb-2 mb-md-0">
          <div class="input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_pension_number">养老保险金额</label>
            </div>
            <input type="number" class="form-control text-right" placeholder="养老保险金额" id="jt_payroll_pension_number">
            <div class="input-group-append">
              <span class="input-group-text">元</span>
              <span class="input-group-text">
                <i class="text-muted fas fa-question-circle" id="jt_payroll_pension_icon"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_housing_fund">住房公积金金额</label>
            </div>
            <input type="number" class="form-control text-right" placeholder="住房公积金金额" id="jt_payroll_housing_fund">
            <div class="input-group-append">
              <span class="input-group-text">元</span>
              <span class="input-group-text">
                <i class="text-muted fas fa-question-circle" id="jt_payroll_housing_fund_icon"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row form-group">
        <div class="col-12">
          <div class="input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_pension_adjustment_difference">养老保险调差额</label>
            </div>
            <input type="number" class="form-control text-right" placeholder="养老保险调差额" id="jt_payroll_pension_adjustment_difference">
            <div class="input-group-append">
              <span class="input-group-text">元</span>
              <span class="input-group-text">
                <i class="text-muted fas fa-question-circle" id="jt_payroll_pension_adjustment_difference_icon"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row form-group">
        <div class="col-12 col-md-4 mb-2 mb-md-0">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_telephone_fee_number">电话费</label>
            </div>
            <input type="number" class="form-control text-right" placeholder="电话费" id="jt_payroll_telephone_fee_number">
            <div class="input-group-append">
              <span class="input-group-text">元</span>
            </div>
          </div>
          <div class="small text-muted">
            <span class="small">代扣电话费金额</span>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-2 mb-md-0">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_accommodation_fee_number">标宿费</label>
            </div>
            <input type="number" class="form-control text-right" placeholder="标宿费" id="jt_payroll_accommodation_fee_number">
            <div class="input-group-append">
              <span class="input-group-text">元</span>
            </div>
          </div>
          <div class="small text-muted">
            <span class="small">代扣标宿费金额</span>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_payroll_utilities_number">水电费</label>
            </div>
            <input type="number" class="form-control text-right" placeholder="水电费" id="jt_payroll_utilities_number">
            <div class="input-group-append">
              <span class="input-group-text">元</span>
            </div>
          </div>
          <div class="small text-muted">
            <span class="small">代扣水电费金额</span>
          </div>
        </div>
      </div>
      <div class="form-group text-center btn-group-sm">
        <button type="button" class="btn btn-outline-success" id="jt_payroll_compute">计算工资</button>
        <button type="submit" class="btn btn-outline-primary" id="jt_payroll_submit" disabled>上传保存</button>
      </div>
    </div>
  </div>
  <div class="d-none">
    <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
    <script src="/static/js/payroll.min.js"></script>
  </div>
<?php
require_once dirname(dirname(__DIR__)) . '/footer.php';

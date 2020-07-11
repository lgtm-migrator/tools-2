/** 分类列表导航 **/
let jt_category = document.querySelector('#jt_category');
let jt_list = document.querySelector('#jt_list');
let allCollapses = [].slice.call(document.querySelectorAll('#jt_list>[class*="collapse-"]'));

allCollapses.map(function (collapseEL) {
  new bootstrap.Collapse(collapseEL);
});

jt_category.addEventListener('click', function (e) {
  let target = e.target;
  if (target.classList.contains('btn')) {
    category_btn_active(target.id);
    category_collapse_show(target.id);
  }
});

function category_btn_active(target_id) {
  let allCategoryBtn = [].slice.call(jt_category.querySelectorAll('a.btn'));

  allCategoryBtn.forEach(function (categoryTriggerEL) {
    if (categoryTriggerEL.id !== target_id) {
      categoryTriggerEL.classList.remove('active');
    } else {
      categoryTriggerEL.classList.add('active');
    }
  });
}

function category_collapse_show(target_id) {
  allCollapses.forEach(function (collapseTriggerEL) {
    if (true === collapseTriggerEL.classList.contains(target_id)) {
      bootstrap.Collapse.getInstance(collapseTriggerEL).show();
    } else {
      bootstrap.Collapse.getInstance(collapseTriggerEL).hide();
    }
  });
}

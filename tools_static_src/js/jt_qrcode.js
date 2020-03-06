$().ready(function () {
    bsCustomFileInput.init();
});

$().ready(function () {
    let lhm_tabs_link = document.querySelector('#lhm_tabs_link');
    if (lhm_tabs_link) {
        lhm_tabs_link.addEventListener('click', function (e) {
            let e_target = e.target;
            if ('A' === e_target.tagName) {
                $(e_target).tab('show');
                $(e_target).button('toggle');
            }
        });
    }
});

/**
 * 动态同步文本输入框元素和滑动条元素的值
 */
$().ready(function () {
    let lhm_editor = document.querySelector('#lhm_editor');
    let lhm_editor_size_value = document.querySelector('#lhm_editor_size_value');
    let lhm_editor_size_range = document.querySelector('#lhm_editor_size_range');
    let lhm_editor_quality_value = document.querySelector('#lhm_editor_quality_value');
    let lhm_editor_quality_range = document.querySelector('#lhm_editor_quality_range');
    let lhm_editor_margin_value = document.querySelector('#lhm_editor_margin_value');
    let lhm_editor_margin_range = document.querySelector('#lhm_editor_margin_range');
    let lhm_editor_xxx_elements = [
        [lhm_editor_size_value, lhm_editor_size_range],
        [lhm_editor_quality_value, lhm_editor_quality_range],
        [lhm_editor_margin_value, lhm_editor_margin_range],
    ];

    if (lhm_editor) {
        for (let x = lhm_editor_xxx_elements.length, i = 0; i < x; i++) {
            dynamic_synchronization_element(lhm_editor_xxx_elements[i]['0'], lhm_editor_xxx_elements[i]['1'], 'input');
            dynamic_synchronization_element(lhm_editor_xxx_elements[i]['1'], lhm_editor_xxx_elements[i]['0'], 'input');
        }
    }

    function dynamic_synchronization_element(source_element, target_element, event_type) {
        source_element.addEventListener(event_type, function () {
            target_element.value = source_element.value;
        })
    }
});

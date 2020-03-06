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
 * 动态同步编辑器内的文本输入框和相关滑动条的值
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

});

/**
 * 监控编辑器生成的图片类型
 * 根据图片类型调整图片质量的数值和数值范围
 */
$().ready(function () {
    let lhm_editor_img_format = document.querySelector('#lhm_editor_img_format');
    let lhm_editor_quality_value = document.querySelector('#lhm_editor_quality_value');
    let lhm_editor_quality_value_min = lhm_editor_quality_value.getAttribute('min');
    let lhm_editor_quality_value_max = lhm_editor_quality_value.getAttribute('max');
    let lhm_editor_quality_value_step = lhm_editor_quality_value.getAttribute('step');
    let lhm_editor_quality_range = document.querySelector('#lhm_editor_quality_range');
    let lhm_editor_quality_range_min = lhm_editor_quality_range.getAttribute('min');
    let lhm_editor_quality_range_max = lhm_editor_quality_range.getAttribute('max');
    let lhm_editor_quality_range_step = lhm_editor_quality_range.getAttribute('step');

    // let type_array = [];
    // type_array.push('png', 'jpg');
    // verify_input_maybe_value(lhm_editor_img_format, type_array, 'input');
    // verify_input_maybe_value(lhm_editor_img_format, type_array, 'change');

    let lhm_editor_img_format_value = lhm_editor_img_format.value;
    console.log(lhm_editor_img_format.value);
    lhm_editor_img_format.addEventListener('input', function () {
        lhm_editor_img_format_value = lhm_editor_img_format.value;
        console.log(lhm_editor_img_format_value);
    });

    function verify_input_maybe_value(element, maybe_value = [], type = '') {
        let element_value = element.value;

        element.addEventListener(type, function () {
            element_value = element.value;
        });

        if (maybe_value.includes(element_value)) {
            console.log(element_value);
            return element_value;
        } else {
            return false;
        }

    }

});

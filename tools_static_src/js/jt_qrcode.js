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
    let lhm_editor_size_number = document.querySelector('#lhm_editor_size_number');
    let lhm_editor_size_range = document.querySelector('#lhm_editor_size_range');
    let lhm_editor_quality_number = document.querySelector('#lhm_editor_quality_number');
    let lhm_editor_quality_range = document.querySelector('#lhm_editor_quality_range');
    let lhm_editor_margin_number = document.querySelector('#lhm_editor_margin_number');
    let lhm_editor_margin_range = document.querySelector('#lhm_editor_margin_range');
    let lhm_editor_xxx_elements = [
        [lhm_editor_size_number, lhm_editor_size_range],
        [lhm_editor_quality_number, lhm_editor_quality_range],
        [lhm_editor_margin_number, lhm_editor_margin_range],
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
    // let lhm_editor_quality_value_min = lhm_editor_quality_value.getAttribute('min');
    // let lhm_editor_quality_value_max = lhm_editor_quality_value.getAttribute('max');
    // let lhm_editor_quality_value_step = lhm_editor_quality_value.getAttribute('step');
    let lhm_editor_quality_range = document.querySelector('#lhm_editor_quality_range');
    // let lhm_editor_quality_range_min = lhm_editor_quality_range.getAttribute('min');
    // let lhm_editor_quality_range_max = lhm_editor_quality_range.getAttribute('max');
    // let lhm_editor_quality_range_step = lhm_editor_quality_range.getAttribute('step');

    // let type_array = [];
    // type_array.push('png', 'jpg');
    // verify_input_maybe_value(lhm_editor_img_format, type_array, 'input');
    // verify_input_maybe_value(lhm_editor_img_format, type_array, 'change');

    let lhm_editor_img_format_value = lhm_editor_img_format.value;
    // console.log(lhm_editor_img_format.value);
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

/**
 * 前景色、背景色
 */
$().ready(function () {
    $('#lhm_editor_color_dark_colorPicker, #lhm_editor_color_light_colorPicker').colorpicker();
});


/**
 * 效果预览
 */
$().ready(function () {
    let lhm_preview = document.querySelector('#lhm_preview');
    let lhm_preview_img = document.querySelector('#lhm_preview_img');

    let lhm_editor_size_number = document.querySelector('#lhm_editor_size_number');
    let lhm_editor_size_range = document.querySelector('#lhm_editor_size_range');
    let lhm_editor_margin_number = document.querySelector('#lhm_editor_margin_number');
    let lhm_editor_margin_range = document.querySelector('#lhm_editor_margin_range');
    let lhm_editor_color_dark = document.querySelector('#lhm_editor_color_dark');
    let lhm_editor_color_light = document.querySelector('#lhm_editor_color_light');
    let lhm_editor_errorCorrectionLevel = document.querySelector('#lhm_editor_errorCorrectionLevel');
    let lhm_editor_img_format = document.querySelector('#lhm_editor_img_format');
    let lhm_editor_quality_number = document.querySelector('#lhm_editor_quality_number');
    let lhm_editor_quality_range = document.querySelector('#lhm_editor_quality_range');

    let current_qrcode_options = {
        'width': "200",
        'errorCorrectionLevel': 'q',
        'type': 'image/png',
        'margin': '0',
        'quality': '90',
        'color_dark': '#000000',
        'color_light': '#ffffff',
    };

    if (lhm_preview) {
        set_qrcode_options(current_qrcode_options);

        lhm_editor_size_number.addEventListener('input', function () {
            current_qrcode_options['width'] = this.value;
            set_qrcode_options(current_qrcode_options);
        });
        lhm_editor_size_range.addEventListener('input', function () {
            current_qrcode_options['width'] = this.value;
            set_qrcode_options(current_qrcode_options);
        });

        lhm_editor_margin_number.addEventListener('input', function () {
            current_qrcode_options['margin'] = this.value;
            set_qrcode_options(current_qrcode_options);
        });

        lhm_editor_margin_range.addEventListener('input', function () {
            current_qrcode_options['margin'] = this.value;
            set_qrcode_options(current_qrcode_options);
        });

        lhm_editor_color_dark.addEventListener('input', function () {
            lhm_editor_color_dark.setAttribute('value', this.value);
            current_qrcode_options['color_dark'] = lhm_editor_color_dark.getAttribute('value');
            set_qrcode_options(current_qrcode_options);
        });

        lhm_editor_color_light.addEventListener('input', function () {
            current_qrcode_options['color_light'] = this.value;
            set_qrcode_options(current_qrcode_options);
        });

        lhm_editor_errorCorrectionLevel.addEventListener('input', function () {
            current_qrcode_options['errorCorrectionLevel'] = this.value;
            set_qrcode_options(current_qrcode_options);
        });

        lhm_editor_img_format.addEventListener('input', function () {
            current_qrcode_options['type'] = this.value;
            set_qrcode_options(current_qrcode_options);
        });

        lhm_editor_quality_number.addEventListener('input', function () {
            current_qrcode_options['quality'] = this.value;
            set_qrcode_options(current_qrcode_options);
        });

        lhm_editor_quality_range.addEventListener('input', function () {
            current_qrcode_options['quality'] = this.value;
            set_qrcode_options(current_qrcode_options);
        });


    }


    function set_qrcode_options(options = []) {
        let url = document.location.href;
        let url_param = {'from': 'lhm_preview'};
        let qrcode_option = {
            errorCorrectionLevel: options['errorCorrectionLevel'],
            type: 'image/' + options['type'],
            margin: options['margin'],
            width: options['width'],
            // quality: 0.3,
            quality: options['quality'],
            // color: {
            //     dark: '#1E90FF',
            //     light: '#ffffff',
            // },
            color: {
                dark: options['color_dark'],
                light: options['color_light'],
            },
        };
        // let qrcode_option = {
        //     errorCorrectionLevel: 'H',
        //     type: 'image/jpeg',
        //     margin: 2,
        //     width: 300,
        //     quality: 0.3,
        //     color: {
        //         dark: '#1E90FF',
        //         light: '#ffffff',
        //     },
        // };

        QRCode.toDataURL(addUrlParam(url, url_param), qrcode_option, function (err, url) {
            if (err) throw err;
            lhm_preview_img.src = url;
        });

    }


});

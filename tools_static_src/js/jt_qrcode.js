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

$().ready(function () {
    let lhm_editor = document.querySelector('#lhm_editor');
    let lhm_editor_size_range = document.querySelector('#lhm_editor_size_range');
    let lhm_editor_size_value = document.querySelector('#lhm_editor_size_value');

    if (lhm_editor) {
        lhm_editor_size_value.addEventListener('input', function () {
            lhm_editor_size_range.value = lhm_editor_size_value.value;
        });
        lhm_editor_size_range.addEventListener('input', function () {
            lhm_editor_size_value.value = lhm_editor_size_range.value;
        });
    }

});

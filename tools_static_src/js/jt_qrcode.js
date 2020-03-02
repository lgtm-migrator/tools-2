$().ready(function () {
    bsCustomFileInput.init();
});

$().ready(function () {
    let lhm_tabs_link = document.querySelector('#lhm_tabs_link');
    lhm_tabs_link.addEventListener('click', function (e) {
        let e_target = e.target;
        if ('A' === e_target.tagName) {
            $(e_target).tab('show');
            $(e_target).button('toggle');
        }
    });
});


/** 增加阴影 **/
let btn_all = document.querySelectorAll("[class*='btn']");
let input_all = document.querySelectorAll("input[class*='form-control']");

for (let btn_all_length = btn_all.length, i = 0; i < btn_all_length; i++) {
    btn_all[i].addEventListener('mouseover', shadow);
    btn_all[i].addEventListener('mouseout', shadow);
}

for (let input_all_length = input_all.length, i = 0; i < input_all_length; i++) {
    input_all[i].addEventListener("focusin", shadow_sm);
    input_all[i].addEventListener("focusout", shadow_sm);
}

function shadow(e) {
    e.target.classList.toggle("shadow");
}

function shadow_sm(e) {
    e.target.classList.toggle("shadow-sm");
}

function shadow_lg(e) {
    e.target.classList.toggle("shadow-lg");
}


/** 返回顶部 **/
(function () {
    let floatToolBackTop = document.querySelector("#to_top");
    floatToolBackTop ? floatToolBackTop.addEventListener('click', topControl) : "";
})();

function topControl(e) {
    e.preventDefault();
    $("html,body").animate({scrollTop: "0px"}, 1000);
}

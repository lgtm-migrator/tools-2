/** Cards 阴影 **/
let jt_list = document.querySelector("#jt_list");

cards_add_shadow();
cards_remove_shadow();

function cards_add_shadow() {
    jt_list.addEventListener("mouseover", function (e) {
        let target = e.target;
        if (target.classList.contains("card")) {
            add_shadow(e);
        }
    });
}

function cards_remove_shadow() {
    jt_list.addEventListener("mouseleave", function (e) {
        let target = e.target;
        if (target.classList.contains("card")) {
            remove_shadow(e);
        }
    },true);
}

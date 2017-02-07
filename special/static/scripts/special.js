function tryCatch(con, key, cursel) {
    try {
        con[0].style.display = key == cursel ? "block" : "none";
    } catch (e) {
    }
}
function tab(cursel, n) {
    var i;
    for (i = 1; i <= n; i++) {
        var menu = $('#tab1_' + i);
        var con = $('#cont1_' + i);
        i == cursel ? menu.addClass("on") : menu.removeClass("on");
        tryCatch(con, i, cursel);
        //con[0].style.display = i == cursel ? "block" : "none";
    }
}
function tab2(cursel, n) {
    var K;
    for (K = 1; K <= n; K++) {
        var menu2 = $('#tab2_' + K);
        var con2 = $('#cont2_' + K);

        K == cursel ? menu2.addClass("on") : menu2.removeClass("on");
        tryCatch(con2, K, cursel);
        //con2[0].style.display = K == cursel ? "block" : "none";
    }
}
function tab3(cursel, n) {
    var j;
    for (j = 1; j <= n; j++) {
        var menu3 = $('#tab3_' + j);
        var con3 = $('#cont3_' + j);

        j == cursel ? menu3.addClass("on") : menu3.removeClass("on");
        tryCatch(con3, j, cursel);
        //con3[0].style.display = j == cursel ? "block" : "none";
    }
}

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
        i == cursel ? menu.addClass("onActive") : menu.removeClass("onActive");
        tryCatch(con, i, cursel);
        //con[0].style.display = i == cursel ? "block" : "none";
    }
}
function tab2(cursel, n) {
    var K;
    for (K = 1; K <= n; K++) {
        var menu2 = $('#tab2_' + K);
        var con2 = $('#cont2_' + K);

        K == cursel ? menu2.addClass("onActive") : menu2.removeClass("onActive");
        tryCatch(con2, K, cursel);
        //con2[0].style.display = K == cursel ? "block" : "none";
    }
}
function tab3(cursel, n) {
    var j;
    for (j = 1; j <= n; j++) {
        var menu3 = $('#tab3_' + j);
        var con3 = $('#cont3_' + j);

        j == cursel ? menu3.addClass("onActive") : menu3.removeClass("onActive");
        tryCatch(con3, j, cursel);
        //con3[0].style.display = j == cursel ? "block" : "none";
    }
}
// 缩放
function pageResponse(opt) {
    //getElementsByClassName
    function getElementsByClassName(cl) {
        if (document.getElementsByClassName) {
            return  document.getElementsByClassName(cl)
        } else {
            var ele = [],
                    els = document.getElementsByTagName("*"),
                    i = els.length;
            cl = cl.replace(/\-/g, "\\-");
            var pa = new RegExp("(^|\\s)" + cl + "(\\s|$)");
            while (--i >= 0) {
                if (pa.test(els[i].className)) {
                    ele.push(els[i]);
                }
            }
            return ele;
        }
    }
    //模板
    function template(mode, obj, num) {
        var s = obj.style;
        s.width = pw + "px";
        s.height = ph + "px";
        s.webkitTransformOrigin = "left top 0";
        s.transformOrigin = "left top 0";
        s.webkitTransform = "scale(" + num + ")";
        s.transform = "scale(" + num + ")";
        if (mode == "auto") {
            document.body.style.height = ph * num + "px";// 兼容android2.3.5系统下body高度不自动刷新的bug
        } else if (mode == "contain" || mode == "cover") {
            s.position = "absolute";
            s.left = "50%";
            s.top = "50%";
            s.marginLeft = pw / -2 + "px";
            s.marginTop = ph / -2 + "px";
            s.webkitTransformOrigin = "center center 0";
            s.transformOrigin = "center center 0";
            document.body.style.msTouchAction = "none";// 阻止默认滑屏事件
            document.ontouchmove = function (e) {
                e.preventDefault()
            }
            // if($('#slide3')){

            // }
        }
    }
    var dw = document.documentElement.clientWidth,
            dh = document.documentElement.clientHeight,
            ds = dw / dh, // 设备宽高初始比例
            pw = opt.width || 320,
            ph = opt.height || 504,
            ps = pw / ph, // 页面宽高初始比例
            pd = getElementsByClassName(opt.class),
            pd2 = getElementsByClassName(opt.classFixed),
            sm = opt.mode || "auto",
            sn = (sm == "contain") ? (ds > ps ? dh / ph : dw / pw) : (sm == "cover") ? (ds < ps ? dh / ph : dw / pw) : dw / pw;// 页面缩放比例，默认模式为auto
    if (opt.width > dw) {
        for (i = 0; i < pd.length; i++) {
            template(sm, pd[i], sn);
        }
    } else {
        $('.scalewrap').attr('style', '');
    }
}

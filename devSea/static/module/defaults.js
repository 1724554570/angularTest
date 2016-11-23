define(function (require, exports, module) {

    require('utils');
    var _Temp = require('template');
    var Def = function () { };
    var navList = {defs: [
            {'href': '/', ck: '/', text: '首页'},
            {'href': 'static/view/user.html', ck: 'user', text: '用户'},
            {'href': 'static/view/article.html', ck: 'article', text: '文章'},
        ]};
    navList.nhref = '/';

    Def.codes = {'-1': '系统异常'};

    Def.prototype = {
        init: function () {
            return this;
        },
        load: function () {
            var _this = this;
            $.eventBind(_this);
            _this.marquee();
        },
        marquee: function () {
            var tpl = require("../tpl/nav.tpl");
            document.getElementById('nav').innerHTML = tpl;
            document.getElementById('navlist').innerHTML = _Temp('navigation', navList);
        }
    };

    module.exports = Def;
});
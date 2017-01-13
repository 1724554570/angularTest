define(function (require, exports, module) {

    require('jquery');
    require('layer');
    require('utils');
    require('operation');
    require('common');
    var _Req = require('request');
    var _Iface = require('interface');
    var _Temp = require('template');
    var Def = function () { };
    var Def = window.Def = function () {
        return new Def.fn.init();
    };

    var navList = {defs: [
            {'href': './', ck: './', dhref: _Iface.merber.lists, text: '首页'},
            {'href': '#', ck: 'user', dhref: _Iface.merber.lists, tpl: 'ckHref', text: '用户'},
            {'href': '#', ck: 'article', dhref: _Iface.article.lists, tpl: 'article', text: '文章'},
            {'href': '#', ck: 'cuthtml', dhref: '', tpl: 'cuthtml', text: 'html截图'},
        ]};
    navList.nhref = './';

    Def.codes = {'-1': '系统异常'};

    Def.fn = Def.prototype = {
        init: function () {            return this;        },
        load: function () {
            var _this = this;
            $.eventBind(_this);
            _this.marquee();
        },
        marquee: function () {
            var tpl = require("../tpl/nav.tpl");
            document.getElementById('nav').innerHTML = tpl;
            document.getElementById('navlist').innerHTML = _Temp('navigation', navList);
        },
        findNav:function(self){var ckmodel = $(self).attr('data-ck');navList.nhref = ckmodel;this.marquee();},
        ckHref: function (self) {this.findNav(self);},
        article:function(self){this.findNav(self);}
    };

    Def.fn.init.prototype = Def.fn;

    module.exports = Def;
});
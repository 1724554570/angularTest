/**
 * 首页模块
 * @param {type} require
 * @param {type} exports
 * @param {type} module
 * @returns {undefined}
 */
define(function (require, exports, module) {
    require('jquery'), require('layer'), require('utils'), require('common');
    var _Req = require('request');
    var _Iface = require('interface');
    var _Temp = require('template');

    var Home = window.Home = function () {
        return new Home.fn.init();
    };

    Home.codes = {'-1': '系统异常'};

    Home.fn = Home.prototype = {
        init: function () {
            return this;
        },
        load: function () {
            var _this = this;
            $.eventBind(_this);
            _this.marquee();
        },
        marquee: function () {
            //var ret = {"status": 1, "total": null, "users": [{"uid": "1", "username": "1724554570@qq.com", "imgurl": "public\/images\/1935767.jpg", "ctime": "1479115386"}, {"uid": "2", "username": "mms", "imgurl": null, "ctime": "1479365289"}, {"uid": "3", "username": "mms3", "imgurl": null, "ctime": "1479365289"}, {"uid": "4", "username": "mms4", "imgurl": null, "ctime": "1479365289"}, {"uid": "5", "username": "mms5", "imgurl": null, "ctime": "1479365289"}, {"uid": "6", "username": "mms6", "imgurl": "public\/images\/4067115.jpg", "ctime": "1479365289"}, {"uid": "7", "username": "mms7", "imgurl": null, "ctime": "1479365289"}, {"uid": "8", "username": "mms8", "imgurl": null, "ctime": "1479365289"}, {"uid": "9", "username": "mms9", "imgurl": null, "ctime": "1479365289"}, {"uid": "10", "username": "mms10", "imgurl": null, "ctime": "1479365289"}]};
            //document.getElementById('topic_list').innerHTML = _Temp('template', ret);
            _Req(_Iface.merber.lists, {}, 'post', function (ret) {
                document.getElementById('topic_list').innerHTML = _Temp('template', ret);
            });
        }
    };

    Home.fn.init.prototype = Home.fn;

    module.exports = Home;
});
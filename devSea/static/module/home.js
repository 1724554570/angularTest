/**
 * 首页模块
 * @param {type} require
 * @param {type} exports
 * @param {type} module
 * @returns {undefined}
 */
define(function (require, exports, module) {
    require('jquery'), require('layer'), require('utils'), require('operation'), require('common');
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
            //_Req(_Iface.merber.lists, {}, 'post', function (ret) {
            //document.getElementById('topic_list').innerHTML = _Temp('template', ret);
            //});
            var tpl = require("../tpl/list.tpl");
            document.getElementById('g_content').innerHTML = tpl;
            cloudjs('#topic_list').table({
                pageSize: 10,
                pagingFlag: 1,
                ajaxUrl: _Iface.merber.lists,
                tableData: [
                    {title: "id", key: "uid", sort: 'number', width: '80px'},
                    {title: "用户名", key: "username", sort: 'string', width: '200px'},
                    {title: "imgurl", key: function () {
                            return '<img src="/publish/{imgurl}" style="width:30px;height:30px;" title="点击放大图片"/>';
                        }, sort: 'string'},
                    {title: "ctime", key: "ctime", sort: 'number', defaultSort: 1},
                    {title: "操作", key: function () {
                            return '<a class="cursor" k="{uid}" title="删除这条数据">删除</a>';
                        }, className: "center", width: '60px'}
                ],
                totalCounts: function (data) {
                    return data.total;
                },
                onAjax: function (data) {
                    return data.users;
                },
                onBodyChange: function (obj) {
                    cloudjs('img', obj).tips();
                    $('img', obj).click(function () {
                        var path = $(this).attr('src');
                        $.bigImg(path);
                    });
                    cloudjs('a', obj).tips();
                    $('a', obj).click(function () {
                        alert($(this).attr('k') + '不做操作');
                    });
                }
            });
        },
        findDatea: function (opt) {
            _Req(opt.url, {}, 'post', function (ret) {
                document.getElementById('g_content').innerHTML = opt.tpl;
                document.getElementById('topic_list').innerHTML = _Temp(opt.temp, ret);
            });
        },
        ckData: function (self) {
            var url = $(self).attr('data-href');
            navList.nhref = $(self).attr('data-ck');
            return {url: url};
        },
        ckHref: function (self) {
            var o = this.ckData(self);
            var tpl = require('../tpl/list.tpl');
            o.tpl = tpl;
            o.temp = 'template';
            this.findDatea(o);
        },
        article: function (self) {
            var o = this.ckData(self);
            var tpl = require('../tpl/{article}.tpl');
            o.tpl = tpl;
            o.temp = 'articletemplate';
            this.findDatea(o);
        }
    };

    Home.fn.init.prototype = Home.fn;

    module.exports = Home;
});
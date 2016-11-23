/**
 * 文章模块
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

    var Article = window.Article = function () {
        return new Article.fn.init();
    };

    Article.codes = {'-1': '系统异常'};

    Article.fn = Article.prototype = {
        init: function () {
            return this;
        },
        load: function () {
            var _this = this;
            $.eventBind(_this);
            _this.lists();
        },
        lists: function () {
            _Req(_Iface.article.lists, {}, 'post', function (ret) {
                var tpl = require("../tpl/article.tpl");
                document.getElementById('g_content').innerHTML = tpl;
                document.getElementById('topic_list').innerHTML = _Temp('articletemplate', ret);
            });
        }
    };

    Article.fn.init.prototype = Article.fn;

    module.exports = Article;
});
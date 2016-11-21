/**
 * 请求封装
 * @param {type} require
 * @param {type} exports
 * @param {type} module
 * @returns {undefined}
 */
define(function (require, exports, module) {
    var getAppPath = function (url) {
        if (url) {
            return url;
        } else {
            return '/' + '' + url;
        }
    };
    /**
     * 远程调用获取服务器数据
     * @param URL 服务器URL
     * @param params 传递到服务器参数
     * @param type 请求方式 ("POST" 或 "GET")
     * @param callback 回调函数
     */
    var _request = function (url, params, type, callBack) {
        $.ajax({
            type: type,
            url: getAppPath(url),
            data: params,
            //data: JSON.stringify(params),
            contentType: 'application/json',
            dataType: 'json',
            processData: false,
            async: true,
            timeout: 10000,
            success: function (ret) {
                if (ret) {
                    callBack(ret);
                } else {
                    layer.msg('返回值为空，请检查接口文件！', {icon: 2, time: 1500});
                }
            },
            error: function (xhr, type) {
                layer.msg('请求失败，稍后再试！', {icon: 2, time: 1500});
            }
        });
    };

    module.exports = _request;
});
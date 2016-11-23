/**
 * 工具类 （扩展到jQuery)
 * @param {type} require
 * @param {type} exports
 * @param {type} module
 * @returns {undefined}
 */
define(function (require, exports, module) {

    var _operation = {
        bigImg: function (path) {
            $("#bigImg").find('img').attr('src', path);
            $('#float,#bigImg').show();
        }
    };
    
    $.extend(_operation);
});
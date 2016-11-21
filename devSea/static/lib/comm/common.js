/**
 * 属性类
 * @param {type} require
 * @param {type} exports
 * @param {type} module
 * @returns {undefined}
 */
define(function (require, exports, module) {
    layer.config({path: baseLib + 'layer'});
    
    var common = {};

    $(document).on('click', "[event-common]", function () {
        common[$(this).attr('event-common')](this);
    });
    
    module.exports = common;
});
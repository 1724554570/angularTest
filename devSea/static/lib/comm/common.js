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
    
    $('#keyBtn').bind('click', function () {
        var params = $(this).prev().serialize();
        cloudjs('#g_content').table('setData', {params: params, pageNum: 1});
    });
    
    
    $("#closeFloat").click(function () {
        $("#float,.children").hide();
    });

    seajs.use(baseModel + '/module/defaults', function (Def) {
        var def = new Def();
        def.load();
    });

    module.exports = common;
});
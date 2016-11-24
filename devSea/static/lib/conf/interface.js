/**
 * 接口模块
 * @param {type} require
 * @param {type} exports
 * @param {type} module
 * @returns {undefined}
 */
define(function (require, exports, module) {
    var action = "http://127.0.0.1/tkfull/index.php/";
    action = "/tkfull/index.php/";
    var _interface = {
        merber: {
            getLogin: action + "apis/login/ajaxlogin",
            setUsers: action + "apis/login/ajaxreg",
            getForget: action + "apis/login/ajaxForget",
            findById: action + "apis/users/getArtById",
            lists: action + 'apis/users/lists'
        },
        article: {
            lists: action + 'apis/article/getLists',
            detail: '',
            create: '',
            edit: ''
        },
        tpl: {
            user: "../tpl/list.tpl",
            article: "../tpl/article.tpl"
        }
    };
    module.exports = _interface;
});
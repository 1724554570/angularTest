/**
 * 接口模块
 * @param {type} require
 * @param {type} exports
 * @param {type} module
 * @returns {undefined}
 */
define(function (require, exports, module) {
    var action = "/tkfull/index.php/";
    var _interface = {
        merber: {
            getLogin: action + "apis/login/ajaxlogin",
            setUsers: action + "apis/login/ajaxreg",
            getForget: action + "apis/login/ajaxForget",
            findById: action + "apis/users/getArtById",
            lists: action + 'apis/users/lists'
        },
        article: {
            list: '',
            detail: '',
            create: '',
            edit: ''
        }
    };
    module.exports = _interface;
});
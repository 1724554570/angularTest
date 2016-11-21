/**
 * 正则匹配类
 * @param {type} require
 * @param {type} exports
 * @param {type} module
 * @returns {undefined}
 */
define(function (require, exports, module) {

    var _valid = {
        isEmpty: function (str) {
            if (str.length == 0 || str.match(/^\s+$/g))
                return false;
            else
                return true;
        },
        isNumber: function (data, isPositive) {
            return isPositive ? /^\d+(\.\d{1,})?$/.test(data) && parseFloat(data) > 0 : /^(-)?\d+(\.\d{1,})?$/.test(data);
        },
        isMoney: function (data, isPositive) {
            return isPositive ? /^\d+(\.\d{1,2})?$/.test(data) && parseFloat(data) > 0 : /^(-)?\d+(\.\d{1,2})?$/.test(data);
        },
        isInt: function (data, isPositive) {
            return isPositive ? /^\d+$/.test(data) && parseInt(data, 10) > 0 : /^(-)?\d+$/.test(data);
        },
        isIdentityNumber: function (number) {
            if ($.trim(number) == '' || !/^[0-9]{17}[0-9X]$/.test(number)) {
                return false;
            }
            var weights = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            var parityBits = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
            var power = 0;
            for (var i = 0; i < 17; i++) {
                power += parseInt(number.charAt(i), 10) * weights[i];
            }
            return parityBits[power % 11] == number.substr(17);
        },
        isMobile: function (mobile) {
            return mobile && /^1[3-9]\d{9}$/.test(mobile);
        },
        isEmail: function (email) {
            return email && /^[0-9a-zA-Z_\-]+@[0-9a-zA-Z_\-]+\.\w{1,5}(\.\w{1,5})?$/.test(email);
        },
        isBankCard: function (cardNumber) {
            return cardNumber && /^\d{16,30}$/.test(cardNumber);
        },
        isChinaName: function (name) {
            return name && $.trim(name).length >= 2 && !/^.*\\d{1,}.*$/.test(name);
        },
        isCard: function (card) {
            return card && /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(card);
        },
        isImg: function (filename) {
            var imgs = ['.png', '.bmp', '.jpg', '.jpeg', '.gif'];
            for (var i = 0; i < imgs.length; i++) {
                if ($.trim(filename).toLowerCase().endsWith(imgs[i]))
                    return true;
            }
            return false;
        },
        isPwdValid: function (pwd) {
            if (!($.trim(pwd).length >= 6 && $.trim(pwd).length <= 16)) {
                return {valid: false, msg: "密码必须由6-16个字符组成"};
            } else {
                if (!/^(\w){6,16}$/.test(pwd)) {
                    return {valid: false, msg: "密码格式不正确"};
                }
            }
            return {valid: true, msg: ''};
        }
    };

    $.extend(_valid);
});
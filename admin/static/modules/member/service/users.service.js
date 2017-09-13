(function () {
    'use strict';
    var baseUrl = 'http://www.osanwen.com/gcow/cont';
    baseUrl = 'http://47.94.15.71/gcow/cont';
    baseUrl = ("www.osanwen.com" === document.domain) ? ('/gcow/cont') : (baseUrl);
    var interface_user = {
        login: baseUrl + "/sys/login",
        addUser: baseUrl + '/sys/addUser',
        userList: baseUrl + "/sys/userList",
        editorUser: baseUrl + "/sys/editorUser",
        upHeadPortrait: baseUrl + "/sys/upHeadPortrait"
    };
    angular.module('com.module.users').service('userService', ['$state', 'httpService', 'lStore', function ($state, httpService, lStore) {
            var users = {};
            users.logIn = function (data, cb, err) {
                httpService.post({url: interface_user.login, data: data}, function (res) {
                    console.log(res.data.code);
                    if (res != 'undefined' && res.data.code == 201) {
                        cb(res)
                    } else {
                        alert(res.data.message);
                        //var log_user = angular.toJson(data);
                        //lStore.setValue('log.user', log_user);
                        //$state.go('app.home');
                    }
                }, function (res) {
                    err();
                });
            };

            users.find = function (opt) {
                httpService.get({url: baseUrl + '/sys/user'});
            };

            users.findAList = function (call) {
                httpService.get({url: baseUrl + '/sys/userList', data: {}}, function (res) {
                    call(res);
                });
            };

            users.editAlist = function (data, call) {
                httpService.post({url: interface_user.editorUser, data: data}, function (res) {
                    call(res);
                });
            };

            users.findById = function (id) {
                var opt = {url: '', data: {}};
                return httpService.post(opt, function (res) {
                    return 'success';
                }, function (error) {
                    console.log('error');
                });
            };

            users.add = function (data, call) {
                httpService.post({url: interface_user.addUser, data: data}, function (res) {
                    call(res);
                });
            };

            return users;
        }]);

})();

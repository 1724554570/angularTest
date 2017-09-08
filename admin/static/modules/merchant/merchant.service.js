(function () {
    'use strict';
    angular.module('com.module.merchant').service('MerchantService', 'httpService', function ($state, httpService) {
        var users = {};
        this.find = function (opt) {

        };

        this.findById = function (id) {
            var opt = {url: '', data: {}};
            return httpService.post(opt, function (res) {
                return 'success';
            }, function (error) {
                console.log('error');
            });
        };

        this.add = function () {

        };




    });

})();

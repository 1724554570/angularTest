angular.module("testApp").factory("userInfoService",["$http","localStorage","$state","$rootScope",function(t,o,n,e){var r={},a={getuserinfo:actionUrl+"Apis/Users/getUserinfo",getLogin:actionUrl+"Apis/Login/ajaxlogin",findById:actionUrl+"Apis/Users/getArtById",setUsers:actionUrl+"Apis/Login/ajaxreg",getForget:actionUrl+"Apis/Login/ajaxForget"};return r.getUsers=function(o){t({method:"post",url:a.getuserinfo,data:{token:token.token}}).then(function(t){var n=t.data.users;o(n)},function(t){console.log(t)})},r.getLogin=function(o,n){t({method:"post",url:a.getLogin,data:o}).then(function(t){n(t)},function(t){console.log(t)})},r.getRegister=function(o,n){t({method:"post",url:a.setUsers,data:o}).then(function(t){n(t)},function(t){console.log(t)})},r.getForget=function(o,n){t({method:"post",url:a.getForget,data:o}).then(function(t){n(t)},function(t){console.log(t)})},r.findById=function(o,n){t({method:"post",url:a.findById,data:o}).then(function(t){n(t.data)},function(t){console.log(t)})},r}]),angular.module("testApp").factory("productService",["$http","localStorage","$state","$rootScope",function(t,o,n,e){var r={},a={getuserinfo:actionUrl+"Apis/Product/getProduct",getById:actionUrl+"Apis/Product/getProductById",savaPro:actionUrl+"Apis/Product/saveProduct"};return r.getProduct=function(o){t({method:"post",url:a.getuserinfo,data:{token:token.token}}).then(function(t){var n=t.data.pro;o(n)},function(t){console.log(t)})},r.getProductById=function(o,n){t({method:"post",url:a.getById,data:o}).then(function(t){var o=t.data.pro;n(o)},function(t){console.log(t)})},r.saveProduct=function(o,n){var e=a.savaPro;""!=o._csrf&&(e=a.savaPro);t({method:"post",url:e,data:o}).then(function(t){var o=t.data;n(o)},function(t){console.log(t)})},r}]);
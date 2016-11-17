/**
 * 文章
 * @type type
 */
angular.module('testApp')
        // 导航控制器
        .controller('proController', ['$scope', '$state', 'productService', 'cookie', 'localStorage',
            function ($scope, $state, productService, cookie, localStorage) {
                $scope.nav = {all: false, pro: true, qas: false, abo: false};
                $scope.info1 = "项目";
                if (cookie.get('isLogined')) {
                    var loginUsers = angular.fromJson(window.localStorage.getItem('login.users'));
                    $scope.isLogin = loginUsers || angular.fromJson(cookie.get('login.users.name')) || "";
                } else {

                }
            }])
        // 
        .controller('proListController', ['$scope', '$state', 'productService', 'vaulesFactory', 'localStorage',
            function ($scope, $state, productService, vaulesFactory, localStorage) {

                localStorage.setValue('_csrf', "");

                $scope.times = function (times) {
                    var rtime = parseInt(times) * 1000;
                    //return new Date(rtime).toLocaleString().replace(/:\d{1,2}$/, ' ');
                    //return new Date(rtime).toLocaleString().substr(0, 17);
                    return new Date(rtime).toLocaleString().substr(0, 10);
                };

                productService.getProduct(function (data) {
                    $scope.product = data;
                });

                $scope.showSimple = function (product) {
                    vaulesFactory.setter(product);
                    $state.go('pro.artdetail');
                };

            }])
        //
        .controller('proArtDescController', ['$scope', '$state', 'productService', '$stateParams', function ($scope, $state, productService, $stateParams) {
                $scope.times = function (times) {
                    var rtime = parseInt(times) * 1000;
                    return new Date(rtime).toLocaleString().substr(0, 10);
                };
                $scope.product = {};
                $scope.getProductInfo = function () {
                    var productId = $stateParams.id;
                    if (!productId) {
                        $state.go('pro.list');
                    }
                    var data = {pro_id: productId};
                    productService.getProductById(data, function (resp) {
                        $scope.product = resp;
                        $scope.product._csrf = resp.id;
                    });
                };
                $scope.getProductInfo();
            }])
        // 
        .controller('proArticleController', ['$scope', '$state', 'productService',
            function ($scope, $state, productService) {
                if (!$scope.isLogin) {
                    $state.go('pro.list');
                }
                $scope._simpleConfig = {
                    toolbar: [
                        'source | undo redo | bold italic underline strikethrough | superscript subscript | forecolor backcolor | removeformat |',
                        'insertorderedlist insertunorderedlist | selectall cleardoc paragraph | fontfamily fontsize',
                        '| justifyleft justifycenter justifyright justifyjustify |',
                        'link unlink | emotion image video  | map',
                        '| horizontal print preview fullscreen', 'drafts', 'formula'
                    ],
                    initialFrameWidth: '100%',
                    initialFrameHeight: 400,
                    //focus时自动清空初始化时的内容
                    autoClearinitialContent: true,
                    //关闭字数统计
                    wordCount: false,
                    //关闭elementPath
                    elementPathEnabled: false,
                    autoFloatEnabled: false
                };
                $scope.content2 = "";

                $scope.product = {};
                $scope.product.users = $scope.isLogin.uid;
                $scope.product.productname = "";
                $scope.product.productdesc = "";
                $scope.product.propower = "";
                $scope.product._csrf = "";

                $scope.submitFun = function () {
                    if ($scope.product.propower == "" || $scope.product.productname == "" || $scope.product.productdesc == "") {
                        alert('参数不足');
                        return;
                    }
                    var datas = {
                        id: $scope.product._csrf,
                        users: $scope.isLogin.uid,
                        productname: $scope.product.productname,
                        productdesc: $scope.product.productdesc,
                        propower: $scope.product.propower,
                        token: "saveArticle"
                    };
                    productService.saveProduct(datas, function (callbacks) {
                        if (callbacks.pro) {
                            $state.go('pro.list');
                        }
                    });
                };

            }])
        //
        .controller('proArticleEidtController', ['$scope', '$state', 'productService', '$stateParams', 'vaulesFactory', 'localStorage',
            function ($scope, $state, productService, $stateParams, vaulesFactory, localStorage) {

                $scope.product = {};
                $scope.product.productname = "";
                $scope.product.productdesc = "";
                $scope.product.propower = "";
                $scope.product._csrf = "";

                $scope._simpleConfig = {
                    toolbar: [
                        'source | undo redo | bold italic underline strikethrough | superscript subscript | forecolor backcolor | removeformat |',
                        'insertorderedlist insertunorderedlist | selectall cleardoc paragraph | fontfamily fontsize',
                        '| justifyleft justifycenter justifyright justifyjustify |',
                        'link unlink | emotion image video  | map',
                        '| horizontal print preview fullscreen', 'drafts', 'formula'
                    ],
                    initialFrameWidth: '100%',
                    initialFrameHeight: 400,
                    //focus时自动清空初始化时的内容
                    autoClearinitialContent: true,
                    //关闭字数统计
                    wordCount: false,
                    //关闭elementPath
                    elementPathEnabled: false,
                    autoFloatEnabled: false
                };
                $scope.content2 = "";

                $scope.getProductInfo = function () {
                    var infos = vaulesFactory.getter(), productId = "";
                    if (infos) {
                        productId = infos.id;
                        localStorage.setValue('_csrf', infos.id);
                    }
                    if (localStorage.getValue('_csrf')) {
                        productId = localStorage.getValue('_csrf');
                    }
                    var data = {pro_id: productId};
                    productService.getProductById(data, function (resp) {
                        $scope.product = resp;
                        $scope.product._csrf = resp.id;
                    });
                };

                $scope.getProductInfo();

                $scope.submitFun = function () {
                    if ($scope.product.propower == "" || $scope.product.productname == "" || $scope.product.productdesc == "") {
                        alert('参数不足');
                        return;
                    }
                    var datas = {
                        id: $scope.product._csrf,
                        productname: $scope.product.productname,
                        productdesc: $scope.product.productdesc,
                        propower: $scope.product.propower,
                        token: token.token
                    };
                    productService.saveProduct(datas, function (callbacks) {
                        if (callbacks.pro) {
                            $state.go('pro.list');
                        } else if (callbacks.status === 0 && !callbacks.pro) {
                            $state.go('pro.list');
                        }
                    });
                };


            }])

        ;
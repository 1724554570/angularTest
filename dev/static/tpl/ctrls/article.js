/**
 * 文章
 * @type type
 */
angular.module('testApp')
        // 导航控制器
        .controller('proController', ['$scope', 'AccessToken', function ($scope, AccessToken) {
                $scope.nav = {all: false, pro: true, qas: false, abo: false};
                $scope.info1 = "项目";
                $scope.isLogin = AccessToken.loginState();
            }])
        // 
        .controller('proListController', ['$scope', 'articleService', 'localStorage', function ($scope, articleService, localStorage) {

                localStorage.setValue('_csrf', "");

                $scope.artLists = function () {
                    articleService.getProduct({}, function (resp) {
                        $scope.product = resp.data.pro;
                    });
                };

                $scope.artLists();

            }])
        //
        .controller('proArtDescController', ['$scope', '$state', 'articleService', '$stateParams', function ($scope, $state, articleService, $stateParams) {
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
                    articleService.getProductById(data, function (resp) {
                        $scope.product = resp.data.article;
                        $scope.product._csrf = resp.data.article.id;
                    });
                };
                $scope.getProductInfo();
            }])
        // 
        .controller('proArticleController', ['$scope', '$state', 'articleService', function ($scope, $state, articleService) {
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
                    articleService.saveProduct(datas, function (resp) {
                        if (resp.data.pro) {
                            $state.go('pro.list');
                        }
                    });
                };

            }])
        //
        .controller('proArticleEidtController', ['$scope', '$state', 'articleService', 'vaulesFactory', 'localStorage', function ($scope, $state, articleService, vaulesFactory, localStorage) {
                var column = {productname: '', productdesc: '', propower: '', _csrf: ''};
                $scope.product = column;

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
                    articleService.getProductById(data, function (resp) {
                        $scope.product = resp.data.article;
                        $scope.product._csrf = resp.data.article.id;
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
                    articleService.saveProduct(datas, function (callbacks) {
                        if (callbacks.pro) {
                            $state.go('pro.list');
                        } else if (callbacks.status === 0 && !callbacks.pro) {
                            $state.go('pro.list');
                        }
                    });
                };


            }])

        ;
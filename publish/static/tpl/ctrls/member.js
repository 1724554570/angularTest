angular.module("testApp").controller("myselfController",["$scope","localStorage",function(o,e){o.nav={all:!0,pro:!1,qas:!1,abo:!1},o.info1="项目",o.times=function(o){var e=1e3*parseInt(o);return new Date(e).toLocaleString().substr(0,10)}}]).controller("infoController",["$scope","localStorage","userInfoService","$state","$stateParams","vaulesFactory",function(o,e,t,r,n,a){e.setValue("_csrf",""),o.showSimple=function(o){r.go("pro.artdetail",{id:o.id})},o.getInfoById=function(){var e={id:n.id};t.findById(e,function(e){o.user=e.users,o.pros=e.pros})},o.getInfoById()}]);
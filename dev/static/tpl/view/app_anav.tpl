<!-- navbar -->
<div class='navbar'>
    <div class='navbar-inner'>
        <div class='container'>
            <a class='brand' ui-sref='app.home'><img ng-src="{{homeLogo}}" /></a>
            <ul class='nav pull-right' ng-if="!isLogin">
                <li><a ui-sref="login.register">注册</a></li>
                <li><a ui-sref="login.loginindex">登录</a></li>
            </ul>
            <a class="btn btn-navbar" id="responsive-sidebar-trigger">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
        </div>
    </div>
</div>
<div id='main'>
    <div id='sidebar'>
        <div class='panel' ng-if="!isLogin">
            <div class='inner'>
                <p>Angular Demo</p>
                <div>
                    您可以<a ui-sref="login.loginindex">登录</a>或<a ui-sref="login.register">注册</a>
                </div>
            </div>
        </div>
        <div class="panel" ng-if="isLogin">
            <div class="header">
                <span class="col_fade">个人信息</span>
            </div>
            <div class="inner">
                <div class="user_card">
                    <div>
                        <a class="user_avatar" href="#/app/home/{{isLogin.id}}">
                            <img ng-if="isLogin.imgsrc" ng-src="{{isLogin.imgsrc}}" title="{{isLogin.username}}">
                            <img ng-if="!isLogin.imgsrc" src="public/images/default_img.png">
                        </a>
                        <span class="user_name"><a class="dark" href="#/app/home/{{isLogin.id}}">{{isLogin.username}}</a></span>
                        <div class="space clearfix"></div>
                        <span class="signature">“这家伙很懒，什么个性签名都没有留下。”</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel" ng-if="isLogin">
            <div class="inner">
                <a ui-sref="pro.article" id="create_topic_btn">
                    <span class="span-success">发布话题</span>
                </a>
            </div>
        </div>
    </div>

    <div id="content">
        <div class="panel">
            <!--导航-->
            <div class="header">
                <a ui-sref="app.home" class="topic-tab" ng-class="{true:'current-tab',false:''}[nav.all]">全部</a>
                <a ui-sref="pro.list" class="topic-tab" ng-class="{true:'current-tab',false:''}[nav.pro]">项目</a>
                <a ui-sref="qas.home" class="topic-tab" ng-class="{true:'current-tab',false:''}[nav.qas]">问答</a>
                <a ui-sref="abo.home" class="topic-tab" ng-class="{true:'current-tab',false:''}[nav.abo]">关于</a>
            </div>
            <!--列表-->
            <div class="inner no-padding" ui-view></div>
        </div>    
    </div>
</div>

<div id='backtotop'>回到顶部</div>
<div id="sidebar-mask"></div>
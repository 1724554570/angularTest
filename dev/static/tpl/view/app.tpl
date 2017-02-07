<!-- navbar -->
<div class='navbar'>
    <div class='navbar-inner'>
        <div class='container'>
            <a class='brand' ui-sref='app.home'><img src="public/images/logo.png" alt="" /></a>
            <ul class='nav pull-right'>
                <li><a ui-sref="app.home">首页</a></li>
                <li><a ui-sref="article.list">项目</a></li>
                <li><a ui-sref="issue.home">问答</a></li>
                <li><a ui-sref="about.home">关于</a></li>
                <li ng-if="!isLogin"><a ui-sref="user.register">注册</a></li>
                <li ng-if="!isLogin"><a ui-sref="user.loginindex">登录</a></li>
                <li ng-if="isLogin"><a ui-sref="user.loginout">退出登录</a></li>
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
    <div id="content" ui-view="content"></div>
    <div id='sidebar' ui-view="content2"></div>
</div>
<div id='backtotop'>回到顶部</div>
<div id="sidebar-mask"></div>

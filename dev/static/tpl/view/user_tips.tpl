<div class='panel' ng-if="!isLogin">
    <div class='inner'>
        <p>Angular Demo</p>
        <div>
            您可以<a ui-sref="user.loginindex">登录</a>或<a ui-sref="user.register">注册</a>
            <!--<a href="/auth/github"><span class="span-info">通过 GitHub 登录</span></a>-->
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
                <a class="user_avatar" ui-sref="info.user({id: isLogin.uid})">
                    <img ng-if="isLogin.imgsrc" ng-src="{{isLogin.imgsrc}}" title="{{isLogin.username}}">
                    <img ng-if="!isLogin.imgsrc" src="public/images/default_img.png">
                </a>
                <span class="user_name"><a class="dark" ui-sref="info.user({id: isLogin.uid})">{{isLogin.username}}</a></span>
                <div class="space clearfix"></div>
                <span class="signature">“这家伙很懒，什么个性签名都没有留下。”</span>
            </div>
        </div>
    </div>
</div>
<div class="panel" ng-if="isLogin">
    <div class="inner">
        <a ui-sref="article.add" id="create_topic_btn">
            <span class="span-success">发布话题</span>
        </a>
    </div>
</div>
<div class="panel" ng-if="isLogin" style="display: none;">
    <div class="inner">
        <a ui-sref="article.add" id="create_topic_btn">
            <span class="span-success">个人文章</span>
        </a>
    </div>
</div>
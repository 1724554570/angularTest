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
                    <a class="user_avatar" ui-sref="info.user({id: isLogin.uid})">
                        <img ng-if="isLogin.imgurl" ng-src="{{isLogin.imgurl}}" title="{{isLogin.username}}">
                        <img ng-if="!isLogin.imgurl" src="public/images/default_img.png" title="{{isLogin.username}}">
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
            <a ui-sref="pro.article" id="create_topic_btn">
                <span class="span-success">发布话题</span>
            </a>
        </div>
    </div>
</div>
<!--左侧内容-->
<div id="content">
    <div class="panel">
        <!--列表-->
        <div class="inner no-padding">
            <div id="topic_list">
                <div class='cell' ng-repeat="pro in product">
                    <a class="user_avatar pull-left" ui-sref="info.user({id: pro.uid})">
                        <img ng-if="pro.imgurl" ng-src="{{pro.imgurl}}" title="{{pro.productname}}">
                        <img ng-if="!pro.imgurl" src="public/images/default_img.png">
                    </a>
                    <span class="reply_count pull-left">
                        <span class="count_of_replies" title="回复数">0</span>
                        <span class="count_seperator">/</span>
                        <span class="count_of_visits" title='点击数'>0</span>
                    </span>
                    <b class='last_time pull-right'>
                        <span class="last_active_time">{{pro.proctime|FormatStrDate}}</span>
                    </b>
                    <div class="topic_title_wrapper">
                        <span class='put_top'>{{info1}}</span>
                        <a ui-sref="article.detail({id: pro.id})" class='topic_title' title='{{pro.productname}}'>{{pro.productname}}</a>
                    </div>
                </div>
            </div>
        </div>
        <!--分页器-->

        <script>
                    $(document).ready(function () {
                        var $nav = $('.pagination');
                        var current_page = $nav.attr('current_page');
                        if (current_page) {
                            $nav.find('li').each(function () {
                                var $li = $(this);
                                var $a = $li.find('a');
                                if ($a.html() == current_page) {
                                    $li.addClass('active');
                                    $a.removeAttr('href');
                                }
                            });
                        }
                    });
        </script>
    </div>
</div>
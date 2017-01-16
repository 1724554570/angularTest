<div id="content">
    <div class="panel">
        <div class="header">
            <ul class="breadcrumb">
                <li><a ui-sref="app.home">主页</a><span class="divider">/</span></li>
            </ul>
        </div>
        <div class="inner userinfo">
            <div class="user_big_avatar">
                <img ng-if="user.imgurl" ng-src="{{user.imgurl}}" title="{{user.username}}">
                <img ng-if="!user.imgurl" src="public/images/default_img.png">
            </div>
            <a class="dark">{{user.username}}</a>
            <div class="user_profile">
                <span class="big" ng-if="pros">{{pros.length}}</span><span class="big" ng-if="!pros">0</span> 个分享
            </div>
            <p class="col_fade">注册时间 {{user.ctime|FormatStrDate}}</p>
        </div>
    </div>

    <div class="panel">
        <div class="header">
            <span class="col_fade">最近创建</span>
        </div>

        <div class="cell" ng-repeat="pro in pros">
            <a class="user_avatar pull-left" ui-sref="info.user({id: user.uid})">
                <img ng-if="user.imgurl" ng-src="{{user.imgurl}}" title="{{user.username}}">
                <img ng-if="!user.imgurl" src="public/images/default_img.png">
            </a>
            <span class="reply_count pull-left">
                <span class="count_of_replies" title="回复数">0</span>
                <span class="count_seperator">/</span>
                <span class="count_of_visits" title="点击数">0</span>
            </span>
            <span class="last_time pull-right">
                <span class="last_active_time">{{pro.proctime|FormatStrDate}}</span>
            </span>
            <div class="topic_title_wrapper">
                <span class="put_top">{{info1}}</span>
                <a class="topic_title" ui-sref="pro.artdetail({id: pro.id})">{{pro.productname}}</a>
            </div>
        </div>

        <div class="cell more" ng-if="pros.length > 119">
            <a class="dark" href="/user/Samurais/topics">查看更多»</a>
        </div>

    </div>

    <div class="panel" style="display: none;">
        <div class="header">
            <span class="col_fade">最近参与的话题</span>
        </div>

        <div class="cell">
            <a class="user_avatar pull-left" href="javascript:void(0);">
                <img src="https://avatars.githubusercontent.com/u/3538629?v=3&amp;s=120" title="Samurais">
            </a>
            <span class="reply_count pull-left">
                <span class="count_of_replies" title="回复数">
                    13
                </span>
                <span class="count_seperator">/</span>
                <span class="count_of_visits" title="点击数">
                    1296
                </span>
            </span>
            <a class="last_time pull-right" href="/topic/580eb6fbb37ee8fb339787b0#5817e8871a9a7d9909531323">
                <img class="user_small_avatar" src="https://avatars.githubusercontent.com/u/3538629?v=3&amp;s=120">
                <span class="last_active_time">9 小时前</span>
            </a>
            <div class="topic_title_wrapper">
                <span class="put_top">置顶</span>
                <a class="topic_title" href="/topic/580eb6fbb37ee8fb339787b0" title="［ 北京］11月6日 NodeParty@科技寺，报名从速 !">
                    ［ 北京］11月6日 NodeParty@科技寺，报名从速 !
                </a>
            </div>
        </div>

        <div class="cell more">
            <a class="dark" href="/user/Samurais/replies">查看更多»</a>
        </div>

    </div>
</div>
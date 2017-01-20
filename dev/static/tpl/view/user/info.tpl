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
            <span class="big" ng-if="article">{{article.length}}</span><span class="big" ng-if="!article">0</span> 个分享
        </div>
        <p class="col_fade">注册时间 {{user.ctime|FormatStrDate}}</p>
    </div>
</div>

<div class="panel">
    <div class="header">
        <span class="col_fade">最近创建</span>
    </div>

    <div class="cell" ng-repeat="pro in article">
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
            <a class="topic_title" ui-sref="article.detail({id: pro.id})">{{pro.productname}}</a>
        </div>
    </div>

    <div class="cell more" ng-if="article.length > 119">
        <a class="dark" href="/user/Samurais/topics">查看更多»</a>
    </div>

</div>

<div class="panel" style="display: none;">
    <div class="header">
        <span class="col_fade">最近参与的话题</span>
    </div>

    <div class="cell">
        
    </div>
    
    <div class="cell more">
        <a class="dark" href="/user/Samurais/replies">查看更多»</a>
    </div>

</div>
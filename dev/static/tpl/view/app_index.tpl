<div class="panel">
    <!--列表-->
    <div class="inner no-padding">
        <div id="topic_list">
            <div class='cell' ng-repeat="user in usersinfo" ng-click="showSimple(user)">
                <a class="user_avatar pull-left" ui-sref="info.user({id: user.uid})">
                    <img ng-if="user.imgurl" ng-src="{{user.imgurl}}" title="{{user.productname}}">
                    <img ng-if="!user.imgurl" src="public/images/default_img.png">
                </a>
                <span class='last_time pull-right'>
                    <span class="last_active_time">{{user.ctime|FormatStrDate}}</span>
                </span>
                <div class="topic_title_wrapper userwrap">
                    <span class='put_top'>{{info1}}</span>
                    <span class='topic_title' title='{{user.username}}'>{{user.username}}</span>
                </div>
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
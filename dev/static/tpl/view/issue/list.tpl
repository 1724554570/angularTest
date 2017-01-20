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
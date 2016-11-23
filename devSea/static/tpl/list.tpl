<!--{*首页列表*}-->
<div id="topic_list"></div>
<script type="text/html" id="template">
    {{each users as user i}}
    <div class='cell'>
        <a class="user_avatar pull-left" href="#">
            {{if user.imgurl}}
            <img src="{{user.imgurl}}" title="{{user.productname}}">
            {{else}}
            <img src="public/images/default_img.png">
            {{/if}}
        </a>
        <span class='last_time pull-right'>
            <span class="last_active_time">{{user.ctime}}</span>
        </span>
        <div class="topic_title_wrapper userwrap">
            <span class='put_top'>EE</span>
            <span class='topic_title' title='{{user.username}}'>{{user.username}}</span>
        </div>
    </div>
    {{/each}}
</script>
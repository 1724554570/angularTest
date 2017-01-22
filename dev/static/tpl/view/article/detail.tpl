<div class="panel">
    <div class="header topic_header">
        <span class="topic_full_title">
            <span class="put_top">{{info1}}</span> {{product.productname}}
        </span>
        <div class="changes">
            <span> 发布于 {{product.proctime|FormatStrDate}} </span>
            <span> 作者 <a ui-sref="info.user({id: product.uid})">{{product.username}}</a></span>
            <!--<span>8406 次浏览</span>-->
            <span> 最后一次编辑是 {{product.proutime|FormatStrDate}} </span>
            <!--<span> 来自 分享</span>-->
        </div>
    </div>
    <div class="inner topic">
        <div class="topic_content">
            <div class="markdown-text" string-html="product.productdesc">

            </div>
        </div>
    </div>
</div>
<div class="panel" style="display: none;">
    <div class="header">
        <span class="col_fade">{{reply.length}} 回复</span>
    </div>
    <div class="cell reply_area reply_item reply_highlight"  ng-repeat="rp in reply" reply_id="{{rp.id}}" reply_to_id="{{rp.reply_to_id}}" id="{{rp.id}}">
        <div class="author_content">
            <a href="/user/solarhell" class="user_avatar">
                <img src="https://avatars.githubusercontent.com/u/10279583?v=3&amp;s=120" title="solarhell">
            </a>
            <div class="user_info">
                <a class="dark reply_author" href="/user/solarhell">solarhell</a>
                <a class="reply_time" href="#581b0e1cbb9452c9052e7acc">1楼•3 个月前</a>
            </div>
            <div class="user_action">
                <span>
                    <i class="fa up_btn fa-thumbs-o-up" title="喜欢"></i>
                    <span class="up-count">15</span>
                </span>
                <span>
                    <i class="fa fa-reply reply2_btn" title="回复"></i>
                </span>
            </div>
        </div>
        <div class="reply_content from-solarhell">
            <div class="markdown-text"><p>{{rp.content}}</p>
            </div>
        </div>
        <div class="clearfix">
            <div class="reply2_area">
                <form class="reply2_form" action="/581b0c4ebb9452c9052e7acb/reply" method="post">
                    <input type="hidden" name="_csrf" value="cImz3XQy-BP-cu4_ee7da2mkySL_aU1Z7bxQ">
                    <input type="hidden" name="reply_id" value="{{rp.id}}">
                </form>
            </div>
        </div>
    </div>

</div>
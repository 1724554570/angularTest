<div class="panel">
    <div class="header topic_header">
        <span class="topic_full_title">
            <span class="put_top">{{info1}}</span> {{product.productname}}
        </span>
        <div class="changes">
            <span> 发布于 {{product.proctime|FormatStrDate}} </span>
            <span> 作者 <a ui-sref="info.user({id: product.foruser})">{{product.username}}</a></span>
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
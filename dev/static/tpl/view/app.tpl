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
                <li ng-if="!isLogin"><a ui-sref="login.register">注册</a></li>
                <li ng-if="!isLogin"><a ui-sref="login.loginindex">登录</a></li>
            </ul>
            <a class="btn btn-navbar" id="responsive-sidebar-trigger">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
        </div>
    </div>
</div>
<div id='main' ui-view></div>
<div class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="editorToolImageTitle" aria-hidden="true">
    <div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3 id="editorToolImageTitle">图片</h3></div><div class="modal-body"><div class="upload-img" style="height: 50px; padding: 60px 0px; text-align: center; border: 4px dashed rgb(221, 221, 221);"><div class="button webuploader-container" style="width: 86px; height: 40px; margin: 0px auto;"><div class="webuploader-pick">上传图片</div><div id="rt_rt_1av8fs17d1jft1lplem61c6c1pmf1" style="position: absolute; overflow: hidden; bottom: auto; right: auto; width: 86px; height: 40px; top: 0px; left: 0px;"><input type="file" name="file" class="webuploader-element-invisible" accept="image/*"><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label></div></div><span class="tip" style="display: none;"></span><div class="alert alert-error hide"></div></div></div></div>
<div class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="editorToolImageTitle" aria-hidden="true">
    <div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3 id="editorToolImageTitle">添加连接</h3></div><div class="modal-body"><form class="form-horizontal"><div class="control-group"><label class="control-label">标题</label><div class="controls"><input type="text" name="title" placeholder="Title"></div></div><div class="control-group"><label class="control-label">连接</label><div class="controls"><input type="text" name="link" value="http://" placeholder="Link"></div></div></form></div><div class="modal-footer"><button class="btn btn-primary" role="save">确定</button></div></div>
<div id='backtotop'>回到顶部</div>
<div id="sidebar-mask"></div>

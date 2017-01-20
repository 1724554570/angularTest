<div class="panel">
    <div class="header">
        <ol class="breadcrumb">
            <li><a ui-sref="app.home">主页</a><span class="divider">/</span></li>
            <li class="active">发布话题</li>
        </ol>
    </div>
    <div class="inner post">
        <form id="create_topic_form" ng-submit="submitFun()">
            <fieldset>
                <span class="tab-selector">选择允许查看权限：</span>
                <select name="tab" id="tab-value" ng-model="product.propower">
                    <option value="">请选择</option>
                    <option value="1">全部</option>
                    <option value="0">登录</option>
                </select>
                <span id="topic_create_warn"></span>
                <div style="margin-top: 10px;"></div>
                <h5>项目标题</h5>
                <textarea ng-model="product.productname" autofocus="" class="span9" id="title" name="title" rows="1" placeholder="标题字数 10 字以上"></textarea>
                <div style="margin-top: 10px;"></div>
                <div class="all" id="all">
                    <div class="panel">
                        <h5>项目说明编辑</h5>
                        <div class="ueditor" ng-model="product.productdesc" config="_simpleConfig"></div>
                    </div>
                </div>
                <div class="markdown_editor in_editor"></div>
                <div class="editor_buttons"><input type="submit" class="span-primary submit_btn" data-loading-text="提交中" value="提交"></div>
                <input type="hidden" name="_csrf" ng-model="product._csrf" value="{{product.id}}">
            </fieldset>
        </form>
    </div>
</div>

<script>
    (function () {
        // 版块选择的检查，必须选择
        $('#create_topic_form').on('submit', function (e) {
            var tabValue = $('#tab-value').val();
            if (!tabValue) {
                alert('必须选择一个版块！');
                $('.submit_btn').button('reset');
                $('.tab-selector').css('color', 'red');
                return false;
            }
        });
        // END 版块选择的检查，必须选择
        // 选择招聘版块时，给出提示
        $('#tab-value').on('change', function () {
            var $this = $(this);
            var value = $this.val();
            var warnMsg = '';
            if (value === 'job') {
                warnMsg = '<strong>为避免被管理员删帖，发帖时请好好阅读<a href="http://cnodejs.org/topic/541ed2d05e28155f24676a12" target="_blank">《招聘帖规范》</a></strong>';
            } else if (value === 'ask') {
                warnMsg = '<strong>提问时，请遵循 <a href="https://gist.github.com/alsotang/f654af8b1fff220e63fcb44846423e6d" target="_blank">《提问的智慧》</a>中提及的要点，以便您更接收到高质量回复。</strong>'
            }
            $('#topic_create_warn').html(warnMsg);
        });
        // END 选择招聘版块时，给出提示
    })();
</script>
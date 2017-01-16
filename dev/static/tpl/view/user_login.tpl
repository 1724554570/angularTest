<div id="main">
    <div id="sidebar">
        <div class="panel">
            <div class="header">
                <span class="col_fade">关于</span>
            </div>
            <div class="inner">
                <p>Angular Demo</p>
                <p>在这里你可以：</p>
                <ul>
                    <li>向别人提出你遇到的问题</li>
                    <li>帮助遇到问题的人</li>
                    <li>分享自己的知识</li>
                    <li>和其它人一起进步</li>
                </ul>
            </div>
        </div>
    </div>
    <div id="content">
        <div class="panel">
            <div class="header">
                <ul class="breadcrumb">
                    <li><a href="/">主页</a><span class="divider">/</span></li>
                    <li class="active">登录</li>
                </ul>
            </div>
            <div class="inner">
                <!--<form id="signin_form" class="form-horizontal" action="/signin" method="post">-->
                <form id="signin_form" class="form-horizontal" ng-submit="loginconfirm()">
                    <div class="control-group">
                        <label class="control-label" for="name">用户名</label>

                        <div class="controls">
                            <input class="input-xlarge" id="name" placeholder="请填写用户名" name="name" size="30" type="text" ng-model="login.mobile_no">
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="pass">密码</label>
                        <div class="controls">
                            <input class="input-xlarge" id="pass" placeholder="请填写密码" name="pass" size="30" type="password" ng-model="login.password">
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="ver">验证码</label>
                        <div class="controls">
                            <input class="input-xlarge" id="pass" placeholder="请填写验证码" name="verify" size="30" type="text" ng-model="login.verify">
                        </div>
                        <div class="controls" style="margin-top: 20px;">
                            <img class="verifyimg reloadverify" alt="点击切换" src="/tkfull/index.php/apis/publics/verify" ng-click="verify()">
                        </div>
                    </div>
                    <input type="hidden" name="_csrf" value="YBCZRc0m-qX6VFcdd8EstDzmhlGPtb3dmTIY">
                    <div class="form-actions">
                        <input type="submit" class="span-primary" value="登录">
                        <a ui-sref="login.register"><span class="span-info">去注册</span></a>
                        <!--<a id="forgot_password" ui-sref=="login.forget">忘记密码了?</a>-->
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<?php

namespace Admins\Controller;

use Think\Controller;
use User\Api\UsersApi;

class LoginController extends Controller {

    public function index() {
        
    }

    public function logins() {
        
    }

    public function login($username = null, $password = null, $verify = null) {
        if (IS_POST) {
            /* 检测验证码 TODO: */
            if (!check_verify($verify)) {
                //$this->error('验证码输入错误！');
            }
            /* 调用UC登录接口登录 */
            $User = new UsersApi;
            $uid = $User->login($username, $password);
            if (0 < $uid) { //UC登录成功
                session('login.user', $uid);
                $this->success('登录成功！', U('Index/index'));
                //$this->ajaxReturn(array('status' => 1, 'users' => $uid));
            } else { //登录失败
                switch ($uid) {
                    case -1: $error = '用户不存在或被禁用！';
                        break; //系统级别禁用
                    case -2: $error = '密码错误！';
                        break;
                    default: $error = '未知错误！';
                        break; // 0-接口参数错误（调试阶段使用）
                }
                $this->error($error);
            }
        } else {
            $this->display();
        }
    }

    public function verify() {
        $verify = new \Think\Verify();
        $verify->entry(1);
    }

}

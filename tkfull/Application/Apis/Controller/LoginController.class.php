<?php

namespace Apis\Controller;

use User\Api\UsersApi;

class LoginController extends AllController {

    const USER_TABLE = "onethink_users";

    public function index() {
        $data = array('code' => 404, message => "找不到页面！！");
        $this->assign('err', $data);
        $this->display('err:index');
    }

    public function ajaxlogin() {
        $username = I('mobile_no');
        $userpass = I('password');
        $User = new UsersApi;
        $row = $User->login($username, $userpass);
        if (0 < $row) {
            $this->ajaxReturn(array('status' => 1, 'massage' => "查询成功！", 'users' => $row));
        }
        switch ($row) {
            case -1: $error = '用户不存在或被禁用！';
                break; //系统级别禁用
            case -2: $error = '密码错误！';
                break;
            default: $error = '未知错误！';
                break; // 0-接口参数错误（调试阶段使用）
        }
        $this->ajaxReturn(array('status' => 0, 'massage' => $error, 'users' => $row));
    }

    public function ajaxreg() {
        $username = I('mobile_no');
        $userpass = I('password');
        $md5pass = MD5($userpass);
        $device = I('device');
        $model = D(self::USER_TABLE);
        if ($username && $userpass) {
            $where = "username='{$username}'";
            $row = $model->where($where)->find();
            if ($row) {
                $this->ajaxReturn(array('status' => 3, 'users' => $row));
            } else {
                $data['username'] = $username;
                $data['userpass'] = $md5pass;
                $data['device'] = $device;
                $data['ctime'] = time();
                $data['utime'] = $data['ctime'];
                $row = $model->add($data);
                $this->ajaxReturn(array('status' => 1, 'users' => $row));
            }
        }
        $this->ajaxReturn(array('status' => 0, 'users' => $row));
    }

    public function ajaxForget() {
        $this->ajaxReturn(array('status' => 1, 'message' => '未开发'));
    }

    public function ajaxloginout() {
        
    }

}

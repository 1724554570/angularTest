<?php

namespace Apis\Controller;

use User\Api\UsersApi;

class LoginController extends AllController {

    const USER_TABLE = "onethink_users";

    private $userApi;

    public function _initialize() {
        $this->userApi = new UsersApi();
    }

    public function index() {
        $data = array('code' => 404, message => "找不到页面！！");
        $this->assign('err', $data);
        $this->display('err:index');
    }

    public function response($row = '') {
        if (0 < $row) {
            $this->ajaxReturn(array('status' => 1, 'message' => "查询成功！", 'users' => $row));
        }
        $error = ERROR_CODE($row, '');
        $this->ajaxReturn(array('status' => 0, 'message' => $error, 'users' => $row));
    }

    public function ajaxlogin() {
        $username = I('mobile_no');
        $userpass = I('password');
        $row = $this->userApi->login($username, $userpass);
        $this->response($row);
    }

    public function register() {
        $userpass = I('password');
        $md5pass = MD5($userpass);
        $data['username'] = I('mobile_no');
        $data['userpass'] = $md5pass;
        $data['device'] = I('device');
        $data['ctime'] = time();
        $data['utime'] = $data['ctime'];
        $row = $this->userApi->register($data);
        $this->response($row);
        return;
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

    public function loginout() {
        cookie('isLogined', null);
        $this->ajaxReturn(array('status' => 1, 'message' => '退出登录！'));
    }

}

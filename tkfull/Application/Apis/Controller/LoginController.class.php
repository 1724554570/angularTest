<?php

namespace Apis\Controller;

use User\Api\UsersApi;

class LoginController extends AllController {

    const USER_TABLE = "onethink_users";

    private $userApi;

    public function _initialize() {
        unset($this->userApi);
        $this->userApi = new UsersApi();
    }

    public function index() {
        $data = array('code' => 404, message => "找不到页面！！");
        $this->assign('err', $data);
        $this->display('err:index');
    }

    public function resp($row = '') {
        if (0 < $row) {
            $this->ajaxReturn(array('code' => 200, 'message' => "查询成功！", 'data' => $row));
        }
        $error = getErrorCode($row);
        $this->ajaxReturn(array('code' => 0, 'message' => $error, 'data' => $row));
    }
    
    /**
     * 获取用户登录信息
     */
    public function getUserLogin() {
        $username = I('username');
        $userpass = I('password');
        $row = $this->userApi->login($username, $userpass);
        $this->resp($row);
    }
    
    public function ajaxlogin() {
        $username = I('mobile_no');
        $userpass = I('password');
        $row = $this->userApi->login($username, $userpass);
        $this->resp($row);
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
        $this->resp($row);
    }

    public function ajaxForget() {
        $this->ajaxReturn(array('status' => 1, 'message' => '未开发'));
    }

    public function loginout() {
        cookie('isLogined', null);
        $this->ajaxReturn(array('status' => 1, 'message' => '退出登录！'));
    }

}

<?php

namespace Apis\Controller;

class LoginController extends AllController {

    public function index() {
        
    }

    public function ajaxlogin() {
        $username = I('mobile_no');
        $userpass = I('password');
        $md5pass = MD5($userpass);
        if ($username && $userpass) {
            $where = "username='{$username}' and userpass='{$md5pass}'";
            $row = M('user')->where($where)->field('id as uid,username,userpass,imgurl,ctime')->find();
            $this->ajaxReturn(array('status' => 1, 'users' => $row));
        } else {
            $this->ajaxReturn(array('status' => 0, 'users' => ''));
        }
    }

    public function ajaxreg() {
        $username = I('mobile_no');
        $userpass = I('password');
        $md5pass = MD5($userpass);
        $device = I('device');
        if ($username && $userpass) {
            $where = "username='{$username}'";
            $row = D('user')->where($where)->find();
            if ($row) {
                $this->ajaxReturn(array('status' => 3, 'users' => $row));
            } else {
                $data['username'] = $username;
                $data['userpass'] = $md5pass;
                $data['device'] = $device;
                $data['ctime'] = time();
                $data['utime'] = $data['ctime'];
                $row = D('user')->add($data);
                $this->ajaxReturn(array('status' => 1, 'users' => $row));
            }
        } else {
            $this->ajaxReturn(array('status' => 0, 'users' => $row));
        }
    }

    public function ajaxForget() {
        $this->ajaxReturn(array('status' => 1, 'message' => '未开发'));
    }

    public function ajaxloginout() {
        
    }

}
